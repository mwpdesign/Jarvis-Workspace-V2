# macOS Quick Access - Start/Stop Jarvis

**Quick ways to control Clawdbot on your Mac**

---

## ✅ Auto-Start (Already Enabled)

Clawdbot automatically starts when you boot your Mac.

**Check if running**:
```bash
clawdbot gateway status
```

---

## 🚀 Manual Start/Stop Commands

### **Start Jarvis**:
```bash
clawdbot gateway start
```

### **Stop Jarvis**:
```bash
clawdbot gateway stop
```

### **Restart Jarvis**:
```bash
clawdbot gateway restart
```

### **Check Status**:
```bash
clawdbot gateway status
```

---

## 🖥️ Desktop Quick Launch Options

### **Option 1: Dock Icon** ⭐ (Easiest - 1 minute)

**Create a clickable app in your Dock**:

1. Open **Automator** (in Applications)
2. New Document → **Application**
3. Search for **"Run Shell Script"** in the left sidebar
4. Drag it to the right panel
5. Paste this script:

```bash
#!/bin/bash
if pgrep -x "clawdbot" > /dev/null; then
    osascript -e 'display notification "Jarvis is already running" with title "Clawdbot"'
    open "http://localhost:18789"
else
    /opt/homebrew/bin/clawdbot gateway start
    sleep 2
    osascript -e 'display notification "Jarvis started" with title "Clawdbot"'
    open "http://localhost:18789"
fi
```

6. Save as: **"Start Jarvis"** to Applications folder
7. Find it in Applications, drag to Dock

**Usage**: Click the Dock icon → Jarvis starts + webchat opens

---

### **Option 2: Keyboard Shortcut** (2 minutes)

**Use macOS System Settings to create a shortcut**:

1. Open **Automator**
2. New Document → **Quick Action**
3. At the top, set:
   - Workflow receives: **no input**
   - in: **any application**
4. Add **"Run Shell Script"**:

```bash
#!/bin/bash
/opt/homebrew/bin/clawdbot gateway status | grep -q "running" && \
  open "http://localhost:18789" || \
  /opt/homebrew/bin/clawdbot gateway start && sleep 2 && open "http://localhost:18789"
```

5. Save as: **"Start Jarvis"**
6. Go to **System Settings** → **Keyboard** → **Keyboard Shortcuts** → **Services**
7. Find "Start Jarvis" under **General**
8. Click "Add Shortcut"
9. Press: `⌃⌥⌘ J` (Control + Option + Command + J)

**Usage**: Press `⌃⌥⌘ J` anywhere → Jarvis starts + opens

---

### **Option 3: Menu Bar Icon** (Using BitBar/SwiftBar)

**Install SwiftBar**:
```bash
brew install swiftbar
```

**Create script** (`~/.config/swiftbar/jarvis.5m.sh`):
```bash
#!/bin/bash
if pgrep -x "clawdbot" > /dev/null; then
    echo "✨ Jarvis Running"
    echo "---"
    echo "Open Chat | bash=/usr/bin/open param1=http://localhost:18789"
    echo "Restart | bash=/opt/homebrew/bin/clawdbot param1=gateway param2=restart terminal=false"
    echo "Stop | bash=/opt/homebrew/bin/clawdbot param1=gateway param2=stop terminal=false"
else
    echo "💤 Jarvis Offline"
    echo "---"
    echo "Start Jarvis | bash=/opt/homebrew/bin/clawdbot param1=gateway param2=start terminal=false"
fi
```

Make executable:
```bash
chmod +x ~/.config/swiftbar/jarvis.5m.sh
```

**Usage**: Click menu bar icon → Quick controls

---

### **Option 4: Terminal Alias** (Instant)

Add to `~/.zshrc`:

```bash
# Jarvis quick commands
alias jarvis-start='clawdbot gateway start && sleep 2 && open http://localhost:18789'
alias jarvis-stop='clawdbot gateway stop'
alias jarvis-restart='clawdbot gateway restart && sleep 2 && open http://localhost:18789'
alias jarvis-status='clawdbot gateway status'
alias jarvis='open http://localhost:18789'
```

Reload:
```bash
source ~/.zshrc
```

**Usage**:
- `jarvis-start` - Start and open chat
- `jarvis` - Open chat (if already running)
- `jarvis-restart` - Restart
- `jarvis-status` - Check status

---

### **Option 5: Desktop Shortcut** (Simple)

**Create a clickable script on Desktop**:

```bash
cat > ~/Desktop/Start-Jarvis.command << 'EOF'
#!/bin/bash
/opt/homebrew/bin/clawdbot gateway start
sleep 2
open http://localhost:18789
EOF

chmod +x ~/Desktop/Start-Jarvis.command
```

**Usage**: Double-click `Start-Jarvis.command` on Desktop

---

## 🎯 Recommended Setup

**Best combination** (takes 3 minutes):

1. ✅ **Auto-start on boot** (already done)
2. ✅ **Dock icon** - One click to open chat
3. ✅ **Terminal aliases** - Quick commands

**That covers**:
- Auto-starts when you boot
- Dock icon if you need to manually start/open
- Terminal commands for quick control

---

## 🔧 Troubleshooting

### **If auto-start stops working**:
```bash
clawdbot gateway install
```

### **If Jarvis won't start**:
```bash
clawdbot doctor
```

### **Check logs**:
```bash
clawdbot gateway logs
```

---

**Which one do you want me to set up for you right now?** 
- Dock icon (easiest)
- Terminal aliases (fastest)
- Keyboard shortcut (most convenient)

Let me know and I'll do it! 🚀
