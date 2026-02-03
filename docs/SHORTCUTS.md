# Desktop & Mobile Shortcuts for Jarvis

**Created**: 2026-01-25

Quick ways to access Jarvis from anywhere.

---

## 🖥️ Desktop Shortcuts (macOS)

### **Option 1: Alfred Workflow** ⭐ (Recommended)

**What it does**: Type keyword to instantly message Jarvis

**Setup**:
1. Download Alfred Powerpack (if you don't have it)
2. Create new workflow
3. Add "Keyword" trigger: `jarvis` or `j`
4. Add "Run Script" action:

```bash
#!/bin/bash
query="{query}"
curl -X POST "http://localhost:18789/api/message" \
  -H "Content-Type: application/json" \
  -d "{\"message\": \"$query\"}"
```

**Usage**: 
- Press `⌘ + Space` (Alfred)
- Type: `jarvis check my email`
- Hit Enter → Jarvis responds

---

### **Option 2: Keyboard Maestro Macro**

**What it does**: Hotkey to open Jarvis chat or send quick commands

**Setup**:
1. Open Keyboard Maestro
2. New Macro: "Open Jarvis"
3. Trigger: `⌃⌥⌘ J` (Control + Option + Command + J)
4. Action: Open URL `http://localhost:18789`

**Usage**: Press `⌃⌥⌘ J` anywhere to open webchat

---

### **Option 3: Raycast Extension** (If you use Raycast)

**What it does**: Quick commands from Raycast

**Setup**:
1. Open Raycast
2. Create Script Command:

```bash
#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Ask Jarvis
# @raycast.mode fullOutput
# @raycast.argument1 { "type": "text", "placeholder": "What do you need?" }

query="$1"
curl -s -X POST "http://localhost:18789/api/message" \
  -H "Content-Type: application/json" \
  -d "{\"message\": \"$query\"}" | jq -r '.response'
```

**Usage**: Open Raycast → Type "Ask Jarvis" → Enter your question

---

### **Option 4: Terminal Alias** (Fastest for terminal users)

Add to `~/.zshrc`:

```bash
# Quick Jarvis commands
alias j='curl -X POST "http://localhost:18789/api/message" -H "Content-Type: application/json" -d'
alias jarvis='open http://localhost:18789'

# Usage examples:
# j '{"message": "what's on my calendar today?"}'
# jarvis  # Opens webchat
```

**Reload shell**:
```bash
source ~/.zshrc
```

---

## 📱 Mobile Shortcuts (iOS)

### **Option 1: Siri Shortcut - Quick Ask** ⭐ (Recommended)

**What it does**: "Hey Siri, ask Jarvis [something]"

**Setup**:
1. Open **Shortcuts** app on iPhone
2. Tap **+** (New Shortcut)
3. Name it: "Ask Jarvis"
4. Add actions:
   - **Ask for Input** → Prompt: "What do you need?"
   - **Text** → Combine with: "https://api.telegram.org/bot[YOUR_BOT_TOKEN]/sendMessage?chat_id=[YOUR_CHAT_ID]&text="
   - **Get Contents of URL** → Method: GET
5. Enable "Show in Share Sheet"
6. Enable "Add to Siri"

**Siri Phrase**: "Ask Jarvis"

**Usage**: 
- "Hey Siri, ask Jarvis"
- Siri prompts: "What do you need?"
- Say: "Check my calendar for tomorrow"
- Message sent to Jarvis via Telegram

---

### **Option 2: Telegram Widget**

**What it does**: Quick access to @MWPJarvisBot from home screen

**Setup**:
1. Long-press home screen
2. Tap **+** (top left)
3. Search "Telegram"
4. Add "Telegram Widget"
5. Configure to show @MWPJarvisBot chat

**Usage**: Tap widget → Opens Jarvis chat directly

---

### **Option 3: Voice Shortcut - Quick Voice Task**

**What it does**: Voice dictation → Send to Jarvis via Telegram

**Setup**:
1. Open **Shortcuts** app
2. New Shortcut: "Tell Jarvis"
3. Add actions:
   - **Dictate Text** → (captures your voice)
   - **Send Message** → To: @MWPJarvisBot (Telegram)
4. Enable "Show in Share Sheet"
5. Enable "Add to Siri"

**Siri Phrase**: "Tell Jarvis"

**Usage**:
- "Hey Siri, tell Jarvis"
- Speak naturally: "I need to finish the woundcare testing by Friday"
- Automatically sent to Jarvis via Telegram
- Jarvis extracts task and categorizes it

---

### **Option 4: Home Screen Icon**

**What it does**: One-tap to open Jarvis chat

**Setup**:
1. Open **Safari** on iPhone
2. Go to: `http://localhost:18789` (only works on home network) OR just use Telegram link
3. Tap **Share** button
4. Tap **"Add to Home Screen"**
5. Name it: "Jarvis"
6. Tap **Add**

**Usage**: Tap "Jarvis" icon → Opens chat

**Alternative** (Telegram-based):
1. Open **Shortcuts** app
2. New Shortcut: "Open Jarvis"
3. Add action: **Open App** → Telegram
4. Add action: **Open URLs** → `tg://resolve?domain=MWPJarvisBot`
5. Add to Home Screen

---

## ⌨️ Quick Commands Reference

Once you have shortcuts set up, here are useful commands:

### **Email**
- "Check my email for messages from John"
- "Draft an email to Tiffany about the sign-off sheet"
- "Search emails about SOW"

### **Calendar**
- "What's on my calendar today?"
- "Add a reminder to call Ryan on Friday at 2pm"
- "When am I free tomorrow afternoon?"

### **Tasks**
- "Show me my woundcare tasks"
- "What's on my band todo list?"
- "Add task: Review Sprint 1 deliverables"

### **Projects**
- "Work on woundcare"
- "Show me band project status"
- "What files do I have for n8n?"

### **Memory**
- "Search memory for AWS deployment"
- "What did we decide about the mastering timeline?"
- "Show me my preferences"

### **Quick Info**
- "What's the weather?"
- "What time is it?"
- "Show me system status"

---

## 🎯 Recommended Setup

**For Desktop**:
1. **Alfred Workflow** (if you have Alfred Powerpack) - fastest
2. OR **Terminal alias** (if you work in terminal a lot)
3. OR **Raycast** (if you use Raycast)

**For Mobile**:
1. **Siri Shortcut: "Tell Jarvis"** - for voice tasks ⭐
2. **Telegram Widget** - for quick access
3. **Siri Shortcut: "Ask Jarvis"** - for questions

**Combo Usage**:
- Walking around → Voice: "Hey Siri, tell Jarvis I need to..."
- At desk → Alfred: `⌘ Space` → `jarvis check email`
- In bed → Telegram widget → Tap → Voice message

---

## 🔐 Security Note

**Local network only**:
- Webchat (`localhost:18789`) only works on your home network
- Telegram works from anywhere (secure, encrypted)

**For remote access**:
- Use Telegram (recommended)
- OR set up VPN to access localhost remotely
- OR expose gateway with authentication (advanced)

---

**Next Steps**:
1. Choose your preferred desktop method
2. Set up at least one Siri shortcut
3. Test them out!

Let me know which ones you want help setting up! 🚀
