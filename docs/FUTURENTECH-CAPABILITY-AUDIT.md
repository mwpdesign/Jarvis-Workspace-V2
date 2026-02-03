# FutureNTech Capability Audit

**Date:** 2026-02-03 08:12 EST  
**Auditor:** Jarvis  
**Purpose:** Verify all tools needed for full FutureNTech production workflow

---

## ✅ What I Have (Working)

### 1. **Research & Discovery**
- ✅ **Web Search** (Brave API) - Find artists on Bandcamp, Reddit, etc.
- ✅ **Web Fetch** - Extract artist info, bios, links
- ✅ **Browser Control** - Navigate Reddit, Facebook, Bandcamp, TikTok
- **Status:** Fully functional

### 2. **Script Writing**
- ✅ **File Operations** - Write/edit video scripts
- ✅ **AI Assistance** - Generate compelling narratives
- **Status:** Fully functional

### 3. **Email & Correspondence**
- ✅ **Gmail Access** (gog CLI) - Mike@MWParson.com configured
- ✅ **Send/receive** submissions and artist communications
- **Status:** Fully functional

### 4. **Google Drive Integration**
- ✅ **gog drive** - Access, upload, manage files
- ✅ **gog docs** - Create/edit documents
- **Potential use:** Google Forms creation (needs testing)
- **Status:** Available but untested for Forms

### 5. **Video Editing Foundation**
- ✅ **ffmpeg** - Installed and available
- ✅ **Capabilities:** Video cutting, combining, audio mixing, captions
- **Status:** Tool exists, workflow needs development

### 6. **Voice Narration**
- ✅ **sag** (ElevenLabs CLI) - Installed
- ⚠️ **API Key:** NOT configured (no $ELEVENLABS_API_KEY found)
- **Status:** Tool ready, needs API key + voice clone setup

---

## ⚠️ Partial Capabilities (Need Configuration)

### 7. **Image Generation (Visuals/Thumbnails)**
- ⚠️ **nano-banana-pro skill** - Listed but scripts not found at expected path
- **Expected:** ~/.codex/skills/nano-banana-pro/scripts/
- **Actual:** Path doesn't exist
- **Issue:** Skill may be installed wrong or path mismatch
- **Need:** Verify installation, test image generation

### 8. **Google Forms Creation**
- ⚠️ **gog** supports Drive/Docs
- **Unknown:** Can it create Forms programmatically?
- **Alternative:** Create manually via browser control
- **Need:** Test capability or create form manually

---

## ❌ What I DON'T Have (Critical Gaps)

### 9. **YouTube Upload**
- ❌ **No youtube-upload tool** found
- ✅ **yt-dlp** exists (download only, not upload)
- **Gap:** Cannot programmatically upload videos to YouTube
- **Impact:** HIGH - Core functionality blocker
- **Options:**
  1. Install `youtube-upload` CLI tool
  2. Use YouTube Data API v3 directly (gog youtube?)
  3. Manual upload via browser automation
  4. You upload manually (defeats automation goal)

### 10. **Analytics Tracking**
- ❌ **No YouTube Analytics API access** confirmed
- **Gap:** Cannot automatically track video performance
- **Impact:** MEDIUM - Manual checking possible
- **Options:**
  1. Set up YouTube Data API access via gog
  2. Use browser automation to scrape YouTube Studio
  3. Manual weekly review

---

## 🔧 FutureNTech Workflow (Current State)

### ✅ Phase 1: Research & Script (100% Automated)
1. ✅ Search Reddit/Bandcamp/Facebook for artists (web_search, browser)
2. ✅ Extract artist info (web_fetch)
3. ✅ Write video script (file operations)
4. ✅ Send script to Michael for approval (Gmail)

### ⚠️ Phase 2: Production (60% Automated)
5. ⚠️ Generate AI voice narration (sag - needs API key)
6. ⚠️ Create thumbnail/visuals (nano-banana-pro - needs fixing)
7. ✅ Edit video with ffmpeg (need to build workflow)
8. ⚠️ Add captions/music clips (ffmpeg capable, need workflow)

### ❌ Phase 3: Distribution (0% Automated)
9. ❌ Upload to YouTube (NO TOOL)
10. ❌ Track analytics (NO TOOL)
11. ✅ Respond to submissions (Gmail works)

---

## 🎯 Critical Path to Full Automation

### Priority 1: YouTube Upload (BLOCKER)
**Without this, FutureNTech can't launch autonomously.**

**Options (ranked by preference):**

**Option A: Install youtube-upload CLI**
```bash
pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
# Then configure OAuth for YouTube API
```
- **Pro:** Clean CLI interface
- **Con:** Requires OAuth setup, credential management

**Option B: Use gog youtube command (if it exists)**
```bash
gog youtube upload --file video.mp4 --title "..." --description "..."
```
- **Pro:** Integrated with existing gog setup
- **Con:** Unknown if gog supports YouTube upload

**Option C: Browser Automation**
- Navigate to YouTube Studio
- Automate upload process via browser tool
- **Pro:** No API setup needed
- **Con:** Fragile, slow, error-prone

**Recommendation:** Check if `gog youtube` exists. If not, install youtube-upload.

### Priority 2: ElevenLabs Voice (HIGH)
**Need Michael's voice clone + API key**

**Steps:**
1. Michael records 5-10 minutes of script reading
2. Upload to ElevenLabs to create voice clone
3. Get API key from ElevenLabs dashboard
4. Configure: `export ELEVENLABS_API_KEY="..."`
5. Test: `sag tts "Test narration" --voice [voice_id]`

**Timeline:** 1-2 hours total (mostly Michael's recording time)

### Priority 3: Image Generation (MEDIUM)
**Need to fix nano-banana-pro installation**

**Steps:**
1. Check actual skill location: `ls ~/.clawdbot/workspace/skills/nano-banana-pro/`
2. Verify Python dependencies installed
3. Test generation: `uv run [script path] --prompt "test" --filename test.png`
4. Alternative: Use DALL-E via OpenAI API if nano-banana-pro broken

**Timeline:** 30 minutes troubleshooting

### Priority 4: Google Form (LOW)
**Can create manually if automation fails**

**Steps:**
1. Test: `gog forms create` (if supported)
2. If not, create via Google Forms web UI manually
3. Configure email notifications to Mike@MWParson.com
4. Embed link in video descriptions

**Timeline:** 15 minutes (manual) or 1 hour (automated)

### Priority 5: Analytics (NICE-TO-HAVE)
**Can start with manual weekly checks**

**Steps:**
1. Check: `gog youtube analytics` (if supported)
2. If not, use YouTube Studio web interface weekly
3. Track manually in spreadsheet until automation solved

**Timeline:** Defer until post-launch

---

## 💰 Cost Analysis

| Tool/Service | Current Status | Monthly Cost | Critical? |
|--------------|----------------|--------------|-----------|
| **ElevenLabs** | Need API key | $22-99/month | YES |
| **YouTube API** | Need OAuth | FREE (quota limits) | YES |
| **Google Gemini** (images) | Unknown status | FREE tier available | MEDIUM |
| **ffmpeg** | Installed | FREE | YES |
| **Web search/fetch** | Working | Included | YES |

**Total FutureNTech Tool Cost:** $22-99/month (ElevenLabs only)

---

## 🚀 Immediate Action Items

### For Michael:
1. **Record voice sample** (5-10 min of script reading)
2. **Create ElevenLabs account** + voice clone
3. **Share ElevenLabs API key**
4. **Set up YouTube OAuth** (for upload access)
5. **Decide:** Creator ($22) or Independent Publisher ($99) ElevenLabs plan?

### For Jarvis (Me):
1. ✅ Complete this audit
2. ⏳ Test nano-banana-pro image generation
3. ⏳ Research youtube-upload installation
4. ⏳ Build ffmpeg video editing workflow
5. ⏳ Create Google Form (manual if needed)
6. ⏳ Write Script #1 for approval

---

## 📊 Capability Matrix

| Task | Tool | Status | Blocker |
|------|------|--------|---------|
| Find artists | web_search, browser | ✅ Ready | None |
| Extract data | web_fetch | ✅ Ready | None |
| Write scripts | File ops | ✅ Ready | None |
| Voice narration | sag (ElevenLabs) | ⚠️ Partial | Need API key |
| Create visuals | nano-banana-pro | ⚠️ Broken | Fix installation |
| Edit video | ffmpeg | ⚠️ Untested | Build workflow |
| Upload YouTube | ??? | ❌ Missing | Install tool |
| Track analytics | ??? | ❌ Missing | Install tool |
| Email artists | gog gmail | ✅ Ready | None |
| Manage submissions | gog gmail | ✅ Ready | None |

**Overall Readiness:** 40% (can research and write, can't produce/publish yet)

---

## 🎯 Launch Readiness Checklist

### Before First Video:
- [ ] ElevenLabs API key configured
- [ ] Michael's voice clone created
- [ ] nano-banana-pro image generation working
- [ ] ffmpeg video workflow tested
- [ ] YouTube upload capability confirmed
- [ ] Google Form created and tested
- [ ] Script #1 written and approved

### Before Full Automation:
- [ ] Analytics tracking working
- [ ] Outreach templates tested
- [ ] SEO optimization workflow
- [ ] Thumbnail generation automated
- [ ] Scheduled upload system

**Estimated Time to Launch-Ready:** 2-4 hours (Michael's time) + 8-12 hours (Jarvis development)

---

## 💡 Recommendations

1. **Prioritize YouTube upload** - Without this, nothing can go live
2. **Get ElevenLabs setup ASAP** - Voice is identity of channel
3. **Manual upload okay for first 3-5 videos** - Prove concept before full automation
4. **Test one end-to-end video** - Find all the hidden gaps early
5. **Document the workflow** - Build repeatable system

---

**Next Steps:**
1. Share this audit with Michael
2. Get ElevenLabs credentials
3. Test YouTube upload options
4. Fix nano-banana-pro
5. Build prototype video end-to-end

**Status:** Ready to proceed pending tooling setup
