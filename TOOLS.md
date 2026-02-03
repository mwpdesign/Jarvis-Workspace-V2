# TOOLS.md - Environment Configuration

---

## Google Workspace (gog CLI v0.9.0)

### Accounts
- **Work (default)**: mike@clearhealthpass.com
- **Personal**: mike@mwparson.com
- **Default set via**: GOG_ACCOUNT env var

### Services Connected
Gmail, Calendar, Drive, Contacts, Docs, Sheets

### OAuth Project
sound-bit-485500-u5 (External, Testing mode)

---

## Email Organization

### A-Team Labels (auto-skip inbox)
Emails from key team members:
- John Cataldi (CEO)
- Brent Hill (CFO)
- Phil Gritzmaker (Doctor onboarding)
- Sil Bronder (Orders)
- Gavyn Parson
- Thomas Borowik
- Pat (Legal)

### 1 SNETWORK Labels (auto-skip inbox)
Work process emails:
- Orders
- IVRs
- Intake
- Onboarding

---

## Infrastructure

| Service | Purpose |
|---------|---------|
| **AWS** | Hosts Clear Health Pass Woundcare portal |
| **n8n** | Self-hosted on Hostinger (AI agent workflows) |
| **WordPress/DIVI** | Company websites |
| **ZohoCRM** | Sales and operations CRM |
| **Docker MCP** | Local development environment |

---

## Development Tools

- **Claude Desktop**: Primary AI assistant
- **Cursor IDE**: AI-assisted coding
- **Docker MCP**: Replaced Shrimp Task Manager (simpler, cheaper)
- **Claude Code**: CLI for agentic coding

---

## Voice & Transcription

- **Wispr Flow**: Voice dictation → Telegram task capture
- **Plaud AI**: Meeting transcription
  - Account: mwpdesign@gmail.com
  - Web: https://web.plaud.ai
  - Format: Excellent pre-formatted output (keep native format)
- **ElevenLabs** (sag CLI v0.2.2):
  - API Key: Configured in ~/.clawdbot/.env
  - Status: ✅ Working
  - Voice Clone: "FutureNTech" (Rt1MCyQ54DxjUUsampFD)
  - Purpose: FutureNTech video narration

## FutureNTech YouTube (2026-02-03)

- **Channel**: FutureNTech (@FutureNTech)
- **Account**: futurentechofficial@gmail.com
- **YouTube Upload**: ✅ Fully Configured
  - Tool: youtube-upload (in venv: ~/.local/venvs/futurentech/)
  - OAuth: Configured (MW Jarvis project)
  - Credentials: ~/.config/futurentech/credentials.json
  - Test Upload: https://www.youtube.com/watch?v=GYI8jovPLvk
  - Status: Autonomous - no browser auth needed
- **Image Generation**: ✅ nano-banana-pro (Gemini 3 Pro Image)
- **Video Editing**: ✅ ffmpeg installed
- **Launch Status**: 100% Ready

---

## Audio Production

- **DAW**: Logic Pro
- **Interface**: Universal Audio Apollo Twin Duo
- **Amp Modeling**: Kemper
- **Monitors**: Yamaha HS8 + subwoofer
- **Plugins**: Waves, SSL, Slate Digital

---

## Git / Backup

- **GitHub Repo**: https://github.com/mwpdesign/Jarvis-Workspace.git (private)
- **Auto-push**: Every commit backed up automatically

---

## File Protocols

| Type | Standard |
|------|----------|
| Clinical files | V3.2.3 naming protocol |
| Statistical analysis | Bland-Altman for regulatory submissions |
| Documentation | 24-72 hour requirements for distributor onboarding |

---

## Prompt Engineering

When Michael needs help creating prompts, use frameworks documented in:
`docs/PROMPT-ENGINEERING-FRAMEWORK.md`

Frameworks: RTF, TAG, RACEF

---

*Add environment-specific notes as you discover them.*