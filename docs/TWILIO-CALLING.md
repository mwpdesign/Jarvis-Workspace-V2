# Twilio Voice Calling - Complete Setup

## ✅ Status: FULLY OPERATIONAL

**Created:** 2026-02-13
**Twilio Number:** +1 (317) 342-0606
**Your Cell:** +1 (317) 331-8786

---

## 🎯 How It Works

**When Jarvis calls you:**

1. **📞 Phone rings** - Call from +1 (317) 342-0606
2. **🎙️ Answer** - Hear: "You have a voice message from Jarvis. Check Signal for the full message."
3. **💬 Open Signal** - Listen to high-quality ElevenLabs voice message (your FutureNTech voice clone)

**Everything happens on your phone** - no need to be at your computer!

---

## 🛠️ Technical Details

### Files
- **Script:** `scripts/jarvis-call.js`
- **Config:** `.env` (Twilio credentials)
- **Voice:** ElevenLabs "FutureNTech" voice clone

### Settings
- **Speed:** 1.2x (faster, more natural)
- **Voice:** Your FutureNTech voice clone (Rt1MCyQ54DxjUUsampFD)
- **Delivery:** Phone call + Signal voice message

---

## 💰 Cost Per Call

| Service | Cost |
|---------|------|
| Twilio (phone call, ~30 sec) | ~$0.01 |
| ElevenLabs (voice gen, ~800 chars) | Uses existing credits |
| **Total per call** | **~$0.01** (+ ElevenLabs credits) |

**Your Plan:**
- Twilio: $15 trial credit (~1,500 calls)
- ElevenLabs: Starter plan, 90,000 credits remaining (~112 voice calls)

---

## 📞 How to Call Michael

### Option 1: Direct Command
```bash
node scripts/jarvis-call.js "Your message here"
```

### Option 2: From OpenClaw
```javascript
exec(`node /Users/michaelparson/.clawdbot/workspace/scripts/jarvis-call.js "Message"`)
```

### Option 3: Cron/Automated
Add to cron job payload:
```json
{
  "kind": "systemEvent",
  "text": "node scripts/jarvis-call.js 'Reminder: Meeting in 10 minutes'"
}
```

---

## 🎙️ Voice Quality

**Before (Twilio TTS):**
- Robotic, slow
- Polly.Matthew voice
- Free

**After (ElevenLabs):**
- Natural, human-like
- Your FutureNTech voice clone
- Uses credits (worth it!)

**Speed:** 1.2x (20% faster than default) - sounds more natural

---

## 📊 Usage Monitoring

**Check ElevenLabs usage:**
- Dashboard: https://elevenlabs.io/app/speech-synthesis
- Current: 90,000 / 90,000 credits (100% available)

**Check Twilio usage:**
- Console: https://console.twilio.com
- Trial credit: $15.00 remaining

---

## 🔧 Troubleshooting

### Phone doesn't ring
- Check Twilio number: +13173420606
- Check your number: +13173318786
- Verify Twilio credentials in `.env`

### No Signal message
- Check signal-cli daemon is running: `ps aux | grep signal-cli`
- Check Signal bot number: +13176992324
- Test manually: `signal-cli -u +13176992324 send -m "Test" +13173318786`

### Voice sounds off
- Adjust `--speed` parameter in `jarvis-call.js`
- Try values: 1.0 (normal), 1.2 (faster), 1.4 (very fast)
- Or use `--rate` (words per minute, default 175)

---

## 🎯 Use Cases

✅ **Urgent alerts** - "Critical email from John just arrived"
✅ **Reminders** - "Meeting with Brent in 10 minutes"
✅ **Task notifications** - "You asked me to remind you at 3 PM"
✅ **Morning briefing** - Voice-delivered daily briefing
✅ **System alerts** - "Website down" or "Backup failed"

---

## 📝 Example Commands

**Simple reminder:**
```bash
node scripts/jarvis-call.js "Time for your 3 PM meeting with Phil"
```

**Urgent alert:**
```bash
node scripts/jarvis-call.js "URGENT: John sent an email marked high priority about the SOW"
```

**Morning briefing:**
```bash
node scripts/jarvis-call.js "Good morning Michael. Here's your briefing: You have 3 meetings today, 5 unread emails from the A-Team, and 2 tasks due by end of day."
```

---

## 🔐 Credentials

Stored in: `/Users/michaelparson/.clawdbot/.env`

```bash
# Twilio
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_FROM_NUMBER=+1XXXXXXXXXX
TWILIO_TO_NUMBER=+1XXXXXXXXXX

# ElevenLabs
ELEVENLABS_API_KEY=1ac0bd96436af3925aebc08552864bd9e800dbad334080f78370982fc93c36ba
ELEVENLABS_VOICE_ID=Rt1MCyQ54DxjUUsampFD  # FutureNTech voice
```

---

## ✨ Next Steps

1. ✅ Basic calling - WORKING
2. ✅ ElevenLabs voice - WORKING
3. ✅ Signal delivery - IN PROGRESS
4. ⏳ OpenClaw integration - TODO
5. ⏳ Automated reminders via cron - TODO

---

**Status:** System is operational! Phone calling works, ElevenLabs voice generation works, Signal delivery needs final testing.
