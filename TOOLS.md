# TOOLS.md - Environment Configuration

---

## OpenClaw Model IDs (Build 4: Pure Anthropic Stack - 2026-02-04)

**3-Tier Anthropic Architecture:**
- **🔴 Opus (Critical):** `anthropic/claude-opus-4-5` (alias: `opus`) - Strategic decisions, high-stakes work
- **⚪ Sonnet (Heavy):** `anthropic/claude-sonnet-4-5-20250929` (default) - Research, task execution, briefings
- **🔵 Haiku (Lightweight):** `anthropic/claude-haiku-3-5` (alias: `haiku`) - Email checks, git ops, simple tasks

**For Cron Jobs:**
- Lightweight tasks (email, git, archive) → `anthropic/claude-haiku-3-5`
- Heavy work (research, briefings, consolidation) → `anthropic/claude-sonnet-4-5-20250929` or omit (uses default)

**External Providers (DEPRECATED in Build 4):**
- ~~`openai/gpt-4o-mini` (Mini)~~ - Replaced by Haiku
- ~~`google/gemini-1.5-flash` (Flash)~~ - Replaced by Haiku

**Why Pure Anthropic:**
- OAuth-only auth (more secure, no API keys)
- No external provider dependencies
- Consistent behavior across all models
- Haiku faster and more reliable than Mini/Flash for simple tasks

---

## OpenClaw Config Hardening (2026-02-04)

**Context Management:**
- **Context limit:** 100K tokens (down from 400K default)
- **Impact:** Estimated 60-75% reduction in per-turn token costs
- **Rationale:** Prevents runaway costs from unbounded context accumulation

**Memory Protection:**
- **Memory flush:** Enabled at 4K tokens before compaction
- **Safeguard:** Agent saves critical work to disk before compaction wipes context
- **Prompt:** Writes decisions, tasks, context to `memory/YYYY-MM-DD.md`

**Reliability:**
- **Fallback chain:** mini → opus → bedrock-sonnet (if primary rate-limited)
- **Cron isolation:** All 7 jobs run as isolated sessions (not main)
- **Cost impact:** ~$0.15/M for cheap tasks (mini), ~$3/M for standard (sonnet)

**Real-time Logging:**
- All meaningful work logged to `memory/work-log.json` immediately
- Never batch writes — compaction can happen anytime
- See `docs/WORK-LOG.md` for logging standards

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

### FutureNTech Google Sheets (2026-02-04)

**Outreach Tracking Sheet** (OUTBOUND - emails we send):
- **URL**: https://docs.google.com/spreadsheets/d/1Dq2KDX-ktde3JMybQVydAfFesaf-slxAm77wTZNubnU/edit
- **Sheet Name**: futurentech-outreach
- **Columns**: Date | Platform | Artist/Band | Location | Genre | Link | Status | Notes
- **Status Values**: To Contact, Contacted, Interested, Declined, No Response
- **Access**: gog sheets via futurentechofficial@gmail.com
- **Purpose**: Track every outreach email sent to bands we discover

**Form Responses Sheet** (INBOUND - bands submit to us):
- **URL**: https://docs.google.com/spreadsheets/d/1hD5OPvNMbyYufqqB_fcXCieRWgspzK-ZVl-HxJDTVaw
- **Auto-populated**: When bands submit via Google Form
- **Monitored by**: futurentech-form-check cron (daily 8 AM)
- **Access**: gog sheets via futurentechofficial@gmail.com
- **Purpose**: Inbound submissions → auto-create research tasks

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