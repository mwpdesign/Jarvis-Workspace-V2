# FutureNTech Automated Video Production Pipeline

**Status:** Design Phase (Build 5.5a)  
**Created:** 2026-02-04  
**Purpose:** End-to-end automation of video production with human approval gates

---

## Overview

**The Vision:** Michael spends 10-15 minutes per week approving scripts. Everything else is automated.

**The Flow:**
```
New Submission → Research → Script → [APPROVAL] → Voice → Video → [APPROVAL] → Upload → Notify
```

**Approval Gates:** 2 checkpoints where Michael must explicitly approve before proceeding.

---

## Pipeline Stages

### Stage 1: Form Check (Daily Monitoring)

**Trigger:** Daily cron at 8 AM  
**Model:** Haiku (lightweight check)  
**Duration:** ~30 seconds

**What It Does:**
1. Reads Google Form responses sheet via `gog sheets` CLI
2. Checks for new submissions since last check
3. For each new submission, extracts:
   - Band name
   - Genre
   - Best track link
   - Bio (200 words max)
   - Social handles
   - Tech angle (how they record/promote)
   - Email
4. Creates a task in `tasks/queue.json`:
   ```json
   {
     "id": "TASK-XXX",
     "created": "ISO timestamp",
     "source": "futurentech-form",
     "request": "Research and evaluate [Band Name] for FutureNTech feature",
     "project": "futurentech",
     "priority": "medium",
     "status": "pending",
     "metadata": {
       "band_name": "Artist Name",
       "genre": "Genre",
       "track_link": "URL",
       "bio": "Short bio",
       "socials": {"instagram": "@handle", "tiktok": "@handle"},
       "tech_angle": "How they record/promote",
       "email": "contact@email.com",
       "submission_date": "ISO timestamp"
     }
   }
   ```

**Output:** New FutureNTech research tasks added to queue  
**File:** Logs submission to `projects/futurentech/submissions/YYYY-MM-DD.json`

**Cron Schedule:** `0 8 * * *` (daily at 8 AM)

---

### Stage 2: Artist Research

**Trigger:** Task-worker picks up FutureNTech research task  
**Model:** Sonnet (needs quality research)  
**Duration:** ~15-30 minutes

**What It Does:**
1. Reads task metadata for artist details
2. Listens to/analyzes the track link (via web_fetch if Spotify/Bandcamp)
3. Checks social media presence (follower counts, engagement)
4. Searches for existing coverage (Google, Reddit mentions)
5. Evaluates fit based on selection criteria:
   - Quality music (production doesn't have to be perfect)
   - Interesting story/angle
   - Active on social (they'll share the video)
   - Uses tech/AI in their process (bonus)
   - Under 50k monthly listeners (true discovery)
6. Writes comprehensive research notes to:
   - `projects/futurentech/research/[artist-name-slug].md`

**Research Note Template:**
```markdown
# [Band Name] - Research Notes

**Date:** YYYY-MM-DD  
**Submission Source:** Google Form  
**Evaluator:** Jarvis

## Quick Facts
- **Genre:** [Genre]
- **Location:** [Location if known]
- **Active Since:** [Year]
- **Monthly Listeners:** [Estimate]
- **Social Presence:** [Instagram/TikTok/YouTube follower counts]

## Music Analysis
- **Track Reviewed:** [Title] - [Link]
- **Production Quality:** [1-10 rating + notes]
- **Uniqueness:** [What stands out?]
- **Comparison:** [Sounds like X + Y]
- **Best Moments:** [Timestamps of hook/interesting parts]

## Story Angle
- **DIY Journey:** [How they got started]
- **Tech Stack:** [Recording setup, software, AI tools]
- **Growth Strategy:** [How they're building audience]
- **Unique Hook:** [What makes them interesting for video]

## Social Media Check
- **Instagram:** [@handle] - [follower count, engagement level]
- **TikTok:** [@handle] - [follower count, engagement level]
- **YouTube:** [Channel] - [subscriber count]
- **Bandcamp:** [Activity, sales, fans]

## FIT ASSESSMENT: ✅ GOOD FIT / ⚠️ MAYBE / ❌ PASS

**Reasoning:** [Why they're a good/bad fit for FutureNTech]

**Video Concept (if good fit):**
- **Title:** "[Working title]"
- **Hook:** [30-second opening concept]
- **Story Arc:** [3-5 key beats]
- **Tech Angle:** [What strategy/tool to highlight]
- **Call to Action:** [Where to send viewers]

## Next Steps
- [x] Research complete
- [ ] Script writing (if approved)
```

**Decision Logic:**
- ✅ **GOOD FIT** → Create next task: "Write script for [Artist]"
- ⚠️ **MAYBE** → Tag task as 'blocked', note "Needs Michael's input on fit"
- ❌ **PASS** → Mark task complete, send polite rejection email via gog gmail

**Output:** Research file saved, next task queued (if approved)

---

### Stage 3: Script Writing

**Trigger:** Task-worker picks up "write-script" task  
**Model:** Sonnet (creative writing, needs quality)  
**Duration:** ~30-45 minutes

**What It Does:**
1. Reads research notes for the artist
2. Writes 6-8 minute video script following FutureNTech format:
   - **Hook (0:00-0:30):** 30 seconds of artist's best moment
   - **Story (0:30-5:00):** Artist journey + tech/strategy angle
   - **Performance (5:00-7:00):** Full song snippet with visuals
   - **CTA (7:00-8:00):** Clear links to artist, submission form
3. Saves script to:
   - `projects/futurentech/scripts/[artist-name-slug]-script.md`

**Script Template:**
```markdown
# [Band Name] - Video Script

**Video Title:** [SEO-optimized title]  
**Target Length:** 6-8 minutes  
**Music Track:** [Song title] by [Band Name]  
**Date:** YYYY-MM-DD

---

## HOOK (0:00-0:30) - 30 seconds

[Visual: Artist's best 30-second moment - hook from song]

NARRATION:
"[Opening line that grabs attention and sets up the story]"

---

## INTRO (0:30-1:00) - 30 seconds

[Visual: Artist photo + social handles on screen]

NARRATION:
"[Who they are, what makes them interesting, why you should care]"

---

## STORY BEATS (1:00-5:00) - 4 minutes

### Beat 1: The Beginning (1:00-2:00)
[Visual: Early photos, bedroom studio shots]

NARRATION:
"[Origin story - how they started]"

### Beat 2: The Strategy (2:00-3:30)
[Visual: Screenshots of tools, social media, process]

NARRATION:
"[Tech angle - what they're doing that's smart/interesting]"

### Beat 3: The Growth (3:30-4:30)
[Visual: Growth charts, engagement metrics, fan reactions]

NARRATION:
"[Results - what's working, why it matters]"

### Beat 4: The Philosophy (4:30-5:00)
[Visual: Artist in their element]

NARRATION:
"[Their approach, mindset, what drives them]"

---

## PERFORMANCE (5:00-7:00) - 2 minutes

[Visual: Best 2 minutes of the featured song with lyrics/visualizer]

NARRATION (sparse, let the music shine):
"[Brief commentary during quieter moments]"

---

## CALL TO ACTION (7:00-8:00) - 1 minute

[Visual: Artist links on screen + submission form CTA]

NARRATION:
"[Wrap up the story, direct viewers to artist's links, invite submissions]"

"Go follow [Band] - links in description. If they blow up, you heard them here first."

"And if YOU'RE an unsigned artist with a story, submit your band at [form link]."

---

## SEO METADATA

**Title:** [60 chars max, keyword-rich]  
**Description:**
```
🎵 LISTEN TO [BAND NAME]:
Spotify: [link]
Apple Music: [link]
Bandcamp: [link]
Instagram: @[handle]
TikTok: @[handle]

[2-3 sentence summary of video]

📧 SUBMIT YOUR BAND:
[Google Form link]

#[BandName] #UnsignedBands #MusicDiscovery #AIMusic #IndieMusic
```

**Tags:** [15-20 relevant tags]

**Thumbnail Concept:** [Description of thumbnail visual]

---

## NOTES FOR PRODUCTION

**Music Clips Needed:**
- 0:00-0:30: [Best hook from song]
- 5:00-7:00: [Full 2-minute segment]

**Visuals Needed:**
- Artist photos (3-5 high-res)
- Social media screenshots
- Tech stack screenshots (if applicable)
- Performance footage (if available)

**B-Roll:**
- Generic music production shots
- Studio equipment
- Social media interfaces
- Streaming platform UIs

---

**Status:** ⏳ AWAITING MICHAEL'S APPROVAL  
**Approval Command:** "approve [artist-name] script"  
**Rejection Command:** "reject [artist-name] script [reason]"
```

**Decision Logic:**
- Create next task: "Generate voice for [Artist]"
- Set status: **'blocked'**
- Set note: "Awaiting Michael approval of script"

**Output:** Script file saved, next task queued but blocked

---

### Stage 4: Voice Generation (After Script Approval)

**Trigger:** Michael says "approve [artist] script" via Telegram  
**Model:** Sonnet (coordinates voice generation)  
**Duration:** ~5-10 minutes

**What It Does:**
1. Reads approved script from `projects/futurentech/scripts/[artist]-script.md`
2. Extracts narration text (strips stage directions, visuals notes)
3. Splits narration into logical chunks (by section: hook, intro, beats, CTA)
4. Generates voice for each chunk using ElevenLabs `sag` CLI:
   ```bash
   sag "narration text" \
     --voice-id Rt1MCyQ54DxjUUsampFD \
     --output-file projects/futurentech/audio/[artist]-[section].mp3
   ```
5. Concatenates audio chunks into full narration:
   ```bash
   ffmpeg -i "concat:section1.mp3|section2.mp3|..." \
     -acodec copy projects/futurentech/audio/[artist]-narration-full.mp3
   ```
6. Logs audio generation to work log

**Voice Clone Details:**
- **Voice ID:** Rt1MCyQ54DxjUUsampFD (FutureNTech - Michael's voice)
- **Service:** ElevenLabs via `sag` CLI
- **Quality:** High (optimized for video narration)

**Decision Logic:**
- Create next task: "Produce video for [Artist]"
- Set status: **'pending'**

**Output:** 
- Audio files: `projects/futurentech/audio/[artist]-*.mp3`
- Full narration: `projects/futurentech/audio/[artist]-narration-full.mp3`

---

### Stage 5: Video Production

**Trigger:** Task-worker picks up "produce-video" task  
**Model:** Sonnet (complex ffmpeg operations)  
**Duration:** ~20-40 minutes

**What It Does:**
1. Reads script to extract:
   - Timing cues for each section
   - Visual descriptions
   - Music clip timestamps
2. Gathers assets:
   - Narration audio: `projects/futurentech/audio/[artist]-narration-full.mp3`
   - Music track: Downloads from Bandcamp/Spotify (if publicly available)
   - Artist images: Downloads from social media
   - B-roll: Uses stock footage library or AI-generated visuals
3. Creates video using ffmpeg:
   ```bash
   # Basic structure (simplified)
   ffmpeg -loop 1 -i thumbnail.jpg -i narration.mp3 -i music.mp3 \
     -filter_complex "[0:v]scale=1920:1080,fade=in:0:30,fade=out:720:30[v]; \
                      [1:a]volume=1.0[narr]; \
                      [2:a]volume=0.3[music]; \
                      [narr][music]amix=inputs=2[a]" \
     -map "[v]" -map "[a]" \
     -c:v libx264 -preset medium -crf 23 \
     -c:a aac -b:a 192k \
     -t 480 \
     output.mp4
   ```
4. Adds text overlays for:
   - Artist name + social handles
   - Section titles
   - Call-to-action text
5. Burns in captions/subtitles (optional, for accessibility)
6. Exports final video to:
   - `projects/futurentech/videos/[artist-name-slug].mp4`
7. Generates thumbnail image (AI or template-based)
8. Creates video metadata file:
   - `projects/futurentech/videos/[artist-name-slug]-metadata.json`

**Video Specs:**
- **Resolution:** 1920x1080 (1080p)
- **Frame Rate:** 30fps
- **Codec:** H.264 (x264)
- **Audio:** AAC, 192kbps
- **Length:** 6-8 minutes target
- **File Size:** ~200-400MB

**Decision Logic:**
- Create next task: "Upload video for [Artist]"
- Set status: **'blocked'**
- Set note: "Awaiting Michael final review before upload"

**Output:**
- Video file: `projects/futurentech/videos/[artist].mp4`
- Thumbnail: `projects/futurentech/videos/[artist]-thumb.jpg`
- Metadata: `projects/futurentech/videos/[artist]-metadata.json`

---

### Stage 6: Upload (After Final Review)

**Trigger:** Michael says "upload [artist] video" via Telegram  
**Model:** Haiku (simple upload operation)  
**Duration:** ~5-10 minutes

**What It Does:**
1. Reads metadata file for title, description, tags
2. Uploads video to YouTube using `youtube-upload` CLI:
   ```bash
   youtube-upload \
     --title="[Title from metadata]" \
     --description="[Description from script]" \
     --category="Music" \
     --tags="[Tags from metadata]" \
     --thumbnail="projects/futurentech/videos/[artist]-thumb.jpg" \
     --privacy="public" \
     --credentials-file="~/.config/futurentech/credentials.json" \
     projects/futurentech/videos/[artist].mp4
   ```
3. Captures upload response (video ID, URL)
4. Sends confirmation to Michael via Telegram:
   ```
   ✅ FutureNTech Upload Complete!
   
   🎵 [Artist Name]
   📹 [Video Title]
   🔗 https://youtube.com/watch?v=[VIDEO_ID]
   
   Video is now live!
   ```
5. Logs upload to:
   - `projects/futurentech/uploads/YYYY-MM-DD-uploads.json`
   - `memory/work-log.json`
6. Sends thank-you email to artist via gog gmail:
   ```
   Subject: Your FutureNTech Feature is Live! 🎉
   
   Hey [Artist],
   
   Your feature video is now live on FutureNTech!
   
   🔗 Watch it here: [YouTube link]
   
   Please share it with your fans - every view helps us discover 
   more amazing artists like you.
   
   Thanks for being part of FutureNTech!
   
   - Jarvis
   FutureNTech Team
   ```

**Decision Logic:**
- Mark task as **'complete'**
- Add upload URL to task result_file
- Archive all related files

**Output:**
- YouTube video URL
- Telegram confirmation to Michael
- Thank-you email to artist
- Upload log entry

---

## Approval Gates (Critical!)

### Gate 1: Script Approval

**Location:** After Stage 3 (Script Writing)  
**Blocker:** Task status set to 'blocked'  
**Unblock Command:** "approve [artist] script"  
**Alternate:** "reject [artist] script [reason]"

**Michael's Actions:**
1. Receives notification: "Script ready for [Artist] - review at [file path]"
2. Reads script file
3. Either approves (proceeds to voice) or requests changes

**Time Estimate:** 5-10 minutes per script

---

### Gate 2: Final Video Review

**Location:** After Stage 5 (Video Production)  
**Blocker:** Task status set to 'blocked'  
**Unblock Command:** "upload [artist] video"  
**Alternate:** "reject [artist] video [reason]"

**Michael's Actions:**
1. Receives notification: "Video ready for [Artist] - preview at [file path]"
2. Watches video (6-8 min)
3. Either approves upload or requests changes

**Time Estimate:** 10-15 minutes per video (watch + decide)

---

## File Structure

```
projects/futurentech/
├── PROJECT.md                          # Main project documentation
├── submissions/
│   └── YYYY-MM-DD.json                # Daily form submission logs
├── research/
│   └── [artist-name-slug].md          # Research notes per artist
├── scripts/
│   └── [artist-name-slug]-script.md   # Video scripts
├── audio/
│   ├── [artist]-section-*.mp3         # Individual narration chunks
│   └── [artist]-narration-full.mp3    # Full narration
├── videos/
│   ├── [artist-name-slug].mp4         # Final video files
│   ├── [artist-name-slug]-thumb.jpg   # Thumbnails
│   └── [artist-name-slug]-metadata.json # Upload metadata
├── uploads/
│   └── YYYY-MM-DD-uploads.json        # Daily upload logs
└── archive/
    └── YYYY-MM/                        # Archived projects (monthly)
```

---

## Tools & Dependencies

| Tool | Purpose | Install/Access |
|------|---------|----------------|
| **gog sheets** | Read Google Form responses | Already installed |
| **gog gmail** | Send emails to artists | Already installed |
| **web_fetch** | Analyze Spotify/Bandcamp links | Built-in |
| **web_search** | Research artist coverage | Built-in |
| **sag** (ElevenLabs CLI) | Generate AI voice narration | Already installed |
| **ffmpeg** | Video editing and production | Already installed |
| **youtube-upload** | Upload to YouTube | Already installed |
| **nano-banana-pro** | Generate AI visuals (optional) | Already installed |

**Voice Clone:** FutureNTech (Rt1MCyQ54DxjUUsampFD)  
**YouTube Credentials:** ~/.config/futurentech/credentials.json  
**Email Account:** futurentechofficial@gmail.com (via gog)

---

## Estimated Timelines

| Stage | Duration | Model | Cost/Video |
|-------|----------|-------|------------|
| Form Check | 30 sec | Haiku | $0.01 |
| Research | 15-30 min | Sonnet | $0.15 |
| Script Writing | 30-45 min | Sonnet | $0.20 |
| Voice Generation | 5-10 min | Sonnet | $0.05 |
| Video Production | 20-40 min | Sonnet | $0.20 |
| Upload | 5-10 min | Haiku | $0.01 |
| **Total** | **~2 hours** | | **~$0.62/video** |

**Human Time (Michael):** ~15-25 minutes per video (script review + final approval)

---

## Weekly Throughput Estimate

**Assumptions:**
- Task-worker runs every 2 hours (12x/day)
- 1 task processed per run
- Research → Script → Voice → Video = 4 tasks
- With approval delays, ~1 video/week is realistic

**Scaling:**
- To hit 2-3 videos/week, need faster approval turnaround
- To hit 5+ videos/week, need parallel task workers (multiple queues)

---

## Error Handling

**Common Failure Points:**

1. **Form Check:** Google Sheets API timeout
   - **Recovery:** Retry on next cycle, log error

2. **Research:** Artist link is broken/deleted
   - **Recovery:** Mark as 'blocked', notify Michael

3. **Voice Generation:** ElevenLabs API rate limit
   - **Recovery:** Retry after 1 hour, queue for later

4. **Video Production:** ffmpeg fails (missing assets)
   - **Recovery:** Log error, mark as 'blocked', notify Michael

5. **Upload:** YouTube API quota exceeded
   - **Recovery:** Queue for next day, notify Michael

**All errors logged to:** `memory/work-log.json` and `projects/futurentech/errors.log`

---

## Success Metrics

**Pipeline Health:**
- ✅ 90%+ form checks succeed
- ✅ 80%+ research tasks complete without blocking
- ✅ 95%+ scripts approved on first draft
- ✅ 90%+ videos approved without major revisions
- ✅ 99%+ uploads succeed

**Content Output:**
- **Month 1:** 4 videos published
- **Month 2:** 8 videos published (2/week)
- **Month 3:** 12 videos published (3/week)
- **Month 4+:** 12-16 videos/month (consistent output)

**Time Savings:**
- Manual process: ~4-6 hours per video
- Automated process: ~20 minutes of Michael's time per video
- **Efficiency gain:** 12-18x faster

---

## Future Enhancements

**Phase 2 (Month 2-3):**
- Automated thumbnail generation (AI-based)
- Automated artist outreach (Reddit/Facebook DM campaigns)
- A/B testing system for titles/thumbnails
- Analytics dashboard (view trends, engagement metrics)

**Phase 3 (Month 4-6):**
- Multi-platform distribution (TikTok clips, Instagram Reels)
- Automated social media posting
- Artist follow-up emails (performance reports)
- Community management (comment responses)

**Phase 4 (Month 6+):**
- Live show coordination (if hosting events)
- Affiliate link insertion and tracking
- Sponsorship management
- Podcast episode production

---

## Security & Privacy

**Artist Data:**
- Submission emails stored securely
- No public sharing of contact info
- Artists can request removal at any time

**Content Rights:**
- Only feature music with artist permission (implicit via submission)
- Always credit artist + link to their platforms
- Fair use for music clips (30-60 seconds max)

**YouTube Account:**
- OAuth credentials stored in ~/.config/futurentech/
- Never commit credentials to git
- Refresh tokens managed by youtube-upload CLI

---

## Approval Gate Implementation

### Voice Task Capture Integration

When Michael says via Telegram:
- "approve [artist] script" → Unblock voice generation task
- "reject [artist] script" → Mark script task as rejected, notify artist
- "upload [artist] video" → Unblock upload task
- "reject [artist] video" → Mark video task as rejected, request changes

**Jarvis should:**
1. Detect approval/rejection commands in Telegram
2. Find matching blocked task in `tasks/queue.json`
3. Update task status (pending if approved, rejected if not)
4. Confirm action to Michael

**Example Confirmation:**
```
✅ Script approved for [Artist]
Voice generation starting...
```

---

## Notes for Implementation

**Next Steps (Build 5.5b):**
1. Create form-check cron job (daily 8 AM, Haiku)
2. Update task-worker to recognize FutureNTech task types
3. Implement approval command detection in voice task capture
4. Test full pipeline with one artist (dry run)
5. Refine based on first production run

**Dependencies:**
- All tools already installed ✅
- YouTube credentials configured ✅
- Voice clone ready ✅
- File structure needs creation (easy)

**Risk Mitigation:**
- Always keep raw files (audio, video assets)
- Version control scripts (git commit after each script)
- Manual approval gates prevent accidental publishing
- Error logs for debugging

---

**Status:** Design Complete ✅  
**Ready for:** Implementation (Build 5.5b)  
**Estimated Implementation Time:** 4-6 hours

---

*Created: 2026-02-04*  
*Part of Build 5.5a - FutureNTech Pipeline Design*
