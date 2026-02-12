# HEARTBEAT.md - Lightweight Session Coordinator

**Architecture:** Heavy work runs in isolated cron jobs. Heartbeat is a coordinator only.

**Last updated:** 2026-02-12 (Config drift fixed)

---

## Active Cron Jobs (DO NOT duplicate this work)

| Job | Schedule | Model | What It Does |
|-----|----------|-------|--------------|
| email-monitor | Every 15 min | Haiku | Scans A-Team + 1 SNETWORK for urgent unread (P1/P2 alerts) |
| war-room-competitors | 3 AM daily | Sonnet | Competitor news scan → war-room-findings.md |
| daily-auto-update | 4 AM daily | Default | Updates OpenClaw + skills |
| war-room-cms | 4 AM daily | Sonnet | CMS/regulatory scan → war-room-findings.md |
| war-room-industry | 5 AM daily | Sonnet | Industry trends scan → war-room-findings.md |
| config-review | 6 AM daily | Sonnet | Reviews operational docs for drift |
| morning-briefing | 7 AM daily | Sonnet | Assembles + delivers briefing to Telegram (feedback-aware) |
| futurentech-form-check | 8 AM daily | Haiku | Monitors submissions → creates research tasks |
| sunday-self-improvement | 8 AM Sundays | Sonnet | Reviews learnings skill |
| git-autocommit | Every hour | Haiku | Commits + pushes workspace changes |
| task-worker | Every 2 hours | Sonnet | Processes 1 pending task from queue.json + FutureNTech pipeline |
| memory-consolidation | 2 AM Sundays | Sonnet | Distills weekly learnings into MEMORY.md + Opus tracking |
| memory-archive | 1st of month 3 AM | Haiku | Archives old memory files |

**⚠️ DO NOT run web searches, email checks, war room research, or FutureNTech work during heartbeat. Cron handles all of that.**

---

## FutureNTech Pipeline (Build 5.5)

**Pipeline automated** — see `docs/FUTURENTECH-PIPELINE.md` for full details.

- **form-check cron** (8 AM daily) monitors Google Form submissions
- **task-worker cron** (every 2 hours) handles all 5 pipeline stages:
  1. Research artist
  2. Write script
  3. Generate voice (after approval)
  4. Produce video
  5. Upload to YouTube (after approval)

**DO NOT manually intervene in FutureNTech pipeline during heartbeat.** The cron jobs handle end-to-end automation.

---

## On Each Heartbeat (every 30 min)

### 1. Urgent Email Alert Delivery
- Check `.urgent-email-alert.json`
- If exists: deliver alert to Michael with priority badge, delete file after delivery
- If not: silent
- 🚨 **Email alerts now use priority scoring (P1-P4).** See docs/ALERT-PRIORITY-SCORING.md. Only P1/P2 generate immediate alerts.

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
- ⚠️ **DISABLED (2026-02-12)**: State tracker updates moved to session end only (not heartbeat)
- Heartbeat updates caused excessive file writes (12/hour × 24h = 288 writes/day)
- Now updates once per main session close instead
- Still reads state-tracker.json at session startup for efficient context loading

### 5b. Work Log Housekeeping
- If it's the 1st of the month: archive entries older than 30 days to `memory/work-log-archive-YYYY-MM.json`
- Quick sanity check: if work-log.json is larger than 500 entries, archive older half regardless of date

---

## Rules

- Heartbeat should be FAST and CHEAP — target under 2000 tokens total per cycle (including file reads)
- If heartbeat context is growing, you're doing too much — HEARTBEAT_OK and move on
- Never read USER.md, SOUL.md, or other large stable files during heartbeat
- Heartbeat reads: state-tracker.json, .urgent-email-alert.json, queue.json — that's it for routine checks
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
