# Errors Log

Track command failures, exceptions, and unexpected behavior.

---

## [ERR-20260203-002] haiku_model_not_allowed_isolated

**Logged**: 2026-02-03T07:30:00Z
**Priority**: high
**Status**: resolved
**Area**: config

### Summary
Attempted to use Haiku model in isolated cron sessions - rejected with "model not allowed: anthropic/claude-haiku-3-5"

### Error
```
Email Monitor (error): model not allowed: anthropic/claude-haiku-3-5
```

### Context
- Migrating heartbeat cron jobs to use Haiku for cost savings ($19/month reduction)
- Changed email monitor and daily briefing to isolated sessions with `model: "haiku"`
- Isolated sessions have model restrictions/allowlist
- Main session allows Haiku, but isolated sessions do not

### Root Cause
OpenClaw configuration has model allowlist for isolated sessions that doesn't include Haiku. Likely need to configure `agents.*.models` in `openclaw.json` to allow Haiku for isolated/spawned agents.

### Resolution
- **Resolved**: 2026-02-03T07:30:00Z
- **Action**: Reverted both cron jobs back to main session with Sonnet
- **Notes**: Cannot use isolated sessions for cost optimization without configuring model allowlist first

### Options to Fix

**Option 1: Configure Model Allowlist**
Edit `~/.openclaw/openclaw.json`:
```json
{
  "agents": {
    "isolated": {
      "models": ["anthropic/claude-haiku-3-5", "anthropic/claude-sonnet-4"]
    }
  }
}
```

**Option 2: Use Main Session with Model Override**
Set session model to Haiku at session level (not tested - may affect all operations)

**Option 3: Keep Current Setup**
Accept $19/month cost, use Sonnet for everything (safest, no config changes)

### Suggested Action
1. Check `openclaw.json` for model allowlist configuration
2. Add Haiku to allowed models for isolated sessions
3. Test with single cron job before migrating all
4. Document model allowlist in TOOLS.md

### Metadata
- Reproducible: yes
- Related Files: `~/.openclaw/openclaw.json`, HAIKU-HEARTBEAT-MIGRATION.md
- Impact: Medium (cost optimization blocked)
- See Also: ERR-20260203-001 (directory read error)

---

## [ERR-20260203-001] directory_read_attempt

**Logged**: 2026-02-03T07:00:00Z
**Priority**: low
**Status**: resolved
**Area**: automation

### Summary
Attempted to read entire `/tasks/` directory as a file during morning briefing generation

### Error
```
EISDIR: illegal operation on a directory, read
```

### Context
- Command/operation: `Read` tool called on `/Users/michaelparson/.clawdbot/workspace/tasks`
- During morning briefing generation at 7:00 AM
- Intended to pull today's task priorities for briefing
- Error message leaked into Telegram chat (should be suppressed)

### Root Cause
Generic file read instead of specifying a file within the directory

### Resolution
- **Resolved**: 2026-02-03T07:00:00Z
- **Fix**: Changed to read `tasks/KANBAN.md` specifically
- **Notes**: Works correctly now. Consider adding error suppression for internal operations to avoid polluting user chat.

### Suggested Improvement
When reading task data for briefings:
1. Always specify the file: `tasks/KANBAN.md` or `tasks/woundcare.md`
2. Suppress internal error messages from appearing in Telegram/chat surfaces
3. Add fallback handling: if KANBAN.md missing, list available task files

### Metadata
- Reproducible: yes
- Related Files: `scripts/send-daily-briefing.js`, HEARTBEAT.md
- Impact: Cosmetic (briefing still worked, just showed error to user)

---
