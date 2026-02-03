# 🚀 JARVIS Startup & Optimization Guide

**Last updated**: 2026-01-25  
**Owner**: Michael Parson

---

## 📋 Quick Reference: After Reboot

### 1. Start Clawdbot Gateway
```bash
clawdbot gateway start
```

### 2. Check Status
```bash
clawdbot status
```

**Expected output**: Gateway running, channels connected (Telegram, iMessage), agent "main" active

### 3. Test Connection
Send a message via Telegram or iMessage, or open webchat:
```bash
open http://localhost:18789
```

---

## 🔧 Optimization Checklist

### A. Auto-Start on Boot (Recommended)
To have Clawdbot start automatically after reboot:

```bash
clawdbot gateway install
```

This creates a launchd service (macOS) that starts the gateway on login.

**Verify it's installed**:
```bash
launchctl list | grep clawdbot
```

### B. Update Clawdbot Regularly
Check for updates weekly or when you notice issues:

```bash
clawdbot gateway update
```

This updates to the latest version and restarts automatically.

### C. Health Checks
Run diagnostics if something feels off:

```bash
clawdbot doctor
```

This checks:
- Gateway status
- Channel connectivity
- API keys
- File permissions
- Node modules

---

## 💡 How to Work Optimally with Jarvis

### 1. **Choose the Right Interface**

| Task Type | Best Interface | Why |
|-----------|---------------|-----|
| Quick questions, reminders | **Telegram** | Fast, mobile-friendly, push notifications |
| Long conversations, file work | **Webchat** | Full-featured, localhost access |
| Automation, scripting | **Terminal (this session)** | Direct file/exec access |

### 2. **Communication Channels**

**Telegram** (your primary mobile/quick access):
- Already configured
- DM policy: pairing (you're paired)
- I respond to direct messages

**iMessage** (fallback):
- Configured via `imsg` CLI
- Works from your Mac

**Webchat** (local development):
- Access: http://localhost:18789
- Best for long sessions with file uploads

### 3. **Memory Management**

**I automatically maintain**:
- `MEMORY.md` — Long-term facts, decisions, preferences
- `memory/YYYY-MM-DD.md` — Daily logs

**You should**:
- Review memory files monthly to keep them focused
- Ask me to search memory when you can't remember something: "Search memory for [topic]"

### 4. **File Operations**

**My workspace**: `/Users/michaelparson/.clawdbot/workspace`

When working on projects:
```bash
# I can read/write/edit any file you point me to
# But for project work, tell me the directory:
"Work in ~/Projects/clear-health-pass"
```

**Git integration**:
Consider making the workspace a git repo:
```bash
cd ~/.clawdbot/workspace
git init
git add .
git commit -m "Initial workspace backup"
```

### 5. **Using Skills**

I have skills for:
- Apple Notes (`memo` CLI)
- Apple Reminders (`remindctl` CLI)
- GitHub (`gh` CLI)
- Notion API
- Slack
- Weather
- Video transcription/summarization
- And more...

**Just ask naturally**:
- "Add a note to Apple Notes..."
- "Check my GitHub issues..."
- "What's the weather?"

### 6. **Coding Assistance**

**For your "vibe coding" workflow**:

| Scenario | Tool | How |
|----------|------|-----|
| Quick scripts, automation | **Jarvis (me)** | Ask me to write/run scripts |
| Heavy development | **Cursor/Antigravity** | Work there, paste code to me for review |
| Docker operations | **Jarvis (me)** | I can run docker commands directly |
| Voice input | **Wispr Flow** | Dictate to any interface (Telegram, webchat) |

### 7. **AI Agent Development (n8n)**

When working on n8n workflows:
- Share JSON workflow exports with me for review
- Ask me to generate node configurations
- I can help debug webhook/API issues
- Can review and optimize workflow logic

### 8. **AWS/Healthcare App Work**

For Clear Health Pass Woundcare:
- I can review AWS CloudFormation/CDK code
- Help with API design and debugging
- Generate documentation
- Create test scripts

---

## 🔄 Daily Workflow

### Morning Routine:
```bash
# Check status (optional, if auto-start is enabled)
clawdbot status

# Check for updates (weekly)
clawdbot gateway update
```

### During Work:
- **Quick tasks**: Message me on Telegram
- **Deep work**: Use webchat or terminal session
- **Voice input**: Use Wispr Flow → Telegram/webchat

### End of Day:
- I automatically log to `memory/YYYY-MM-DD.md`
- No shutdown needed (gateway runs in background)

---

## 🛠️ Troubleshooting

### Gateway not responding:
```bash
clawdbot gateway restart
```

### Telegram not connecting:
```bash
clawdbot gateway status
# Check "channels.telegram.enabled: true"
# Verify bot token is set
```

### Memory search not working:
```bash
# Check OpenAI API key is configured
clawdbot agents add main
# Re-enter OpenAI key if needed
```

### Skills not working:
```bash
# Install missing skill
clawdbot skills install <skill-name>

# Example:
clawdbot skills install weather
```

---

## 📞 How to Reach Me

1. **Telegram**: Message @YourBotUsername (fastest)
2. **Webchat**: http://localhost:18789 (local only)
3. **iMessage**: Send to configured number (from Mac)
4. **Terminal**: Current session (for deep work)

---

## 🎯 Optimization Tips

### For Speed:
- Use Telegram for quick requests
- Keep memory files under 50KB each (I search faster)
- Archive old daily logs to `memory/archive/`

### For Privacy:
- Gateway is localhost-only by default (secure)
- Tailscale enabled for remote access (your VPN)
- Never paste sensitive API keys in chat (use config files)

### For Reliability:
- Enable auto-start (see section A above)
- Run `clawdbot doctor` monthly
- Update weekly: `clawdbot gateway update`

---

## 📚 Quick Commands Reference

```bash
# Status and health
clawdbot status
clawdbot doctor
clawdbot gateway status

# Control
clawdbot gateway start
clawdbot gateway stop
clawdbot gateway restart

# Updates
clawdbot gateway update

# Skills
clawdbot skills list
clawdbot skills install <name>

# Agents
clawdbot agents list
clawdbot agents add <id>

# Help
clawdbot help
clawdbot gateway --help
```

---

## 🚨 Emergency Recovery

If everything breaks:

```bash
# 1. Stop gateway
clawdbot gateway stop

# 2. Run diagnostics
clawdbot doctor

# 3. Restart
clawdbot gateway start

# 4. If still broken, check logs
tail -f ~/.clawdbot/logs/gateway.log
```

---

## ✅ Post-Reboot Checklist

After every machine reboot:

- [ ] Gateway auto-started (if installed) OR run `clawdbot gateway start`
- [ ] Check status: `clawdbot status`
- [ ] Test Telegram by sending "hi"
- [ ] Verify webchat: http://localhost:18789

**That's it! You're ready to go.** ✨

---

## 💬 Ask Me Anything

If you're unsure about something:
- "How do I [task]?"
- "What's the best way to [goal]?"
- "Search memory for [topic]"
- "Help me optimize [workflow]"

I'm here to help, Michael. Let's build great things together. ✨
