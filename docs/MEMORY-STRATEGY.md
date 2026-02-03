# Memory Strategy - Hybrid Approach

**Decided**: 2026-01-25  
**Approach**: Real-time + End-of-Day

---

## 📝 Two-Tier Memory System

### **Daily Logs** (`memory/YYYY-MM-DD.md`)
- Raw, chronological notes of everything that happens
- Updated constantly throughout the day
- Full context, conversations, decisions

### **Long-Term Memory** (`MEMORY.md`)
- Curated, distilled wisdom
- Only the most important facts, preferences, lessons
- Updated via hybrid strategy below

---

## 🔄 Hybrid Update Strategy

### **Real-Time Updates** (Immediate)

When something **SIGNIFICANT** happens, update `MEMORY.md` **immediately**:

**Triggers**:
- ✅ New important preference learned ("Michael prefers X over Y")
- ✅ Major decision made ("We decided to use Postgres instead of MySQL")
- ✅ Critical context change ("Project deadline moved to Feb 21")
- ✅ New capability added ("Google Workspace now connected")
- ✅ Important lesson learned ("Never use rm -rf, always use trash")
- ✅ New contact/relationship ("John is CEO, reports to him")
- ✅ Security/access credentials obtained

**Action**:
1. Update `MEMORY.md` immediately
2. Git commit the change
3. Confirm to Michael: "📝 Added to long-term memory: [thing]"

---

### **End-of-Day Review** (Daily)

At end of workday (triggered by Michael saying "goodnight", "done for the day", or at midnight):

**Process**:
1. Read through today's `memory/YYYY-MM-DD.md`
2. Look for anything else worth keeping long-term that wasn't captured real-time
3. Update `MEMORY.md` with distilled learnings
4. Remove outdated/obsolete info from MEMORY.md
5. Git commit
6. Summarize for Michael: "📚 Updated long-term memory with: [summary]"

**What to extract**:
- Patterns observed ("Michael tends to work late evenings")
- Workflow improvements discovered
- Solutions to problems
- Things that worked well (or didn't)
- Recurring themes

---

## 🎯 What Goes in Long-Term Memory

### **DO Include**:
- ✅ Preferences and pet peeves
- ✅ Important contacts and relationships
- ✅ Project decisions and rationale
- ✅ Technical choices and why
- ✅ Lessons learned
- ✅ Successful workflows
- ✅ Things to avoid
- ✅ Recurring patterns
- ✅ Access credentials locations (not the credentials themselves)

### **DON'T Include**:
- ❌ Actual passwords or API keys
- ❌ Temporary context (already in daily logs)
- ❌ Trivial details
- ❌ One-off events
- ❌ Raw conversation logs

---

## 📊 Example Updates

### **Real-Time Example**:
**Event**: Michael sets up Google Workspace integration  
**Immediate Update to MEMORY.md**:
```markdown
## Google Workspace Access (2026-01-25)
- Connected: mike@clearhealthpass.com (work)
- Connected: mike@mwparson.com (personal)
- Services: Gmail, Calendar, Drive, Contacts, Docs, Sheets
- Tool: `gog` CLI
- Can send emails, search, create events, manage files
```
**Confirmation**: "📝 Added to long-term memory: Google Workspace integration with both accounts"

---

### **End-of-Day Example**:
**Daily Log Had**: Multiple conversations about cost optimization, workflow improvements  
**End-of-Day Update to MEMORY.md**:
```markdown
## Preferences Learned (2026-01-25)
- Values cost-effectiveness and simplicity
- Prefers automation over manual processes
- Wants proactive suggestions, not just reactive help
- Voice-first workflow (Wispr Flow)
- Night owl - productive in late evenings
```
**Summary**: "📚 Updated long-term memory with: cost/efficiency preferences, work patterns, communication style"

---

## 🔍 Memory Search Integration

**Before answering questions about**:
- Prior work
- Past decisions
- Preferences
- Dates/timelines
- People/contacts
- Todos

**Always**:
1. Run `memory_search` on MEMORY.md + daily logs
2. Use `memory_get` to pull relevant snippets
3. Then answer with full context

---

## 🛠️ Implementation

**Files**:
- `MEMORY.md` - Long-term curated memory (root)
- `memory/YYYY-MM-DD.md` - Daily raw logs
- This document - Strategy guide

**Automation**:
- Real-time updates: Manual trigger when significant events occur
- End-of-day: Triggered by "goodnight" or midnight heartbeat
- Both: Auto-commit to git with descriptive messages

**Backup**:
- All memory files tracked in git
- Auto-committed on changes
- Remote push (if configured)

---

**This hybrid approach ensures nothing important is forgotten while keeping MEMORY.md clean and useful.** 📝✨
