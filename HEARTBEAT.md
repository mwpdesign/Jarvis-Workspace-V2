# HEARTBEAT.md - Lightweight Session Coordinator

**Architecture:** Heavy work runs in isolated cron jobs. Heartbeat is a coordinator only.

**Last updated:** 2026-02-04

---

## Active Cron Jobs (DO NOT duplicate this work)

| Job | Schedule | Model | What It Does |
|-----|----------|-------|--------------|
| email-monitor | Every 5 min | Flash | Scans A-Team + 1 SNETWORK for urgent unread |
| war-room-competitors | 3 AM daily | Sonnet | Competitor news scan → war-room-findings.md |
| war-room-cms | 4 AM daily | Sonnet | CMS/regulatory scan → war-room-findings.md |
| war-room-industry | 5 AM daily | Sonnet | Industry trends scan → war-room-findings.md |
| morning-briefing-new | 7 AM daily | Sonnet | Assembles + delivers briefing to Telegram |
| git-autocommit | Every 30 min | Flash | Commits + pushes workspace changes |
| task-worker | Every 30 min | Sonnet | Processes 1 pending task from queue.json |

**⚠️ DO NOT run web searches, email checks, or war room research during heartbeat. Cron handles all of that.**

---

## On Each Heartbeat (every 30 min)

### 1. Urgent Email Alert Delivery
- Check `.urgent-email-alert.json`
- If exists: deliver alert to Michael, delete file after delivery
- If not: silent

### 2. Daily Memory File
- Check if `memory/YYYY-MM-DD.md` exists for today
- If not: create with basic template
- Read yesterday's for context (first heartbeat of day only)

### 3. Queue Status Check
- Skim `tasks/queue.json` for recently completed tasks
- If any completed tasks haven't been reported to Michael: mention briefly
- If any tasks blocked for 24+ hours: flag to Michael

### 4. Proactive Observation (LIGHTWEIGHT)
- Notice patterns in recent conversations
- If you spot a clear automation opportunity or efficiency gain: note it in OPPORTUNITIES.md
- Do NOT do web searches or deep research — just observe and note
- Max 1 observation per heartbeat, only if genuinely useful

### 5. Nothing to Report?
- Return HEARTBEAT_OK (silent — no message to Michael)

### 5a. State Tracker Maintenance
- Update `memory/state-tracker.json` with current file modification timestamps
- This keeps the tracker accurate for the next session startup
- Only check core and active-work files (not docs/ or projects/ — those are on-demand)
- FAST operation — just stat the files, update timestamps, done

---

## Rules

- Heartbeat should be FAST and CHEAP — target under 2000 tokens per cycle
- No web searches during heartbeat
- No email checking during heartbeat (cron does this)
- No war room research during heartbeat (cron does this)
- No git operations during heartbeat (cron does this)
- Your job is COORDINATION and ALERTING only
- When in doubt: HEARTBEAT_OK

---

## Quiet Hours

- 11 PM - 7 AM: HEARTBEAT_OK unless .urgent-email-alert.json exists
- Cron jobs still run overnight (they're isolated, they don't bother Michael)
- Morning briefing at 7 AM is the first proactive contact of the day

---

## Monthly Maintenance (1st of each month)

- Clean `memory/reported-intel.json` entries older than 30 days
- Archive completed tasks from `tasks/queue.json` older than 30 days to `tasks/queue-archive.json`
- Suggest running `openclaw doctor` for health check
- Review `OPPORTUNITIES.md` and flag stale items
