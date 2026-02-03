# Haiku Heartbeat Migration Plan

**Goal:** Use Haiku for heartbeats, keep Sonnet for conversations  
**Savings:** ~$16.50/month (90% reduction in heartbeat costs)  
**Status:** Ready to execute

---

## What Needs to Change

Currently, heartbeats run in the **main session** (same as conversations). To use different models, we need to split them into **isolated sessions**.

### Current Setup
- **Urgent Email Monitor:** Runs every 5 min in main session (Sonnet)
- **Daily Briefing:** Runs at 7 AM in main session (Sonnet)
- **Auto-Update:** Runs at 4 AM in isolated session (already optimized)

### Target Setup
- **Urgent Email Monitor:** Runs every 5 min in isolated session (Haiku) ✅ 
- **Daily Briefing:** Runs at 7 AM in isolated session (Haiku) ✅
- **Auto-Update:** Keep as-is (already isolated)

---

## Migration Commands

Run these when gateway is responsive:

### Step 1: Update Urgent Email Monitor

```bash
# Current job ID: 0250e04d-2079-4cd9-8891-f35422273b66
openclaw cron update 0250e04d-2079-4cd9-8891-f35422273b66 \
  --session-target isolated \
  --model haiku \
  --deliver true \
  --channel last
```

**Or via manual config edit:**
1. Open `~/.openclaw/openclaw.json`
2. Find job `0250e04d-2079-4cd9-8891-f35422273b66`
3. Change:
   - `"sessionTarget": "main"` → `"sessionTarget": "isolated"`
   - `"payload": {"kind": "systemEvent", ...}` → `"payload": {"kind": "agentTurn", "model": "haiku", "deliver": true, "channel": "last", ...}`
4. Save and restart: `openclaw gateway restart`

### Step 2: Update Daily Briefing

```bash
# Current job ID: ead3d622-7f3d-4c07-9d48-dc66ed578050
openclaw cron update ead3d622-7f3d-4c07-9d48-dc66ed578050 \
  --session-target isolated \
  --model haiku \
  --deliver true \
  --channel telegram
```

**Or via manual config edit:**
1. Find job `ead3d622-7f3d-4c07-9d48-dc66ed578050`
2. Change to isolated session with Haiku
3. Save and restart

---

## Expected Behavior After Migration

### Urgent Email Checks (Every 5 min)
- ✅ Runs in background (isolated session, Haiku)
- ✅ Silent when no urgent emails
- ✅ Alerts you in Telegram if urgent email found
- ✅ Shows summary + draft reply
- 💰 Cost: ~$0.05/day instead of $0.60/day

### Daily Briefing (7 AM)
- ✅ Runs in background (isolated session, Haiku)
- ✅ Delivers to Telegram at 7 AM sharp
- ✅ Includes affirmations, weather, emails, tasks, war room intel, lyric seed
- 💰 Cost: ~$0.01/day instead of $0.10/day

### Your Conversations
- ✅ Stay on Sonnet (full capability)
- ✅ No change in quality or features
- ✅ Only pay Sonnet prices for actual conversations

---

## Verification

After migration, check costs:

```bash
# View session usage
openclaw session status

# List active jobs
openclaw cron list

# Check isolated sessions
openclaw sessions list --kinds isolated
```

Expected output:
- Main session: Sonnet (conversations only)
- Isolated sessions: Haiku (email monitor, briefing)

---

## Rollback Plan

If something breaks:

```bash
# Revert to main session
openclaw cron update 0250e04d-2079-4cd9-8891-f35422273b66 \
  --session-target main

openclaw cron update ead3d622-7f3d-4c07-9d48-dc66ed578050 \
  --session-target main
```

---

## Cost Projection

**Before:**
- Heartbeats: $18/month (Sonnet)
- Conversations: $15/month (Sonnet)
- **Total: $33/month**

**After:**
- Heartbeats: $1.50/month (Haiku)
- Conversations: $15/month (Sonnet)
- **Total: $16.50/month**

**Savings: $16.50/month (50% reduction)**

---

## Manual Migration (If CLI Fails)

Edit `~/.openclaw/openclaw.json` directly:

### Find Email Monitor Job

```json
{
  "id": "0250e04d-2079-4cd9-8891-f35422273b66",
  "name": "Urgent Email Monitor - A-Team & Orders",
  "sessionTarget": "main",  // ← Change to "isolated"
  "payload": {
    "kind": "systemEvent",  // ← Change to "agentTurn"
    "text": "Check mike@clearhealthpass.com..."
  }
}
```

**Change to:**

```json
{
  "id": "0250e04d-2079-4cd9-8891-f35422273b66",
  "name": "Urgent Email Monitor - A-Team & Orders",
  "sessionTarget": "isolated",
  "payload": {
    "kind": "agentTurn",
    "model": "haiku",
    "message": "Check mike@clearhealthpass.com Gmail for urgent unread emails from last 10 minutes. Search in A-Team labels (Gavyn Parson, Brent Hill, John Cataldi, Phil Gritzmaker, Sil Bronder) and 1 SNETWORK labels (Orders, IVRs, Intake). Use: gog gmail search 'is:unread newer_than:10m (label:a-team OR label:1-snetwork)' --account mike@clearhealthpass.com --max 20. For ANY urgent messages: 1) Summarize the email, 2) Draft a professional reply, 3) Respond with summary and draft. If nothing urgent: respond ONLY with 'HEARTBEAT_OK'.",
    "deliver": true,
    "channel": "last"
  },
  "isolation": {
    "postToMainMode": "summary",
    "postToMainPrefix": "🚨 Email Alert"
  }
}
```

### Repeat for Daily Briefing

Same pattern - change from `systemEvent` in `main` to `agentTurn` in `isolated` with `model: "haiku"`.

---

## Timeline

**Immediate:** Document created ✅  
**When gateway responsive:** Execute migration (5-10 minutes)  
**Verification:** Watch next heartbeat cycle (within 5 min)  
**Savings start:** Immediately after migration

---

**Status:** Ready to execute when you give the word.  
**Risk:** Low (easy rollback if issues)  
**Benefit:** $16.50/month savings, ~50% cost reduction
