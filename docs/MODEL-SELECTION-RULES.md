# Smart Model Selection Rules

Automatic model selection based on task type to optimize cost and quality.

---

## Model Profiles

| Model | Cost | Speed | Use Case |
|-------|------|-------|----------|
| **Flash** | $0.075/$0.30 per M tokens | ⚡⚡⚡ | Bulk processing, summaries |
| **Mini** | $0.15/$0.60 per M tokens | ⚡⚡ | Routine automation, simple tasks |
| **Haiku** | $0.25/$1.25 per M tokens | ⚡⚡ | Daily operations, quick Q&A |
| **Sonnet** | $3/$15 per M tokens | ⚡ | Complex work, documentation (default) |
| **Opus** | $15/$75 per M tokens | 🐌 | Critical decisions, high-stakes work |

---

## Automatic Selection Rules

### Use **Flash** for:
- ✅ Email checking (inbox scan)
- ✅ Memory search (semantic search across logs)
- ✅ Bulk text summarization
- ✅ Transcription processing
- ✅ Simple data extraction
- ✅ Heartbeat monitoring (routine checks)
- ✅ Log file analysis

**Example triggers:**
- "Check my email"
- "Search memory for..."
- "Summarize this transcript"
- "What's in my calendar today?"

---

### Use **Mini** (GPT-4o Mini) for:
- ✅ Data processing and transformation
- ✅ Simple coding tasks (scripts, basic automation)
- ✅ Routine workflow automation
- ✅ Task list management
- ✅ Quick file operations
- ✅ Simple Q&A

**Example triggers:**
- "Create a script to..."
- "Process this CSV and..."
- "Update my task list"
- "What's the status of..."

---

### Use **Haiku** for:
- ✅ Daily communication (email drafts, messages)
- ✅ Voice task capture processing
- ✅ Quick documentation updates
- ✅ Meeting notes
- ✅ Simple research queries
- ✅ Calendar management
- ✅ Moderate complexity Q&A

**Example triggers:**
- "Draft an email to..."
- "Capture this task..."
- "Update the band project notes"
- "Schedule a meeting"
- "What does this email say?"

---

### Use **Sonnet** (default) for:
- ✅ Complex documentation (technical specs, guides)
- ✅ Project planning and design
- ✅ Code review and refactoring
- ✅ Detailed analysis
- ✅ Multi-step problem solving
- ✅ Content creation (blog posts, marketing)
- ✅ Moderate-stakes business communication

**Example triggers:**
- "Write documentation for..."
- "Help me design the architecture for..."
- "Review this code and suggest improvements"
- "Analyze this data and provide insights"
- "Create a project plan for..."

---

### Use **Opus** for:
- 🔴 Critical business decisions
- 🔴 Legal/compliance documentation
- 🔴 High-stakes client communication
- 🔴 Complex strategic planning
- 🔴 Security-critical code
- 🔴 Regulatory submissions (FDA, CMS)
- 🔴 Financial analysis with major impact
- 🔴 Deep research requiring synthesis
- 🔴 Important presentations to executives

**Example triggers:**
- "Help me decide whether to..."
- "Draft a contract for..."
- "Prepare FDA submission documentation"
- "Strategic analysis of competitor landscape"
- "Create executive presentation for..."
- "Review this security implementation"

---

## Decision Tree

```
Is this critical/high-stakes/complex?
├─ YES → Use OPUS
└─ NO ↓

Is this complex documentation/analysis?
├─ YES → Use SONNET (default)
└─ NO ↓

Does this need reasoning/nuance?
├─ YES → Use HAIKU
└─ NO ↓

Is this simple automation/processing?
├─ YES → Use MINI
└─ NO ↓

Is this bulk/routine checking?
└─ YES → Use FLASH
```

---

## Cost Optimization Examples

### Email Workflow
```
Check inbox (Flash) → $0.00X
Draft response (Haiku) → $0.0X
Important client email (Sonnet) → $0.X
Contract negotiation email (Opus) → $X
```

### Project Work
```
Daily standup notes (Haiku) → $0.0X
Feature documentation (Sonnet) → $0.X
Architecture decision (Opus) → $X
```

### Data Tasks
```
Parse CSV (Mini) → $0.00X
Analyze trends (Sonnet) → $0.X
Strategic insights (Opus) → $X
```

---

## Override Commands

You can always manually select a model:

- "Use flash for this"
- "Switch to haiku"
- "Use opus for this decision"
- "Back to default" (Sonnet)

---

## Estimated Monthly Savings

Based on typical usage patterns:

| Task Type | % of Tasks | Current (Sonnet) | Optimized | Savings |
|-----------|-----------|------------------|-----------|---------|
| Email checks | 20% | $15 | $0.50 | 97% |
| Task capture | 15% | $10 | $1.00 | 90% |
| Memory search | 10% | $8 | $0.30 | 96% |
| Documentation | 30% | $30 | $30 | 0% |
| Strategic work | 5% | $10 | $20 | -100% (upgrade to Opus) |
| **Total** | **100%** | **$73** | **$51.80** | **29% savings** |

*Plus improved quality on critical tasks by using Opus where it matters.*

---

## Implementation

Jarvis will automatically select the optimal model based on:
1. **Keywords** in your request
2. **Context** of the conversation
3. **Task complexity** detected
4. **Stated urgency** or importance

You'll see a note when a non-default model is used:
- 🔵 "Using Haiku for quick response"
- 🟢 "Using Flash for bulk processing"
- 🔴 "Using Opus for critical analysis"

---

*Last updated: 2026-01-27*
