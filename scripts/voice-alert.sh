#!/bin/bash

##
# Jarvis Voice Alert - Simple Signal Voice Messages
# Uses ElevenLabs + Signal via OpenClaw message tool
#
# Usage: ./voice-alert.sh "Your message"
##

MESSAGE="$1"

if [ -z "$MESSAGE" ]; then
  echo "Usage: $0 \"Your message\""
  exit 1
fi

echo "📣 Sending voice alert to Michael..."
echo "Message: \"$MESSAGE\""
echo ""

# Generate voice with ElevenLabs
echo "🎙️ Generating voice..."
AUDIO_FILE="/tmp/jarvis-alert-$(date +%s).mp3"

sag speak --voice "FutureNTech" --speed 1.2 --output "$AUDIO_FILE" --play=false "$MESSAGE"

if [ ! -f "$AUDIO_FILE" ]; then
  echo "❌ Voice generation failed"
  exit 1
fi

echo "✅ Audio generated: $AUDIO_FILE ($(du -h "$AUDIO_FILE" | cut -f1))"
echo ""

# Move to workspace (OpenClaw requires files in workspace)
WORKSPACE_AUDIO="/Users/michaelparson/.clawdbot/workspace/temp-voice-alert.mp3"
cp "$AUDIO_FILE" "$WORKSPACE_AUDIO"

echo "💬 Sending to Signal..."
echo ""

# Send via OpenClaw message tool
openclaw message send \
  --channel signal \
  --target +13173318786 \
  --media "$WORKSPACE_AUDIO" \
  --caption "🎙️ Voice message from Jarvis"

RESULT=$?

# Cleanup
rm -f "$AUDIO_FILE" "$WORKSPACE_AUDIO"

if [ $RESULT -eq 0 ]; then
  echo ""
  echo "✅ Complete! Check Signal on your phone."
else
  echo ""
  echo "❌ Failed to send via Signal"
  exit 1
fi
