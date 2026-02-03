# YouTube Upload Setup Guide

**Goal:** Give Jarvis autonomous ability to upload FutureNTech videos to YouTube  
**Date:** 2026-02-03  
**Priority:** CRITICAL (blocking launch)

---

## Option 1: youtube-upload CLI (RECOMMENDED)

**Why this is best:**
- Simple command-line interface
- Well-maintained Python tool
- OAuth 2.0 authentication (secure)
- Works with YouTube Data API v3
- One-time setup, then fully automated

### Installation

```bash
# Install via pip
pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib

# Install youtube-upload
pip install youtube-upload
```

### Setup Steps

**Step 1: Create Google Cloud Project**

1. Go to: https://console.cloud.google.com
2. Create new project: "FutureNTech YouTube Automation"
3. Enable YouTube Data API v3:
   - APIs & Services → Library
   - Search "YouTube Data API v3"
   - Click Enable

**Step 2: Create OAuth 2.0 Credentials**

1. APIs & Services → Credentials
2. Create Credentials → OAuth client ID
3. Application type: **Desktop app**
4. Name: "FutureNTech Upload"
5. Download JSON file (client_secrets.json)
6. Save to: `~/.config/futurentech/client_secrets.json`

**Step 3: Authorize First Upload**

```bash
# First upload requires browser authorization
youtube-upload \
  --title="Test Upload" \
  --description="Testing FutureNTech automation" \
  --category=Music \
  --tags="test" \
  --client-secrets=~/.config/futurentech/client_secrets.json \
  --credentials-file=~/.config/futurentech/credentials.json \
  /path/to/test-video.mp4
```

This will:
1. Open browser for Google sign-in
2. Ask for YouTube upload permission
3. Save refresh token to credentials.json
4. Upload the video

**Step 4: Subsequent Uploads (Automated)**

After first auth, all future uploads are automatic:

```bash
youtube-upload \
  --title="Video Title" \
  --description="Video description with links" \
  --category=Music \
  --tags="indie,music,discovery" \
  --privacy=public \
  --thumbnail=thumbnail.jpg \
  --credentials-file=~/.config/futurentech/credentials.json \
  video.mp4
```

### Usage from Jarvis

```bash
# Set up environment
export YOUTUBE_CREDENTIALS=~/.config/futurentech/credentials.json

# Upload video
youtube-upload \
  --title="$VIDEO_TITLE" \
  --description="$VIDEO_DESCRIPTION" \
  --category=Music \
  --tags="$TAGS" \
  --privacy=public \
  --thumbnail="$THUMBNAIL_PATH" \
  --credentials-file="$YOUTUBE_CREDENTIALS" \
  "$VIDEO_FILE"
```

### Categories (Use ID 10 for Music)

- Film & Animation: 1
- Autos & Vehicles: 2
- Music: **10** ← Use this
- Pets & Animals: 15
- Sports: 17
- Gaming: 20
- People & Blogs: 22
- Comedy: 23
- Entertainment: 24
- News & Politics: 25
- Howto & Style: 26
- Education: 27
- Science & Technology: 28
- Nonprofits & Activism: 29

---

## Option 2: YouTube Data API v3 Direct (Alternative)

**Pros:**
- More control over upload process
- Can check upload status
- Can update video after upload

**Cons:**
- More complex setup
- Need to write Python wrapper
- More code to maintain

### Setup

Same OAuth setup as Option 1, but write custom Python script using:

```python
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.http import MediaFileUpload

SCOPES = ['https://www.googleapis.com/auth/youtube.upload']

# Authenticate
flow = InstalledAppFlow.from_client_secrets_file('client_secrets.json', SCOPES)
credentials = flow.run_local_server(port=0)

# Build service
youtube = build('youtube', 'v3', credentials=credentials)

# Upload
body = {
    'snippet': {
        'title': 'Video Title',
        'description': 'Description',
        'tags': ['tag1', 'tag2'],
        'categoryId': '10'
    },
    'status': {
        'privacyStatus': 'public'
    }
}

media = MediaFileUpload('video.mp4', chunksize=-1, resumable=True)

request = youtube.videos().insert(
    part='snippet,status',
    body=body,
    media_body=media
)

response = request.execute()
```

---

## Option 3: Browser Automation (NOT RECOMMENDED)

**Pros:**
- No API setup needed

**Cons:**
- Fragile (UI changes break it)
- Slow (manual steps)
- Error-prone
- Not truly autonomous
- Against YouTube ToS

**Verdict:** Don't do this.

---

## Recommendation: Use youtube-upload CLI

**Timeline:**
- Michael's time: 30 minutes (Google Cloud setup, first auth)
- Jarvis time: 10 minutes (test uploads)
- **Total:** 40 minutes to full autonomy

**Cost:**
- YouTube Data API: **FREE** (10,000 quota/day)
- 1 upload = ~1,600 quota units
- Can upload 6 videos/day easily
- More than enough for FutureNTech

---

## Security Considerations

**✅ Safe:**
- OAuth 2.0 (industry standard)
- Refresh tokens stored locally (~/.config/futurentech/)
- No passwords stored
- Revocable access (can disable in Google Account)

**🔒 Best Practices:**
- Store credentials in ~/.config/futurentech/ (chmod 600)
- Never commit credentials to git
- Add to .gitignore: `~/.config/futurentech/credentials.json`
- Use separate Google Cloud project for FutureNTech

---

## Video Metadata Template

### Standard FutureNTech Upload

**Title Format:**
```
[Band Name] - [Song Title] | Unsigned Artist Discovery #[number]
```

**Description Template:**
```
🎵 DISCOVER: [Band Name] - [Genre]

[Artist story - 2-3 sentences]

🎸 HOW THEY'RE BREAKING THROUGH:
[Tech/strategy angle - bullet points]

🎧 LISTEN TO [BAND NAME]:
Spotify: [link]
Apple Music: [link]
Bandcamp: [link]
Instagram: @[handle]

📧 WANT TO BE FEATURED?
Submit your band: [Google Form link]

---

FutureNTech discovers incredible unsigned artists and the tech/strategy behind how they're growing. Subscribe for weekly music discoveries!

#[BandName] #UnsignedBands #MusicDiscovery #IndieMusic #[Genre]
```

**Tags (10-15):**
- Band name
- Genre
- "unsigned bands"
- "indie music"
- "music discovery"
- "new music"
- "underground music"
- Tech-related if applicable

**Privacy:** Public
**Category:** Music (10)
**Language:** English

---

## Workflow Integration

### Full Autonomous Upload Process

1. **Jarvis researches artist** (web_search, browser)
2. **Jarvis writes script** (file operations)
3. **Michael approves script** (email/Telegram)
4. **Jarvis generates voice narration** (sag/ElevenLabs) ✅
5. **Jarvis creates thumbnail** (nano-banana-pro) ✅
6. **Jarvis edits video** (ffmpeg)
7. **Jarvis uploads to YouTube** (youtube-upload) ⏳ NEXT
8. **Jarvis tracks performance** (YouTube Analytics API) ⏳ LATER

---

## Testing Plan

### Phase 1: Setup (30 min)
- [ ] Michael creates Google Cloud project
- [ ] Enable YouTube Data API v3
- [ ] Create OAuth credentials
- [ ] Download client_secrets.json
- [ ] Install youtube-upload CLI

### Phase 2: First Auth (10 min)
- [ ] Run first upload with test video
- [ ] Authorize in browser
- [ ] Verify credentials.json created
- [ ] Confirm upload succeeded

### Phase 3: Automation Test (10 min)
- [ ] Jarvis uploads test video (no browser)
- [ ] Verify upload works autonomously
- [ ] Test title/description/tags/thumbnail
- [ ] Confirm video appears on channel

### Phase 4: Production (Ongoing)
- [ ] Real FutureNTech video #1
- [ ] Monitor for issues
- [ ] Iterate and improve

---

## Troubleshooting

### "Quota exceeded"
- Daily limit: 10,000 units
- 1 upload = ~1,600 units
- Wait until midnight Pacific time for reset
- Or request quota increase (usually approved)

### "Invalid credentials"
- Refresh token may have expired
- Re-run first auth process
- Check client_secrets.json is valid

### "Video processing failed"
- YouTube side issue
- Retry upload after 10 minutes
- Check video file is valid (playable locally)

### "Thumbnail rejected"
- Must be JPG/PNG
- Max 2MB file size
- Min 640x360, recommended 1280x720
- Aspect ratio 16:9

---

## Next Steps

1. **Michael:** Create Google Cloud project + OAuth credentials (30 min)
2. **Michael:** Run first authorized upload (10 min)
3. **Jarvis:** Test autonomous uploads (10 min)
4. **Together:** Produce first FutureNTech video end-to-end

**After this is done:** FutureNTech can launch! 🚀

---

## References

- YouTube Data API v3: https://developers.google.com/youtube/v3
- youtube-upload GitHub: https://github.com/tokland/youtube-upload
- OAuth 2.0 Setup: https://developers.google.com/youtube/v3/guides/auth/installed-apps
- Quota Limits: https://developers.google.com/youtube/v3/determine_quota_cost

---

**Status:** Ready to implement  
**Owner:** Michael (setup) + Jarvis (execution)  
**Timeline:** 40 minutes to full autonomy
