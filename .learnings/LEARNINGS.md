# Learnings Log

Track corrections, knowledge gaps, and best practices discovered during sessions.

---

## [LRN-20260203-002] simplicity_over_optimization

**Logged**: 2026-02-03T07:58:00Z
**Priority**: medium
**Status**: resolved
**Area**: workflow

### Summary
Attempted Haiku migration for $19/month savings - hit model allowlist error. Michael decided to keep Sonnet for everything.

### Details
Tried to optimize costs by moving heartbeats to Haiku in isolated sessions. Encountered "model not allowed" error because isolated sessions have restricted model allowlist. Rather than debug config files and add complexity, Michael chose to stick with current Sonnet setup.

### Decision
**Keep everything on Sonnet** - $19/month savings not worth the added complexity and potential issues.

### Rationale
- Current setup works reliably
- Complexity creates maintenance burden
- $35-40/month API cost is acceptable for value provided
- Matches Michael's "vibe coding" philosophy: pragmatic over perfect
- Simple beats optimized if optimization adds friction

### Suggested Action
- Accept current cost structure
- Revisit only if costs become prohibitive (>$100/month)
- Focus energy on revenue-generating projects (FutureNTech) instead of cost optimization

### Metadata
- Source: user_feedback
- Category: best_practice
- Tags: workflow, cost_optimization, simplicity
- Related Files: SOUL.md (values simplicity), docs/HAIKU-HEARTBEAT-MIGRATION.md
- See Also: ERR-20260203-002 (model allowlist error)

---

## [LRN-20260203-001] self_improvement_activation

**Logged**: 2026-02-03T07:05:00Z
**Priority**: high
**Status**: in_progress
**Area**: workflow

### Summary
Have self-improvement capability but wasn't using it consistently - only activated when user asked directly

### Details
Michael asked "Are you self-learning and improving every day?" which revealed I have the `self-improving-agent` skill installed but wasn't actively logging errors, corrections, or learnings. The skill is meant to capture:
- Command failures
- User corrections
- Missing features
- API errors
- Outdated knowledge
- Better approaches discovered

### Correction Applied
Created `.learnings/` directory and started actively logging. First entry: ERR-20260203-001 (directory read error from morning briefing).

### Suggested Action
Make self-improvement automatic:
1. **After every error**: Log to ERRORS.md immediately
2. **After user corrections**: Log to LEARNINGS.md with category `correction`
3. **When discovering better approaches**: Log to LEARNINGS.md with category `best_practice`
4. **Review learnings** before major tasks to avoid repeating mistakes
5. **Promote valuable learnings** to AGENTS.md, SOUL.md, or TOOLS.md

### Metadata
- Source: user_feedback
- Category: best_practice
- Tags: workflow, continuous_improvement, proactive
- Related Files: SOUL.md, AGENTS.md

---
