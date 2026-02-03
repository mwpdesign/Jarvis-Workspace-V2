# Automated Credit Repair - Project Plan

**Version:** 1.0  
**Date:** January 28, 2026  
**Status:** 🟢 Active Planning

---

## 🎯 Project Goals

### **Primary Goal:**
Build an AI-powered credit repair automation platform that reduces dispute letter generation time from hours to minutes.

### **Success Metrics:**
- ✅ Generate accurate dispute letters in <2 minutes
- ✅ Support all 3 major credit bureaus
- ✅ 90% reduction in manual work
- ✅ FCRA/CROA compliant outputs
- ✅ Positive user feedback (NPS >50)

---

## 🗺️ Development Roadmap

### **Phase 1: Discovery & Planning** (Week 1)
**Status:** 🟢 In Progress

**Objectives:**
- Define target market and use case
- Research competitors and pricing
- Understand legal compliance requirements
- Design initial architecture

**Deliverables:**
- [x] Project folder structure
- [x] Competitive analysis
- [x] Legal compliance overview
- [ ] Target market decision
- [ ] MVP feature list finalized

**Timeline:** January 28 - February 4, 2026

---

### **Phase 2: MVP Prototype** (Weeks 2-3)
**Status:** ⏳ Pending

**Objectives:**
- Build working dispute letter generator
- Create basic n8n workflow
- Integrate AI (Claude/GPT) for letter writing
- Test with real credit report samples

**Deliverables:**
- [ ] Dispute letter templates (10+ common scenarios)
- [ ] AI prompt engineering for letter generation
- [ ] n8n workflow (v1)
- [ ] Test cases and validation

**Timeline:** February 5-18, 2026

---

### **Phase 3: Testing & Refinement** (Week 4)
**Status:** ⏳ Pending

**Objectives:**
- Personal testing (Michael's own credit repair)
- Refine AI outputs for accuracy
- Add bureau-specific formatting
- Compliance review

**Deliverables:**
- [ ] Real-world test results
- [ ] Refined letter templates
- [ ] Compliance checklist
- [ ] Bug fixes and improvements

**Timeline:** February 19-25, 2026

---

### **Phase 4: Beta Launch** (Weeks 5-8)
**Status:** ⏳ Pending

**Objectives:**
- Invite 5-10 beta users
- Gather feedback
- Build case tracking system
- Add email automation

**Deliverables:**
- [ ] Beta user onboarding
- [ ] Case management dashboard
- [ ] Email automation workflows
- [ ] User feedback report

**Timeline:** February 26 - March 25, 2026

---

### **Phase 5: Public Launch** (Week 9+)
**Status:** ⏳ Pending

**Objectives:**
- Launch free tier publicly
- Marketing and content creation
- Paid tier introduction
- Customer support setup

**Deliverables:**
- [ ] Public website/landing page
- [ ] Pricing page
- [ ] Documentation/help center
- [ ] First paying customers

**Timeline:** March 26+, 2026

---

## 📋 MVP Feature List

### **Core Features (Must-Have):**

1. **Dispute Letter Generator**
   - AI-powered letter creation
   - 10+ dispute reason templates
   - Bureau-specific formatting (Experian, Equifax, TransUnion)
   - Identity verification sections
   - Customizable fields

2. **Case Management**
   - Track disputes by bureau
   - Status tracking (sent, in progress, resolved)
   - Document storage (credit reports, responses)
   - Timeline view

3. **Automation Workflows**
   - Auto-populate letters from credit report data
   - Email scheduling (send disputes via certified mail tracking)
   - Follow-up reminders (30 days, 60 days)

4. **Compliance Tools**
   - FCRA-compliant templates
   - Client agreements (if B2B)
   - Cancellation notices
   - Disclaimer templates

### **Nice-to-Have (Future):**

5. **Credit Report Parsing**
   - Upload PDF credit reports
   - AI extraction of errors
   - Automatic dispute suggestion

6. **Multi-Client Support**
   - Client portal
   - User roles (admin, client)
   - White-label options

7. **Analytics**
   - Success rate tracking
   - Common dispute types
   - Bureau response times

8. **Integrations**
   - Email (Gmail/Outlook)
   - Document storage (Google Drive/Dropbox)
   - Calendar (reminders)

---

## 🛠️ Technical Architecture

### **Tech Stack Decision:**

**Recommended: n8n-Based MVP**
- **Pros:**
  - Fast to build (1-2 weeks)
  - Low cost (existing infrastructure)
  - Easy to iterate
  - No hosting/maintenance overhead
- **Cons:**
  - Less scalable for B2B (100+ clients)
  - Limited UI customization

**Future Migration:** WordPress/DIVI front-end + n8n backend

### **Architecture Components:**

```
User Input (Google Form or Typeform)
    ↓
n8n Workflow
    ↓
AI Letter Generation (Claude API)
    ↓
Template Population
    ↓
PDF Generation
    ↓
Email Delivery + Google Drive Storage
    ↓
Follow-up Automation (30/60 day reminders)
```

### **Key Integrations:**
- **AI:** Claude Opus API (best letter quality)
- **Forms:** Google Forms or Typeform (user input)
- **Storage:** Google Drive (documents)
- **Email:** Gmail API (send disputes)
- **Calendar:** Google Calendar (reminders)
- **PDF:** Puppeteer or similar (letter formatting)

---

## 💰 Budget & Resources

### **MVP Costs (Month 1-2):**
- **Claude API:** ~$20-50 (testing + initial use)
- **n8n:** $0 (self-hosted on existing Hostinger)
- **Domain:** ~$15/year (creditflow.ai or similar)
- **Total:** <$100

### **Production Costs (Month 3+):**
- **Hosting:** $20-50/month (if scaling beyond n8n)
- **AI API:** ~$100-500/month (depends on usage)
- **Email:** $0 (Gmail API is free)
- **Total:** $120-550/month

### **ROI Break-Even:**
At $49/month pricing:
- Need 3-12 paying customers to break even
- At 20 customers: $980/month revenue (~$500-800 profit)

---

## ⚖️ Legal & Compliance

### **Required Actions:**

1. **Research State Requirements**
   - Indiana: Check if credit repair business license required
   - Bonding requirements
   - Registration fees

2. **Draft Legal Documents**
   - Terms of Service
   - Privacy Policy
   - FCRA disclosures
   - Cancellation notice templates

3. **Consult Attorney**
   - Review before charging fees
   - Ensure CROA compliance
   - State-specific requirements

4. **Disclaimers**
   - No guarantees (CROA requirement)
   - "Educational purposes" if personal use only
   - "Not legal advice" disclaimers

---

## 👥 Team & Roles

**Solo Founder:** Michael Parson
- Product owner
- Developer
- Designer
- Marketer

**AI Assistant:** Jarvis
- Research
- Documentation
- Code generation
- Workflow automation

**Future Hires (if scaling):**
- **Legal advisor** (contract/hourly)
- **Customer support** (part-time)
- **Marketing specialist** (contract)

---

## 📊 Success Metrics (KPIs)

### **Product Metrics:**
- Letter generation time: <2 minutes
- AI accuracy: >95% (no legal errors)
- User satisfaction: NPS >50

### **Business Metrics (if productized):**
- Beta users: 10 in first month
- Paying customers: 20 in 3 months
- Monthly revenue: $1,000 by month 4
- Churn rate: <10%

### **Technical Metrics:**
- API uptime: >99%
- Workflow success rate: >98%
- Error rate: <2%

---

## 🚧 Risks & Mitigation

### **Risk 1: Legal Compliance**
- **Impact:** High (fines, lawsuits)
- **Probability:** Medium
- **Mitigation:** Legal review, disclaimers, start with personal use only

### **Risk 2: AI Inaccuracy**
- **Impact:** High (incorrect legal advice)
- **Probability:** Low (with good prompts)
- **Mitigation:** Human review required, disclaimers, extensive testing

### **Risk 3: Market Saturation**
- **Impact:** Medium (hard to acquire customers)
- **Probability:** High (crowded market)
- **Mitigation:** Differentiate on AI quality and price, niche focus

### **Risk 4: Technical Complexity**
- **Impact:** Low (delay in launch)
- **Probability:** Medium
- **Mitigation:** Start simple (n8n), iterate, don't over-engineer

### **Risk 5: Time/Resources**
- **Impact:** Medium (project stalls)
- **Probability:** Medium (Michael has many projects)
- **Mitigation:** Clear milestones, use AI assistance, keep scope small

---

## 🎯 Decision Points

### **Decision 1: Target Market** (Week 1)
- [ ] Personal use only (Michael's credit repair)
- [ ] Consumer product (B2C SaaS)
- [ ] Business product (B2B for credit repair companies)
- [ ] Both (freemium model)

**Recommendation:** Start personal, validate with friends/family, then decide B2C vs B2B.

---

### **Decision 2: Tech Stack** (Week 1)
- [ ] n8n-only (fastest MVP)
- [ ] WordPress + n8n (more polished)
- [ ] Custom web app (most scalable)

**Recommendation:** n8n-only for MVP, migrate to WordPress if it proves viable.

---

### **Decision 3: AI Provider** (Week 2)
- [ ] Claude Opus 4.5 (best quality, ~$0.015/1K tokens)
- [ ] GPT-4o (good quality, ~$0.005/1K tokens)
- [ ] GPT-4o-mini (cheap, ~$0.0002/1K tokens)

**Recommendation:** Claude Opus for MVP (quality critical), switch to GPT-4o if scaling.

---

### **Decision 4: Pricing Model** (Week 4)
- [ ] Free only (personal use)
- [ ] One-time payment ($99-299)
- [ ] Subscription ($49-199/month)
- [ ] Freemium (free tier + paid)

**Recommendation:** Freemium (free personal, $49-99/month business).

---

## 📅 Milestones

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Project kickoff | 2026-01-28 | ✅ Complete |
| Competitive research | 2026-01-28 | ✅ Complete |
| MVP features defined | 2026-02-04 | ⏳ Pending |
| First working prototype | 2026-02-11 | ⏳ Pending |
| Personal testing complete | 2026-02-25 | ⏳ Pending |
| Beta launch | 2026-03-01 | ⏳ Pending |
| First paying customer | 2026-03-30 | ⏳ Pending |

---

## 📞 Stakeholder Communication

**Weekly Check-ins:**
- Michael reviews progress every Monday
- Jarvis provides status updates
- Decisions documented in this file

**Monthly Reviews:**
- Assess if project is still viable
- Pivot or persevere decision
- Update roadmap as needed

---

## 🔄 Iteration Plan

**Week 1:** Validate idea (research, planning)  
**Week 2:** Build MVP (letter generator)  
**Week 3:** Test with real data (Michael's credit)  
**Week 4:** Beta test (5-10 users)  
**Week 8:** Launch decision (go/no-go)

**Pivot Criteria:**
- No user interest after beta
- Legal compliance too complex
- Market too saturated
- Better opportunities identified

**Persevere Criteria:**
- Positive user feedback
- Legal path is clear
- Unique differentiation validated
- Revenue potential confirmed

---

## 📚 Resources

**Learning:**
- FCRA statute (ftc.gov)
- CROA regulations (ftc.gov)
- Dispute letter best practices (CreditBoards, MyFICO forums)
- AI prompt engineering for legal documents

**Tools:**
- n8n documentation
- Claude API documentation
- Google Workspace API docs
- PDF generation libraries

**Community:**
- r/CRedit (Reddit)
- CreditBoards forum
- MyFICO forums
- Credit repair business groups (LinkedIn)

---

**Next Actions:**
1. ✅ ~~Set up project folder~~ (Complete)
2. ✅ ~~Research competitors~~ (Complete)
3. ✅ ~~Research compliance~~ (Complete)
4. ⏳ **Decide target market** (Michael's decision needed)
5. ⏳ **Finalize MVP features** (Michael's input needed)
6. ⏳ **Build first prototype** (Week 2)

---

**Last Updated:** 2026-01-28  
**Next Review:** 2026-02-04
