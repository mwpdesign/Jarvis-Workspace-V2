# 🌅 Daily Briefing System

**Status**: ✅ ACTIVE  
**Delivery**: Telegram (@MWPJarvisBot)  
**Schedule**: 7:00 AM EST, every day  
**Created**: 2026-01-25

---

## What It Does

Every morning at 7:00 AM, Jarvis automatically sends you a briefing via Telegram with:

### 📅 Date & Day
- Current date
- Day of the week

### 🌤️ Weather
- Indianapolis weather (interactive - ask for live update)

### 📊 System Status
- Jarvis online status
- Git workspace status (uncommitted changes alert)
- Daily memory log status

### 📂 Active Projects
- Quick reference to your main projects
- Clear Health Pass Woundcare
- n8n AI Agents  
- ZohoCRM
- WordPress/DIVI

### 💡 Productivity Focus
- Current observation mode status
- Automation suggestions (as patterns emerge)

### 🎯 Quick Start Commands
- Helpful reminders of how to work with Jarvis
- Common command patterns

---

## How It Works

### Script
`~/.clawdbot/workspace/scripts/send-daily-briefing.js`

**Features**:
- Checks git status
- Verifies daily memory log
- Generates formatted briefing
- Lightweight (runs in <1 second)

### Cron Job
- **Name**: "Jarvis Daily Briefing"
- **Schedule**: `0 7 * * *` (7:00 AM EST)
- **Delivery**: Telegram to Michael
- **Session**: main (your primary Jarvis session)

### View/Edit Schedule
```bash
# List all cron jobs
clawdbot cron list

# Run briefing manually (test)
node ~/.clawdbot/workspace/scripts/send-daily-briefing.js

# Disable briefing temporarily
# (Use clawdbot web UI or cron tool)
```

---

## Customization

### Add New Sections
Edit: `scripts/send-daily-briefing.js`

**Ideas to add**:
- n8n workflow status (when API connected)
- AWS health check (when credentials added)
- GitHub notifications
- Calendar events for the day
- Yesterday's accomplishments from memory

### Change Time
```bash
# Current: 7:00 AM EST
# To change, update the cron job schedule
# Or ask Jarvis: "Change my daily briefing to 6:30 AM"
```

### Add Weather Details
Ask Jarvis to enhance the weather section with:
- Temperature
- Conditions
- Forecast
- Alerts

---

## Manual Trigger

Want a briefing right now?

**Ask Jarvis**:
- "Send me my daily briefing"
- "Give me a status update"
- "What's my morning briefing?"

**Run directly**:
```bash
cd ~/.clawdbot/workspace
node scripts/send-daily-briefing.js
```

---

## Future Enhancements

### Planned
- [ ] Live weather data integration
- [ ] Calendar integration (upcoming meetings)
- [ ] n8n workflow health checks
- [ ] AWS service status
- [ ] GitHub activity summary
- [ ] Yesterday's memory highlights
- [ ] Top 3 priorities for today
- [ ] Unread notifications summary

### Ideas
- Weekend vs. weekday variations
- Project-specific briefings
- Voice delivery option
- Smart prioritization based on deadlines

---

## Troubleshooting

### Briefing didn't arrive?
1. Check cron job status: `clawdbot cron list`
2. Verify Telegram connection: `clawdbot status`
3. Test manually: `node ~/.clawdbot/workspace/scripts/send-daily-briefing.js`

### Want to disable?
Ask Jarvis: "Disable my daily briefing"

### Want to re-enable?
Ask Jarvis: "Enable my daily briefing"

---

## What You Get

Every morning, you'll **wake up to**:
- ✅ System ready confirmation
- ✅ Projects at your fingertips
- ✅ Weather awareness
- ✅ Workspace health check
- ✅ Productivity reminders
- ✅ Quick command reference

**Zero effort. Maximum context. Every single day.** ✨
