# Remaining Setup Tasks - 2026-01-30

## ✅ Just Fixed

1. **bird (X/Twitter)** ✅ - Working! Connected to @MWParson2025
2. **weather CLI** ✅ - Installed ansiweather + wrapper
3. **gh (GitHub CLI)** ✅ - Just installed, needs auth

---

## 🔧 Quick Setup Needed (You Need to Run These)

### 1. GitHub CLI Authentication - 2 minutes
```bash
gh auth login
```
Follow the prompts:
- Choose: GitHub.com
- Protocol: HTTPS
- Authenticate: Login with browser
- Copy the code shown and paste in browser

---

### 2. 1Password Desktop Integration - 1 minute

**Option A: Desktop App Integration (Easiest)**
1. Open 1Password desktop app
2. Settings → Developer → Enable CLI integration
3. Test: `op account list`

**Option B: Manual Signin**
```bash
op account add
```
Follow prompts for your 1Password account

---

### 3. Things 3 - Optional

**Issue:** Things 3 app doesn't appear to be installed

**Options:**
- **If you want it:** Install from Mac App Store
- **If you don't use it:** Skip - we can use other task management

Do you use Things 3 for tasks? Or prefer something else?

---

## 📧 Email Setup (Optional - Only if You Want)

### Himalaya (IMAP/SMTP Email Client)

Already installed, needs account config:

```bash
himalaya account configure
```

Supports: Gmail, Outlook, iCloud, custom IMAP/SMTP

**Do you want this?** You already have Gmail via `gog` CLI. Himalaya is an alternative if you want IMAP access.

---

## 🔑 API Keys - Optional Services

These are installed but need API keys (only set up if you use them):

### ElevenLabs TTS (Voice Generation)
- Skill: `sag`
- Needs: `ELEVENLABS_API_KEY` environment variable
- Use case: Generate voice narration for videos, stories

### Slack
- Needs: Slack workspace token
- Use case: Read/send Slack messages

### Discord  
- Needs: Discord bot token
- Use case: Read/send Discord messages

### Notion
- Needs: Notion integration token
- Use case: Manage Notion databases/pages

### Obsidian
- Needs: Vault path configuration
- Use case: Manage markdown notes in Obsidian vault

---

## 🏠 Smart Home (Only if You Have Hardware)

### Philips Hue Lights
- Skill: `openhue`
- Needs: Hue bridge IP + API key

### Eight Sleep
- Skill: `eightctl`
- Needs: Eight Sleep account credentials

### Sonos Speakers
- Skill: `sonoscli`
- Auto-discovers on network

### BluOS Audio Devices
- Skill: `blucli`
- Auto-discovers on network

---

## Summary

**Immediate action (5 minutes total):**
1. `gh auth login` - GitHub access
2. Enable 1Password desktop integration (Settings → Developer)

**Optional:**
- Things 3 (if you use it)
- Himalaya email (alternative to gog)
- API keys for services you actually use

**Which ones do you want to set up?**
