#!/bin/bash
# Daily Briefing Generator for Jarvis
# Sends morning briefing via Telegram

WORKSPACE="$HOME/.clawdbot/workspace"
TODAY=$(date +%Y-%m-%d)
DAY_NAME=$(date +%A)
YESTERDAY=$(date -v-1d +%Y-%m-%d 2>/dev/null || date -d "yesterday" +%Y-%m-%d)

# Get weather (using clawdbot skill)
WEATHER=$(clawdbot --agent main --oneshot "What's the weather in Indianapolis today? Just give me a brief summary in 1-2 sentences." 2>/dev/null | tail -1)

# Check if today's memory exists
if [ ! -f "$WORKSPACE/memory/$TODAY.md" ]; then
    MEMORY_STATUS="📝 No daily log yet - ready to start fresh!"
else
    MEMORY_STATUS="📝 Daily log active"
fi

# Check yesterday's summary if exists
if [ -f "$WORKSPACE/memory/$YESTERDAY.md" ]; then
    YESTERDAY_SUMMARY="Yesterday's highlights in memory"
else
    YESTERDAY_SUMMARY="No previous log"
fi

# Check git status
cd "$WORKSPACE"
UNCOMMITTED=$(git status --short | wc -l | xargs)
if [ "$UNCOMMITTED" -gt 0 ]; then
    GIT_STATUS="⚠️ $UNCOMMITTED uncommitted changes"
else
    GIT_STATUS="✅ Workspace clean"
fi

# Build briefing
BRIEFING="🌅 Good morning, Michael!

📅 **$DAY_NAME, $TODAY**

🌤️ **Weather**
$WEATHER

📊 **System Status**
✅ Jarvis online and ready
$GIT_STATUS
$MEMORY_STATUS

📂 **Projects Ready**
• Clear Health Pass Woundcare (AWS)
• n8n AI Agents (Hostinger)
• ZohoCRM Management
• WordPress/DIVI Sites

💡 **Today's Productivity Tip**
I'm watching your workflow patterns and will suggest automations as opportunities arise.

🎯 **Quick Commands**
Just ask me to:
• 'Work on [project]' - Load project context
• 'Search memory for [topic]' - Find past work
• 'Check [system]' - System status
• 'Help me with [task]' - Get started

Ready to make today productive! ✨"

echo "$BRIEFING"
