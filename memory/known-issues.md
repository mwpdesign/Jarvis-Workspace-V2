# Known Issues & Improvement Tracking

## Active Issues

### Telegram Forum Topic Detection (2026-02-09)
**Problem:** OpenClaw Telegram plugin not correctly parsing `message_thread_id` from Telegram forum topics
**Impact:** All messages appear as "topic:16" regardless of actual topic thread
**Current Workaround:** Set `requireMention: false` for entire group - responds to all messages regardless of topic
**Proper Fix Needed:** OpenClaw plugin should correctly parse and report topic IDs
**Status:** Monitoring for OpenClaw updates
**Next Steps:**
- Check OpenClaw changelog on updates
- Test topic detection after each OpenClaw update
- Consider opening GitHub issue if not fixed in next 2-3 releases

**Configuration Applied:**
```json
{
  "channels": {
    "telegram": {
      "groups": {
        "-1003703487338": {
          "requireMention": false
        }
      }
    }
  }
}
```

**Why This Matters:** 
- Can't distinguish behavior by topic (Scripts vs Research vs General)
- All automation treats messages the same way
- Future: might want different responses in different topics

**Michael's Directive (2026-02-09):** "Make sure you're self-improving always trying to find ways to fix things when we don't have things working the way that we would like them"

---

## Resolved Issues
(None yet)
