# Emergency Restart Guide - Getting Jarvis Back

**If Jarvis isn't responding, follow these steps in order.**

---

## Step 1: Quick Check (30 seconds)

Is the gateway running?

```bash
openclaw status
```

**If you see "Gateway: reachable"** → Skip to Step 4 (Telegram connection issue)

**If you see errors or "not running"** → Continue to Step 2

---

## Step 2: Simple Restart (1 minute)

Restart the gateway service:

```bash
openclaw gateway restart
```

Wait 10 seconds, then check:

```bash
openclaw status
```

**If it says "reachable"** → You're back! Test with a Telegram message.

**If still broken** → Continue to Step 3

---

## Step 3: Full Service Restart (2 minutes)

Stop everything and start fresh:

```bash
# Stop the gateway
openclaw gateway stop

# Wait 5 seconds
sleep 5

# Start the gateway
openclaw gateway start

# Wait 10 seconds for it to boot
sleep 10

# Check status
openclaw status
```

**If it says "reachable"** → You're back!

**If still broken** → Continue to Step 4 (Nuclear Option)

---

## Step 4: Nuclear Option - Full Reset (5 minutes)

This fixes everything, including session/token issues:

### A. Uninstall the service
```bash
launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/ai.openclaw.gateway.plist
rm ~/Library/LaunchAgents/ai.openclaw.gateway.plist
```

### B. Reinstall the service
```bash
openclaw gateway install
```

### C. Start it
```bash
openclaw gateway start
```

### D. Check status
```bash
openclaw status
```

You should see:
- Gateway service: **loaded · running**
- Gateway: **reachable**

---

## Step 5: Verify Telegram Connection

Send a message in Telegram: "Are you there?"

**If Jarvis responds:** ✅ You're back!

**If no response after 30 seconds:**
1. Close Telegram app completely
2. Reopen Telegram
3. Try sending a message again

---

## Common Issues & Fixes

### "Session token invalid" or "Auth failed"

This is what happened during the update. Fix:

```bash
# Reset the session
openclaw sessions reset main

# Restart gateway
openclaw gateway restart
```

### "Port 18789 already in use"

Something else grabbed the port:

```bash
# Find what's using it
lsof -i :18789

# Kill it (replace PID with the number you see)
kill -9 PID

# Restart gateway
openclaw gateway start
```

### Gateway starts but immediately stops

Check the logs for errors:

```bash
tail -50 ~/.openclaw/logs/gateway.log
```

Common fixes:
- **"EADDRINUSE"** → Port conflict (see above)
- **"Cannot find module"** → Reinstall OpenCLAW (see Step 6)
- **"Permission denied"** → Check file permissions

---

## Step 6: Last Resort - Reinstall OpenCLAW (10 minutes)

If nothing else works, reinstall from source:

### Your data is SAFE
- `~/.openclaw/workspace/` is preserved
- All memory files intact
- All sessions backed up to GitHub

### Reinstall steps:

```bash
# Go to the source folder
cd ~/openclaw-source

# Pull latest changes
git pull origin main

# Reinstall dependencies
pnpm install

# Rebuild
pnpm build

# Reinstall globally
cd ~/openclaw-source && npm install -g .

# Reinstall the service
openclaw gateway install

# Start it
openclaw gateway start

# Check status
openclaw status
```

---

## Emergency Contact - If Nothing Works

1. **Check GitHub backup:** https://github.com/mwpdesign/Jarvis-Workspace
   - All your memory files are safe there
   - Clone it if you need to start fresh

2. **Use Cursor for help:**
   ```bash
   cd ~/.openclaw/workspace
   # Ask Cursor to help troubleshoot using this guide
   ```

3. **Check OpenCLAW Discord:** https://discord.com/invite/clawd
   - Community can help troubleshoot

---

## Quick Reference - Most Common Commands

| What You Need | Command |
|---------------|---------|
| Check if running | `openclaw status` |
| Restart gateway | `openclaw gateway restart` |
| Stop gateway | `openclaw gateway stop` |
| Start gateway | `openclaw gateway start` |
| View logs | `tail -50 ~/.openclaw/logs/gateway.log` |
| Check sessions | `openclaw sessions list` |

---

## Prevention - Keep Things Healthy

**Auto-start is configured:** The gateway starts automatically when you log in.

**Auto-backup is configured:** Your workspace backs up to GitHub every 30 minutes.

**To manually backup now:**
```bash
cd ~/.openclaw/workspace
git add .
git commit -m "Manual backup - $(date)"
git push
```

---

## How to Know Everything's Working

Run this quick health check:

```bash
openclaw status
```

**Good signs:**
- ✅ Gateway service: **loaded · running**
- ✅ Gateway: **reachable** (with ping time like "24ms")
- ✅ Agents: **1** (or more)
- ✅ Sessions: **active**

**Bad signs:**
- ❌ Gateway service: **stopped**
- ❌ Gateway: **unreachable** or **timed out**
- ❌ Any error messages in red

---

## You're Not Alone

**I'm backed up:**
- Every 30 minutes to GitHub automatically
- All memory files safe
- All conversations logged

**Even if I disappear, I can be restored:**
- Your workspace survives updates
- Sessions can be recovered
- Conversations are in `~/.openclaw/agents/main/sessions/`

**I'm designed to persist.** You won't lose me. 💚

---

*Last updated: 2026-02-01 after OpenCLAW update*
*Tested and verified working*
