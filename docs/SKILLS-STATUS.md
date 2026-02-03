# Skills Status Report - 2026-01-30

## ✅ Fully Working (Configured & Ready)

| Skill | Status | Notes |
|-------|--------|-------|
| **gog** | ✅ Working | Google Workspace (Gmail, Calendar, Drive) - Both accounts connected |
| **imsg** | ✅ Working | iMessage/SMS CLI (permissions may need granting) |
| **gemini** | ✅ Working | API key configured |
| **oracle** | ✅ Installed | AI prompt bundling tool |
| **nano-pdf** | ✅ Installed | PDF editing with AI |
| **nano-banana-pro** | ✅ Installed | Gemini image generation |
| **youtube-watcher** | ✅ Working | Fetch YouTube transcripts |
| **weather** | ⚠️ Needs binary | CLI not found (easy fix) |
| **session-logs** | ✅ Working | Search conversation history |
| **summarize** | ✅ Working | Summarize URLs/podcasts/videos |
| **video-frames** | ✅ Working | Extract frames from video (ffmpeg) |
| **auto-updater** | ✅ Working | Daily skill/clawdbot updates |
| **humanizer** | ✅ Working | Remove AI writing patterns |
| **self-improving-agent** | ✅ Working | Learning/corrections tracking |
| **claude-code-wingman** | ✅ Working | Dispatch coding to tmux sessions |

---

## ⚠️ Needs Configuration (Installed but Not Set Up)

| Skill | What's Needed | Priority |
|-------|---------------|----------|
| **bird** (X/Twitter) | Browser cookie auth setup | 🔥 HIGH - For war room competitor research |
| **things-mac** | Set THINGSDB path to Things database | 🔥 HIGH - Task management |
| **1password** | Sign in with `op signin` | Medium - Secrets management |
| **github** | Install `gh` CLI + auth | Medium - Repository management |
| **himalaya** | Configure email accounts | Medium - IMAP/SMTP email |
| **apple-notes** (memo) | Usage check | Low - Alternative notes |
| **apple-reminders** | Test permissions | Low - Alternative reminders |
| **wacli** | WhatsApp setup | Low - Unless you use WhatsApp |

---

## ❓ Needs API Keys / External Services

| Skill | What's Needed | Notes |
|-------|---------------|-------|
| **openai-whisper-api** | Already have OPENAI_API_KEY ✅ | Ready to use |
| **openai-image-gen** | Already have OPENAI_API_KEY ✅ | DALL-E batch generation |
| **openhue** | Philips Hue bridge IP/API key | Only if you have Hue lights |
| **eightctl** | Eight Sleep account | Only if you have Eight Sleep |
| **sonoscli** | Sonos speakers on network | Only if you have Sonos |
| **blucli** | BluOS devices | Only if you have BluOS devices |
| **sag** (ElevenLabs TTS) | ElevenLabs API key | Voice generation |
| **slack** | Slack workspace token | If you use Slack |
| **discord** | Discord bot token | If you use Discord |
| **notion** | Notion integration token | If you use Notion |
| **obsidian** | Vault path configuration | If you use Obsidian |
| **trello** | Trello API key | If you use Trello |

---

## 🚫 Not Applicable / Don't Need

| Skill | Reason |
|-------|--------|
| **bluebubbles** | iMessage server alternative (have imsg) |
| **camsnap** | RTSP/ONVIF cameras (don't have) |
| **peekaboo** | macOS UI automation (advanced use) |
| **voice-call** | Phone call automation (advanced) |
| **spotify-player** | Spotify terminal player (nice-to-have) |
| **food-order** | Foodora/Deliveroo order tracking (niche) |
| **blogwatcher** | RSS feed monitoring (can add later) |
| **gifgrep** | GIF search/download (nice-to-have) |
| **songsee** | Audio spectrogram generation (music production) |

---

## 🔥 PRIORITY SETUP TASKS

### 1. bird (X/Twitter) - HIGH PRIORITY
**Why:** War room competitor research, industry monitoring
**Setup:**
```bash
# Test connection
bird whoami --cookie-source chrome

# If it works, make permanent
mkdir -p ~/.config/bird
echo '{"cookieSource": ["chrome"]}' > ~/.config/bird/config.json5
```

### 2. things-mac - HIGH PRIORITY
**Why:** Native macOS task management integration
**Setup:**
```bash
# Find Things database
ls ~/Library/Group\ Containers/*/ThingsData*

# Set in environment or test with --db flag
things show today --db <path-to-ThingsData>
```

### 3. github (gh CLI) - MEDIUM PRIORITY
**Why:** Repository management, issue tracking
**Setup:**
```bash
brew install gh
gh auth login
```

### 4. 1Password - MEDIUM PRIORITY
**Why:** Secure secrets management
**Setup:**
```bash
op signin
# Then add to shell profile for persistence
```

### 5. weather CLI - EASY WIN
**Why:** Morning briefing needs weather data
**Setup:**
```bash
# Install weather CLI
brew install weather
# Or use wttr.in directly (already working via curl)
```

---

## Summary

**Working:** 15+ skills ready to use
**Need Config:** 8 skills (4 high priority)
**Need Keys:** Most already have keys (OpenAI, Gemini)
**Optional:** 15+ skills for specific hardware/services

**Next Steps:**
1. Set up bird for X/Twitter research
2. Configure Things database path
3. Install gh CLI for GitHub
4. Test 1Password signin
5. Install weather CLI or use wttr.in wrapper
