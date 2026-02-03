# Alfred Workflow - Quick Setup

**For Alfred Powerpack users**

---

## 🎯 What This Does

Type `jarvis [your question]` in Alfred → Instant response from Jarvis

**Example**:
- `⌘ Space` (Alfred)
- Type: `jarvis what's on my calendar?`
- Hit Enter
- Jarvis responds via notification

---

## 📥 Option 1: Import Workflow (Easy)

**Coming soon** - Will create a downloadable `.alfredworkflow` file you can double-click to install.

---

## 🛠️ Option 2: Manual Setup (5 minutes)

### **Step 1: Create New Workflow**

1. Open Alfred Preferences
2. Go to **Workflows** tab
3. Click **+** (bottom left)
4. Select **"Blank Workflow"**
5. Fill in:
   - **Name**: Ask Jarvis
   - **Description**: Quick questions to Jarvis AI
   - **Category**: Productivity
6. Click **Create**

---

### **Step 2: Add Keyword Input**

1. Right-click in workflow canvas
2. **Inputs** → **Keyword**
3. Configure:
   - **Keyword**: `jarvis` (or `j` for shorter)
   - **Title**: Ask Jarvis
   - **Subtitle**: Type your question...
   - **Argument Required**: ✅ Check this
   - **Argument**: "Argument Optional" → Change to **"Argument Required"**
   - **With Space**: ✅ Check
4. Click **Save**

---

### **Step 3: Add Run Script Action**

1. Right-click in canvas
2. **Actions** → **Run Script**
3. Language: `/bin/bash`
4. Paste this script:

```bash
#!/bin/bash

query="{query}"

# Send to Jarvis via Telegram API
BOT_TOKEN="YOUR_TELEGRAM_BOT_TOKEN"
CHAT_ID="YOUR_TELEGRAM_CHAT_ID"

# URL encode the query
encoded_query=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$query'))")

# Send message
curl -s "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encoded_query}" > /dev/null

# Show notification
osascript -e "display notification \"Sent to Jarvis: $query\" with title \"Jarvis\""
```

5. Replace:
   - `YOUR_TELEGRAM_BOT_TOKEN` with your bot token
   - `YOUR_TELEGRAM_CHAT_ID` with your chat ID

6. Click **Save**

---

### **Step 4: Connect Them**

1. Drag from the **small nub** on the right of "Keyword" box
2. Drop on the "Run Script" box
3. Should show a line connecting them

---

### **Step 5: Get Your Telegram Credentials**

#### **Bot Token**:
Already have this - it's in your Clawdbot config. Check:

```bash
cat ~/.clawdbot/clawdbot.json | grep telegram -A 5
```

Look for `"token": "123456789:ABC..."`

#### **Chat ID**:
1. Message your bot: @MWPJarvisBot on Telegram
2. Send: `/start`
3. Then run:

```bash
curl https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

Look for `"chat":{"id":123456789` - that's your chat ID.

---

### **Step 6: Test It**

1. Press `⌘ Space` (Alfred)
2. Type: `jarvis test message`
3. Hit Enter
4. Should see notification: "Sent to Jarvis: test message"
5. Check Telegram - Jarvis should respond

---

## 🚀 Advanced: Get Response in Alfred

**Want Jarvis's response to show IN Alfred?** (More complex)

Replace the script with this:

```bash
#!/bin/bash

query="{query}"
BOT_TOKEN="YOUR_TELEGRAM_BOT_TOKEN"
CHAT_ID="YOUR_TELEGRAM_CHAT_ID"

# Send message
encoded_query=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$query'))")
curl -s "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encoded_query}" > /dev/null

# Wait for response (poll for 10 seconds)
sleep 3

# Get latest message
response=$(curl -s "https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=-1" | \
  python3 -c "import sys, json; data=json.load(sys.stdin); print(data['result'][-1]['message']['text'] if data['result'] else 'No response yet')")

# Show in Alfred
echo "$response"
```

Then add **"Post Notification"** or **"Large Type"** action after the script to display the response.

---

## ⚡ Pro Tips

### **Multiple Keywords**:
Create multiple keyword inputs for different shortcuts:
- `jarvis` - General questions
- `jemail` - "Search my email for..."
- `jcal` - "What's on my calendar..."
- `jtask` - "Add task: ..."

### **Hotkey Trigger**:
Instead of keyword, use a hotkey:
1. **Inputs** → **Hotkey**
2. Set: `⌃⌥⌘ J` (Control + Option + Command + J)
3. Shows input box instantly

### **File Action**:
Send files to Jarvis for analysis:
1. **Inputs** → **File Action**
2. Connect to script that sends file path to Jarvis

---

## 🎯 Example Commands

Once set up, use Alfred for:

**Quick Questions**:
- `jarvis what's on my calendar?`
- `jarvis what's the weather?`
- `jarvis search email from john`

**Tasks**:
- `jarvis add task: call ryan friday`
- `jarvis remind me to check staging tomorrow`

**Email**:
- `jarvis draft email to tiffany about sign-off sheet`
- `jarvis search for literock messages`

**Projects**:
- `jarvis work on woundcare`
- `jarvis show band tasks`

---

**Fastest way to talk to Jarvis from your Mac.** ⚡

Need help setting this up? Let me know!
