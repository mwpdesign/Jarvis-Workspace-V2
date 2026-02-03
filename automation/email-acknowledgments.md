# Email Acknowledgment System

**Status:** ⏸️ PAUSED - OAuth Setup In Progress  
**Created:** 2026-02-02  
**Last Updated:** 2026-02-02 13:47 EST  
**Method:** n8n workflow (always-on, runs even when laptop closed)

---

## 🔄 Setup Status (Resume Here)

### ✅ Completed
1. **n8n workflow created:** "Email Acknowledgment - Orders (TEST)" (ID: XLDD5Ng6O2QUhT8f)
2. **Design documented:** See sections below
3. **Gmail OAuth credential created in n8n:** "Clearhealthpass"
4. **Client ID copied:** 190310717550-h7q3l1btpihumd6e2bm9cam3enakre412.apps.googleusercontent.com
5. **Client Secret generated** (in Google Cloud)

### ⏳ In Progress (LEFT OFF HERE)
**Stuck on:** OAuth redirect URI mismatch error

**What needs to happen:**
1. **Add redirect URI to Google Cloud Console:**
   - Go to: https://console.cloud.google.com/
   - Project: sound-bit-485500-u5
   - APIs & Services → Credentials
   - Click on OAuth client: "Client ID for Desktop" or "Jarvis"
   - Scroll to "Authorized redirect URIs"
   - Click "+ Add URI"
   - Paste: `https://n8n.srv1055324.hstgr.cloud/rest/oauth2-credential/callback`
   - Click "Save"

2. **Complete authentication in n8n:**
   - Go back to n8n credential "Clearhealthpass"
   - Click "Sign in with Google"
   - Select mike@clearhealthpass.com
   - Grant permissions
   - Click "Save"

3. **Update workflow nodes:**
   - Gmail Trigger node → Select "Clearhealthpass" credential
   - Create Draft Reply node → Select "Clearhealthpass" credential

4. **Test the workflow:**
   - Send test email to orders@clearhealthpass.com
   - Apply "1 SNETWORK/Orders" label
   - Workflow should create draft reply within 1 minute

### 📋 Still To Do
- [ ] Delete duplicate workflow (created 2x by accident)
- [ ] Create Google Sheet for logging ("CHP Email Acknowledgment Queue")
- [ ] Add Google Sheets logging node to workflow
- [ ] Test Orders workflow with real email
- [ ] Create 3 more workflows (IVRs, Intake, Onboarding)
- [ ] Add hourly alert when drafts are waiting for review

---

## Why n8n (Not Heartbeat)

**Problem:** Heartbeat only runs when laptop is on
**Solution:** n8n cloud runs 24/7 even when laptop is closed
**Trade-off:** More complex setup (OAuth), but always-on reliability

---

---

## Overview

Automatically acknowledge emails received in 4 labeled inboxes:
- **1 SNETWORK/Orders** → orders@clearhealthpass.com
- **1 SNETWORK/Onboarding** → onboarding@clearhealthpass.com
- **1 SNETWORK/IVRs** → ivr@clearhealthpass.com
- **1 SNETWORK/Intake** → intake@clearhealthpass.com

---

## Workflow

Every 5 minutes (heartbeat):
1. Check each label for unread emails
2. For each unread:
   - **Safety check:** Skip if sender matches:
     - noreply@, no-reply@, mailer-daemon@, postmaster@
     - donotreply@, do-not-reply@, bounce@
     - Auto-reply/Out-of-office indicators
   - Extract sender, subject, message ID
   - Send acknowledgment reply
   - Log to Google Sheet
   - Mark as read (or label as "acknowledged")

---

## Acknowledgment Templates

### Orders
**Subject:** Re: [original subject]

Thank you for your order submission. We have received your order request and it is now in our queue for processing.

You will receive additional notifications as your order progresses through:
- Processing
- Approval
- Shipment

If you have any questions, please contact orders@clearhealthpass.com.

Best regards,  
Clear Health Pass Team

---

### Onboarding
**Subject:** Re: [original subject]

Thank you for your submission. We have received your onboarding documentation and it is now in our queue for processing.

You will receive additional notifications as your submission progresses.

If you have any questions, please contact onboarding@clearhealthpass.com.

Best regards,  
Clear Health Pass Team

---

### IVRs
**Subject:** Re: [original subject]

Thank you for your submission. We have received your IVR documentation and it is now in our queue for processing.

You will receive additional notifications as your submission progresses.

If you have any questions, please contact ivr@clearhealthpass.com.

Best regards,  
Clear Health Pass Team

---

### Intake
**Subject:** Re: [original subject]

Thank you for your submission. We have received your patient intake documentation and it is now in our queue for processing.

You will receive additional notifications as your submission progresses.

If you have any questions, please contact intake@clearhealthpass.com.

Best regards,  
Clear Health Pass Team

---

## Logging

**Google Sheet:** "CHP Email Acknowledgments"  
**Location:** Create in Google Drive, share with mike@clearhealthpass.com

**Columns:**
- Timestamp
- Type (Orders/Onboarding/IVRs/Intake)
- From (sender email)
- Subject
- Message ID
- Acknowledged (Yes/No)
- Acknowledged Date
- Status (for future use: Received → Processing → Approved → Shipped)

---

## Implementation

**File:** `/workspace/automation/email-ack-check.sh`

Run via heartbeat every 5 minutes.

---

## Future Enhancements

**Phase 2:** Status-based notifications
- When status changes in Google Sheet → send notification
- Processing notification
- Approval notification  
- Shipment notification (with tracking)

**Phase 3:** Multi-recipient routing
- Extract distributor/sales rep from email or CRM
- CC or BCC additional recipients

---

## Testing

**Test with:** Send test email to one of the 4 addresses, apply label, verify:
1. Acknowledgment sent within 5 minutes
2. Logged to Google Sheet
3. Email marked as read
