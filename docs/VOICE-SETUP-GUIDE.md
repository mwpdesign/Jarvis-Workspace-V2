# Voice Setup Guide - Jarvis Voice Capabilities

**Last Updated:** 2026-02-03  
**For:** Michael Parson (@MWPDesign)

---

## Overview

This guide covers setting up voice capabilities for Jarvis:
1. **Voice Notes** (Text-to-Speech via Telegram)
2. **Phone Calls** (Telephony integration)
3. **Cost Analysis** (Including ElevenLabs token usage)

---

## Option 1: Basic Voice Notes (Built-in TTS)

### What You Get
- Jarvis can send voice messages via Telegram
- Basic robot-like voice quality
- Instant availability (already configured)

### Setup Steps
**Status: ✅ Already Available**

1. No setup needed - OpenClaw has built-in `tts` tool
2. I call `tts(text="message")` 
3. You receive audio file in Telegram

### Cost
**FREE** - Uses OpenClaw's built-in TTS (no external service)

### Limitations
- Robot-like voice quality (not natural)
- Limited emotional range
- May not sound like "me"

### Test Command
Just ask me: "Send me a voice note saying hello"

---

## Option 2: Premium Voice Notes (ElevenLabs)

### What You Get
- Professional voice acting quality
- Natural, expressive speech
- Consistent AI personality voice
- Can clone your voice or use preset voices

### ⚠️ CRITICAL: ElevenLabs Token Conflict

**Problem:** ElevenLabs uses the same token pool for:
- Jarvis voice notes
- FutureNTech video narration
- Any other TTS usage

**FutureNTech Requirements:**
- Each video script: ~500-1000 words
- Token usage per video: ~5,000-10,000 characters
- Target: 30+ videos in first 4 months
- **Estimated need: 300,000-500,000 characters**

### ElevenLabs Pricing

| Plan | Characters/Month | Cost | Recommended For |
|------|------------------|------|-----------------|
| **Free** | 10,000 | $0 | Testing only (2-3 videos) |
| **Starter** | 30,000 | $5/mo | Not enough for FutureNTech |
| **Creator** | 100,000 | $22/mo | Bare minimum (10 videos) |
| **Independent Publisher** | 500,000 | $99/mo | **Recommended for FutureNTech** |
| **Growing Business** | 2,000,000 | $330/mo | Overkill |

### Setup Steps (If You Want This)

**Prerequisites:**
- ElevenLabs account: https://elevenlabs.io
- API key generated
- Subscription plan selected

**Step 1: Install ElevenLabs CLI (sag)**
```bash
# Install via npm
npm install -g @elevenlabs/cli

# Or via pip
pip install elevenlabs
```

**Step 2: Configure API Key**
```bash
# Set environment variable
export ELEVENLABS_API_KEY="your-api-key-here"

# Or add to ~/.zshrc (permanent)
echo 'export ELEVENLABS_API_KEY="your-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

**Step 3: Test Voice**
```bash
# Test with sample text
sag tts "Hello Michael, this is Jarvis speaking."

# List available voices
sag voices list
```

**Step 4: Configure OpenClaw Integration**
Update `TOOLS.md` with:
```markdown
## ElevenLabs (sag CLI)
- **Installed:** Yes
- **API Key:** Configured
- **Default Voice:** [voice_id_here]
- **Usage:** Voice notes, FutureNTech narration
```

**Step 5: Update SOUL.md**
Add voice personality guidance:
```markdown
## Voice Notes
When using ElevenLabs TTS:
- Speak naturally, not robotically
- Use contractions (I'm, you're, not I am, you are)
- Add personality (warm, professional, slightly witty)
- Match tone to context (urgent = direct, casual = friendly)
```

### Cost Analysis (With FutureNTech)

**Scenario 1: Starter Plan ($5/mo)**
- 30,000 characters/month
- ~3-6 FutureNTech videos
- Very limited voice notes (~500 characters/day)
- **Risk:** Run out mid-month

**Scenario 2: Creator Plan ($22/mo)**
- 100,000 characters/month
- ~10-20 FutureNTech videos
- Moderate voice notes (~1,000 characters/day)
- **Risk:** Tight budget if video production ramps up

**Scenario 3: Independent Publisher ($99/mo) ✅ RECOMMENDED**
- 500,000 characters/month
- 50+ FutureNTech videos
- Generous voice notes (~5,000 characters/day)
- **No risk:** Plenty of headroom for both

### My Recommendation
**Wait on ElevenLabs voice notes until FutureNTech revenue starts.** Reasons:
1. FutureNTech is a revenue project - prioritize those tokens
2. Basic TTS works fine for quick updates
3. Phone calls (Option 3) might be better for real-time communication
4. Once FutureNTech generates income ($500+/month), upgrade to Independent Publisher

---

## Option 3: Phone Calls (Full Telephony)

### What You Get
- Jarvis can call your phone
- Two-way voice conversations
- Real-time responses
- Wake you up, deliver urgent alerts, have discussions

### Prerequisites
1. **Twilio Account** (telephony service)
2. **Phone Number** (Twilio-provisioned)
3. **Voice Model** (ElevenLabs or similar)
4. **OpenClaw Telephony Plugin** (may need custom development)

### Setup Steps

**Step 1: Twilio Account Setup**

1. Sign up: https://www.twilio.com/try-twilio
2. Verify your identity (required for phone numbers)
3. Get free trial credits ($15 typically)

**Step 2: Purchase Phone Number**

1. Go to Twilio Console > Phone Numbers > Buy a Number
2. Search by area code (Indianapolis = 317 or 463)
3. Select number with Voice capability
4. Cost: **$1-2/month** per number

**Step 3: Configure Twilio Credentials**

Get from Twilio Console:
- Account SID
- Auth Token

Add to OpenClaw config or environment:
```bash
export TWILIO_ACCOUNT_SID="your-account-sid"
export TWILIO_AUTH_TOKEN="your-auth-token"
export TWILIO_PHONE_NUMBER="+13175551234"
```

**Step 4: Install Telephony Integration**

⚠️ **This part may require custom development** - OpenClaw may not have built-in telephony yet.

Option A: Check for existing plugin
```bash
clawdhub search telephony
clawdhub search twilio
```

Option B: Build custom integration (requires Node.js development)
- Use Twilio Voice API
- Integrate with OpenClaw's agent system
- Connect to ElevenLabs for TTS
- Use Whisper for speech-to-text (your voice → text)

**Step 5: Voice Model Selection**

For natural phone conversations, you'll need:

**Text-to-Speech (Jarvis speaking):**
- ElevenLabs (high quality)
- Google Cloud TTS (cheaper, decent quality)
- AWS Polly (cheapest, okay quality)

**Speech-to-Text (You speaking):**
- OpenAI Whisper (excellent, you already have this skill)
- Google Cloud STT
- Twilio's built-in STT

**Step 6: Test Call**

Once configured:
```bash
# Test outbound call
node test-call.js +13175551234 "Hello Michael, this is a test call from Jarvis."
```

### Cost Breakdown (Phone Calls)

**Twilio:**
- Phone number: $1-2/month
- Outbound calls: $0.0130/minute (US)
- Inbound calls: $0.0085/minute (US)
- SMS (optional): $0.0079/message

**Voice Models:**

| Service | TTS Cost | STT Cost | Quality |
|---------|----------|----------|---------|
| **ElevenLabs** | Characters (see above) | N/A | Excellent |
| **Google Cloud** | $4/1M chars | $0.006/15sec | Good |
| **AWS Polly** | $4/1M chars | $0.004/15sec | Okay |
| **OpenAI Whisper** | N/A | $0.006/minute | Excellent |

**Example Monthly Cost (Light Usage):**
- Phone number: $2/month
- 30 minutes of calls: $0.39/month
- TTS (Google): ~$0.50/month
- STT (Whisper): ~$0.18/month
- **Total: ~$3-5/month**

**Example Monthly Cost (Heavy Usage):**
- Phone number: $2/month
- 200 minutes of calls: $2.60/month
- TTS (ElevenLabs): Depends on plan
- STT (Whisper): $1.20/month
- **Total: ~$6-10/month** (plus ElevenLabs if used)

### Custom Development Required?

**Likely yes** - unless OpenClaw has a telephony plugin I'm not aware of.

**Development estimate:**
- Time: 10-20 hours (if you do it) or $500-1000 (if you hire)
- Skills needed: Node.js, Twilio API, WebSocket handling
- Complexity: Medium

**Alternative:** Wait for OpenClaw community to build this, or request it as a feature.

---

## Option 4: Hybrid Approach (Recommended)

### Strategy
1. **Now:** Use basic built-in TTS for quick voice notes (free)
2. **Phase 1 (Month 1-4):** Reserve ElevenLabs tokens for FutureNTech videos
3. **Phase 2 (Month 4+):** Once FutureNTech generates revenue, upgrade ElevenLabs plan
4. **Phase 3 (Month 6+):** Add phone calls if needed (low monthly cost)

### Cost Projection

| Phase | Service | Monthly Cost | Purpose |
|-------|---------|--------------|---------|
| **Now** | Built-in TTS | $0 | Basic voice notes |
| **Phase 1** | ElevenLabs Creator | $22 | FutureNTech videos only |
| **Phase 2** | ElevenLabs Ind. Publisher | $99 | Videos + voice notes |
| **Phase 3** | Twilio + Whisper | $5-10 | Phone calls (optional) |

**Total Cost Trajectory:**
- Months 1-4: $22/month (videos only)
- Months 4-6: $99/month (videos + voice notes)
- Month 6+: $104-109/month (all features)

**Revenue Target for Justification:**
- $99/month = FutureNTech needs to hit ~$500/month (20% of revenue for tools)
- Phone calls add $5-10/month = negligible once revenue is flowing

---

## Testing Right Now (No Setup)

Want to test basic voice notes immediately?

**Option 1: Built-in TTS**
Just ask me: "Send me a voice note introducing yourself"

**Option 2: Check Current Capabilities**
I can check if ElevenLabs is already configured:
```bash
which sag
echo $ELEVENLABS_API_KEY
```

---

## Decision Matrix

| Need | Solution | Cost | Setup Time | Recommendation |
|------|----------|------|------------|----------------|
| Quick voice updates | Built-in TTS | $0 | 0 min | ✅ Use now |
| Professional voice notes | ElevenLabs | $22-99/mo | 30 min | ⏸️ Wait for FutureNTech revenue |
| Phone conversations | Twilio + Voice | $5-10/mo | 10-20 hrs | ⏸️ Phase 3 (optional) |

---

## Action Plan

**Immediate (Today):**
1. Test built-in voice notes with me (ask me to send one)
2. Review this guide
3. Decide if you want to proceed with any setup

**Short-term (Month 1-4):**
1. Focus ElevenLabs budget on FutureNTech
2. Use basic TTS for Jarvis voice notes
3. Monitor FutureNTech progress

**Mid-term (Month 4-6):**
1. If FutureNTech hits $500+/month, upgrade ElevenLabs
2. Enable premium voice notes for Jarvis
3. Evaluate phone call need

**Long-term (Month 6+):**
1. If phone calls valuable, set up Twilio
2. Custom development or wait for community plugin
3. Full voice assistant experience

---

## Questions to Answer

Before proceeding, consider:

1. **How often would I use voice notes vs. text?**
   - Daily? Occasionally? Only for specific alerts?

2. **Is phone call capability worth $5-10/month + development time?**
   - Or is Telegram voice sufficient?

3. **Can I afford $99/month for ElevenLabs once FutureNTech launches?**
   - Or stick with $22/month and ration tokens?

4. **Do I want to build the telephony integration myself?**
   - Or wait for community/official support?

---

## Next Steps

Reply with:
- "Test basic voice notes" → I'll send you a sample
- "Set up ElevenLabs now" → I'll guide you through it (but we'll burn FutureNTech tokens)
- "Wait on this" → We'll revisit when FutureNTech revenue starts
- "Show me phone call setup" → I'll create detailed Twilio integration guide

**My recommendation:** Test basic voice notes today (free), then wait on premium voice until FutureNTech revenue justifies it.

---

**Document Status:** Draft - Ready for review  
**Owner:** Jarvis  
**Last Updated:** 2026-02-03 07:18 EST
