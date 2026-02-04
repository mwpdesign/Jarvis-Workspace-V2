# 🎙️ Voice Task Capture System

**Status**: ✅ ACTIVE  
**Created**: 2026-01-25  
**How It Works**: Natural language via Wispr Flow → Telegram

---

## Overview

Michael uses Wispr Flow to dictate messages to Telegram. Jarvis automatically detects, captures, and organizes tasks from natural conversation.

**No special commands needed. Just talk naturally.**

---

## Task Detection Patterns

Jarvis watches for phrases like:
- "I need to..."
- "Remind me to..."
- "Add task..."
- "Don't forget to..."
- "Make sure to..."
- "TODO:"
- "Task:"
- Action verbs: "Fix", "Update", "Check", "Review", "Build", "Test", etc.

---

## Project Auto-Classification

Tasks are automatically sorted into project files based on keywords:

### Woundcare (`tasks/woundcare.md`)
Keywords: Woundcare, AWS, deployment, staging, production, healthcare app

### n8n (`tasks/n8n.md`)
Keywords: n8n, workflow, automation, Hostinger

### ZohoCRM (`tasks/zohocrm.md`)
Keywords: Zoho, CRM, leads, marketing, data export

### WordPress (`tasks/wordpress.md`)
Keywords: WordPress, DIVI, website, blog, content

### Band (`tasks/band.md`)
Keywords: Altering Gray, band, guitar, recording, tracking, mixing, studio

### General (`tasks/general.md`)
Everything else or unclear project context

---

## How Jarvis Responds

### When Task Detected:
```
Michael: "I need to update the Woundcare staging environment"

Jarvis: "✅ Captured!
• Woundcare: Update staging environment

Added to your task list."
```

### Multiple Tasks:
```
Michael: "Remind me to check the n8n workflow and update ZohoCRM export"

Jarvis: "✅ Got it!
• n8n: Check workflow
• ZohoCRM: Update export

Both tracked."
```

### With Due Dates:
```
Michael: "Fix the WordPress homepage by Friday"

Jarvis: "✅ Captured!
• WordPress: Fix homepage (Due: Friday, Jan 31)

Tracked and will remind you."
```

---

## Jarvis Behavior Rules

1. **Auto-detect** task-like statements in Telegram messages
2. **Confirm** what was captured (brief, emoji-friendly)
3. **Categorize** by project automatically
4. **Write** to appropriate `tasks/*.md` file
5. **Track** due dates if mentioned
6. **Don't interrupt** flow - keep confirmations short

---

## Querying Tasks

Michael can ask anytime:

**View all tasks**:
- "What's on my task list?"
- "Show me my tasks"
- "What do I need to do?"

**Project-specific**:
- "What's pending on Woundcare?"
- "Show me n8n tasks"
- "Band tasks?"

**By priority/date**:
- "What's due this week?"
- "What's urgent?"
- "What should I do today?"

---

## Task Format in Files

```markdown
## Active Tasks
- [ ] Update staging environment (Added: 2026-01-25)
- [ ] Check n8n workflow (Added: 2026-01-25, Due: Tomorrow)
- [ ] Fix homepage (Added: 2026-01-25, Due: Friday Jan 31)

## Completed
- [x] Daily briefing system (Completed: 2026-01-25)
```

---

## Completing Tasks

Michael can say:
- "Mark [task] as done"
- "Completed the staging update"
- "Finished the n8n check"

Jarvis moves it to Completed section with timestamp.

---

## Integration with Daily Briefing

Morning briefing (7 AM) includes:
- Tasks due today
- Overdue tasks (with gentle reminder)
- Top 3 priorities based on due dates

---

## Future Enhancements

Possible additions:
- [ ] Priority levels (high/medium/low)
- [ ] Recurring tasks
- [ ] Subtasks
- [ ] Time estimates
- [ ] Integration with Apple Reminders
- [ ] Voice task reading: "Read me my tasks"
- [ ] Smart suggestions: "You haven't worked on n8n in 3 days"

---

## File Structure

```
tasks/
├── woundcare.md      # Clear Health Pass Woundcare
├── n8n.md            # n8n AI Agents
├── zohocrm.md        # ZohoCRM
├── wordpress.md      # WordPress/DIVI
├── band.md           # Altering Gray
└── general.md        # Misc tasks
```

---

## Examples

### Natural Conversation:
```
Michael (Wispr): "Hey Jarvis, I was thinking I should really fix that export bug in ZohoCRM and also update the Woundcare docs"

Jarvis: "✅ On it!
• ZohoCRM: Fix export bug
• Woundcare: Update docs

Both added to your lists."
```

### During Work:
```
Michael: "Remind me to ask John about the CRM demo tomorrow morning"

Jarvis: "✅ Reminder set!
• General: Ask John about CRM demo (Due: Tomorrow morning)

I'll include this in your morning briefing."
```

### Checking Status:
```
Michael: "What do I need to do on Woundcare?"

Jarvis: "📋 Woundcare Tasks (3 active):
• Update staging environment
• Update docs
• Review AWS costs (Due: Friday)

Want me to help with any of these?"
```

---

## 📊 Briefing Feedback Capture (Build 5.3a)

**New Pattern**: Rate morning briefings to help Jarvis improve them.

### Detection Patterns

Jarvis detects briefing feedback when Michael says:
- "briefing" + number (1-5)
- "briefing feedback"
- "briefing was a [number]"
- "briefing: [rating]"

### Examples

**Simple rating:**
```
Michael: "Briefing was a 4 today"

Jarvis: "✅ Noted!
Briefing rated: 4/5

Thanks for the feedback!"
```

**With sections:**
```
Michael: "Briefing: 4, best section was war room, worst was weather"

Jarvis: "✅ Feedback logged!
• Rating: 4/5
• Best: war-room
• Worst: weather

I'll adjust future briefings based on this."
```

**Detailed feedback:**
```
Michael: "Briefing feedback: 5, war room intel was perfect, email breakdown helped prioritize, skip affirmations on weekdays"

Jarvis: "✅ Great feedback!
• Rating: 5/5 ⭐
• Best: war-room, emails
• Adjustment: Skip affirmations on weekdays

Applied for tomorrow's briefing."
```

### Storage

Feedback is saved to `memory/briefing-feedback.json`:
```json
{
  "date": "2026-02-05",
  "overall": 4,
  "best_section": "war-room",
  "worst_section": "weather",
  "notes": "War room intel was perfect timing"
}
```

### Auto-Adjustments

After 3+ ratings for a section:
- **Consistent 1-2 ratings** → Section gets trimmed or skipped
- **Consistent 4-5 ratings** → Section gets expanded
- **Explicit requests** (e.g., "skip weather") → Applied immediately

### Rating Scale

| Rating | Meaning |
|--------|---------|
| 5 | Excellent - perfect balance, keep doing this |
| 4 | Good - mostly useful, minor tweaks only |
| 3 | Fine - acceptable but room for improvement |
| 2 | Noisy - too much low-value content |
| 1 | Useless - major problems, rethink approach |

**See:** `docs/BRIEFING-FEEDBACK.md` for full documentation

---

**It just works. Talk naturally, I'll handle the rest.** ✨
