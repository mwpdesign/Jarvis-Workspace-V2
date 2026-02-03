# Literock SOW - Payment & Timeline Tracker

**Contract**: CHP SOW Phase 2  
**Contractor**: Literock Ventures, LLC  
**Total Budget**: $100,000  
**Timeline**: 6 weeks + 2 months support  
**Start Date**: December 30, 2025  
**Payment Terms**: Net 30 days from invoice date

---

## 💰 PAYMENT SCHEDULE

| Payment | Amount | Trigger | Due Date | 3-Day Lead | Status |
|---------|--------|---------|----------|------------|--------|
| **#1** | **$30,000** | Sprint 1 Acceptance | TBD | Submit 3 days before | ⏳ Pending |
| **#2** | **$30,000** | Sprint 2 Acceptance | TBD | Submit 3 days before | ⏳ Pending |
| **#3** | **$20,000** | Sprint 3 Final Acceptance | TBD | Submit 3 days before | ⏳ Pending |
| **#4** | **$20,000** | End of Support Phase | TBD | Submit 3 days before | ⏳ Pending |
| | **$100,000** | **TOTAL** | | | |

---

## 📅 TIMELINE BREAKDOWN

### Sprint 1: Weeks 1-2 (Foundation & Core Development)
**Status**: 🟡 IN PROGRESS  
**Started**: ~January 2026  
**Expected Completion**: ~Mid-January 2026

**Deliverables**:
- ✅ Database models (PatientAttestation, F&I role, enhanced models)
- ✅ Backend services (IVR validation, attestation alerts, claims export)
- ✅ Frontend components (dashboards, widgets, panels)
- ✅ Staging environment

**Payment**: $30,000 upon acceptance  
**Review Window**: 5 business days after delivery  
**Action Required**: Test in staging → Written sign-off OR auto-accept if no rejection

---

### Sprint 2: Weeks 3-4 (Integration & Remaining Features)
**Status**: ⏳ NOT STARTED  
**Expected Start**: ~Late January 2026  
**Expected Completion**: ~Early February 2026

**Deliverables**:
- F&I API endpoints (dashboard, invoices, A/R, commissions)
- Ship-trigger invoice creation
- WoundGraft import service (complete)
- Email templates (SES)
- Claims export privacy modes
- Frontend pages (A/R dashboard, commission tracking, attestation alerts)

**Payment**: $30,000 upon acceptance  
**Review Window**: 5 business days after delivery  
**Action Required**: Test in staging → Written sign-off OR auto-accept

---

### Sprint 3: Weeks 5-6 (Phase 2 Features & Production Launch)
**Status**: ⏳ NOT STARTED  
**Expected Start**: ~Early February 2026  
**Expected Completion**: ~Mid-February 2026

**Deliverables**:
- Payment integration (Authorize.net)
- WoundGraft UI integration (modal, import workflow)
- Payment UI components
- Production deployment (backend + frontend)
- Database migrations
- Post-launch verification

**Payment**: $20,000 upon final acceptance  
**Review Window**: 5 business days after delivery  
**Action Required**: Verify production deployment → Written sign-off

---

### Support Phase: 2 Months Post-Launch
**Status**: ⏳ NOT STARTED  
**Expected Start**: ~Mid-February 2026  
**Expected End**: ~Mid-April 2026

**Included**: Up to 20 Support Days (160 hours)

**In-Scope**:
- Bug fixes for Sprint 1-3 deliverables
- Performance tuning
- Minor UI/UX refinements
- Configuration updates
- Email template adjustments
- Export formatting tweaks

**Out-of-Scope** (requires Change Order):
- New modules or major workflows
- New third-party integrations
- Work exceeding 20 Support Day cap

**Payment**: $20,000 at end of support phase  
**Action Required**: Confirm support phase completion

---

## ⚠️ CRITICAL PAYMENT RULES

### 3-Day Lead Time Rule
**Michael must submit completed work 3 days before payment is due**

**Why**: Brent (CFO) needs 48-72 hours to process wire transfers

**Process**:
1. **Sprint delivered** by Literock
2. **5-day review window** starts
3. **Michael tests & approves** (or auto-accepts if no rejection)
4. **Michael notifies Brent** - 3 days before payment due
5. **Brent processes payment** - Net 30 days from invoice

**Example Timeline**:
- Jan 15: Sprint 1 delivered
- Jan 15-22: 5-day review window (5 business days)
- Jan 22: Michael approves → Invoice sent by Literock
- Feb 21: Payment due (Net 30)
- **Feb 18**: Michael must submit to Brent (3-day lead)

---

## 📋 SPRINT ACCEPTANCE CHECKLIST

### Before Approving Any Sprint:

**Technical Testing**:
- [ ] Test all new features in staging environment
- [ ] Verify database migrations worked
- [ ] Check all new API endpoints
- [ ] Test UI components and pages
- [ ] Verify integrations (S3, SES, Authorize.net)

**Documentation Review**:
- [ ] New endpoints documented
- [ ] Services documented
- [ ] User workflows documented
- [ ] Training materials provided

**SOW Compliance**:
- [ ] All Exhibit A deliverables present
- [ ] Quality standards met (unit tests, integration tests)
- [ ] HIPAA audit logging in place

**If Issues Found**:
- Document in GitHub Issues
- Send written rejection within 5-day window
- Work with Literock to resolve
- Retest after fixes

**If All Good**:
- Send written acceptance to Literock
- Notify Brent 3 days before payment due
- Invoice should arrive from Literock

---

## 🎯 MICHAEL'S ACTION ITEMS BY SPRINT

### Sprint 1 (Current - IN PROGRESS)
- [ ] Request staging access (set for tomorrow)
- [ ] Test all Sprint 1 deliverables
- [ ] Review against SOW Exhibit A
- [ ] Written acceptance or rejection (within 5 business days)
- [ ] If accepting: Notify Brent 3 days before payment due

### Sprint 2 (Upcoming)
- [ ] Receive Sprint 2 delivery notification
- [ ] Test all Sprint 2 deliverables in staging
- [ ] Verify WoundGraft import works
- [ ] Test F&I dashboard and A/R features
- [ ] Written acceptance or rejection (within 5 business days)
- [ ] If accepting: Notify Brent 3 days before payment due

### Sprint 3 (Final Sprint)
- [ ] Receive Sprint 3 delivery + production deployment
- [ ] Test in production environment
- [ ] Verify payment integration works
- [ ] Verify WoundGraft UI integration
- [ ] Post-launch verification test
- [ ] Written final acceptance
- [ ] Notify Brent 3 days before payment due

### Support Phase
- [ ] Track Support Day usage (160 hours / 20 days cap)
- [ ] Submit bug reports and requests
- [ ] Verify fixes and tweaks
- [ ] Confirm support phase completion
- [ ] Final payment notification to Brent

---

## 📊 WEEKLY + MID-WEEK UPDATE SCHEDULE

**As requested by Michael**: Establish regular cadence with Henry Campbell (Light Rock)

### Weekly Updates (Recommended: Monday)
**What to ask Henry**:
- Progress since last update
- What was completed this week
- What's planned for next week
- Any blockers or concerns
- Timeline still on track?
- Ready for any testing this week?

### Mid-Week Updates (Recommended: Wednesday or Thursday)
**What to ask Henry**:
- How's this week's work progressing?
- Any issues or blockers emerged?
- On track for end-of-week deliverables?
- Any early testing available?

**Format**: Email or quick call (15-20 min)

**Documentation**: Save updates to `projects/woundcare/henry-updates/`

---

## 💡 PAYMENT TRACKING TIPS

### For Each Sprint:

**Step 1: Delivery**
- Henry notifies: "Sprint X delivered to staging"
- Note date in this tracker

**Step 2: Review Window Starts**
- 5 business days from delivery date
- Test everything against SOW
- Document any issues

**Step 3: Acceptance Decision**
- Day 5: Send written acceptance OR rejection
- If accepting: Literock sends invoice

**Step 4: Calculate Payment Due Date**
- Invoice date + 30 days = Payment due date
- Due date - 3 days = Notify Brent deadline

**Step 5: Notify Brent**
- 3 days before payment due
- Include: Invoice, amount, due date, SOW reference
- Confirm wire transfer details

**Step 6: Verify Payment**
- Confirm with Literock payment received
- Update this tracker

---

## 🚨 RED FLAGS TO WATCH FOR

**Timeline Issues**:
- Sprint delivery delayed beyond 2 weeks
- No staging access after delivery
- Review window expires without clarity

**Quality Issues**:
- Features missing from Exhibit A
- No unit tests or documentation
- HIPAA audit logging not working
- Integration failures

**Scope Creep**:
- Work requested beyond SOW
- Change Order not submitted first
- Support Days exceeding 20-day cap

**Payment Issues**:
- Invoice doesn't match SOW amounts
- Net 30 terms not followed
- 3-day lead time missed

---

## 📞 KEY CONTACTS

**Literock/Light Rock**:
- **Henry Campbell** - External developer / Project lead
- Updates: Weekly + mid-week

**Clear Health Pass**:
- **Brent** (CFO) - Payment processing (needs 3-day lead)
- **John** (CEO) - Final approval authority
- **Michael** - Testing, acceptance, coordination

---

## 📝 NOTES & OBSERVATIONS

**Current Status** (as of 2026-01-26):
- Sprint 1 in progress
- No staging access yet (requesting tomorrow)
- First payment ($30,000) pending Sprint 1 acceptance

**Adoption Blocker**:
- Financial features (F&I Dashboard, A/R, commissions) are critical for full adoption
- These come in Sprint 2
- Priority: Get Sprints 1 & 2 completed and accepted

**3-Day Lead Rule**:
- New process to ensure timely payments
- Communicate clearly to Henry about importance
- Brent needs advance notice for wire transfers

---

**Use this tracker to stay on top of payments and timelines. Update status as Sprints progress.** 📊✨
