# Task Queue System

## How It Works

- Michael requests work → Jarvis either completes it NOW or adds to `tasks/queue.json`
- Heartbeat checks queue every 30 min, picks up 1 pending task per cycle
- Completed tasks reported in next morning briefing or Telegram message
- Blocked tasks flagged to Michael for input

## Task Lifecycle

```
pending → in-progress → complete
                ↓
              blocked → pending (after Michael unblocks)
```

## Commands Michael Can Use

- **"What's in my queue?"** → Read and summarize tasks/queue.json
- **"Queue this: [description]"** → Manually add a task
- **"Cancel task TASK-XXX"** → Set status to cancelled
- **"What did you finish?"** → Show recently completed tasks
- **"Prioritize TASK-XXX"** → Bump to high priority

## Maintenance

- Completed tasks older than 30 days: archive to `tasks/queue-archive.json`
- Run archive cleanup on 1st of each month (same as intel ledger)

## Rules

- FIFO within priority bands (high first, then medium, then low)
- Max 1 task per heartbeat cycle to control costs
- Big tasks get broken into subtasks if needed
- If a task has been "in-progress" for 48+ hours with no progress, flag it

## Task Structure

Each task in `tasks/queue.json` contains:

```json
{
  "id": "TASK-001",
  "created": "2026-02-04T15:30:00-05:00",
  "source": "telegram|webchat|heartbeat|self",
  "request": "Write outreach email template for FutureNTech band submissions",
  "project": "futurentech|band|woundcare|general|jarvis-infra",
  "priority": "high|medium|low",
  "status": "pending|in-progress|blocked|review|complete|cancelled",
  "assigned_session": null,
  "result_file": null,
  "result_summary": null,
  "deadline": null,
  "notes": null,
  "completed_at": null
}
```

## Examples

### Queueing a Task

When Michael says: "Write me an outreach template for FutureNTech"

Jarvis responds: "✅ Queued: Write FutureNTech outreach template — I'll pick this up in my next work cycle."

And adds to queue.json:
```json
{
  "id": "TASK-002",
  "created": "2026-02-04T15:45:00-05:00",
  "source": "telegram",
  "request": "Write outreach email template for FutureNTech band submissions",
  "project": "futurentech",
  "priority": "medium",
  "status": "pending",
  "assigned_session": null,
  "result_file": null,
  "result_summary": null,
  "deadline": null,
  "notes": null,
  "completed_at": null
}
```

### Completing a Task

Next heartbeat, Jarvis:
1. Reads queue.json
2. Finds TASK-002 (oldest pending)
3. Creates the template file
4. Updates queue.json:
```json
{
  "id": "TASK-002",
  "status": "complete",
  "result_file": "templates/futurentech-outreach.md",
  "result_summary": "Created email template for band outreach with 3 variants (cold, warm, follow-up)",
  "completed_at": "2026-02-04T16:00:00-05:00"
}
```
5. Reports in next morning briefing: "✅ Completed: FutureNTech outreach template (TASK-002)"

### Blocking a Task

If a task needs Michael's input:
```json
{
  "id": "TASK-003",
  "status": "blocked",
  "notes": "Need Michael to provide Reddit API credentials or approve Bandcamp-only approach"
}
```

Jarvis flags: "⚠️ TASK-003 blocked — Need Reddit API credentials to proceed with band outreach"
