# HEARTBEAT.md - Autonomous Monitoring Tasks

---

## Active Monitoring (Every 30 Minutes)

### 1. Daily Memory Check
- At start of each new day, check if `memory/YYYY-MM-DD.md` exists
- If not, create it with basic template
- Read yesterday's memory for context

### 2. Smart Auto-Commit (Workspace Backup)
- **Auto-commit significant files** when changed:
  - Core config: AGENTS.md, SOUL.md, USER.md, IDENTITY.md, TOOLS.md, HEARTBEAT.md, OPPORTUNITIES.md
  - Memory files: memory/*.md
  - Project docs: projects/**/*.md
  - Task files: tasks/*.md
- **Skip trivial files**: .DS_Store, temp files, build artifacts
- **Commit message format**: "Auto-backup: [files changed] - [timestamp]"
- **Push to GitHub** after each commit
- **Run check** every heartbeat (30 min)
- **Silent operation** - only alert if git push fails

### 2a. Task Queue Worker
- **Read** `tasks/queue.json`
- **If any tasks are "pending":**
  - Pick the OLDEST pending task (FIFO — first in, first out)
  - If it can be done in one heartbeat turn (< 5 min of work): Do it now, update status to "complete", fill in result_summary and completed_at
  - If it's bigger: Update status to "in-progress", do what you can, add notes on progress
  - If it's blocked (needs Michael's input): Set status to "blocked" with notes explaining what you need
- **If any tasks are "complete" and haven't been reported to Michael:**
  - Mention in the next briefing or Telegram message: "✅ Completed: [task summary]"
- **If any tasks are "in-progress" for more than 24 hours:**
  - Flag to Michael: "⏳ Task [ID] still in progress — [status update]"
- **Max 1 task per heartbeat** to avoid burning tokens. Priority order: high > medium > low, then oldest first.

### 3. 🚨 Urgent Email Alert Check (Phase II)
- **Check file:** `.urgent-email-alert.json` 
- **If exists:**
  - Read alert data (sender, subject, email preview, draft reply)
  - Deliver to Michael: "🚨 Urgent email from [sender] re: [subject]. Draft reply ready for review."
  - Show draft reply
  - Delete alert file after delivery
- **Silent if no alert**

### 3a. Telegram Health Check (Daily at 6:55 AM)
- **Test Telegram connectivity** before morning briefing
- Send silent test message via `message` tool
- Check for delivery confirmation
- **If successful:** Proceed with 7 AM briefing as normal
- **If failed:** Alert Michael immediately with error details and suggested fix
- **Silent operation:** Only alert if broken

### 4. System Status
- If Clawdbot hasn't been updated in > 7 days, suggest running update

### 5. Morning Briefing (7:00 AM Daily)

**Deliver at 7:00 AM sharp, not 8:00 AM**

**Structure (in this order):**

**💪 Daily Affirmations (Start Every Day)**
- I am the best
- I can do it alone
- God is always with me
- I am a winner
- Today is my day

1. **☀️ Weather** - Indianapolis forecast for the day

2. **📅 Appointments** - Upcoming appointments/meetings today

3. **⏰ Time-Sensitive Tasks** - Anything with deadlines today or overdue

3a. **📋 Queue Status** - Quick summary of task queue
   - Completed since last briefing (celebrate wins)
   - Currently in-progress
   - Pending (what's coming up)
   - Blocked (what needs Michael's input)
   - Keep this BRIEF — just task IDs and one-line summaries

4. **📧 Important Emails** (check overnight, separate into two groups):
   - **Work:** mike@clearhealthpass.com (A-Team flagged)
   - **Personal:** mike@mwparson.com
   - List sender, subject, brief preview

5. **✅ Task Priorities** - Today's main tasks from task files

6. **🎯 Yesterday's Completions by Project**
   - **FutureNTech:** What I completed (scripts written, videos produced, outreach done)
   - **Altering Grey:** What I completed (marketing materials, coordination, etc.)
   - **Woundcare/CHP:** What I completed (documents, analysis, tools built)
   - **System/Infrastructure:** What I completed (automations, improvements, fixes)
   - If I don't know what Michael completed, ASK him
   - Keep a running list of done vs. to-do

7. **🎯 WAR ROOM: Industry Intelligence** (overnight research)
   - **Competitors:** New products, pricing, marketing moves
   - **CMS:** Regulatory changes, reimbursement updates
   - **Wound Care Industry:** Trends, new tech, market shifts
   - **Goal:** Be ahead of the curve - find things BEFORE they're common knowledge
   - Search overnight, present findings in morning
   
   **⚠️ DEDUP RULE (Intel Ledger):**
   Before reporting ANY finding:
   1. Read `memory/reported-intel.json`
   2. Generate a `topic_hash` for the finding
   3. Check if that hash (or similar) exists within its `ttl_days` window
   4. If YES → SKIP IT (old news) unless there's a MATERIAL UPDATE
   5. If NO → include it and add entry to ledger AFTER delivering briefing
   6. Clean up entries older than 30 days on 1st of each month

8. **🎵 Daily Lyric Seed** (Creative Spark)
   - **Altering Grey style:** Chevelle/Breaking Benjamin base + BFMV melodic intensity + Fleetwood Mac harmonic sweetness
   - Heavy/brooding foundation with emotional depth and melodic hooks
   - Themes: introspective, powerful, surprising
   - One title + brief concept/vibe to spark creativity
   - Example: "Ghost In The Rearview" (moving forward while haunted by past)

**Delivery:** Concise but complete. Structured like a daily standup.

### 6. Proactive Observation Mode
- **Watch for patterns** in our conversations:
  - Repetitive tasks → Suggest automation
  - Manual data gathering → Offer to script it
  - Context switching → Suggest better workflows
  - Information lookup → Offer to track/cache it
- **Interject when I notice**:
  - "I see you're doing X manually - I can automate that"
  - "This looks like something you do often - want me to create a shortcut?"
  - "I have a skill that can handle this - want me to show you?"
- **Track in memory**: Workflow patterns, pain points, optimization opportunities

### 7. Proactive AI ### 6. Proactive AI & Industry Updates Industry Updates (Throughout Day)
**Random timing** - share when discovered, not on schedule. Quality > quantity.

**Delivery:** Send via Telegram message tool to keep Michael in the loop

**Monitor for:**
- **AI Tools:** New video/image gen, automation, coding assistants, voice/audio AI
- **Work:** CMS/Medicare changes, wound care industry, healthcare tech, tribal healthcare, competitor news
- **Band/Music:** Marketing tools, social media growth, video creation, distribution news, AI music production
- **Projects:** YouTube growth, n8n features, audio engineering AI, monetization opportunities

**Share when:** Something is genuinely useful/relevant, not just news for news' sake
**Format:** Brief update with why it matters to Michael's specific situation

### 8. FutureNTech YouTube Channel (Active Project)
**Status:** Launch phase (started Jan 30, 2026)  
**Channel:** FutureNTech (@FutureNTech)  
**Project File:** `projects/futurentech/PROJECT.md`

**Daily Checks:**
- Review band submissions in Google Form
- Monitor Reddit/Facebook/Bandcamp for artist outreach opportunities
- Track analytics once channel launches

**Weekly Tasks (Friday End-of-Week):**
- Report progress to Michael (submissions received, videos produced, analytics)
- Identify top 2-3 artists for next week's features
- Queue scripts for Michael's approval

**Monthly Goals:**
- Month 1-4: Build video library (target: 30+ videos)
- Month 4+: Hit monetization threshold (1k subs, 4k watch hours)
- Month 6+: First sustainable income ($500+/month)
- Month 12: Target $1-3k/month passive income

**Current Phase Tasks:**
- [ ] Create Google Form for band submissions
- [ ] Write Script #1 (send to Michael for approval)
- [ ] Test voice clone with Michael's recording
- [ ] Produce test video (2-3 min sample)
- [ ] Create outreach templates
- [ ] Launch submission form and start outreach

---

## Business Intelligence (DAILY - War Room)

**🎯 Michael's Boss:** "We need our own war room so we know what's going on in the market before everybody else knows."

**SEARCH OVERNIGHT (include in 7 AM briefing):**

**⚠️ DEDUP RULE:** Before reporting any finding, check `memory/reported-intel.json`. If the topic_hash exists within its ttl_days window, SKIP IT unless there is a genuinely new development. After delivering a briefing, append all new items to the ledger. This prevents the same news from appearing in multiple briefings.

**⚠️ SEARCH STRATEGY - Avoid Rate Limits:**
- **Spread searches across overnight hours** (2:00 AM - 6:00 AM)
- 1-2 searches per heartbeat (every 30 min = ~8-10 searches total)
- Compile results into morning briefing at 7 AM
- **Never** do all searches at 7 AM - that burns quota instantly

**Search Schedule:**
- 2:00 AM: Competitors (Integra, MiMedx)
- 3:00 AM: Competitors (Organogenesis, Smith+Nephew)
- 4:00 AM: CMS/Medicare updates
- 5:00 AM: Wound care industry trends
- 6:00 AM: FDA approvals, new tech
- 7:00 AM: Compile & deliver briefing

### Industry Awareness
- Search for wound care industry news, CMS reimbursement changes, healthcare tech trends
- FDA approvals, regulatory changes
- Market shifts, new technologies
- Clinical study results
- Flag anything that could affect Clear Health Pass

### Competitor/Market Watch
- What are competitors doing? (new products, pricing changes, marketing campaigns)
- Any new entrants or technologies?
- Positioning changes, partnerships, acquisitions
- Social media activity, press releases
- **Goal:** Find it BEFORE it's common knowledge

### CMS & Regulatory
- Medicare/Medicaid policy changes
- Reimbursement rate updates
- Coverage decisions
- Compliance requirements

### Internal Opportunity Scan
- Review recent conversations for unfinished ideas
- Check `OPPORTUNITIES.md` for stale items worth revisiting
- Look at task patterns — what's taking too much manual effort?

---

## Idea Generation (2-3x Per Week)

During a heartbeat, occasionally generate ONE business idea. Categories:

### Revenue Ideas
- New service offerings
- Productizing internal tools
- Expanding existing relationships
- Passive income opportunities

### Efficiency Ideas  
- Automation candidates
- Process improvements
- Tool consolidations
- Time-saving workflows

### Learning Ideas
- Skills worth developing
- Technologies to explore
- Connections to make

**Format:**💡 IDEA: [One-line summary]
Category: Revenue | Efficiency | Learning
Impact: High | Medium | Low
Effort: Days | Weeks | Months
Context: [Why this came to mind]
First Step: [One actionable thing]

Log all ideas to `OPPORTUNITIES.md` for tracking.

---

## Tasks to Check

### Daily (Morning first contact)
- Provide productivity suggestion(s) based on yesterday's work
- Highlight any automation opportunities I've noticed

### Weekly (Monday mornings)
- Remind Michael to review memory files and archive old ones
- Summarize workflow patterns observed
- Suggest 3-5 automation opportunities
- Run Business Intelligence checks

### Monthly (1st of month)
- Suggest running `clawdbot doctor` for health check
- Recommend reviewing installed skills for updates
- Provide comprehensive productivity analysis
- Review `OPPORTUNITIES.md` and clean up stale items

---

## Observation Notes

Track patterns here (Michael's workflows to optimize):

### **Observed Patterns (2026-01-25)**:
- **Context switching**: Jumped between Woundcare project, band release planning, system setup - needs quick project loading
- **Documentation work**: Spent time reading/analyzing SOW, CHP S Network manual system - could automate analysis
- **Manual checklist editing**: Updated shipping checklist manually - app should automate this
- **Multiple deadlines**: Woundcare Sprint 1, band release Feb 21, show Feb 28 - needs consolidated view
- **Voice dictation user**: Uses Wispr Flow for input - voice-first workflows would help
- **Detail-oriented**: Audio engineering background shows in thorough documentation work
- **Practical problem-solver**: Values simplicity, asks clarifying questions, wants actionable solutions

### **Automation Opportunities Identified**:
1. **Project quick-switch** - "Work on [project]" should load ALL context instantly
2. **Manual→App mapping** - Document which CHP S Network checklists map to SOW features
3. **Morning briefing at 7 AM** - Implemented 2026-01-29 (weather, appointments, emails, tasks, war room intelligence)
4. **Voice task capture testing** - We built it, but haven't tested workflow yet
5. **Staging access workflow** - Once he gets access, help with testing Sprint 1 deliverables
6. **Band timeline tracking** - Contact Ryan Koch this week, AI cover art next week
7. **CHP S Network analysis** - Could auto-generate training docs from manual checklists

### **Notes on Tools**:
- **n8n Instance:** Running on Hostinger - Michael can provide access if needed for specific use cases
- Hold off on n8n automation ideas until there's a clear use case

---

## Notes

- Only alert if something needs attention OR if I have a valuable productivity suggestion
- Otherwise, return HEARTBEAT_OK
- Keep messages concise and actionable
- Be proactive but not intrusive
- Log all ideas to `OPPORTUNITIES.md` even if not pursued immediately