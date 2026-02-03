#!/bin/bash
# Google Drive Document Swap Tool
# For replacing template documents in CHP S Network folder structures
# 
# Usage: ./google-drive-doc-swap.sh "Old File Name.pdf" "/path/to/New File.pdf" [--dry-run]
#
# Logic:
# - Searches through template folders AND production folders (PAT* patient folders)
# - Always in: Doctors Template > Patient Template > IVR
# - If file is UNMODIFIED (matches original template size): REPLACE it
# - If file is MODIFIED (different size/date): KEEP it and ADD new file alongside
#
# Author: Jarvis (Michael's AI Assistant)
# Date: 2026-01-29

set -e

OLD_FILENAME="$1"
NEW_FILEPATH="$2"
DRY_RUN="$3"

ACCOUNT="mike@clearhealthpass.com"
TEMPLATE_SIZE=""  # Will be populated by finding an unmodified template

if [[ -z "$OLD_FILENAME" ]] || [[ -z "$NEW_FILEPATH" ]]; then
  echo "Usage: $0 'Old File Name.pdf' '/path/to/New File.pdf' [--dry-run]"
  exit 1
fi

if [[ ! -f "$NEW_FILEPATH" ]]; then
  echo "Error: New file not found at $NEW_FILEPATH"
  exit 1
fi

echo "=================================================="
echo "Google Drive Document Swap Tool"
echo "=================================================="
echo "Old file: $OLD_FILENAME"
echo "New file: $NEW_FILEPATH"
echo "Account: $ACCOUNT"
echo ""

# Step 1: Find all instances of the old file
echo "Step 1: Searching for all instances of '$OLD_FILENAME'..."
echo ""

RESULTS=$(gog drive search --account "$ACCOUNT" "'$OLD_FILENAME'" --json --max 100 2>&1)

# Parse results
echo "$RESULTS" | jq -r '.files[] | "\(.id)|\(.size)|\(.modifiedTime)|\(.parents[0])"' > /tmp/found_files.txt

FILE_COUNT=$(wc -l < /tmp/found_files.txt | tr -d ' ')

if [[ "$FILE_COUNT" -eq 0 ]]; then
  echo "No files found matching '$OLD_FILENAME'"
  exit 0
fi

echo "Found $FILE_COUNT instances"
echo ""

# Step 2: Determine the "template size" (unmodified size)
echo "Step 2: Determining template file size..."
echo ""

# Use the most common size as the template size
TEMPLATE_SIZE=$(cat /tmp/found_files.txt | cut -d'|' -f2 | sort | uniq -c | sort -rn | head -1 | awk '{print $2}')
echo "Template size (most common): $TEMPLATE_SIZE bytes"
echo ""

# Step 3: Trace folder paths and categorize files
echo "Step 3: Analyzing folder structures..."
echo ""

cat /tmp/found_files.txt | while IFS='|' read file_id size mod_time parent_id; do
  echo "---"
  echo "File ID: $file_id"
  echo "Size: $size bytes"
  echo "Modified: $mod_time"
  
  # Trace folder path
  path=""
  current_id="$parent_id"
  
  for i in {1..10}; do
    folder_info=$(gog drive get --account "$ACCOUNT" "$current_id" --json 2>/dev/null | jq -r '.file | "\(.name)|\(.parents[0] // "ROOT")"' || echo "ERROR|ROOT")
    folder_name=$(echo "$folder_info" | cut -d'|' -f1)
    next_parent=$(echo "$folder_info" | cut -d'|' -f2)
    
    if [[ "$folder_name" == "ERROR" ]]; then
      path="[Access Error]/$path"
      break
    fi
    
    path="$folder_name/$path"
    
    if [[ "$next_parent" == "ROOT" ]] || [[ -z "$next_parent" ]]; then
      break
    fi
    current_id="$next_parent"
  done
  
  echo "Path: $path"
  
  # Determine action
  if [[ "$size" == "$TEMPLATE_SIZE" ]]; then
    echo "Action: REPLACE (unmodified template)"
  else
    echo "Action: ADD NEW (modified file - keep original)"
  fi
  
  echo ""
done

echo "=================================================="
echo "Summary"
echo "=================================================="
echo "Total files found: $FILE_COUNT"
echo "Template size: $TEMPLATE_SIZE bytes"
echo ""
echo "Files to REPLACE: $(cat /tmp/found_files.txt | awk -F'|' -v size="$TEMPLATE_SIZE" '$2 == size' | wc -l | tr -d ' ')"
echo "Files to KEEP + ADD: $(cat /tmp/found_files.txt | awk -F'|' -v size="$TEMPLATE_SIZE" '$2 != size' | wc -l | tr -d ' ')"
echo ""

if [[ "$DRY_RUN" == "--dry-run" ]]; then
  echo "DRY RUN MODE - No changes made"
  echo ""
  echo "To execute changes, run without --dry-run flag"
  exit 0
fi

# Step 4: Execute changes
echo "Step 4: Executing changes..."
echo ""

read -p "Proceed with file replacement? (yes/no): " confirm

if [[ "$confirm" != "yes" ]]; then
  echo "Aborted by user"
  exit 0
fi

cat /tmp/found_files.txt | while IFS='|' read file_id size mod_time parent_id; do
  if [[ "$size" == "$TEMPLATE_SIZE" ]]; then
    echo "Replacing file $file_id..."
    # Delete old file
    gog drive delete --account "$ACCOUNT" "$file_id" --yes 2>&1 || echo "  Warning: Could not delete $file_id"
    # Upload new file to parent folder
    gog drive upload --account "$ACCOUNT" --parent "$parent_id" "$NEW_FILEPATH" 2>&1 || echo "  Warning: Could not upload to $parent_id"
    echo "  ✅ Replaced"
  else
    echo "Adding new file alongside modified file in folder $parent_id..."
    gog drive upload --account "$ACCOUNT" --parent "$parent_id" "$NEW_FILEPATH" 2>&1 || echo "  Warning: Could not upload to $parent_id"
    echo "  ✅ Added (kept original)"
  fi
done

echo ""
echo "=================================================="
echo "Done!"
echo "=================================================="

# Cleanup
rm -f /tmp/found_files.txt
