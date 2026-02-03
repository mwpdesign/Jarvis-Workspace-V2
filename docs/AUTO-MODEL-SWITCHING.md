# Automatic Model Switching - Implementation Guide

Complete setup for automatic model selection based on task detection.

---

## Architecture

Clawdbot supports model switching through:
1. **Per-session model override** - Set model for entire conversation
2. **Sub-agent spawning** - Delegate tasks to specialized agents with specific models
3. **Inline detection** - Agent detects task type and uses appropriate model

We'll implement **Option 3: Inline Detection with Transparent Switching**

---

## Implementation

### Step 1: Task Detection Patterns

Add to `AGENTS.md` (already done):

```markdown
## Smart Model Selection (ALWAYS ACTIVE)

Before responding, analyze task type:
- Email checks, calendar, memory search → Flash
- Task capture, drafts, daily ops → Haiku
- Simple scripts, data processing → Mini
- Complex docs, planning, analysis → Sonnet
- Critical decisions, high-stakes → Opus
```

### Step 2: Enable Dynamic Model Override

The agent will use detection logic to choose models on-the-fly.

**Detection Keywords:**

```javascript
// Flash triggers
["check email", "search memory", "calendar", "inbox", "what's on", "summarize transcript"]

// Haiku triggers  
["draft email", "capture task", "quick", "update notes", "meeting notes", "simple question"]

// Mini triggers
["script", "process csv", "parse", "transform data", "simple code", "automation"]

// Opus triggers
["critical decision", "contract", "legal", "compliance", "strategic", "executive", "FDA", "CMS submission"]

// Sonnet (default)
// Everything else
```

### Step 3: Response Format

When switching models, note it subtly:

```
🔵 Using Haiku for quick response
📧 Email check results...

🟢 Using Flash for bulk search
📁 Found 23 matching entries...

🔴 Using Opus for critical analysis
📊 Strategic recommendation...
```

---

## Configuration Updates

No additional gateway config needed - the detection logic is embedded in agent instructions.

**Current Config:**
```json
{
  "models": {
    "anthropic/claude-haiku-3-5": { "alias": "haiku" },
    "openai/gpt-4o-mini": { "alias": "mini" },
    "google/gemini-1.5-flash": { "alias": "flash" },
    "anthropic/claude-opus-4-5": { "alias": "opus" }
  }
}
```

---

## Usage Examples

### Automatic Detection

**User:** "Check my email"
**System:** *Detects: email check → Use Flash*
**Response:** 
```
🟢 Using Flash for email scan

📧 Email Check - 8:16 AM
...
```

**User:** "Draft response to Brent about the meeting"
**System:** *Detects: draft email → Use Haiku*
**Response:**
```
🔵 Using Haiku for draft

**Draft Email to Brent:**
...
```

**User:** "Help me decide if we should switch vendors"
**System:** *Detects: critical decision → Use Opus*
**Response:**
```
🔴 Using Opus for strategic analysis

**Vendor Switch Analysis:**
...
```

### Manual Override

**User:** "Use opus for this: analyze our Q1 strategy"
**System:** *Manual override confirmed*
**Response:**
```
🔴 Using Opus (as requested)

**Q1 Strategy Analysis:**
...
```

---

## Cost Tracking

The agent will track approximate costs:

```
Monthly estimate based on usage:
- Email checks (Flash): 50 queries × $0.001 = $0.05
- Quick tasks (Haiku): 100 queries × $0.01 = $1.00
- Automation (Mini): 20 queries × $0.005 = $0.10
- Documentation (Sonnet): 50 queries × $0.10 = $5.00
- Strategic (Opus): 5 queries × $0.50 = $2.50
────────────────────────────────────────────────
Total: $8.65 vs $25+ with Sonnet-only
Savings: ~65%
```

---

## Testing & Validation

### Test Suite

Run these to verify switching:

```bash
# Should use Flash
"Check my email"
"Search memory for woundcare"
"What's on my calendar today?"

# Should use Haiku
"Draft an email to John"
"Capture task: Call Ryan this week"
"Quick question: What's the status?"

# Should use Mini
"Write a script to process this CSV"
"Parse this JSON and extract names"

# Should use Opus
"Critical decision: Should we pivot strategy?"
"Draft contract language for distributor agreement"
"Analyze Clear Health Pass competitive position"

# Should stay Sonnet (default)
"Write comprehensive documentation for..."
"Design the architecture for..."
"Create project plan for Sprint 2"
```

---

## Monitoring

Track model usage in memory logs:

```markdown
## 2026-01-27 Model Usage
- Flash: 12 queries (email checks, memory search)
- Haiku: 8 queries (drafts, quick tasks)
- Mini: 2 queries (data processing)
- Sonnet: 15 queries (documentation, planning)
- Opus: 1 query (strategic decision)

Estimated cost: $2.85
Savings vs Sonnet-only: $12.15 (81%)
```

---

## Advanced: Context-Aware Switching

The agent learns from context:

**Conversation flow:**
```
User: "Check my email"
Agent: [Uses Flash] → Found Patrick's distributor agreement

User: "What does it say?"
Agent: [Stays Flash] → Quick summary of key terms

User: "Help me review the legal terms carefully"
Agent: [Switches to Opus] → Detailed legal analysis
```

**Smart escalation:**
```
User: "Quick question about our CMS submission"
Agent: [Detects: CMS + submission → Escalate to Opus]
       "This is regulatory-critical. Switching to Opus for accuracy."
```

---

## Fallback & Error Handling

If model unavailable:
```
1. Try fallback: Flash → Haiku → Mini → Sonnet
2. Notify user: "Flash unavailable, using Haiku instead"
3. Log incident for monitoring
```

---

## Limitations

**What automatic switching CAN'T do:**
- ❌ Switch mid-conversation without context break
- ❌ Pre-emptively upgrade complexity mid-task
- ❌ Read your mind about when you need Opus vs Sonnet

**What it CAN do:**
- ✅ Detect obvious task types from keywords
- ✅ Use cheaper models for routine work
- ✅ Escalate to expensive models when critical
- ✅ Learn patterns over time

---

## Maintenance

**Weekly review:**
1. Check `memory/` logs for model usage stats
2. Adjust detection patterns if misclassifications occur
3. Update cost estimates based on actual usage

**Monthly optimization:**
1. Analyze which tasks could use cheaper models
2. Review Opus usage - ensure it's worth the cost
3. Update MODEL-SELECTION-RULES.md with learnings

---

## Future Enhancements

**Planned improvements:**
1. ML-based task classification (beyond keyword matching)
2. User preference learning ("Michael prefers Opus for X")
3. Automatic cost budgeting and alerts
4. A/B testing model quality vs cost trade-offs

---

*Last updated: 2026-01-27*
*Status: ✅ Active - Detection logic embedded in AGENTS.md*
