# System Enhancements - Future Improvements

**Last Updated**: 2026-01-26

---

## 🎯 Pending Enhancements

### **1. Complete Docker AI Agents Setup & Training**
**Priority**: Medium  
**Requested**: 2026-01-27  
**Status**: Agents installed and running, need to explore usage  
**What's Ready**:
- ✅ Agent Zero running on http://localhost:50001 (autonomous coding agent)
- ✅ Maestro API running on http://localhost:3000 (10 specialized agents)
- ✅ Auto-restart configured for both
- ✅ Management scripts created (start-all-agents.sh, stop-all-agents.sh)
- ✅ Full documentation in /Users/michaelparson/maestro/

**Next Steps**:
1. Explore Agent Zero web UI - test coding task
2. Try Maestro CLI - test different specialized agents
3. Learn when to use which agent vs Clawdbot
4. Test project cloning and workspace management
5. Configure Telegram bot for Maestro (optional)
6. Set up GitHub token for private repos (optional)

**Documentation**:
- `/Users/michaelparson/maestro/SETUP-COMPLETE.md` - Full setup guide
- `/Users/michaelparson/maestro/QUICK-REFERENCE.md` - Quick commands
- `/Users/michaelparson/maestro/DOCKER-MANAGEMENT.md` - Docker management

**Effort**: 30-60 minutes to explore and learn  
**Value**: High - powerful coding and business automation tools

---

### **2. Enable Visible Thinking Mode** 
**Priority**: Low  
**Requested**: 2026-01-26  
**Issue**: Brain button (🧠) toggles but doesn't show `<thinking>` blocks in UI  
**Current Behavior**: Button goes red/not-red but no visible change in responses  
**Desired**: When thinking mode is ON (red), show reasoning process in responses  
**Status**: Requires session config change to enable `thinking: "interleaved"` or `thinking: "enabled"`  
**Effort**: 5 minutes (config update + restart)  
**Value**: Medium - helpful for debugging complex problems, understanding reasoning

**Implementation**:
- Update `clawdbot.json` to enable thinking visibility
- Test with brain button toggle
- Add tooltip to button explaining what it does

---

## 📋 Future Enhancements (Not Yet Scheduled)

### **2. Webchat Image Upload**
**Priority**: Medium  
**Requested**: 2026-01-26  
**Issue**: Can't drag/drop images in webchat (works in Telegram though)  
**Status**: Need to research webchat capabilities configuration  
**Workaround**: Use Telegram for images (fully working)

### **3. Email Integration for Plaud Transcripts**
**Priority**: Low  
**Requested**: 2026-01-26  
**Issue**: Currently manual - paste transcripts to process  
**Desired**: Auto-process when Plaud emails transcripts  
**Status**: Requires email forwarding setup  
**Workaround**: Telegram paste works great for now

---

## ✅ Completed Enhancements

- Google Workspace integration (both accounts) - 2026-01-25
- Voice task capture via Telegram - 2026-01-25
- Plaud transcript processing - 2026-01-25
- GitHub backup automation - 2026-01-25
- Security hardening (file permissions) - 2026-01-25
- Email monitoring (A-Team + 1 SNETWORK labels) - 2026-01-25
- Hybrid memory strategy - 2026-01-25
- Desktop/mobile shortcuts - 2026-01-25

---

**Notes**:
- Enhancements are tracked here for when time allows
- Priority: High = Do soon, Medium = Nice to have, Low = When convenient
- Effort estimates are approximate
- Completed items moved to bottom for reference
