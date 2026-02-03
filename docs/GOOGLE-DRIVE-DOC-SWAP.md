# Google Drive Document Swap Tool

**Purpose:** Replace template documents across CHP S Network folder structures intelligently

**Script Location:** `/Users/michaelparson/.clawdbot/workspace/scripts/google-drive-doc-swap.sh`

---

## When To Use

- Replacing version 5 of a form with version 6
- Updating any template document across multiple distributor folders
- Swapping out guides, checklists, or standard documents

---

## How It Works

### Folder Structure
Documents are always located in:
```
Template Folders:
└── Doctors Template
    └── Patient Template
        └── IVR
            └── [Document]

Production Folders (PAT*):
└── Distributor Name
    └── Sales Rep
        └── Doctor
            └── Patient Template (starts with "PAT")
                └── IVR
                    └── [Document]
```

### Smart Logic

1. **Searches everywhere:** Both template folders AND production folders
2. **Identifies unmodified files:** Compares file size to determine "template" vs "filled"
3. **Two actions:**
   - **REPLACE** if file matches original template size (blank template)
   - **ADD NEW** if file is different size (filled/modified - keeps original)

---

## Usage

### Basic Usage
```bash
cd /Users/michaelparson/.clawdbot/workspace
./scripts/google-drive-doc-swap.sh "CHP Eligibility Form V5.pdf" "$HOME/Desktop/CHP Eligibility Form V6.pdf"
```

### Dry Run (Preview Only)
```bash
./scripts/google-drive-doc-swap.sh "CHP Eligibility Form V5.pdf" "$HOME/Desktop/CHP Eligibility Form V6.pdf" --dry-run
```

### From Jarvis
Just say:
> "Replace CHP Eligibility Form V5 with V6 from my desktop"

And I'll run the script for you!

---

## What You'll See

**Step 1:** Script searches for all instances of the old file
**Step 2:** Determines "template size" (most common file size = unmodified template)
**Step 3:** Traces folder paths and categorizes each file
**Step 4:** Shows summary and asks for confirmation

**Example Output:**
```
Found 15 instances

Template size: 87,811 bytes

Files to REPLACE: 12
Files to KEEP + ADD: 3

Proceed with file replacement? (yes/no):
```

---

## Safety Features

1. **Dry run mode** - preview changes before executing
2. **Confirmation prompt** - must type "yes" to proceed
3. **Preserves modified files** - never deletes filled-out forms
4. **Detailed logging** - shows exactly what will happen to each file

---

## Examples

### Example 1: Replace Eligibility Form
```bash
./scripts/google-drive-doc-swap.sh \
  "CHP Eligibility Form V5.pdf" \
  "$HOME/Desktop/CHP Eligibility Form V6.pdf"
```

### Example 2: Update Instructions Guide
```bash
./scripts/google-drive-doc-swap.sh \
  "Provider Instructions Guide v3.pdf" \
  "$HOME/Desktop/Provider Instructions Guide v4.pdf"
```

### Example 3: Replace BAA Form
```bash
./scripts/google-drive-doc-swap.sh \
  "Business Associate Agreement v1.pdf" \
  "$HOME/Desktop/Business Associate Agreement v2.pdf"
```

---

## Troubleshooting

**"No files found"**
- Check exact filename (case-sensitive)
- Make sure you're searching Google Drive, not local files

**"Could not delete"**
- You may not have permission on that file
- File may be open by someone else
- Check Google Drive permissions

**"Could not upload"**
- Check folder permissions
- Verify new file exists at specified path
- Make sure file isn't corrupt

---

## Notes

- Always test with `--dry-run` first
- Script uses most common file size as "template size"
- Modified files get new version added alongside (not replaced)
- Works with any file type (PDF, DOCX, etc.)
- Handles both "Template" folders and production "PAT*" folders

---

**Created:** 2026-01-29  
**Author:** Jarvis (Michael's AI Assistant)  
**Last Updated:** 2026-01-29
