# Alert Priority Scoring System

**Purpose:** Differentiate urgent emails from routine ones, ensuring Michael sees critical messages immediately while reducing alert fatigue.

**Applies to:** email-monitor cron (every 5 minutes)

---

## Priority Levels

### 🔴 P1 (CRITICAL) — Immediate Alert

**Action:** Write to `.urgent-email-alert.json` + send Telegram alert immediately

**Triggers:**
- **From John Cataldi (CEO)** — ANY email, ANY time
- **From Pat (Legal)** — ANY email (legal matters don't wait)
- **Subject contains:** "urgent", "asap", "emergency", "critical", "immediately"

**Why:** These require immediate attention regardless of time or context. John is Michael's boss, Pat handles legal/compliance issues that can't wait.

---

### 🟠 P2 (HIGH) — Alert Within 15 Minutes

**Action:** Write to `.urgent-email-alert.json` (included in next heartbeat or briefing)

**Triggers:**
- **From Brent (CFO)** — billing/financial topics
- **From Phil** — onboarding issues, doctor coordination
- **Subject contains:** "issue", "problem", "error", "down", "broken", "deadline"
- **Reply chains** where Michael was previously involved (thread continuity)

**Time Exception:** Outside business hours (8 AM - 6 PM EST), P2 downgrades to P3 unless from John or Pat.

**Why:** These are important but not drop-everything urgent. They can wait 15-30 minutes. Outside work hours, they can wait until morning unless truly critical.

---

### 🟡 P3 (NORMAL) — Next Briefing

**Action:** Log to `memory/work-log.json`, include in next morning briefing

**Triggers:**
- All other A-Team emails (Gavyn, Sil, Thomas, etc.)
- Routine 1 SNETWORK process emails (Orders, IVRs, Intake, Onboarding)
- Informational updates, FYIs
- Status updates

**Why:** Important to review, but not time-sensitive. Morning briefing is the right place.

---

### ⚪ P4 (LOW) — Log Only

**Action:** Log to `memory/work-log.json`, mention only if Michael explicitly asks

**Triggers:**
- Automated notifications (Zoho, Smartsheet, Otter.ai)
- Newsletter-style updates
- CC'd emails where Michael isn't the primary recipient
- Marketing/promotional emails

**Why:** Background noise. Log for completeness, but don't clutter briefings.

---

## Scoring Rules

### Sender Weight is Highest Signal

**Who matters more than what:**
- John Cataldi → Always P1
- Pat (Legal) → Always P1
- Brent (CFO) → P2 (financial/billing context)
- Phil → P2 (onboarding/doctor coordination)
- Other A-Team → P3
- 1 SNETWORK automated → P3 or P4

### Subject Keywords are Secondary

Subject line keywords elevate priority:
- "urgent", "asap", "emergency", "critical", "immediately" → +1 level (P3→P2, P2→P1)
- "issue", "problem", "error", "down", "broken", "deadline" → P2 floor

### Time of Day Context

**Business hours (8 AM - 6 PM EST):**
- P2 stays P2
- P3 stays P3

**Outside business hours:**
- P2 → P3 (unless from John or Pat)
- Reason: Non-critical issues can wait until morning

### Multiple Signals Stack

- **John + "urgent" subject** → P1 with emphasis
- **Brent + "deadline" + business hours** → P2
- **Phil + "issue" + 11 PM** → P3 (time downgrade)

### When Uncertain, Round UP

- P3 vs P4? → Choose P3
- P2 vs P3? → Choose P2
- **Better to over-alert than under-alert**

### Never Downgrade John or Pat

- John Cataldi → Always P1, no exceptions
- Pat (Legal) → Always P1, no exceptions
- These two bypass all time/context rules

---

## Alert Format

Alerts written to `.urgent-email-alert.json` include priority badge:

```json
{
  "sender": "John Cataldi",
  "subject": "Q4 performance review",
  "preview": "Need to discuss numbers before board meeting...",
  "priority": "P1",
  "draft_reply": "[optional, if Jarvis can draft one]",
  "timestamp": "2026-02-04T16:55:00Z"
}
```

**Telegram alerts:**
- 🔴 P1: "🔴 CRITICAL: Email from John Cataldi re: Q4 performance review"
- 🟠 P2: "🟠 HIGH: Email from Brent re: Invoice issue - Kenya needs approval"

---

## Morning Briefing Integration

The morning briefing groups emails by priority:

```
📧 IMPORTANT EMAILS

🔴 P1 (1 overnight):
- John Cataldi: "Board meeting prep" — Needs response by 10 AM

🟠 P2 (2 overnight):
- Brent: "Invoice approval needed" — Kenya waiting on sign-off
- Phil: "Doctor onboarding issue" — Dr. Smith's paperwork incomplete

🟡 P3 (5 overnight):
- Gavyn: Weekly update
- Sil: Order confirmation #1234
- [...]

(⚪ P4 items logged but not shown)
```

---

## Cost Impact

Priority scoring adds minimal overhead:
- **Model:** Mini (gpt-4o-mini)
- **Additional tokens:** ~500-1000 per run (for scoring logic)
- **Cost increase:** ~$0.0001 per run = ~$0.03/day = **~$1/month**

Worth it for reduced alert fatigue and better prioritization.

---

## When to Adjust

Review and update priority rules if:
- Michael misses critical emails (scoring too low)
- Michael gets too many P1/P2 alerts (scoring too high)
- New A-Team members with different urgency profiles
- New project types with different priority needs

**Priority scoring is a living system.** Adjust as patterns emerge.
