# Briefing Feedback Loop

**Purpose:** Continuously improve morning briefings based on Michael's ratings and feedback.

---

## How It Works

1. **Michael rates each briefing** (via Telegram voice or text)
2. **Jarvis logs feedback** to `memory/briefing-feedback.json`
3. **Patterns emerge** from ratings over time
4. **Briefing adapts** based on learned preferences

---

## Rating Scale

| Rating | Meaning | What It Signals |
|--------|---------|-----------------|
| **5** | Excellent | Perfect balance, high value, keep doing this |
| **4** | Good | Mostly useful, minor tweaks only |
| **3** | Fine | Acceptable but room for improvement |
| **2** | Noisy | Too much low-value content, needs trimming |
| **1** | Useless | Major problems, rethink the approach |

---

## Briefing Sections (Reference)

Standard sections in the 7 AM briefing:

1. **affirmations** — Daily affirmations (5 statements)
2. **weather** — Indianapolis forecast for today
3. **appointments** — Today's calendar events
4. **time-sensitive** — Tasks due today or overdue
5. **emails** — Important overnight emails (P1/P2/P3 breakdown)
6. **task-priorities** — Top 3-5 tasks for today
7. **completions** — Yesterday's completed work by project
8. **war-room** — Overnight competitor/regulatory/industry intel
9. **cost-check** — Yesterday's estimated spend
10. **lyric-seed** — Daily song title + concept for Altering Gray

---

## How to Submit Feedback

### Via Telegram (Voice or Text)

**Simple rating:**
```
briefing: 4
```

**Rating with notes:**
```
briefing: 4, best: war-room, worst: weather, notes: skip weather when it's boring
```

**Detailed feedback:**
```
briefing feedback: 5, war room intel was perfect, email breakdown helped prioritize, 
skip affirmations on weekdays
```

### Voice Task Capture Pattern

Jarvis automatically detects:
- "briefing" + number (1-5)
- "briefing feedback" + details
- "briefing was a [number]"

Examples:
- "Briefing was a 4 today"
- "Briefing feedback: 5, loved the war room section"
- "Briefing: 3, too much noise in the email section"

---

## How Feedback Gets Incorporated

### Automatic Adjustments

After **3+ ratings** for a section:
- **Consistent 1-2 ratings** → Section gets trimmed or skipped
- **Consistent 4-5 ratings** → Section gets expanded or prioritized
- **Mixed ratings** → No automatic change, wait for more data

### Manual Overrides

Feedback can include explicit rules:
- `"skip_sections": ["weather", "affirmations"]` — Never include these
- `"include_more": ["war-room", "completions"]` — Expand these sections
- `"include_less": ["emails"]` — Condense this section
- `"custom_rules": ["Skip weather unless severe alerts"]` — Context-specific

### Feedback Review Cycle

- **Weekly review** (Sundays): Jarvis analyzes feedback from past 7 days
- **Monthly review** (1st of month): Broader pattern analysis
- **Immediate adjustments**: If Michael says "skip X", it takes effect next briefing

---

## Feedback Storage Format

Example entry in `memory/briefing-feedback.json`:

```json
{
  "date": "2026-02-05",
  "overall": 4,
  "best_section": "war-room",
  "worst_section": "weather",
  "notes": "Weather is redundant, I check my phone. War room intel was perfect timing."
}
```

---

## Current Adjustments

Check `memory/briefing-feedback.json` → `adjustments` section for active rules.

**Example adjustments:**
```json
{
  "adjustments": {
    "include_more": ["war-room", "completions"],
    "include_less": ["weather"],
    "skip_sections": ["affirmations"],
    "custom_rules": [
      "Skip weather unless severe alerts or unusual conditions",
      "Always lead with P1 emails if any exist",
      "Expand war-room findings if 2+ items"
    ]
  }
}
```

---

## Integration with Morning Briefing Cron

The morning-briefing cron job reads `memory/briefing-feedback.json` before assembling the briefing:

1. Check `adjustments.skip_sections` — omit these entirely
2. Check `adjustments.include_more` — expand these with more detail
3. Check `adjustments.include_less` — condense these to 1-2 lines
4. Apply `custom_rules` as context-specific logic

---

## Stats Tracking

`briefing-feedback.json` maintains aggregate stats:
- **total_ratings:** How many briefings have been rated
- **average_rating:** Mean score across all ratings
- **last_updated:** Most recent feedback timestamp

This helps track improvement over time.

---

## Feedback Analysis Queries

To review feedback patterns:

**Last 7 days:**
```bash
jq '.ratings | map(select(.date >= "2026-02-01"))' memory/briefing-feedback.json
```

**Average rating by section:**
```bash
jq '.ratings | group_by(.best_section) | map({section: .[0].best_section, count: length})' memory/briefing-feedback.json
```

**Most common complaints:**
```bash
jq '.ratings | map(.worst_section) | group_by(.) | map({section: .[0], count: length}) | sort_by(.count) | reverse' memory/briefing-feedback.json
```

---

## Iteration Cycle

**Week 1:** Baseline (standard briefing, collect feedback)  
**Week 2:** Apply first adjustments based on patterns  
**Week 3:** Fine-tune based on new feedback  
**Week 4+:** Maintain and refine as preferences evolve

**Goal:** Briefing rating consistently 4+ after first month of tuning.

---

*Created: 2026-02-04*  
*Part of Build 5.3a - Briefing Feedback Infrastructure*
