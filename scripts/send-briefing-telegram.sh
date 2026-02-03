#!/bin/bash
# Send daily briefing to Telegram
# This script is called by the cron job

BRIEFING=$(node "$HOME/.clawdbot/workspace/scripts/send-daily-briefing.js")

# Send via clawdbot message tool
# Using Telegram channel, target is Michael's Telegram ID
echo "Sending daily briefing..."

# We'll trigger this through Jarvis directly
# For now, output the briefing
echo "$BRIEFING"
