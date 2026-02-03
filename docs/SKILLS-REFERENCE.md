# Skills Reference Guide

Complete guide to all Clawdbot skills available in the Telegram menu.

**How to use:**
1. **Natural language** (recommended): Just ask - I'll auto-load the right skill
2. **Explicit invocation**: Tap skill from menu, then describe what you want
3. **Direct request**: Say "Use the [skill-name] skill for this request"

---

## 📧 Communication & Messaging

### **gog** - Google Workspace
Access Gmail, Calendar, Drive, Contacts, Docs, Sheets
- **Example**: "Check my work email" / "Add calendar event tomorrow 2pm"
- **Accounts**: mike@clearhealthpass.com (work), mike@mwparson.com (personal)

### **himalaya** - Email CLI (IMAP/SMTP)
Manage emails via IMAP/SMTP (alternative to gog)
- **Example**: "List emails from last week" / "Send email to..."

### **imsg** - iMessage/SMS
List chats, send messages, view history (macOS only)
- **Example**: "Send iMessage to..." / "Show recent texts"

### **wacli** - WhatsApp
Send WhatsApp messages, search/sync history
- **Example**: "Send WhatsApp to..." / "Search WhatsApp for..."

### **slack** - Slack Integration
React to messages, pin/unpin items in Slack channels/DMs
- **Example**: "React to Slack message with 👍" / "Pin this in #channel"

### **bluebubbles** - BlueBubbles Integration
Build/update BlueBubbles external channel plugin for Clawdbot
- **Use case**: iMessage integration via BlueBubbles server

---

## 📝 Notes & Tasks

### **apple-notes** - Apple Notes
Create, view, edit, delete, search Apple Notes via `memo` CLI
- **Example**: "Add note: Meeting notes..." / "Search notes for..."

### **bear-notes** - Bear Notes
Create, search, manage Bear notes via grizzly CLI
- **Example**: "Create Bear note..." / "Search Bear for..."

### **obsidian** - Obsidian
Work with Obsidian vaults (Markdown notes) and automate via obsidian-cli
- **Example**: "Create Obsidian note..." / "Search vault for..."

### **notion** - Notion
Create/manage Notion pages, databases, and blocks
- **Example**: "Add to Notion database..." / "Create Notion page..."

### **things-mac** - Things 3
Add/update tasks, read/search from Things database (macOS)
- **Example**: "Add task to Things inbox" / "Show today's tasks"

### **apple-reminders** - Apple Reminders
List, add, edit, complete, delete reminders via `remindctl` CLI
- **Example**: "Add reminder to buy milk" / "Show overdue reminders"

---

## 🎵 Audio & Music

### **blucli** - BluOS Control
Control BluOS speakers (discovery, playback, grouping, volume)
- **Example**: "Play music on BluOS" / "Set volume to 50%"

### **sonoscli** - Sonos Control
Discover/control Sonos speakers (status, play, volume, grouping)
- **Example**: "Play on Sonos living room" / "Group kitchen speakers"

### **songsee** - Audio Visualization
Generate spectrograms and feature visualizations from audio files
- **Example**: "Create spectrogram from song.mp3"

### **openai-whisper** - Local Speech-to-Text
Transcribe audio using local Whisper CLI (no API key)
- **Example**: "Transcribe recording.mp3"

### **openai-whisper-api** - Cloud Speech-to-Text
Transcribe audio via OpenAI Whisper API
- **Example**: "Transcribe this audio file using API"

---

## 🎥 Video & Images

### **video-frames** - Video Frame Extraction
Extract frames or short clips from videos using ffmpeg
- **Example**: "Extract frame at 1:30 from video.mp4"

### **openai-image-gen** - Image Generation
Batch-generate images via OpenAI Images API with random prompt sampler
- **Example**: "Generate 5 images of..."

### **nano-banana-pro** - Image Creation/Editing
Generate/edit images with Gemini 3 Pro Image (text-to-image + image-to-image)
- **Example**: "Create 4K image of..." / "Edit this image to..."

### **gifgrep** - GIF Search
Search GIF providers, download results, extract stills/sheets
- **Example**: "Find GIF of..." / "Download reaction GIFs"

### **camsnap** - Camera Capture
Capture frames or clips from RTSP/ONVIF cameras
- **Example**: "Capture frame from camera" / "Record 30 second clip"

---

## 🏠 Smart Home

### **openhue** - Philips Hue
Control Philips Hue lights and scenes via OpenHue CLI
- **Example**: "Turn on living room lights" / "Set bedroom to 50%"

### **eightctl** - Eight Sleep
Control Eight Sleep pods (status, temperature, alarms, schedules)
- **Example**: "Set bed temperature to 70" / "Check sleep schedule"

---

## 🛠️ Development & AI

### **github** - GitHub CLI
Interact with GitHub: issues, PRs, CI runs, API queries via `gh` CLI
- **Example**: "List open PRs" / "Create issue for..."

### **coding-agent** - Coding Assistants
Run Codex CLI, Claude Code, OpenCode, or Pi Coding Agent
- **Example**: "Run Codex to build..." / "Use Claude Code for..."

### **claude-code-wingman** - Claude Code Dispatch
Dispatch coding tasks via tmux for work-paid coding while keeping API costs low
- **Example**: "Send to Claude Code: Build feature X"

### **oracle** - Oracle CLI
Best practices for oracle CLI (prompt + file bundling, engines, sessions)
- **Example**: "Bundle files for oracle prompt" / "Run oracle session"

### **mcporter** - MCP Servers
List, configure, auth, and call MCP servers/tools (HTTP or stdio)
- **Example**: "List MCP servers" / "Call MCP tool..."

### **gemini** - Gemini CLI
One-shot Q&A, summaries, and generation using Gemini
- **Example**: "Ask Gemini: ..." / "Summarize with Gemini"

### **gemini-deep-research** - Deep Research
Complex, long-running research using Gemini Deep Research Agent
- **Example**: "Research: competitive analysis of..." / "Deep dive into..."

---

## 📄 Documents & Files

### **nano-pdf** - PDF Editing
Edit PDFs with natural-language instructions
- **Example**: "Remove page 3 from document.pdf" / "Merge these PDFs"

### **summarize** - Content Extraction
Summarize/extract text from URLs, podcasts, local files
- **Example**: "Summarize this YouTube video" / "Extract text from podcast"

### **youtube-watcher** - YouTube Transcripts
Fetch and read transcripts from YouTube videos
- **Example**: "Get transcript from [YouTube URL]" / "Summarize this video"

---

## 🔒 Security & Secrets

### **1password** - 1Password CLI
Set up/use 1Password CLI (op) for reading/injecting/running secrets
- **Example**: "Get password for..." / "Run command with 1Password secret"

---

## 🌐 Web & Social

### **bird** - X/Twitter CLI
Read, search, post, and engage on X/Twitter via cookies
- **Example**: "Post tweet: ..." / "Search Twitter for..."

### **blogwatcher** - Blog/RSS Monitoring
Monitor blogs and RSS/Atom feeds for updates
- **Example**: "Watch blog for updates" / "Check RSS feed"

### **ordercli** - Food Delivery
Check Foodora past orders and active order status
- **Example**: "Check my last Foodora order"

---

## ☁️ Weather & Location

### **weather** - Weather Forecasts
Get current weather and forecasts (no API key required)
- **Example**: "Weather in Indianapolis" / "7-day forecast"

---

## 🎯 Productivity & Automation

### **peekaboo** - macOS UI Automation
Capture and automate macOS UI with Peekaboo CLI
- **Example**: "Capture screenshot of..." / "Automate UI workflow"

### **clawdhub** - Skill Management
Search, install, update, publish AgentSkills from clawdhub.com
- **Example**: "Install skill from ClawdHub" / "Update all skills"

### **skill-creator** - Skill Development
Create or update AgentSkills (design, structure, package)
- **Example**: "Create new skill for..." / "Update skill structure"

---

## 🧠 Learning & Memory

### **self-improvement** - Learning Capture
Capture learnings, errors, corrections for continuous improvement
- **Example**: "Log this learning" / "Create skill from this solution"

### **session-logs** - Session Search
Search and analyze your own session logs (older conversations)
- **Example**: "Search logs for when I discussed..." / "Find conversation about..."

### **auto-updater** - System Updates
Automatically update Clawdbot and installed skills once daily via cron
- **Example**: Runs automatically - no manual invocation needed

---

## ✍️ Content & Writing

### **humanizer** - AI Writing Cleanup
Remove signs of AI-generated writing from text
- **Example**: "Humanize this text: ..." / "Make this sound more natural"

---

## 🎸 Music Projects (Custom)

### **FutureNTech YouTube Channel**
Active project tracking for your music discovery YouTube channel
- Tracked in `projects/futurentech/PROJECT.md`
- Automatic monitoring via HEARTBEAT.md

### **Altering Gray Band**
Release tracking (Feb 21, 2026 release / Feb 28 show)
- Tracked in daily memory files

---

## How Skills Are Loaded

**Automatic detection:**
I scan your message for keywords and context, then load the appropriate skill automatically.

**Manual selection:**
1. Tap skill from Telegram menu
2. Skill command (e.g., `/openhue`) appears
3. Type your request
4. I load that skill's instructions

**Direct invocation:**
Say "Use the [skill-name] skill" anywhere in your message.

---

## Most Useful for You

Based on your workflow (from USER.md and AGENTS.md):

| Skill | Why You'll Use It |
|-------|-------------------|
| **gog** | Gmail/Calendar/Drive access for both work and personal |
| **things-mac** | Task management (Things 3 integration) |
| **apple-notes** | Quick note capture |
| **github** | GitHub repo management |
| **weather** | Indianapolis forecast (in morning briefings) |
| **summarize** | Extract text from URLs/videos |
| **youtube-watcher** | Video transcript analysis |
| **openhue** | Control Hue lights (if you have them) |
| **coding-agent** | Delegate coding tasks |
| **nano-banana-pro** | Image generation/editing (Altering Gray artwork?) |

---

## Pro Tips

1. **Just ask naturally** - Don't overthink the menu. Say what you want, I'll find the right skill.
2. **Combine skills** - I can use multiple skills in one request if needed.
3. **Browse the menu** - Great for discovering capabilities you didn't know existed.
4. **Check skill docs** - Each skill has a SKILL.md file with detailed instructions.

---

*Generated: 2026-02-01*
*Skills count: 44 installed*
