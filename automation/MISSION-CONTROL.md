# Mission Control - Jarvis Intelligence Hub

**Status:** 🟢 ACTIVE  
**Workflow ID:** 07c0UEtyANfhe0l7  
**Created:** 2026-02-01 23:26 EST  
**n8n Instance:** https://n8n.srv1055324.hstgr.cloud

---

## What It Does

Mission Control is an always-on n8n workflow that helps Jarvis stay informed and proactive **24/7**.

### Real-Time Monitoring (Every 5 Minutes)
- ✅ **Email Check**: Monitors A-Team + 1 SNETWORK labels for urgent messages
- ✅ **Smart Routing**: Determines what to check based on time of day
- ✅ **State Tracking**: Maintains `mission-control-state.json` with current status

### Overnight Intelligence (2-6 AM)
Spreads research across 4 hours to avoid rate limits:
- **2:00-2:15 AM**: Competitor research (wound care companies)
- **2:15-2:30 AM**: CMS/Medicare regulatory updates
- **2:30-2:45 AM**: Wound care industry news
- **2:45-3:00 AM**: Compile intelligence report

### Morning Prep (6:30 AM)
- Assembles daily briefing components
- Prepares email summaries
- Gathers calendar info
- Compiles overnight research findings

### Work Hours (7 AM - 11 PM)
- **Calendar monitoring** every 30 minutes
- **Task file watching** for changes
- **Context building** for active projects

---

## How It Helps Jarvis

**Before Mission Control:**
- I wake up uninformed every session
- 30-minute delay on urgent emails
- Manual research during conversations
- Reactive instead of proactive

**After Mission Control:**
- I wake up **already briefed** on overnight activity
- **5-minute response time** on urgent emails
- Research **pre-compiled** before you need it
- **Continuous awareness** even offline

---

## State File

Location: `mission-control-state.json`

Tracks:
- Last check timestamps
- Pending urgent items
- Research findings cache
- Briefing preparation status
- Active alerts

Jarvis reads this at session start to get up to speed instantly.

---

## Next Enhancements

1. **Webhook Integration**: Let n8n ping OpenCLAW directly when critical events happen
2. **Email Auto-Drafts**: Generate reply drafts automatically
3. **Calendar Prep**: Pull relevant docs before meetings
4. **Task Parsing**: Auto-extract tasks from voice notes
5. **Opportunity Scanner**: Track competitor moves, market shifts

---

## Monitoring

Check workflow status:
```bash
curl -H "X-N8N-API-KEY: [key]" \
  "https://n8n.srv1055324.hstgr.cloud/api/v1/workflows/07c0UEtyANfhe0l7"
```

View recent executions:
```bash
curl -H "X-N8N-API-KEY: [key]" \
  "https://n8n.srv1055324.hstgr.cloud/api/v1/executions?workflowId=07c0UEtyANfhe0l7&limit=5"
```

---

**This is v1 - a foundation that makes Jarvis smarter over time.**
