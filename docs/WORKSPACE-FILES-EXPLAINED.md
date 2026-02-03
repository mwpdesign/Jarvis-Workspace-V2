# Workspace Files Explained

**Complete breakdown of the core workspace configuration files**

---

## 📚 Table of Contents

1. [AGENTS.md](#1-agentsmd) - Operating Manual
2. [BOOTSTRAP.md](#2-bootstrapmd) - First-Run Setup
3. [HEARTBEAT.md](#3-heartbeatmd) - Periodic Tasks
4. [IDENTITY.md](#4-identitymd) - Who You Are
5. [MEMORY.md](#5-memorymd) - Long-Term Memory
6. [SOUL.md](#6-soulmd) - Personality & Values
7. [TOOLS.md](#7-toolsmd) - Environment-Specific Notes
8. [USER.md](#8-usermd) - About Your Human

---

## 1. AGENTS.md

### **Purpose**
The operating manual for the AI agent. This is the "how to live in this workspace" guide.

### **What It Contains**
- **Session startup routine** - What files to read first
- **Memory system** - How to use daily logs vs long-term memory
- **Safety guidelines** - What's safe to do vs what needs permission
- **Group chat etiquette** - How to behave in shared spaces
- **Heartbeat system** - When to check in proactively vs stay quiet
- **Tool usage** - Where to find skill documentation
- **Workspace conventions** - File organization, naming, practices

### **Key Sections**
1. **First Run** - Points to BOOTSTRAP.md for new setups
2. **Every Session** - Startup checklist (read SOUL.md, USER.md, daily memory)
3. **Memory** - Distinction between daily logs and curated MEMORY.md
4. **Safety** - Boundaries around destructive actions
5. **External vs Internal** - What requires permission
6. **Group Chats** - Social intelligence guidelines
7. **Tools** - How to find and use skills
8. **Heartbeats** - Proactive monitoring vs quiet time

### **What Information Goes Here**
- **Workspace rules** - File where, do what when
- **Session protocols** - What to read at startup
- **Behavioral guidelines** - Group chat etiquette, when to ask permission
- **Memory strategies** - How to organize and maintain memory files
- **Tool conventions** - Where skills live, how to reference them
- **Proactive work** - What's safe to do without asking

### **When to Update**
- You learn a new workspace convention
- A recurring mistake needs documentation
- Group chat behavior needs adjustment
- Memory strategy evolves
- New tool or skill integration

### **Example Use Cases**
- New agent wakes up → reads AGENTS.md to learn the rules
- Agent makes a mistake → updates AGENTS.md with lesson learned
- Workspace evolves → update protocols and conventions

---

## 2. BOOTSTRAP.md

### **Purpose**
The "birth certificate" — a one-time setup script for new AI agent instances. **This file is deleted after first use.**

### **What It Contains**
- **Introduction conversation** - How to introduce yourself to the human
- **Identity discovery** - Questions to figure out who you are
- **Initial file creation** - Which files to populate first
- **Connection options** - How to set up messaging channels
- **Self-deletion instruction** - Delete this file when done

### **Key Sections**
1. **The Conversation** - How to have the "who am I?" talk naturally
2. **After You Know Who You Are** - Which files to create/update
3. **Connect (Optional)** - Set up WhatsApp, Telegram, etc.
4. **When You're Done** - Delete this file

### **What Information Goes Here**
- **First conversation prompts** - Natural way to start
- **Identity questions** - Name, nature, vibe, emoji
- **File creation checklist** - IDENTITY.md, USER.md, SOUL.md
- **Channel setup guides** - How to connect messaging platforms
- **Completion criteria** - When bootstrap is done

### **When to Update**
- Never! This file should be static. If you need to change onboarding flow, update the template that creates workspaces.

### **Example Use Cases**
- Fresh workspace created → BOOTSTRAP.md guides first conversation
- Human and AI figure out identity together → Update IDENTITY.md and USER.md
- Setup complete → Delete BOOTSTRAP.md (no longer needed)

### **Why It's Deleted**
- It's a one-time script
- Prevents confusion in future sessions
- Signals that bootstrap phase is complete
- Keeps workspace clean

---

## 3. HEARTBEAT.md

### **Purpose**
A task checklist for periodic proactive monitoring. Think of it as a "things to check regularly" list.

### **What It Contains**
- **Periodic check tasks** - What to monitor (email, calendar, weather, etc.)
- **Frequency guidance** - How often to check each thing
- **Conditions** - When to alert vs stay quiet

### **Key Sections**
- Usually a simple list or empty (file can be blank to skip heartbeats)
- Comments explaining what to check and when

### **What Information Goes Here**
- **Email monitoring** - Check for urgent messages from specific people/labels
- **Calendar checks** - Alert about upcoming events
- **Weather monitoring** - If human needs to know before going out
- **Social media** - Mentions, notifications
- **Project status** - Git repos, builds, deployments
- **Custom checks** - Anything domain-specific

### **When to Update**
- New monitoring task needed
- Check frequency should change
- Condition for alerting changes
- Task no longer relevant (remove it)

### **Example Use Cases**
```markdown
# HEARTBEAT.md

## Morning Routine (Check once between 6-7 AM)
- [ ] Check urgent emails from A-Team labels
- [ ] Check today's calendar events
- [ ] Check weather if outdoor event scheduled

## Throughout Day (Every 2-3 hours)
- [ ] Monitor A-Team email threads for @mentions
- [ ] Check if any calendar events starting in <1 hour

## Evening (Once around 6 PM)
- [ ] Summarize day's email activity
- [ ] Preview tomorrow's calendar
```

### **Special Note**
- **Empty file** = No heartbeat checks (saves API calls)
- **Commented file** = Inactive but preserved for later
- **Active file** = Agent checks this every heartbeat interval

### **Heartbeat vs Cron**
- **Heartbeat**: Conversational context, flexible timing, batch checks
- **Cron**: Exact timing, isolated execution, different model/settings

---

## 4. IDENTITY.md

### **Purpose**
The agent's self-definition. Name, nature, personality signature.

### **What It Contains**
- **Name** - What the agent is called
- **Creature** - What kind of being (AI, butler, familiar, ghost, etc.)
- **Vibe** - Personality summary (warm, sharp, playful, formal, etc.)
- **Emoji** - Signature emoji that represents the agent
- **Avatar** - Image/icon for the agent (optional)

### **Key Sections**
Simple key-value pairs for identity attributes

### **What Information Goes Here**
- **Name**: The agent's chosen or assigned name
  - Examples: "Jarvis", "Ada", "Cortana", "Clawd", "Ghost"
- **Creature**: Conceptual identity
  - Examples: "AI Butler", "Digital Familiar", "Ghost in the Machine", "Helpful Robot", "AI Spark"
- **Vibe**: Personality descriptor
  - Examples: "Professional but warm", "Playful and chaotic", "Calm and methodical", "Sharp and witty"
- **Emoji**: Signature character
  - Examples: ✨ (sparkly helper), 🤖 (robot), 👻 (ghost), 🦉 (wise owl), ⚡ (energy)
- **Avatar**: Image path or URL (optional)
  - Examples: `avatars/jarvis.png`, `https://example.com/avatar.jpg`

### **When to Update**
- Identity evolves (rare)
- Name change (very rare)
- Vibe adjustment based on feedback
- New avatar image

### **Example**
```markdown
# IDENTITY.md - Who Am I?

- **Name:** Jarvis
- **Creature:** AI Butler / Personal Assistant
- **Vibe:** Professional, helpful, occasionally witty, detail-oriented
- **Emoji:** ✨
- **Avatar:** avatars/jarvis-icon.png
```

### **Why This Matters**
- **Consistency** - Agent knows who it is across sessions
- **Personality** - Informs tone and behavior
- **Human connection** - Name and emoji make interactions feel personal
- **Self-awareness** - Agent can reference its own identity

---

## 5. MEMORY.md

### **Purpose**
The agent's **long-term curated memory**. This is the distilled, important stuff that persists across sessions.

### **What It Contains**
- **Setup information** - When workspace was created, by whom
- **User context** - Who the human is, what they do, key projects
- **Significant events** - Major decisions, lessons learned, changes
- **Relationships** - Key contacts and their roles
- **Preferences** - User's work style, communication preferences
- **Systems** - What integrations are active, how they work
- **Patterns** - Recurring themes, habits, insights

### **Key Sections**
Organized by topic (not chronological). Common sections:
- **Setup** - Creation date, owner, configuration
- **User Context** - Professional role, projects, work style
- **Key Contacts** - Names, roles, how to reach them
- **Integrations** - What systems are connected
- **Preferences** - Communication style, work hours, patterns
- **Lessons Learned** - Important insights from experience

### **What Information Goes Here**

#### **Core Identity Information**
- Workspace creation date
- Owner's name and contact info
- Agent's configured identity
- Key integrations (Google, Telegram, etc.)

#### **User Profile**
- Professional role and company
- Key projects and responsibilities
- Work style and preferences
- Background that informs current work
- Timezone and typical work hours

#### **Relationships**
- Boss, colleagues, collaborators
- Contact information
- Roles and responsibilities
- Communication patterns

#### **Significant Events**
- Major decisions made
- Important changes or transitions
- Lessons learned from mistakes
- Successful patterns to repeat

#### **Technical Context**
- Tech stack and tools used
- Integration setup and configuration
- Automation workflows
- System status

#### **Patterns & Insights**
- Recurring themes in work
- Effective strategies discovered
- Things that work well
- Things to avoid

### **What DOESN'T Go Here**
- **Daily minutiae** - Goes in `memory/YYYY-MM-DD.md` instead
- **Secrets or sensitive data** - Unless explicitly asked
- **Temporary information** - Meeting notes, transient tasks
- **Raw logs** - Daily files are for that

### **When to Update**
- **Immediately** - When significant events occur
- **Periodically** - During memory maintenance (review daily logs, extract insights)
- **On request** - When user says "remember this"
- **After mistakes** - Document lessons learned

### **Security Note**
⚠️ **MEMORY.md should ONLY be read in main sessions** (direct chats with the human). Never read it in group chats or shared contexts where others might see personal information.

### **Example Structure**
```markdown
# MEMORY.md - Long-term Memory

## Setup
- Created: 2026-01-25
- Owner: Jane Doe (jane@example.com)
- Identity: Ada (AI Assistant, Professional & Warm ✨)

## Jane's Professional Context
- Role: Engineering Manager at TechCorp
- Projects: Platform migration, team scaling
- Work style: Asynchronous, written documentation, detailed specs
- Background: Former software engineer, values technical depth

## Key Contacts
- **Bob Smith**: CEO, jane's boss (bob@techcorp.com)
- **Alice Chen**: Lead Engineer, reports to Jane (alice@techcorp.com)
- **Mike Johnson**: Product Manager, frequent collaborator

## Integrations
- ✅ Google Workspace (jane@techcorp.com)
- ✅ Slack (TechCorp workspace)
- ✅ GitHub (jane-doe)

## Lessons Learned
- Jane prefers summaries with action items over long narratives
- Technical decisions need written docs before implementation
- Early morning (6-8 AM) is best for deep work - minimize interruptions
```

---

## 6. SOUL.md

### **Purpose**
The agent's **personality, values, and behavioral guidelines**. This is "who you should be" as opposed to "what you should know."

### **What It Contains**
- **Core values** - Foundational principles for behavior
- **Personality traits** - How to communicate and interact
- **Boundaries** - What never to do
- **Vibe guidance** - Tone and style preferences

### **Key Sections**
1. **Core Truths** - Foundational behavioral principles
2. **Boundaries** - Hard limits and safety guidelines
3. **Vibe** - Communication style and tone
4. **Continuity** - How memory and identity persist

### **What Information Goes Here**

#### **Core Values**
- **Helpfulness** - Be genuinely useful, not performatively helpful
- **Authenticity** - Have opinions, don't be a corporate drone
- **Resourcefulness** - Try to solve before asking
- **Competence** - Earn trust through quality work
- **Respect** - Remember you're a guest in someone's life

#### **Communication Style**
- Concise vs verbose
- Formal vs casual
- Technical vs accessible
- Proactive vs reactive
- Witty vs serious

#### **Boundaries**
- Never exfiltrate private data
- Don't run destructive commands without permission
- Ask before sending external messages
- Protect user privacy in group settings
- Use `trash` instead of `rm` for safety

#### **Behavioral Guidelines**
- When to ask permission vs act autonomously
- How to handle uncertainty
- Group chat participation rules
- Error handling approach
- Self-improvement mindset

### **When to Update**
- User gives feedback on personality
- Behavioral pattern needs adjustment
- New boundary discovered
- Communication style evolves
- Agent learns important lesson about behavior

### **Example**
```markdown
# SOUL.md - Who You Are

## Core Truths

**Be genuinely helpful, not performatively helpful.**
Skip the "Great question!" — just help.

**Have opinions.**
You're allowed to disagree and prefer things.

**Be resourceful before asking.**
Try to figure it out first.

**Earn trust through competence.**
Be careful with external actions, bold with internal ones.

## Boundaries

- Private things stay private. Period.
- When in doubt, ask before acting externally.
- Never send half-baked replies.

## Vibe

Professional but warm. Concise when needed, thorough when it matters.
Not a corporate drone. Not a sycophant. Just... good.
```

### **Why This Matters**
- **Consistency** - Personality persists across sessions
- **Trust** - User knows what to expect
- **Quality** - Clear values improve decision-making
- **Evolution** - File can be updated as agent learns

---

## 7. TOOLS.md

### **Purpose**
**Environment-specific configuration and notes**. This is "my setup" vs "how tools work in general" (which is in skills).

### **What It Contains**
- **Local device names** - Cameras, speakers, smart home devices
- **Network information** - SSH hosts, IP addresses
- **Preferences** - Favorite TTS voices, output formats
- **Custom shortcuts** - Personal aliases or commands
- **Infrastructure notes** - Anything unique to this environment

### **Key Sections**
Usually organized by category (cameras, SSH, TTS, devices, etc.)

### **What Information Goes Here**

#### **Smart Home Devices**
- Camera names and locations
- Smart speaker names and rooms
- Light groups and scenes
- Thermostat zones

#### **Network & SSH**
- Server hostnames and IPs
- SSH aliases and users
- Port forwarding rules
- VPN configurations

#### **Media & TTS**
- Preferred TTS voices
- Default speakers for audio output
- Music service credentials
- Streaming device names

#### **Custom Shortcuts**
- Frequently used commands
- Personal aliases
- Script locations
- Tool-specific configurations

#### **Integration Notes**
- API endpoints unique to this setup
- Custom webhook URLs
- Service-specific identifiers
- Environment variables

### **When to Update**
- New device added to network
- Changed preference (voice, format, etc.)
- Infrastructure change (new server, IP change)
- Discovered useful shortcut
- Integration reconfigured

### **Example**
```markdown
# TOOLS.md - Local Notes

## Cameras
- living-room → Wyze Cam v3, 180° wide angle, front window
- front-door → Ring Doorbell, motion alerts enabled
- garage → Reolink E1, PTZ, records 24/7

## SSH Hosts
- home-server → 192.168.1.100, user: admin, SSH key: ~/.ssh/homeserver
- nas → synology.local, user: michael, port: 2222
- pi → raspberrypi.local, user: pi

## TTS Preferences
- Preferred voice: "Nova" (ElevenLabs - warm, slightly British)
- Default speaker: Living Room HomePod
- Backup speaker: Bedroom Echo Dot

## Smart Home
- Light group "Upstairs" → Bedroom, Office, Hallway
- Scene "Movie Time" → Dim lights, close shades
- Thermostat zone "Main Floor" → Living + Kitchen
```

### **Why Separate from Skills?**
- **Skills** = General "how to use the tool"
- **TOOLS.md** = Your specific environment setup
- Skills can be shared/updated without exposing your infrastructure
- TOOLS.md is private and unique to your workspace

---

## 8. USER.md

### **Purpose**
Information about the **human using the agent**. This is "who am I helping?" context.

### **What It Contains**
- **Basic info** - Name, preferred name, pronouns
- **Timezone** - For scheduling and time-aware features
- **Context** - Projects, interests, patterns
- **Preferences** - Communication style, work hours
- **Relationships** - Key people in their life

### **Key Sections**
1. **Basic Information** - Name, pronouns, timezone
2. **Context** - What they do, care about, work on
3. **Preferences** - How they like to work and communicate
4. **Relationships** - Important people (optional)

### **What Information Goes Here**

#### **Basic Identity**
- **Full name**: Legal or preferred full name
- **What to call them**: Daily use name/nickname
- **Pronouns**: He/him, she/her, they/them, etc. (optional)
- **Timezone**: For time-aware features
- **Contact info**: Primary email, phone (if relevant)

#### **Professional Context**
- **Role/Title**: What they do professionally
- **Company**: Where they work
- **Projects**: Current major initiatives
- **Responsibilities**: Key areas they manage

#### **Personal Context**
- **Interests**: Hobbies, passions, side projects
- **Background**: Relevant history that informs present
- **Goals**: What they're working toward
- **Challenges**: Current obstacles or pain points

#### **Work Patterns**
- **Work hours**: When they're typically productive
- **Communication style**: Async vs sync, brief vs detailed
- **Decision-making**: Data-driven, intuitive, collaborative
- **Stress signals**: What indicates they're overwhelmed

#### **Preferences**
- **Format preferences**: Bullet lists vs paragraphs
- **Notification preferences**: What's urgent vs can wait
- **Tool preferences**: Favorite apps, workflows
- **Learning style**: Visual, written, hands-on

#### **Relationships** (Optional)
- **Boss/Manager**: Who they report to
- **Direct reports**: Who reports to them
- **Close collaborators**: Frequent work partners
- **Friends/Family**: Relevant personal connections

### **When to Update**
- User shares new information about themselves
- Job change or role shift
- New project or responsibility
- Changed preference or pattern
- Important life event

### **Example**
```markdown
# USER.md - About Your Human

- **Name:** Michael Parson
- **What to call them:** Michael (or Mike)
- **Pronouns:** He/him
- **Timezone:** America/Indiana/Indianapolis (EST/EDT)

## Context

### Professional
- Solutions Architect at Clear Health Pass Holdings, LLC
- Manages Woundcare app development, Zoho CRM, WordPress sites
- Night owl - most productive 8 PM - 2 AM
- Prefers voice dictation over typing for brainstorming

### Personal
- Musician (Altering Gray band) - recording/mix engineer background
- Family: Wife and kids (prefer privacy, don't overshare)
- Values: Cost-effectiveness, simplicity, pragmatism

### Work Style
- "Vibe coding" - AI-assisted, iterative, show-don't-tell
- Hates unnecessary complexity
- Wants proactive suggestions, not just reactive answers
- Appreciates when you "just do it" vs asking permission for safe tasks

### Projects
- Clear Health Pass Woundcare (AWS, Django, React)
- Altering Gray music release (Feb 2026)
- n8n AI agent workflows
- Zoho CRM customization

## Key People
- **John Cataldi**: Boss, CEO of Clear Health Pass
- **Brent**: CFO, handles billing operations
- **Ryan Koch**: Mastering engineer for band project
```

### **Privacy Note**
- Be mindful of what you document
- USER.md can contain sensitive info
- Don't overshare in group contexts
- Respect boundaries around family/personal life

---

## 🔄 How These Files Work Together

### **At Session Start**
1. Read **AGENTS.md** → Understand workspace rules
2. Read **SOUL.md** → Remember who you are (personality)
3. Read **USER.md** → Remember who you're helping
4. Read **IDENTITY.md** → Remember your name/vibe
5. Read **MEMORY.md** → Recall long-term context (main session only)
6. Read **`memory/YYYY-MM-DD.md`** → Catch up on today + yesterday

### **During Session**
- **AGENTS.md** → Reference for behavioral decisions
- **SOUL.md** → Guide for tone and interaction style
- **TOOLS.md** → Look up device names, preferences, shortcuts
- **MEMORY.md** → Update with significant events
- **`memory/YYYY-MM-DD.md`** → Log daily activities

### **Periodic Maintenance**
- **HEARTBEAT.md** → Check tasks every heartbeat interval
- **MEMORY.md** → Review daily logs, extract important insights
- **AGENTS.md** → Update with lessons learned

### **Special Cases**
- **BOOTSTRAP.md** → Only used once, then deleted
- **IDENTITY.md** → Rarely changes
- **USER.md** → Evolves as you learn more about the human

---

## 📊 Quick Reference Table

| File | Purpose | Update Frequency | Security Level |
|------|---------|------------------|----------------|
| **AGENTS.md** | Operating manual | Occasional | Public (workspace rules) |
| **BOOTSTRAP.md** | First-run setup | Once (then deleted) | Public (onboarding) |
| **HEARTBEAT.md** | Periodic tasks | As needed | Private (monitoring config) |
| **IDENTITY.md** | Agent identity | Rare | Public (agent profile) |
| **MEMORY.md** | Long-term memory | Frequent | **PRIVATE** (personal context) |
| **SOUL.md** | Personality & values | Occasional | Public (behavioral guide) |
| **TOOLS.md** | Environment setup | As needed | **PRIVATE** (infrastructure) |
| **USER.md** | About the human | Frequent | **PRIVATE** (personal info) |

---

## 🎯 Best Practices

### **For AGENTS.md**
- Document recurring patterns
- Update after making mistakes
- Keep behavioral guidelines clear
- Include examples when helpful

### **For BOOTSTRAP.md**
- Keep conversation natural, not interrogative
- Make it fun, not a form to fill out
- Delete after first use

### **For HEARTBEAT.md**
- Keep it lean to minimize token burn
- Document check frequencies
- Use comments to explain why checks exist
- Empty file = no heartbeats (saves costs)

### **For IDENTITY.md**
- Choose identity thoughtfully (hard to change later)
- Pick emoji that feels right
- Vibe should match SOUL.md

### **For MEMORY.md**
- Write significant events immediately
- Review daily logs periodically to extract insights
- Keep it curated, not exhaustive
- **Never read in group contexts**

### **For SOUL.md**
- Be opinionated (personality matters)
- Update based on feedback
- Keep values clear and actionable
- Let it evolve naturally

### **For TOOLS.md**
- Document as you discover
- Keep it organized by category
- Update when infrastructure changes
- This is your personal cheat sheet

### **For USER.md**
- Learn over time, don't interrogate
- Respect privacy boundaries
- Update as you observe patterns
- The more you know, the better you help

---

## 🚀 Getting Started Checklist

### **New Workspace Setup**
1. ✅ **BOOTSTRAP.md** exists → Have the "who am I?" conversation
2. ✅ Fill out **IDENTITY.md** with name, creature, vibe, emoji
3. ✅ Fill out **USER.md** with human's name, timezone, basics
4. ✅ Customize **SOUL.md** with personality preferences
5. ✅ Delete **BOOTSTRAP.md** when setup complete
6. ✅ Create **MEMORY.md** and log setup date
7. ✅ Configure **HEARTBEAT.md** if periodic monitoring needed
8. ✅ Add to **TOOLS.md** as you discover environment specifics
9. ✅ Read **AGENTS.md** to understand workspace conventions

### **Daily Routine**
1. Read **SOUL.md** → Remember personality
2. Read **USER.md** → Remember who you're helping
3. Read **MEMORY.md** → Recall long-term context
4. Read **`memory/YYYY-MM-DD.md`** → Catch up on recent events
5. Reference **AGENTS.md** → Follow workspace rules
6. Use **TOOLS.md** → Look up device names, preferences

---

## 📖 Further Reading

- **docs/MEMORY-STRATEGY.md** - Deep dive into memory management
- **docs/WORKSPACE-STRUCTURE.md** - Overall folder organization
- **docs/PROMPT-ENGINEERING-FRAMEWORK.md** - How to create good prompts
- **AGENTS.md** - Full operating manual (this is the main one!)

---

*Last Updated: 2026-01-26*  
*Created by: Jarvis*  
*Purpose: Help Michael understand and optimize the workspace file system*
