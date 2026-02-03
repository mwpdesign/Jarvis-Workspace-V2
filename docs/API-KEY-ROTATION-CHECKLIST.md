# 🔑 API Key Rotation Checklist

**Created:** 2026-02-01
**Reason:** Credentials were committed to Git (even in private repo)
**Action:** Rotate all exposed keys to ensure security

---

## 📋 CREDENTIALS TO ROTATE

### 1. ✅ n8n API Key

**What was exposed:**
- API Key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- Login: mwpdesign@gmail.com
- Password: gaVyn20031!

**Where to rotate:**
1. Go to: https://n8n.srv1055324.hstgr.cloud
2. Log in with: mwpdesign@gmail.com / gaVyn20031!
3. Click: Settings → API
4. **Delete old API key** (the one I exposed)
5. **Generate new API key**
6. Copy new key to `.env` file (NOT git)

**File to delete after rotation:**
- `automation/n8n-credentials.md`

---

### 2. ✅ ElevenLabs API Key

**What was exposed:**
- API Key: `sk_c3f053bcccaa021a26d0fc3893103a631c74b720b8f12691`
- Account: mwpdesign@gmail.com

**Where to rotate:**
1. Go to: https://elevenlabs.io/app/settings/api-keys
2. Log in with: mwpdesign@gmail.com
3. Find key named: "JarvisFutureNTech"
4. **Delete old key**
5. **Create new key** (same name)
6. Copy new key to `.env` file (NOT git)

**File to delete after rotation:**
- `projects/futurentech/credentials/ELEVENLABS-API.md`

---

### 3. ✅ FutureNTech Gmail Account

**What was exposed:**
- Email: futurentechofficial@gmail.com
- Password: MWJarvis2026!

**Where to rotate:**
1. Go to: https://myaccount.google.com/security
2. Log in with: futurentechofficial@gmail.com / MWJarvis2026!
3. Change password to new one
4. Copy new password to `.env` file (NOT git)
5. **Enable 2FA** while you're there (extra security)

**File to delete after rotation:**
- `projects/futurentech/credentials/EMAIL-SETUP.md`

---

### 4. ⚠️ Gmail Account Password (mwpdesign@gmail.com)

**Note:** This password (`gaVyn20031!`) is used for:
- n8n login
- Possibly other services

**Where to check/rotate:**
1. Go to: https://myaccount.google.com/security
2. Log in with: mwpdesign@gmail.com
3. Change password if this is your main Gmail password
4. Update n8n login with new password
5. Update any other services using this password

---

## 📝 ROTATION STEPS (In Order)

### Step 1: Generate New Keys
- [ ] n8n API key (delete old, create new)
- [ ] ElevenLabs API key (delete old, create new)
- [ ] FutureNTech Gmail password (change)
- [ ] mwpdesign@gmail.com password (if needed)

### Step 2: Update .env File
Create `/Users/michaelparson/.clawdbot/workspace/.env`:
```bash
# n8n
N8N_URL=https://n8n.srv1055324.hstgr.cloud
N8N_EMAIL=mwpdesign@gmail.com
N8N_PASSWORD=<NEW_PASSWORD_HERE>
N8N_API_KEY=<NEW_API_KEY_HERE>

# ElevenLabs
ELEVENLABS_API_KEY=<NEW_API_KEY_HERE>

# FutureNTech Email
FUTURENTECH_EMAIL=futurentechofficial@gmail.com
FUTURENTECH_PASSWORD=<NEW_PASSWORD_HERE>
```

### Step 3: Update .gitignore
Add to `.gitignore`:
```
.env
*.env
.env.*
automation/n8n-credentials.md
projects/futurentech/credentials/
```

### Step 4: Delete Exposed Files
```bash
cd /Users/michaelparson/.clawdbot/workspace
git rm automation/n8n-credentials.md
git rm -r projects/futurentech/credentials/
git commit -m "Remove exposed credentials from repo"
git push
```

### Step 5: Scrub Git History (Optional but Recommended)
```bash
# Install tool
brew install git-filter-repo

# Remove credential files from ALL history
git filter-repo --path automation/n8n-credentials.md --invert-paths
git filter-repo --path projects/futurentech/credentials/ --invert-paths

# Force push (rewrites history)
git push origin --force --all
```

---

## ✅ POST-ROTATION CHECKLIST

After rotating all keys:
- [ ] All new keys stored in `.env` file
- [ ] `.env` added to `.gitignore`
- [ ] Old credential files deleted from repo
- [ ] Git history scrubbed (optional)
- [ ] Jarvis tested access with new keys
- [ ] Old keys confirmed deleted/revoked
- [ ] 2FA enabled on critical accounts

---

## 🔐 GOING FORWARD

**Rules:**
1. **NEVER** commit API keys, passwords, or tokens to git
2. **ALWAYS** use `.env` files for credentials
3. **ALWAYS** add `.env` to `.gitignore` first
4. **ROTATE** keys immediately if exposed
5. **ENABLE** 2FA on all important accounts
6. **AUDIT** repo regularly for accidental exposures

---

**Estimated Time:** 15-20 minutes to rotate all keys
**Priority:** High (do today)
**Risk Level:** Low (private repo, unshared) but fix anyway
