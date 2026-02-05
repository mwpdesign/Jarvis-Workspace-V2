# Opus Usage Patterns - Auto-Escalation Discovery

**Purpose:** Track when Opus is manually escalated to identify patterns worth auto-escalating.

**Created:** 2026-02-04  
**Status:** Active (collecting data)

---

## Why Track Opus Usage?

**The goal:** Learn which tasks ALWAYS benefit from Opus quality, then auto-escalate those categories.

**The problem:** Manual escalation requires Michael to remember when to use `/model opus`. If certain categories ALWAYS need Opus, we should detect that pattern and auto-escalate.

**The solution:** Log every Opus escalation with context, analyze patterns over 4+ weeks, propose auto-escalation rules.

---

## Tracked Categories

| Category | Description | Examples |
|----------|-------------|----------|
| **legal** | Legal review, contract analysis, liability questions | "Review this MSA", "Legal risk assessment" |
| **compliance** | CMS regulations, HIPAA, tribal sovereignty docs | "CMS coverage policy review", "HIPAA audit prep" |
| **financial** | Pricing decisions, ROI calculations, budget planning | "Should we charge $X for Y?", "Calculate ROI on this project" |
| **strategic** | Business strategy, competitive positioning, major decisions | "Evaluate this opportunity", "Strategic partnership decision" |
| **security** | Security audits, credential management, threat assessment | "Review security posture", "Access control decision" |
| **contract-review** | Vendor contracts, client agreements, SOWs | "Review this vendor agreement", "Draft SOW for client" |
| **executive-comms** | Emails to John/CEO, board presentations, investor updates | "Draft email to John about...", "Board deck for Q1" |
| **other** | Anything that doesn't fit above categories | Miscellaneous high-stakes work |

---

## How to Log Escalations

**When Opus is manually triggered** (via `/model opus` or explicit request):

1. **After the Opus session completes**, log an entry to `memory/opus-usage-log.json`
2. **Include:**
   - Timestamp
   - Trigger (what caused the escalation)
   - Topic category (from list above)
   - Duration estimate (how long Opus was active)
   - Value assessment (was Opus noticeably better than Sonnet?)

**Example entry:**
```json
{
  "timestamp": "2026-02-05T10:30:00-05:00",
  "trigger": "Michael requested contract review for new vendor",
  "topic_category": "contract-review",
  "duration_est": "15 minutes",
  "value_assessment": "Yes - caught 3 liability issues Sonnet might have missed"
}
```

---

## Logging Process

### Manual Logging (Agent)

After an Opus session:
```markdown
1. Note what the session was about
2. Categorize it (legal, compliance, financial, etc.)
3. Assess: Was Opus quality clearly better than Sonnet would have been?
4. Append to memory/opus-usage-log.json
```

### Automatic Logging (Future)

Eventually, the system could auto-detect Opus sessions and prompt for categorization:
- "You just used Opus for 20 minutes. What was it for? (legal/compliance/financial/strategic/security/contract-review/executive-comms/other)"

---

## Review Cycle

### Weekly Review (During Memory Consolidation)

**Every Sunday 2 AM**, the memory-consolidation cron:
1. Reads `memory/opus-usage-log.json`
2. Counts entries by category
3. If any category has **5+ entries in last 4 weeks**, adds it to `auto_escalation_candidates`
4. Notes the recommendation in `MEMORY.md`

### Monthly Review (1st of Month)

Michael reviews:
- `opus-usage-log.json` → `analysis.by_category`
- `analysis.auto_escalation_candidates`
- Decides which categories to add to auto-escalation rules

---

## Decision Framework

**When to propose auto-escalation:**

| Criteria | Action |
|----------|--------|
| **5+ escalations** in 4 weeks for same category | Add to `auto_escalation_candidates` |
| **10+ escalations** in 8 weeks | Strongly recommend auto-escalation |
| **Consistent value assessment** ("Yes, Opus was better") | Increase confidence |
| **Mixed value assessment** | Collect more data before deciding |

---

## Auto-Escalation Rules (Future)

Once patterns are identified, add to AGENTS.md:

```markdown
### Auto-Escalation Rules (Learned)

Based on 4+ weeks of usage data, these categories automatically escalate to Opus:

1. **Legal review** (15 escalations, 100% value-positive)
2. **Executive communications** (12 escalations, 95% value-positive)
3. **Contract review** (10 escalations, 100% value-positive)
```

---

## Example Usage Log Entries

### High-Value Escalation
```json
{
  "timestamp": "2026-02-10T14:00:00-05:00",
  "trigger": "User requested legal review of distributor agreement",
  "topic_category": "legal",
  "duration_est": "30 minutes",
  "value_assessment": "Yes - identified 2 liability clauses that needed revision"
}
```

### Low-Value Escalation
```json
{
  "timestamp": "2026-02-12T09:15:00-05:00",
  "trigger": "User requested Opus for routine email draft",
  "topic_category": "other",
  "duration_est": "5 minutes",
  "value_assessment": "No - Sonnet would have been fine for this"
}
```

### Strategic Decision
```json
{
  "timestamp": "2026-02-15T16:30:00-05:00",
  "trigger": "Evaluating new business opportunity with Clear Health Pass",
  "topic_category": "strategic",
  "duration_est": "45 minutes",
  "value_assessment": "Yes - deeper competitive analysis and risk assessment than Sonnet"
}
```

---

## Analysis Queries

**Count by category:**
```bash
jq '.entries | group_by(.topic_category) | map({category: .[0].topic_category, count: length}) | sort_by(.count) | reverse' memory/opus-usage-log.json
```

**Recent high-value escalations:**
```bash
jq '.entries | map(select(.value_assessment | contains("Yes"))) | .[-10:]' memory/opus-usage-log.json
```

**Candidates for auto-escalation:**
```bash
jq '.analysis.auto_escalation_candidates' memory/opus-usage-log.json
```

---

## Integration Points

### AGENTS.md
- Model selection section notes Opus escalation tracking
- Reminds agent to log after Opus sessions

### Memory Consolidation Cron
- Weekly review of opus-usage-log.json
- Auto-detection of 5+ escalations per category
- Recommendation logging to MEMORY.md

### Cost Tracking
- Opus sessions are expensive (~$0.50/query vs Sonnet ~$0.10)
- If a category is escalated frequently, auto-escalation saves decision overhead
- Track cost impact: "Legal reviews cost $X in Opus time, but saved $Y in liability risk"

---

## Success Metrics

**After 4 weeks:**
- ✅ 20+ total escalations logged
- ✅ At least 3 categories with 5+ entries
- ✅ Clear value assessment patterns (which categories always benefit from Opus)

**After 8 weeks:**
- ✅ Auto-escalation rules implemented for top 2-3 categories
- ✅ Reduced manual escalation decisions by 50%+
- ✅ Cost-benefit analysis shows ROI on Opus usage

---

## Notes

- **Privacy:** Log only category and general topic, not sensitive details
- **Consistency:** Use standardized categories for accurate pattern detection
- **Honesty:** If Opus wasn't actually better than Sonnet, note it
- **Evolution:** Categories may change over time as business needs shift

---

*Created: 2026-02-04*  
*Part of Build 5.4 - Opus Usage Tracking*
