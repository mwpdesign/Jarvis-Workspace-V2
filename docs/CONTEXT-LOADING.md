# Context Loading Strategy

## Why This Exists

Reading every workspace file on every session startup wastes tokens on unchanged content. This system tracks what's changed so Jarvis loads context efficiently.

## File Classifications

### 🔴 ALWAYS READ (every session, no exceptions)

These change frequently or are critical for immediate context:

| File | Why |
|------|-----|
| memory/YYYY-MM-DD.md (today) | Today's running log — always fresh |
| memory/YYYY-MM-DD.md (yesterday) | Recent context, especially on first session of day |
| tasks/queue.json | Tasks may have been completed by cron workers since last session |
| .urgent-email-alert.json | Time-sensitive, check immediately |
| memory/reported-intel.json | Need current state for dedup decisions |

### 🟡 CHECK TIMESTAMP, READ IF CHANGED

Only read if the file has been modified since your last session:

| File | Typical change frequency |
|------|------------------------|
| MEMORY.md | Every few days (when you or cron updates it) |
| HEARTBEAT.md | Rarely (architecture changes only) |
| AGENTS.md | Rarely (workflow changes only) |
| TOOLS.md | Rarely (new tool integrations) |
| OPPORTUNITIES.md | Weekly (when ideas are logged) |
| tasks/*.md | Daily (voice capture adds tasks) |
| memory/war-room-findings.md | Daily (overnight cron writes here) |
| projects/futurentech/PROJECT.md | When FutureNTech work happens |

### 🟢 SKIP UNLESS REQUESTED

These are stable reference docs — only read when the topic comes up:

| File | When to read |
|------|-------------|
| SOUL.md | Only on first session of the day, or if Michael asks about your behavior |
| IDENTITY.md | Only on first session of the day |
| USER.md | Only if Michael asks you something about his profile, preferences, or contacts |
| SECURITY-POLICY.md | Only when handling external data or untrusted sources |
| docs/*.md | Only when the specific topic is relevant to current task |
| projects/band/*.md | Only when working on Altering Gray |
| projects/woundcare/*.md | Only when working on CHP |

## Session Startup Protocol

### First Session of the Day (no state-tracker entry for today)

1. Read SOUL.md and IDENTITY.md (daily identity refresh)
2. Read today's memory file (create if doesn't exist)
3. Read yesterday's memory file
4. Read tasks/queue.json
5. Check .urgent-email-alert.json
6. Check state-tracker.json — read any 🟡 files that changed overnight
7. Skip everything else until needed

### Subsequent Sessions (same day)

1. Read today's memory file
2. Read tasks/queue.json
3. Check .urgent-email-alert.json
4. Check state-tracker.json — read ONLY 🟡 files modified since last session
5. Skip everything else until needed

### On-Demand Loading

When a topic comes up mid-conversation, load the relevant file then:

- Michael says "band stuff" → read projects/band/ files
- Michael says "check my contacts" → read USER.md contacts section
- Michael asks about prompt engineering → read docs/PROMPT-ENGINEERING-FRAMEWORK.md
- Security question arises → read SECURITY-POLICY.md

## Updating the Tracker

At the END of every session (or when committing to git):

1. For every file you READ this session: update `last_read` timestamp
2. For every file you WROTE this session: update `last_modified` timestamp
3. Set `content_hash` to "changed" if modified since last read, "stable" if not
4. Set `last_session` to current timestamp

## Token Savings Estimate

| Scenario | Before | After |
|----------|--------|-------|
| Typical session startup | ~15,000 tokens (read everything) | ~3,000 tokens (read only changed) |
| Quick Telegram question | ~15,000 tokens (same bloat) | ~1,500 tokens (minimal load) |
| Deep work session | ~15,000 tokens | ~8,000 tokens (load relevant project) |
| Daily savings (10 sessions) | ~150,000 tokens | ~30,000-50,000 tokens |

**That's potentially 60-80% reduction in context loading costs.**
