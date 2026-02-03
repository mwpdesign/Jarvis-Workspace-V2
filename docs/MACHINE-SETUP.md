# Clawdbot Machine Setup Guide

Complete instructions for replicating your Jarvis setup on a new machine.

---

## Overview

Your Clawdbot setup consists of:
1. **Clawdbot software** (the AI agent runtime)
2. **Your workspace** (personality, memory, context - backed up on GitHub)
3. **Configuration** (API keys, channels, settings)

This guide walks you through setting up everything from scratch.

---

## Prerequisites

- macOS (current setup)
- Node.js installed
- GitHub account access
- API keys ready (Anthropic Claude, etc.)
- Telegram account

---

## Step 1: Install Clawdbot

```bash
# Install Clawdbot globally via npm
npm install -g clawdbot

# Verify installation
clawdbot --version
```

---

## Step 2: Initial Configuration

```bash
# Start Clawdbot for first-time setup
clawdbot gateway start

# This will create ~/.clawdbot/config.json
# Stop it for now to configure manually
clawdbot gateway stop
```

---

## Step 3: Configure API Keys

Edit `~/.clawdbot/config.json`:

```json
{
  "apiKeys": {
    "anthropic": "YOUR_ANTHROPIC_API_KEY",
    "openai": "YOUR_OPENAI_API_KEY"
  },
  "defaultModel": "anthropic/claude-sonnet-4-5-20250929"
}
```

**Where to get keys:**
- Anthropic: https://console.anthropic.com/
- OpenAI: https://platform.openai.com/api-keys

---

## Step 4: Clone Your Workspace

```bash
# Navigate to Clawdbot directory
cd ~/.clawdbot

# Remove default workspace (if exists)
rm -rf workspace

# Clone your workspace from GitHub
git clone https://github.com/mwpdesign/Jarvis-Workspace.git workspace

# Verify it worked
ls -la workspace
```

You should see: AGENTS.md, SOUL.md, USER.md, IDENTITY.md, TOOLS.md, HEARTBEAT.md, memory/, etc.

---

## Step 5: Set Up Telegram Channel

### A. Create Telegram Bot

1. Open Telegram, message **@BotFather**
2. Send `/newbot`
3. Name your bot (e.g., "Jarvis")
4. Get your bot token (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### B. Get Your Telegram User ID

1. Message **@userinfobot** in Telegram
2. It will reply with your user ID (e.g., `5582255047`)

### C. Configure Telegram in Clawdbot

Edit `~/.clawdbot/config.json`, add:

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "YOUR_BOT_TOKEN",
      "allowedUsers": [5582255047]
    }
  }
}
```

---

## Step 6: Point Clawdbot to Your Workspace

Clawdbot should auto-detect `~/.clawdbot/workspace/`, but verify in config:

```json
{
  "workspace": "/Users/YOUR_USERNAME/.clawdbot/workspace"
}
```

---

## Step 7: Start Clawdbot

```bash
# Start the gateway
clawdbot gateway start

# Check status
clawdbot status

# View logs (if needed)
clawdbot gateway logs
```

---

## Step 8: Test Connection

1. Open Telegram
2. Find your bot by username
3. Send: `/start`
4. Send: `Good morning, Jarvis!`

You should get a response with your personality intact!

---

## Step 9: Verify Workspace Integration

Test that your workspace is active:

```bash
# In Telegram, ask:
"What's in my memory?"
"Who am I?" (should know you're Michael)
"What projects am I working on?"
```

Jarvis should respond with context from USER.md, MEMORY.md, etc.

---

## Troubleshooting

### Clawdbot won't start
```bash
# Check logs
clawdbot gateway logs

# Check for port conflicts
lsof -i :8080
```

### Telegram not responding
- Verify bot token is correct
- Verify your user ID is in `allowedUsers`
- Check that you've started a conversation with the bot in Telegram

### Workspace not loading
```bash
# Verify workspace location
ls -la ~/.clawdbot/workspace

# Check permissions
chmod -R 755 ~/.clawdbot/workspace
```

### Git push fails (auto-commit)
```bash
# Set up git credentials
cd ~/.clawdbot/workspace
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Configure GitHub authentication (use token or SSH)
git remote set-url origin https://YOUR_GITHUB_TOKEN@github.com/mwpdesign/Jarvis-Workspace.git
```

---

## Optional: Additional Channels

### WhatsApp, Discord, Slack
Check Clawdbot docs for setup instructions:
```bash
clawdbot help channels
```

---

## Maintenance

### Keep Clawdbot Updated
```bash
# Update to latest version
npm update -g clawdbot

# Restart gateway
clawdbot gateway restart
```

### Workspace Backups
Your workspace auto-commits to GitHub every 30 minutes. Verify:
```bash
cd ~/.clawdbot/workspace
git log --oneline -10
```

---

## Summary Checklist

- [ ] Clawdbot installed (`npm install -g clawdbot`)
- [ ] API keys configured (Anthropic, OpenAI)
- [ ] Workspace cloned from GitHub
- [ ] Telegram bot created and configured
- [ ] Clawdbot gateway started
- [ ] Test message sent and received
- [ ] Workspace context verified
- [ ] Git credentials configured (for auto-commit)

---

## Your Current Setup

**Machine**: M1 Max 64GB  
**Workspace**: https://github.com/mwpdesign/Jarvis-Workspace.git  
**Telegram User ID**: 5582255047  
**Default Model**: anthropic/claude-sonnet-4-5-20250929  
**Timezone**: America/Indianapolis

---

*Last updated: 2026-01-27*
