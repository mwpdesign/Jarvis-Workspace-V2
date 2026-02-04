# Work Log System

## What This Is

Every meaningful action Jarvis takes is logged to `memory/work-log.json`. This provides accountability, cost visibility, and debugging capability.

## What Gets Logged

### ALWAYS log:

- Web searches (each search = 1 entry)
- Email checks that find something (skip logging empty checks)
- File writes/creates (not reads unless it's a large file)
- Task queue operations (start, complete, block)
- Briefing deliveries
- Git commits
- Alert deliveries to Michael
- Any outbound communication (email drafts, Telegram messages)
- Cron job completions (1 summary entry per job run)

### DON'T log:

- Heartbeats that return HEARTBEAT_OK (nothing happened)
- File reads during normal session startup
- Internal reasoning or planning
- Empty email checks (no urgent found)
- Failed operations that were retried successfully (log the success)

## How to Log

At the natural completion of each action, append one entry to work-log.json. Don't batch them up — log as you go so the timestamps are accurate.

**For cron jobs:** Log one summary entry at the end of the job run.

Example:
- cron:war-room-competitors finishes → log: "Competitor scan complete. 1 new finding (MiMedx Q4 earnings), 3 topics skipped (already reported)."

**For main sessions:** Log significant actions during the conversation. Don't log every single message exchange — just the actions you TAKE.

## Querying the Log

When Michael asks "what have you been doing?" or "what happened overnight?":

1. Read work-log.json
2. Filter by time range (last 24h, last week, etc.)
3. Group by category
4. Present summary with counts

Example response:

> "In the last 24 hours:
> - 📧 Email: 48 checks, 2 urgent alerts delivered
> - 🎯 War Room: 3 scans, found 1 new competitor item + 1 regulatory update
> - ✅ Tasks: Completed 2 queue items (FutureNTech script draft, band outreach list)
> - 💾 Git: 4 auto-commits pushed
> - 📋 Briefing: Morning briefing delivered at 7:01 AM
> 
> Total estimated tokens: ~45,000"

## Daily Summary (for morning briefing)

The morning-briefing cron job should read work-log.json and include a brief overnight activity summary:

"🤖 Overnight Activity: 3 war room scans, 1 new finding, 48 email checks (2 alerts), 1 task completed, 4 git commits"

One line. That's it. Michael can ask for details if curious.

## Cost Tracking

Use the `tokens_est` field to track rough costs:

- Flash: ~$0.001 per 1000 tokens
- Haiku: ~$0.01 per 1000 tokens
- Sonnet: ~$0.10 per 1000 tokens
- Opus: ~$0.50 per 1000 tokens

Weekly cost estimate = sum(tokens_est × model_rate) across all entries.

When Michael asks "how much am I spending?":

1. Read last 7 days of work-log entries
2. Group by model
3. Calculate: tokens × rate per model
4. Present breakdown

## Rotation

work-log.json will grow over time. Monthly maintenance:

1. Entries older than 30 days → move to `memory/work-log-archive-YYYY-MM.json`
2. Keep current month in work-log.json
3. Archive files are kept for reference but rarely read
