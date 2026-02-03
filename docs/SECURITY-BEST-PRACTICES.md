# Security Best Practices - API Keys & Credentials

**Research Date:** 2026-02-01
**Sources:** GitGuardian, Anthropic (Claude), Strapi, DEV Community

---

## ⚠️ CURRENT ISSUE

**Problem:** We committed n8n credentials to GitHub
**Risk:** Even though repo is private, this is NOT best practice
**Impact:** If repo ever goes public or is compromised, credentials are exposed

---

## ✅ INDUSTRY BEST PRACTICES

### 1. **Never Commit Secrets to Git** (CRITICAL)
**What to do:**
- Store API keys, passwords, tokens in `.env` file
- Add `.env` to `.gitignore` immediately
- Keys stay on local machine only, never in version control

**Why:** Even private repos can be exposed. Git history is permanent.

### 2. **Use Environment Variables**
**Implementation:**
```bash
# Create .env file (never committed)
N8N_URL=https://n8n.srv1055324.hstgr.cloud
N8N_EMAIL=mwpdesign@gmail.com
N8N_PASSWORD=gaVyn20031!
N8N_API_KEY=eyJhbGciOi...
GMAIL_API_KEY=...
ZOHO_API_KEY=...
```

**Add to .gitignore:**
```
.env
*.env
.env.*
config/credentials.json
automation/n8n-credentials.md  # Our current file
```

### 3. **Automated Secrets Scanning**
**Tools to consider:**
- **GitGuardian** - Scans repos for exposed secrets
- **TruffleHog** - Finds secrets in git history
- **GitHub Secret Scanning** - Built-in protection

**Action:** Run scan on our repo to check for exposed secrets

### 4. **Credential Rotation**
- Change API keys regularly (quarterly minimum)
- Immediately rotate if ever exposed
- Track expiration dates

### 5. **Principle of Least Privilege**
- Each service gets minimum permissions needed
- Don't use admin keys for routine operations
- Create separate keys for dev/prod environments

---

## 🛠️ RECOMMENDED IMPLEMENTATION

### Step 1: Create .env File (NOW)
```bash
cd /Users/michaelparson/.clawdbot/workspace
touch .env
chmod 600 .env  # Only you can read/write
```

### Step 2: Move Credentials to .env
Move all secrets from `automation/n8n-credentials.md` to `.env`

### Step 3: Update .gitignore
Add `.env` and credential files to gitignore

### Step 4: Remove from Git History
**CRITICAL:** Current credentials are in git history
Options:
- **Option A:** Delete and rotate ALL API keys (safest)
- **Option B:** Use git-filter-repo to remove from history (complex)

### Step 5: Scan for Exposed Secrets
Run GitGuardian or similar tool on the repo

---

## 🚨 IMMEDIATE ACTIONS REQUIRED

1. **Create .env file** with all credentials
2. **Update .gitignore** to exclude .env
3. **Delete automation/n8n-credentials.md** from repo
4. **Rotate n8n API key** (generate new one)
5. **Run secrets scanner** on repo
6. **Update AGENTS.md** with security rules

---

## 📋 SECURITY CHECKLIST

- [ ] All API keys in .env file
- [ ] .env added to .gitignore
- [ ] Old credential files deleted from repo
- [ ] Old credential files removed from git history
- [ ] All API keys rotated (new keys generated)
- [ ] Secrets scanner run on repo
- [ ] Documentation updated with security practices
- [ ] Regular key rotation schedule set (quarterly)

---

## 🔐 LONG-TERM BEST PRACTICES

1. **Use a secrets manager** (1Password, AWS Secrets Manager, HashiCorp Vault)
2. **Enable 2FA** on all accounts
3. **Audit access logs** regularly
4. **Monitor for unauthorized usage**
5. **Implement key expiration** policies
6. **Document all credentials** (encrypted, not in git)
7. **Regular security reviews** (quarterly)

---

**Bottom Line:** Our current approach (credentials in git) is a security risk. We need to move to .env files + rotate all exposed keys.
