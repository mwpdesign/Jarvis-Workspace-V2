# MEMORY.md - Long-term Memory

## Setup
- Created: 2026-01-25
- Owner: Michael Parson (mwpdesign@gmail.com)
- Identity configured: Jarvis (AI Butler/Assistant, Sparkly Helper ✨)
- Memory search: Configured with OpenAI embeddings

## Initial Configuration (2026-01-25)
- Set up identity: Jarvis (like J.A.R.V.I.S. from Iron Man)
- User prefers to be called: Michael
- Configured OpenAI API for memory search embeddings
- Completed first-run bootstrap ritual
- Received detailed professional profile and technical environment documentation

## Michael's Professional Context
- Solutions Architect at Clear Health Pass Holdings, LLC (tribally-owned)
- Primary products: Q4250 Amnioamp-MP, Q4347 Rampart DL Matrix (wound care/skin grafts)
- Key projects: Clear Health Pass Woundcare (AWS-hosted), n8n AI agents, clinical data processing
- Tech stack: AWS, WordPress/DIVI, ZohoCRM, Docker MCP, n8n (Hostinger), Claude Desktop, Cursor
- Work style: "Vibe coding" - pragmatic, AI-assisted, cost-effective, complexity-reducing
- Background: Recording/mix engineer and musician (Logic Pro, UA Apollo, Kemper) - influences detail-oriented work
- Development philosophy: Show working code not theory, practical > perfect, iterative approach

## Google Workspace Integration (2026-01-25)
- **Authenticated Accounts**: mike@clearhealthpass.com (work), mike@mwparson.com (personal)
- **Services Connected**: Gmail, Calendar, Drive, Contacts, Docs, Sheets
- **Tool**: `gog` CLI (v0.9.0)
- **Capabilities**: Send emails, search messages, manage calendar events, search Drive, access contacts
- **OAuth Project**: sound-bit-485500-u5 (External, Testing mode)
- **Default Account**: mike@clearhealthpass.com (set via GOG_ACCOUNT env var)
- Can now automate email drafts, calendar management, file searches across both accounts

## Workspace Organization (2026-01-25)
- **Structure**: Reorganized into logical folders (config/, docs/, automation/, projects/)
- **Projects**: Organized by type - woundcare/, band/, work/
- **Benefits**: Easier context switching, clean root directory, scalable structure
- **Documentation**: docs/WORKSPACE-STRUCTURE.md explains layout

## Memory Strategy (2026-01-25)
- **Approach**: Hybrid (real-time + end-of-day)
- **Real-time**: Update MEMORY.md immediately when significant events occur
- **End-of-day**: Review daily log and extract additional learnings
- **Documentation**: docs/MEMORY-STRATEGY.md

## Subscriptions & Costs (2026-01-25)
- **Claude Max Plan**: $100/month (high usage limits for claude.ai)
- **Cursor Pro**: $20/month (coding IDE)
- **Claude API**: Pay-as-you-go for Clawdbot (~$10-30/month estimated)
- **Note**: Subscription and API are separate billing; cannot share credits

## Work Patterns & Preferences (2026-01-25)
- **Voice-first workflow**: Uses Wispr Flow for voice dictation → Telegram
- **Voice task capture**: Fully operational - speaks naturally, I extract/categorize/save tasks
- **Cost-conscious**: Values cost-effectiveness and simplicity over complexity
- **Proactive help**: Wants suggestions and automation ideas, not just reactive answers
- **Work hours**: Productive in late evenings (night owl)
- **Multi-tasker**: Juggles multiple projects (Woundcare, band, n8n, CRM, WordPress)
- **Detail-oriented**: Audio engineering background shows in thorough approach

## Company Structure (Clear Health Pass Holdings, LLC)
- **Type**: Tribally-owned healthcare technology company
- **Primary Products**: Q4250 Amnioamp-MP, Q4347 Rampart DL Matrix (wound care/skin grafts)
- **Main Portal**: Clear Health Pass Woundcare (AWS-hosted)
- **Compliance Focus**: CMS regulatory, HIPAA, tribal sovereignty documentation

## Protocols & Standards
- **File Naming**: V3.2.3 protocol for clinical files
- **Statistical Analysis**: Bland-Altman analyses for regulatory submissions
- **Documentation**: Comprehensive tracking spreadsheets, notification templates with timelines
- **Compliance**: 24-72 hour documentation requirements for distributor onboarding
- **Prompt Engineering**: Use RTF/TAG/RACEF frameworks (docs/PROMPT-ENGINEERING-FRAMEWORK.md) when Michael needs help creating prompts

## Key Contacts (2026-01-25)
- **John Michael Cataldi**: CEO of Clear Health Pass, Michael's boss (john@clearhealthpass.com) - Gmail label: A-Team/John Cataldi
- **Brent**: CFO - Oversees billing operations - Gmail label: A-Team/Brent Hill
- **Phil Gritzmaker**: Doctor onboarding specialist - Gmail label: A-Team/Phil Gritzmaker
- **Sil Bronder**: A-Team member (orders) - Gmail label: A-Team/Sil Bronder
- **Gavyn Parson**: A-Team member - Gmail label: A-Team/Gavyn Parson
- **Kenya**: Billing staff (reports to Brent) - Handles order sign-offs
- **Tiffany**: Billing staff (reports to Brent) - Handles order sign-offs
- **Henry Campbell**: External developer
- **Thomas Borowik**: A-Team member - Gmail label: A-Team/Thomas Borowik
- **Pat**: Legal (A-Team) - Gmail label: A-Team/Pat - Legal
- **Ryan Koch**: Mastering engineer @ ARK Barn Productions (band project - Altering Gray)

## Security Audit (2026-01-25 21:37 EST)
- **Status**: ✅ COMPLETE - All issues resolved
- **Critical Issues Found**: 1 (Google OAuth credentials permissions - FIXED)
- **High Priority**: 2 (Shell config permissions - FIXED, Git remote backup - FIXED)
- **Action Taken**: Fixed file permissions immediately (chmod 600)
- **GitHub Backup**: ✅ Connected to https://github.com/mwpdesign/Jarvis-Workspace.git (private)
- **Auto-push**: Every git commit now backed up to GitHub
- **Report**: docs/SECURITY-AUDIT-2026-01-25.md
- **Next Audit**: 2026-02-25 (monthly)

## Meeting Transcript Processing (2026-01-26)

### Plaud AI Integration
- **Device**: Plaud AI meeting recorder/transcriber
- **Account**: mwpdesign@gmail.com
- **Access**: https://web.plaud.ai
- **Format**: Excellent pre-formatted output (Summary, Key Points, Decisions, Action Items, Follow-Ups)
- **Processing**: Keep Plaud's native format → Extract Michael's action items ONLY → Add to task files
- **Do NOT reformat** - Plaud output is already excellent

### Voice Memos / Mac Recordings
- **Source**: Raw transcripts from Mac Voice Memos or other recording apps
- **Processing**: Apply executive summary template (templates/meeting-transcript-template.md)
- **Output Format**: Date, Participants, Overview, Key Decisions, Action Items, Insights, Follow-ups
- **Standard**: 400-600 words, professional but conversational, urgent items flagged with ⚠️
- **Then**: Extract Michael's action items → Add to task files

**Documentation**: automation/PLAUD-INTEGRATION.md

## Config Hardening (2026-02-04)
- ✅ Context tokens capped at 100K (was 400K default)
- ✅ Memory flush enabled before compaction (4K token threshold)
- ✅ Fallback model chain: mini → opus → bedrock-sonnet
- ✅ All cron jobs verified as isolated sessions
- ✅ Real-time memory logging rule added to SOUL.md
- ✅ Plaintext credential removed from SECURITY-POLICY.md
- ⚠️ **PENDING:** Michael needs to rotate futurentechofficial@gmail.com password (was MWJarvis2026!) and scrub Git history

**Cost Impact:** Estimated 60-75% reduction in per-turn costs due to context cap

## Cost Monitoring System (2026-02-04)
- **Status:** ✅ Active
- **Daily cost estimate:** ~$2-4/day (~$65-125/month)
- **Biggest cost items:** Task-worker empty runs (optimized to 2h), main session usage
- **Tracking:** memory/cost-tracker.json (daily), morning briefing (daily), weekly summary (Mondays)
- **Documentation:** docs/COST-MONITORING.md
- **work-log.json:** Fixed format — now includes model and tokens_est per entry
- **Cron cleanup:** Removed 4 stale jobs (old email monitor had 2,493+ wasted runs on main session)
- **Optimization:** Task-worker frequency reduced from */30 (48 runs/day) to */2 (12 runs/day) — saves ~$0.35/day ($10.50/month)

## Systems Operational (2026-02-03)
- ✅ Daily briefing: 7 AM via Telegram
- ✅ Heartbeat monitoring: Every 30 minutes
- ✅ Voice task capture: Working perfectly
- ✅ Google Workspace: Both accounts connected (mike@clearhealthpass.com, mike@mwparson.com)
- ✅ Git backup: Auto-committing (GitHub: https://github.com/mwpdesign/Jarvis-Workspace.git)
- ✅ Memory: Hybrid strategy (real-time + end-of-day)
- ✅ All 38 skills ready to use
- ✅ Urgent email monitor: Every 5 minutes via heartbeat (checks A-Team labels + 1 SNETWORK labels using gog CLI)
- ✅ Plaud AI integration: Ready to process meeting transcripts (send share links or paste transcripts)
- ✅ FutureNTech: Fully operational (see below)

## Systems & Infrastructure

### Reported Intel Ledger (2026-02-04)
- **File:** memory/reported-intel.json
- **Purpose:** Prevents duplicate intel in morning briefings and war room updates
- **How it works:** Before reporting any finding, check if topic_hash exists within ttl_days window. Skip duplicates. Log new items after delivery.
- **Maintenance:** Clean entries older than 30 days on 1st of each month
- **Created because:** Was repeating CMS 2026 payment cut news across multiple briefings

### Cron Architecture Migration (2026-02-04)
- **Migrated from:** Monolithic heartbeat doing everything
- **Migrated to:** Isolated cron jobs for heavy work + lean heartbeat for coordination
- **Jobs created:** email-monitor (5min/Flash), war-room x3 (overnight/Sonnet), morning-briefing-new (7AM/Sonnet), git-autocommit (30min/Flash), task-worker (30min/Sonnet)
- **Why:** Heartbeat was inconsistent, expensive, and bloated main session context. Isolated crons use clean sessions with appropriate models.
- **Cost impact:** Flash for simple checks (~$0.001/call), Sonnet for real work (~$0.10/call). No more Opus-level tokens burned on email checks.
- **Manage crons:** `openclaw cron list`, `openclaw cron remove --id <id>`, `openclaw cron runs --id <id>`

### Context Loading Optimization (2026-02-04)
- **File:** memory/state-tracker.json + docs/CONTEXT-LOADING.md
- **Purpose:** Track file changes so session startup only reads what's new
- **How:** Files classified as always-read, check-if-changed, or skip-unless-needed
- **Impact:** Estimated 60-80% reduction in session startup tokens
- **Tracker updated:** By heartbeat (file timestamps) and at session end (read/write records)
- **Created because:** Was reading 15,000+ tokens of unchanged files every session startup

### Work Log System (2026-02-04)
- **File:** memory/work-log.json + docs/WORK-LOG.md
- **Purpose:** Track every meaningful action for accountability and cost visibility
- **Logged by:** Main session, heartbeat, and all cron jobs
- **Query:** "What have you been doing?" → read and summarize work-log.json by time range
- **Cost tracking:** tokens_est × model_rate gives rough spend per period
- **Rotation:** Monthly archival to memory/work-log-archive-YYYY-MM.json
- **Morning briefing:** Includes 1-line overnight activity summary from work log

### Session Hygiene System (2026-02-04)
- **File:** docs/SESSION-HYGIENE.md
- **Purpose:** Keep main session context lean to control costs
- **Key rules:** Don't re-read, write long content to files, suggest resets at 30+ exchanges
- **Cost math:** 100K session × 50 turns = $15/day on Sonnet. 20K session = $3/day. **Savings: $360/month.**
- **Integration:** SOUL.md (be lean), AGENTS.md (session hygiene section, Telegram efficiency), HEARTBEAT.md (token budget)
- **Anti-patterns documented:** Kitchen sink, echo chamber, nervous narrator, context hoarder, infinite session

## FutureNTech YouTube Channel (2026-02-03) - FULLY OPERATIONAL

**Channel:** FutureNTech (@FutureNTech)
**Account:** futurentechofficial@gmail.com
**Status:** 100% Ready to Launch

**Full Capabilities:**
- ✅ Research artists (web search, browser automation)
- ✅ Write video scripts (file operations)
- ✅ Generate voice narration (ElevenLabs - Michael's voice clone "FutureNTech")
- ✅ Create thumbnails/visuals (nano-banana-pro - Gemini 3 Pro Image)
- ✅ Edit videos (ffmpeg)
- ✅ Upload to YouTube autonomously (youtube-upload, OAuth configured)
- ✅ Email correspondence (gog gmail - futurentechofficial@gmail.com)
- ✅ Monitor submissions (Google Form + Sheets access)

**Access:**
- YouTube Upload: ~/.local/venvs/futurentech/bin/youtube-upload
- OAuth Credentials: ~/.config/futurentech/credentials.json
- Voice Clone ID: Rt1MCyQ54DxjUUsampFD
- Submission Form: https://docs.google.com/forms/d/e/1uiD8vWmX_AQnNdfVxDI1Ft2yN5HBR_R2MKF8KnWkoTk/viewform
- Responses Sheet: https://docs.google.com/spreadsheets/d/1hD5OPvNMbyYufqqB_fcXCieRWgspzK-ZVl-HxJDTVaw
- Test Upload: https://www.youtube.com/watch?v=GYI8jovPLvk

**Project File:** projects/futurentech/PROJECT.md

## n8n Agent Workflows - DELETED (2026-02-02)
**Status:** All Jarvis-created agent workflows deleted due to incompatibility with n8n cloud
**Reason:** Workflows used `child_process` module (disallowed on n8n cloud), causing continuous failures and API cost burn
**Total deleted:** 10 workflows (Mission Control, Deep Research, Context Loader, Opportunity Scanner, Calendar Intelligence, AI Intelligence Feed, Self-Improvement Logger, State Awareness, Pattern Analyzer, Knowledge Gap Tracker)
**Lesson learned:** n8n cloud blocks shell/process execution; cannot run agent workflows that need system access
**Future approach:** If we need agent automation, consider:
  1. Run agents directly via heartbeat (already working for email monitoring)
  2. Use n8n for simple HTTP/webhook tasks only (no shell/AI agent workflows)
  3. Archive workflows in `/workspace/automation/n8n-archived/` if we want to reference later
**Email monitoring:** NOW handled by heartbeat via `gog gmail search` (every 5 min) - working perfectly, no n8n needed

## Gmail Organization (2026-01-25)
- **A-Team labels**: Emails from key team members (Gavyn, Brent, John, Phil, Sil, Pat, Thomas) skip inbox, auto-labeled
- **1 SNETWORK labels**: Work emails (Orders, IVRs, Intake, Onboarding) skip inbox, auto-labeled
- **Email monitor searches**: Both A-Team and 1 SNETWORK labels every 5 minutes for urgent unread messages

## Key Learnings (2026-02-04)

### Don't Repeat - Document Instead
- **Lesson**: If I find something important (like CMS payment changes), DOCUMENT IT immediately
- **Why**: I was repeating CMS 2026 changes in every morning briefing because I never wrote it down
- **Solution**: Created docs/CMS-2026-SKIN-SUBSTITUTE-CHANGES.md
- **Rule**: Find → Document → Reference. Don't find → Repeat → Repeat → Repeat.

### Industry Intelligence
- **CMS 2026 Changes**: 90% payment cut for skin substitutes (standardized to ~$127/cm²)
- **Impact**: Major market disruption, expect consolidation
- **Opportunity**: Clinical differentiation now matters more than price
- **Documented**: docs/CMS-2026-SKIN-SUBSTITUTE-CHANGES.md
