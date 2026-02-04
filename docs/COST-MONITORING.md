# Cost Monitoring System

## Why This Exists

Jarvis runs on API credits. Without cost visibility, spending is invisible until the bill arrives. This system estimates daily costs per cron job and surfaces them in the morning briefing.

## How It Works

OpenClaw doesn't expose token counts per API call. We estimate based on:
- **Job type** (what it does)
- **Model** (what it runs on)
- **Duration** (from cron run JSONL — longer = more tokens)

## Cost Estimation Table

| Job | Model | Runs/Day | Est Tokens/Run | Est Cost/Run | Est Daily Cost |
|-----|-------|----------|----------------|--------------|----------------|
| email-monitor | gpt-4o-mini | 288 | 2,000 | $0.0005 | $0.14 |
| git-autocommit | gpt-4o-mini | 48 | 1,500 | $0.0004 | $0.02 |
| war-room-competitors | sonnet | 1 | 15,000 | $0.08 | $0.08 |
| war-room-cms | sonnet | 1 | 15,000 | $0.08 | $0.08 |
| war-room-industry | sonnet | 1 | 15,000 | $0.08 | $0.08 |
| morning-briefing | sonnet | 1 | 25,000 | $0.13 | $0.13 |
| task-worker (empty) | sonnet | ~46 | 2,000 | $0.01 | $0.46 |
| task-worker (active) | sonnet | ~2 | 20,000 | $0.08 | $0.16 |
| daily-auto-update | default | 1 | 3,000 | $0.01 | $0.01 |
| **CRON TOTAL** | | | | | **~$1.16** |
| main session (est) | sonnet | varies | ~50,000 | ~$0.25 | ~$1-3 |
| **DAILY TOTAL** | | | | | **~$2-4** |

### Model Rates (Anthropic API)

| Model | Input ($/MTok) | Output ($/MTok) |
|-------|----------------|-----------------|
| Claude Sonnet 4.5 | $3.00 | $15.00 |
| gpt-4o-mini | $0.15 | $0.60 |
| Claude Opus | $15.00 | $75.00 |

### Monthly Projection

- **Cron jobs:** ~$35/month
- **Main session:** ~$30-90/month (depends on usage)
- **Total estimated:** ~$65-125/month

## How Duration Maps to Tokens (Rough Guide)

From observed cron runs:
- **< 10 sec** = minimal processing (~1-2K tokens) — empty email checks, no-op runs
- **10-30 sec** = light processing (~2-5K tokens) — email check with results, git status
- **30-120 sec** = moderate processing (~5-15K tokens) — war room search, file operations
- **2-5 min** = heavy processing (~15-50K tokens) — task execution, research + writing

## Reading the Cost Tracker

`memory/cost-tracker.json` holds daily aggregated costs. Each day's entry:

```json
{
  "date": "2026-02-05",
  "jobs": {
    "email-monitor": {
      "runs": 288,
      "est_cost": 0.14
    },
    "git-autocommit": {
      "runs": 48,
      "est_cost": 0.02
    },
    "war-room-competitors": {
      "runs": 1,
      "est_cost": 0.08
    },
    "war-room-cms": {
      "runs": 1,
      "est_cost": 0.08
    },
    "war-room-industry": {
      "runs": 1,
      "est_cost": 0.08
    },
    "morning-briefing": {
      "runs": 1,
      "est_cost": 0.13
    },
    "task-worker": {
      "runs": 48,
      "active": 2,
      "est_cost": 0.62
    },
    "daily-auto-update": {
      "runs": 1,
      "est_cost": 0.01
    }
  },
  "total_cron_cost": 1.16,
  "main_session_est": 2.00,
  "daily_total": 3.16,
  "notes": ""
}
```

## Optimization Opportunities

### 🔴 Task-Worker Empty Runs (Biggest Win)

task-worker runs every 30 min on Sonnet. 46 of 48 daily runs find nothing to do. Those empty checks cost ~$0.46/day ($14/month) for zero value.

**Options:**
1. **Reduce frequency** — Run every 2 hours instead of 30 min. Drops from 48 to 12 runs/day. Saves ~$0.35/day.
2. **Switch empty checks to mini** — Can't easily do mid-run model switching on OpenClaw.
3. **Event-driven** — Only run when queue changes. Requires webhook/file-watch trigger OpenClaw may not support.

**Recommendation:** Option 1 — change schedule to `0 */2 * * *`. Tasks can wait 2 hours. Cost drops from $0.62 to $0.18/day.

### 🟡 Email Monitor Frequency

288 runs/day at $0.0005 each = $0.14/day. Not huge, but: does Michael really need 5-minute email checks at 3 AM?

**Option:** Schedule-aware frequency. Every 5 min during work hours (7AM-8PM), every 30 min overnight.

**Savings:** ~$0.06/day ($2/month). Minor but free improvement.

### 🟢 War Room Already Optimized

3 jobs × 1 run/day × $0.08 = $0.24/day. This is fine. Don't touch it.

## Weekly Cost Report

Every Monday morning, the morning-briefing should include a weekly cost summary:

```
💰 WEEKLY COST ESTIMATE
Cron jobs: $8.12 (48 task-worker runs optimized ✓)
Main sessions: ~$14 (est. 7 sessions avg)
Week total: ~$22
Month projection: ~$95
```

## When to Re-Estimate

Review and update these estimates when:
- A cron job's prompt changes significantly
- A new job is added
- Model pricing changes
- You notice duration patterns shifting (check cron/runs/*.jsonl)
