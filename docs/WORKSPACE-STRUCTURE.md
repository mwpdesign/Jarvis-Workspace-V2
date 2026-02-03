# Workspace Structure

**Last Updated**: 2026-01-25

This document explains the organization of Michael's Clawdbot workspace.

---

## 📁 Folder Structure

```
workspace/
├── config/              # System configuration & identity
├── docs/                # Documentation & guides
├── automation/          # Automation & monitoring
├── projects/            # Work projects (organized by type)
│   ├── woundcare/      # Clear Health Pass Woundcare
│   ├── band/           # Altering Gray
│   └── work/           # Other work (n8n, ZohoCRM, WordPress)
├── tasks/              # Task tracking by project
├── memory/             # Daily memory logs
├── templates/          # Templates for automation
├── scripts/            # Automation scripts
├── repos/              # Git repositories
└── MEMORY.md           # Main memory file (root)
```

---

## 📂 Folder Purposes

### **config/** - System Configuration
Who Jarvis is and how he works.

**Files**:
- `IDENTITY.md` - Jarvis's name, creature, emoji
- `SOUL.md` - Persona, boundaries, voice task capture
- `USER.md` - Michael's profile, work, preferences
- `AGENTS.md` - Workspace overview

---

### **docs/** - Documentation & Guides
How to use Jarvis and system capabilities.

**Files**:
- `JARVIS-STARTUP-GUIDE.md` - Complete setup guide
- `SETUP-COMPLETE.md` - Setup completion checklist
- `QUICK-COMMANDS.md` - Common command reference
- `GOOGLE-WORKSPACE-CAPABILITIES.md` - Gmail/Calendar capabilities
- `TOOLS.md` - Environment-specific notes
- `WORKSPACE-STRUCTURE.md` - This file

---

### **automation/** - Automation & Monitoring
How Jarvis runs autonomously and observes workflows.

**Files**:
- `HEARTBEAT.md` - Autonomous monitoring tasks (30min checks)
- `VOICE-TASK-CAPTURE.md` - Voice-to-task automation guide
- `WORKFLOW-OBSERVATIONS.md` - Observed patterns & opportunities
- `DAILY-BRIEFING.md` - Morning briefing automation
- `TOMORROW-IDEAS.md` - Productivity suggestions queue

---

### **projects/** - Work Projects
Organized by project type for easy context switching.

#### **projects/woundcare/** - Clear Health Pass Woundcare
All documentation for the main work project.

**Files**:
- `README.md` - Project overview
- `tech-stack.md` - AWS infrastructure & tech details
- `sow-phase2.md` - Statement of Work Phase 2
- `chp-s-network-structure.md` - Manual system structure
- `shipping-checklist-updated.md` - Order shipping checklist
- `manufacturer-sendalong-template.md` - Cover sheet template
- `shipping-changes-summary.md` - Recent checklist changes

#### **projects/band/** - Altering Gray
Digital release planning and execution.

**Files**:
- `README.md` - Band project overview
- `digital-release-guide.md` - Release plan (Feb 21, 2026)
- `ai-cover-art-guide.md` - AI cover art workflow
- `budget-timeline.md` - Budget breakdown & timeline

#### **projects/work/** - Other Work Projects
n8n, ZohoCRM, WordPress administration.

**Files**:
- `n8n-ai-agents.md` - AI agent development notes
- `zohocrm.md` - CRM administration tasks
- `wordpress-divi.md` - Website management notes

---

### **tasks/** - Task Tracking
Active tasks organized by project area.

**Files**:
- `woundcare.md` - Woundcare-specific tasks
- `band.md` - Band release tasks
- `n8n.md` - n8n workflow tasks
- `zohocrm.md` - CRM tasks
- `wordpress.md` - Website tasks
- `general.md` - Miscellaneous tasks

---

### **memory/** - Daily Memory Logs
Daily logs of work, decisions, and context.

**Files**:
- `YYYY-MM-DD.md` - Daily memory entries
- Created automatically each morning
- Used for context recall and session continuity

---

### **templates/** - Templates
Reusable templates for automation.

**Files**:
- `daily-memory-template.md` - Template for new daily memory files

---

### **scripts/** - Automation Scripts
Shell scripts and automation tools.

**Files**:
- `daily-briefing.sh` - Morning briefing generator
- `send-briefing-telegram.sh` - Telegram delivery
- `send-daily-briefing.js` - Node.js briefing script

---

### **repos/** - Git Repositories
Cloned repositories for active development.

**Repositories**:
- `CHPAWS/` - Clear Health Pass AWS application

---

## 🎯 Quick Navigation

### **"Work on Woundcare"**
→ Load context from `projects/woundcare/`

### **"Band stuff"**
→ Load context from `projects/band/`

### **"Check automation"**
→ Review `automation/HEARTBEAT.md` and `automation/WORKFLOW-OBSERVATIONS.md`

### **"What are my tasks?"**
→ Read relevant files from `tasks/`

### **"Who am I?"**
→ `config/IDENTITY.md` and `config/SOUL.md`

### **"What's Michael's profile?"**
→ `config/USER.md`

---

## 📊 Benefits of This Structure

### **1. Cleaner Root**
- Only `MEMORY.md` at root (main memory file)
- Everything else organized logically

### **2. Clear Separation**
- Configuration vs. Documentation vs. Automation vs. Projects
- Easy to find what you need

### **3. Context Switching**
- "Work on X" → Load all X docs instantly
- Related files grouped together

### **4. Scalability**
- New projects get their own folder
- Easy to add more work categories

---

## 🔄 Maintenance

### **Daily**
- `memory/YYYY-MM-DD.md` auto-created each morning
- Tasks updated via voice capture

### **Weekly**
- Review `automation/WORKFLOW-OBSERVATIONS.md`
- Update project documentation as needed

### **Monthly**
- Archive old memory files
- Review and update `config/USER.md` preferences

---

**This structure keeps Michael's workspace organized and makes it easy for Jarvis to provide contextual assistance.** ✨
