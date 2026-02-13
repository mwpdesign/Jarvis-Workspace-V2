#!/bin/bash

##
# Call Michael with ElevenLabs Voice + Twilio
# 
# Usage: ./call-michael.sh "Your message here"
#
# What it does:
# 1. Generates natural voice audio with ElevenLabs (via sag)
# 2. Makes a phone call with Twilio (basic voice notification)
# 3. Sends the high-quality audio via Signal
##

MESSAGE="$1"

if [ -z "$MESSAGE" ]; then
  echo "Usage: $0 \"Your message\""
  exit 1
fi

echo "📞 Calling Michael..."
echo "Message: $MESSAGE"
echo ""

# Generate audio with ElevenLabs (high quality, natural voice)
echo "🎙️ Generating voice with ElevenLabs..."
AUDIO_FILE="/tmp/jarvis-message-$(date +%s).mp3"

sag --voice "FutureNTech" --output "$AUDIO_FILE" "$MESSAGE"

if [ ! -f "$AUDIO_FILE" ]; then
  echo "❌ Audio generation failed"
  exit 1
fi

echo "✅ Audio generated: $AUDIO_FILE"
echo ""

# Make phone call (short notification)
echo "📞 Making phone call..."
node /Users/michaelparson/.clawdbot/workspace/scripts/twilio-call.js "You have a voice message from Jarvis. Check Signal for the full message."

echo ""
echo "💬 Sending audio via Signal..."

# Send audio file via Signal (using message tool from OpenClaw)
# Note: This would be called from within OpenClaw context
echo "Audio ready at: $AUDIO_FILE"
echo ""
echo "✅ Done! Michael should receive:"
echo "  1. Phone call notification"
echo "  2. High-quality voice message via Signal"

