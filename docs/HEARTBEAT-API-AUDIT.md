# Heartbeat API & Cost Audit
**Date:** 2026-02-02  
**Purpose:** Prevent rate limiting and unnecessary API costs

---

## Current Heartbeat Operations (Every 30 Min)

### ✅ SAFE (No API costs)
| Task | Method | Cost |
|------|--------|------|
| Email monitoring | `gog gmail search` (local CLI) | $0 |
| Git auto-commit | Local git commands | $0 |
| Daily memory file creation | File operations | $0 |
| Calendar checks | `gog calendar list` (local CLI) | $0 |
| File reads/writes | File system operations | $0 |
| Proactive observation | Analyzing conversation | $0 |

### ⚠️ USES APIS (Controlled)
| Task | Method | Frequency | Daily Calls | Rate Limit Risk |
|------|--------|-----------|-------------|-----------------|
| **War Room Searches** | `web_search` (Brave API) | 2-6 AM only (8-10 searches) | 8-10 | **LOW** (scheduled) |
| **Weather** | `weather` skill (wttr.in) | 7 AM only | 1 | **NONE** (free service) |

### 🚨 RISKY (Not Controlled)
| Task | Method | Current Spec | Problem |
|------|--------|--------------|---------|
| **AI/Industry Updates** | `web_search`? | "Random timing throughout day" | **Could search every 30 min = 48 calls/day** |
| **FutureNTech monitoring** | Unknown | "Daily checks" | **Not clear what this does** |

---

## Rate Limit Analysis

### Brave Search API
- **Limit:** 2,000 queries/month (free tier) OR 15,000/month (paid)
- **Current usage:** 8-10 searches/night = ~240-300/month
- **Safe margin:** ✅ Well under limit

### Risk if we add "AI Updates throughout day":
- Random checks every 2-3 heartbeats = ~10-15 searches/day
- Monthly: 300-450 searches
- **Total with war room:** 540-750/month
- **Status:** Still under 2,000 limit, but eating into budget

---

## Recommended Limits

### War Room (Keep Current)
✅ **2:00 AM - 6:00 AM only**  
✅ **1-2 searches per heartbeat (every 30 min)**  
✅ **Total: 8-10 searches/night**

### AI/Industry Updates (Add Limits)
⚠️ **3 times per day maximum:**
- **9:00 AM** - Morning tech news
- **2:00 PM** - Afternoon industry updates  
- **7:00 PM** - Evening AI releases

⚠️ **2 searches per check** (6 total/day)  
⚠️ **Monthly: ~180 searches**

### FutureNTech (Clarify & Limit)
⚠️ **Once per day at 8:00 AM**  
⚠️ **Action:** Check Google Form submissions (no API - uses `gog` CLI)  
⚠️ **No searches unless Michael requests**

---

## Total Monthly API Budget

| Task | Searches/Month | Cost (Free Tier) |
|------|----------------|------------------|
| War Room | 240-300 | $0 |
| AI Updates | ~180 | $0 |
| Weather | 30 | $0 |
| **TOTAL** | **450-510** | **$0** |
| **Buffer** | 1,490 remaining | Safe ✅ |

---

## 3-Strike Rate Limit Protection

**Rule:** If any API call fails 3 times in a row due to rate limiting:
1. **Stop** calling that API for 24 hours
2. **Alert** Michael immediately
3. **Log** to `memory/api-failures.json`
4. **Suggest** alternative approach

---

## Recommendations

1. ✅ **Keep war room searches** (2-6 AM, controlled)
2. ⚠️ **Add strict schedule for AI/industry updates** (3x daily, not random)
3. ⚠️ **Clarify FutureNTech monitoring** (form checks only, no searches)
4. ✅ **Add rate limit protection** (3-strike rule)
5. ✅ **Monthly audit** (check actual usage vs. budget)

---

**Next Steps:**
- [ ] Update HEARTBEAT.md with explicit API limits
- [ ] Implement 3-strike protection
- [ ] Track API usage in `memory/api-usage.json`
