#!/bin/bash

##
# Send voice alert to Michael via Signal
# Simple, clean, no phone calls needed
#
# Usage: ./send-voice-alert.sh "Your message"
##

MESSAGE="$1"

if [ -z "$MESSAGE" ]; then
  echo "Usage: $0 \"Your message\""
  exit 1
fi

echo "🎙️ Generating voice message..."

# Generate audio with ElevenLabs (faster, natural voice)
AUDIO_FILE="/tmp/jarvis-alert-$(date +%s).mp3"
sag speak --voice "FutureNTech" --speed 1.2 --output "$AUDIO_FILE" --play=false "$MESSAGE"

if [ ! -f "$AUDIO_FILE" ]; then
  echo "❌ Audio generation failed"
  exit 1
fi

echo "✅ Audio generated: $AUDIO_FILE"
echo ""

# Send via Signal
echo "💬 Sending to Signal..."
signal-cli -u +13176992324 send -m "🎙️ Voice message from Jarvis" -a "$AUDIO_FILE" +13173318786

echo "✅ Done! Check Signal on your phone."
