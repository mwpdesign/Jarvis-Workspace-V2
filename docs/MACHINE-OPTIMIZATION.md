# Machine Optimization Guide
**MacBook Pro M1 Max (2021) | 64GB RAM | 4TB Storage**

**Last Updated:** 2026-02-13
**Status:** Active optimization in progress

---

## Storage Overview

**Total:** 3.6TB available
**Used:** 11GB system + user data
**Available:** 2.2TB (~60% free)
**Health:** ✅ Excellent - plenty of headroom

### Storage Breakdown
| Directory | Size | Status |
|-----------|------|--------|
| Music | 796GB | Largest consumer (Logic projects, samples, stems) |
| Movies | 43GB | Video projects, renders |
| Pictures | 3.6GB | Assets, screenshots |
| Desktop | 1.1GB | Active workspace |
| Documents | 195MB | Lean |
| Downloads | 244KB | **Excellent!** Very clean |

### Library Hotspots
*(Analyzing - will update with top consumers)*

---

## Stream Deck Optimization

### Current Setup
- **Model:** Stream Deck XL (confirmed via plugin profiles)
- **Profiles Found:** 9 custom profiles
- **Plugins Active:** Canon EOS Webcam Utility, Cubase, Volume Controller, Tutorial

### Usage Pattern Analysis

**High-Frequency Apps (Launch Priority):**
1. **Logic Pro** - Primary DAW for audio work
2. **Claude Desktop** - AI assistant (daily use)
3. **Cursor** - AI-assisted coding (daily use)
4. **Google Chrome** - Primary browser
5. **Telegram** - Primary messaging (Jarvis integration)
6. **Wispr Flow** - Voice dictation tool
7. **Docker** - Container management

**Medium-Frequency:**
- Adobe Creative Cloud (occasional design work)
- Stream Deck software (configuration)

**Terminal Commands (Automation Candidates):**
- `openclaw` operations (gateway restart, logs)
- `gog` Gmail/Calendar operations
- `git` operations (frequent commits/pushes)
- `cd ~/Desktop` (frequent navigation)
- Python scripts (CMS discovery tools)

---

## Recommended Stream Deck Layout

### Page 1: Core Workflow (Main)
```
┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Logic   │ Claude  │ Cursor  │ Chrome  │Telegram │  Wispr  │ Docker  │   →2    │
│  Pro    │ Desktop │   IDE   │         │         │  Flow   │         │  Apps   │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│Terminal │  Claw   │  Gmail  │Calendar │  GitHub │ Clawdbot│  CHP    │   →3    │
│         │ Status  │  (gog)  │  (gog)  │   (gh)  │ Restart │  Portal │Automate │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│  Music  │ Workspace│  Notes  │  Tasks  │  Email  │ Window  │Display  │   →4    │
│  Vol    │   Path  │  (nvim) │ KANBAN  │ Monitor │  Mgmt   │Settings │  Audio  │
└─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘
```

### Page 2: Secondary Apps
```
┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Adobe   │  Figma  │  Notion │Obsidian │ VS Code │  Zoom   │  Slack  │   ←1    │
│  CC     │         │         │         │         │         │         │  Main   │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Discord │WhatsApp │Messages │  Mail   │  Phone  │ Safari  │CleanMy  │   →3    │
│         │         │         │         │         │         │  Mac    │Automate │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│Activity │  Console│  Finder │  Trash  │SysPref  │TimeM    │  Backup │   →4    │
│Monitor  │         │         │         │         │         │  Status │  Audio  │
└─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘
```

### Page 3: Automation & Scripts
```
┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│  Claw   │  Claw   │  Claw   │   Git   │   Git   │  Gmail  │Calendar │   ←1    │
│ Restart │  Logs   │  Status │  Commit │  Push   │  Check  │  Today  │  Main   │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│  Task   │Morning  │War Room │  Email  │  CHP    │  Zoho   │WordPress│   ←2    │
│ Worker  │Briefing │  Intel  │ Monitor │  Portal │   CRM   │  Admin  │  Apps   │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│  Logic  │  Docker │  Python │  npm    │  brew   │  Clean  │  Backup │   →4    │
│  Open   │  Start  │  Run    │ Install │  Update │  Cache  │   Run   │  Audio  │
│ Project │Container│  Script │         │         │         │         │         │
└─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘
```

### Page 4: Audio Production
```
┌─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Logic   │  New    │  Save   │  Bounce │  Import │  Export │  Plugin │   ←1    │
│  Pro    │ Project │ Project │  Track  │  Audio  │  MIDI   │  Mgr    │  Main   │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Kemper  │  UA     │  Waves  │   SSL   │  Slate  │ EQ/Comp │Reverb/  │   ←2    │
│  Rig    │ Console │ Plugins │ Plugins │  Plugins│  Chain  │ Delay   │  Apps   │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Record  │  Play   │  Stop   │  Solo   │  Mute   │  Loop   │  Metro  │   ←3    │
│  Arm    │  Pause  │         │  Track  │  Track  │  Toggle │  nome   │Automate │
└─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘
```

---

## Quick Launch Scripts

**Create these scripts in `~/.clawdbot/workspace/scripts/streamdeck/`:**

### 1. `openclaw-restart.sh`
```bash
#!/bin/bash
openclaw gateway restart
osascript -e 'display notification "OpenClaw restarted" with title "Jarvis"'
```

### 2. `git-auto-commit-push.sh`
```bash
#!/bin/bash
cd ~/.clawdbot/workspace
git add -A
git commit -m "Auto-commit: $(date '+%Y-%m-%d %H:%M')"
git push origin master
osascript -e 'display notification "Workspace backed up" with title "Git Sync"'
```

### 3. `gmail-check.sh`
```bash
#!/bin/bash
gog gmail list --account=mike@clearhealthpass.com --max-results=5 --label=INBOX --label=UNREAD
```

### 4. `calendar-today.sh`
```bash
#!/bin/bash
gog calendar list --account=mike@clearhealthpass.com --time-min="$(date '+%Y-%m-%d')T00:00:00Z" --time-max="$(date -v+1d '+%Y-%m-%d')T00:00:00Z"
```

### 5. `workspace-path.sh`
```bash
#!/bin/bash
cd ~/.clawdbot/workspace && pwd | pbcopy
osascript -e 'display notification "Workspace path copied" with title "Quick Nav"'
open -a Terminal ~/.clawdbot/workspace
```

### 6. `docker-cleanup.sh`
```bash
#!/bin/bash
docker system prune -f
docker volume prune -f
osascript -e 'display notification "Docker cleanup complete" with title "Docker"'
```

### 7. `logic-new-project.sh`
```bash
#!/bin/bash
# Opens Logic Pro with new project template
open -a "Logic Pro"
osascript -e 'delay 2'
osascript -e 'tell application "System Events" to keystroke "n" using command down'
```

---

## Cleanup Recommendations

### High Priority (Do Now)
1. ✅ **Downloads folder** - Already excellent (244KB!)
2. 🔍 **Library analysis** - Check for cache bloat (running...)
3. 📧 **Email cleanup** - Archive old emails (gog can help)
4. 🗑️ **Desktop cleanup** - 1.1GB worth reviewing

### Medium Priority (This Week)
1. **Music Library** (796GB) - Largest consumer
   - Archive old Logic projects not actively used
   - Move sample libraries to external SSD if possible
   - Compress/bounce stems from completed projects
2. **Movies folder** (43GB) - Review old video renders
3. **Pictures** (3.6GB) - Consider iCloud Photo Library offload

### Low Priority (Monthly)
1. **Docker cleanup** - `docker system prune` (add to Stream Deck!)
2. **Homebrew cleanup** - `brew cleanup`
3. **Cache cleanup** - Consider CleanMyMac automated cleanup

---

## Performance Optimization

### Current System Health
- ✅ RAM: 64GB (excellent for Logic + AI workloads)
- ✅ Storage: 60% free (very healthy)
- ✅ CPU: M1 Max (top-tier performance)
- ✅ Network: 2Gbps Xfinity (recently optimized)

### Recommended Monitoring
1. **Activity Monitor** - Check memory pressure (should stay green)
2. **Stream Deck button** - Quick launch Activity Monitor
3. **OpenClaw logs** - Monitor Jarvis health (`openclaw logs --follow`)
4. **Docker stats** - Monitor container resource usage

### Automation Opportunities
1. **Auto-cleanup cron** - Weekly Docker/Homebrew cleanup
2. **Storage alerts** - Alert when storage drops below 40%
3. **Backup verification** - Weekly Git backup health check
4. **Performance dashboard** - Stream Deck page with system stats

---

## Next Steps

1. **Implement Stream Deck layout** - Configure buttons per recommendations
2. **Create automation scripts** - Save in `scripts/streamdeck/`
3. **Test quick launches** - Verify all shortcuts work
4. **Monitor usage** - Adjust layout based on real-world use
5. **Set up automated cleanup** - Weekly maintenance cron jobs

---

## Notes

- Stream Deck profiles stored: `~/Library/Application Support/com.elgato.StreamDeck/ProfilesV2/`
- Automation scripts: `~/.clawdbot/workspace/scripts/streamdeck/`
- Update this doc as optimizations evolve
