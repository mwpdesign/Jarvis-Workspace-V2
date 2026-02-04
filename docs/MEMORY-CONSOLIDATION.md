# Memory Consolidation System

**Purpose:** Automatically distill weekly learnings from daily memory files into long-term curated memory.

**Schedule:** Weekly (Sundays, 2 AM EST)

---

## How It Works

Daily memory files (`memory/YYYY-MM-DD.md`) accumulate raw notes throughout the week. The consolidation cron reads these files weekly and extracts significant events worth preserving long-term, appending them to `MEMORY.md`.

---

## What Gets Consolidated

**Extract and preserve:**
- Key decisions Michael made
- New contacts or relationship changes
- Lessons learned (especially from mistakes)
- Project milestones or status changes
- System/infrastructure changes
- New preferences or workflow patterns discovered
- Important dates or deadlines added

**Skip (not worth long-term retention):**
- Routine heartbeat logs ("HEARTBEAT_OK", "no new emails")
- Information already documented in MEMORY.md
- Trivial status updates
- Repeated patterns without new insight

---

## Process Flow

1. **Read last consolidation date** from `memory/consolidation-log.json`
2. **Load daily files** from the past 7 days (or since last consolidation)
3. **Read current MEMORY.md** for deduplication
4. **Extract significant entries** from daily files
5. **Deduplicate** against existing MEMORY.md content
6. **Append new entries** to appropriate MEMORY.md sections
7. **Update consolidation log** with run metadata
8. **Log to work-log.json**

---

## Rules

### Append-Only
- **NEVER rewrite or reorganize** existing MEMORY.md content
- Only append new entries to existing sections
- Use existing section headers unless truly necessary to create new ones

### Deduplication
- Cross-reference every potential entry against current MEMORY.md
- If already documented (even slightly differently), skip it
- Only add genuinely new information

### Quality Over Quantity
- Target: **Maximum 30 lines of new content per run**
- Each entry should be concise: 1-3 lines
- Date-stamp each new entry for traceability

### File Preservation
- **NEVER delete or modify daily memory files**
- They are the raw historical record
- MEMORY.md is the distilled view, not a replacement

---

## Consolidation Log

`memory/consolidation-log.json` tracks:
- Last run date
- Files processed per run
- Entries added per run
- MEMORY.md sections updated

Example entry:
```json
{
  "date": "2026-02-11",
  "filesProcessed": 7,
  "entriesAdded": 12,
  "sectionsUpdated": ["Systems Operational", "Key Learnings", "Company Structure"]
}
```

---

## Manual Consolidation Still Welcome

The automated weekly consolidation is a baseline. During active sessions, Jarvis can still manually consolidate when:
- A major event occurs that shouldn't wait until Sunday
- Michael explicitly requests consolidation
- A session is ending after significant work

**Automated ≠ Exclusive.** Both modes coexist.

---

## When to Adjust

Review and update consolidation rules if:
- MEMORY.md accumulates too much noise (tighten extraction criteria)
- Important information is being missed (expand extraction criteria)
- Daily files are growing too large (may need more frequent consolidation)
- MEMORY.md sections become too long (time to reorganize structure)

---

## Cost Impact

- **Frequency:** 1 run/week
- **Model:** Sonnet
- **Estimated tokens:** ~20,000-30,000 per run
- **Cost:** ~$0.10-0.15/week = **~$0.60/month**

Minimal cost for significant organizational benefit.

---

## Memory Hygiene

Memory files accumulate indefinitely without maintenance. These rules keep the system healthy and prevent unbounded growth.

### Daily Files (memory/YYYY-MM-DD.md)

**< 7 days old: Active**
- Read frequently by cron jobs and sessions
- Never touch or move

**7-30 days old: Consolidated**
- Already processed by weekly consolidation cron
- Keep as raw historical record
- No action needed

**> 30 days old: Archive Candidates**
- Move to `memory/archive/YYYY-MM/DD.md` on 1st of each month
- Creates year-month directory structure automatically
- Keeps active memory/ directory clean

**> 90 days old (in archive): Delete Candidates**
- Check `consolidation-log.json` to confirm processing
- If consolidated: safe to delete
- If NOT consolidated (edge case): flag in work log, keep file

### MEMORY.md Hygiene

**Target Size:** ~500 lines maximum

**When approaching limit:**
- Compress older entries (keep lesson, drop details)
- Merge related items
- Review "Systems Operational" section — remove entries for defunct systems

**Dated entries older than 6 months:**
- Candidates for compression
- Distill to essential lesson or fact
- Remove implementation details that are outdated

**Never Delete:**
- Key contacts and relationships
- Security audit history
- Account configurations
- Lessons learned (core wisdom)
- Project milestones

### Consolidation Log Hygiene

`memory/consolidation-log.json`:
- Keep last **12 entries** (3 months of weekly runs)
- Older entries: Delete during monthly archive job
- Preserves recent history, prevents unbounded growth

### Automated Archival

The **memory-archive** cron (1st of month, 3 AM):
1. Archives daily files > 30 days old
2. Deletes archived files > 90 days old (if consolidated)
3. Trims consolidation log to last 12 entries
4. Logs actions to work-log.json

**Manual cleanup still welcome** if files accumulate faster than expected or MEMORY.md needs reorganization.
