# Clear Health Pass Woundcare - SOW Phase 2

**Document**: CHP SOW REVISIONS 2.0 for Literock  
**Location**: `~/Desktop/HOLDING/SOW/CHP_SOW_REVISIONS2.0_CLEAN (1).docx`  
**Effective Date**: December 30, 2025  
**Contractor**: Literock Ventures, LLC  
**Timeline**: 6 weeks + 2 months support  
**Budget**: $100,000 USD

---

## Context from Michael

1. **Literock** = Contractor doing the coding work
2. **F&I Function** = Finance & Insurance
   - Aging reports
   - Commission reports
   - A/R (Accounts Receivable) tracking
3. **CMS Claim Submission**:
   - CHP **does NOT** submit claims
   - CHP **advocates** for doctors
   - Sovereign nation status → government-to-government relationship
   - Helps doctors through the CMS claim process
4. **Instructions**: Located in CHP S Network → Admin Checklist folder
5. **Timeline**: 6 weeks delivery + 2 months support

---

## Project Overview

**Phase 2 Enhancements** - Major upgrade focusing on:
- **Billing Infrastructure**: Multi-payer claims processing, revenue cycle management
- **Compliance Framework**: HIPAA compliance, data auditing, automated reporting
- **Operational Modules**: Enhanced dashboards, provider workflows, real-time visualization

---

## Timeline & Structure

### Core Delivery: 6 Weeks (3 Sprints)
- **Sprint 1** (Weeks 1-2): Foundation & Core Development
- **Sprint 2** (Weeks 3-4): Integration & Remaining Features
- **Sprint 3** (Weeks 5-6): Phase 2 Features & Production Launch

### Support Phase: 2 Months
- Begins after Sprint 3 Final Acceptance
- Up to 20 "Support Days" included (160 hours total)
- Bug fixes, tweaks, minor refinements
- Additional work requires Change Orders

---

## Budget & Payment Schedule

| Payment | Amount | Trigger |
|---------|--------|---------|
| #1 | $30,000 | Sprint 1 Acceptance |
| #2 | $30,000 | Sprint 2 Acceptance |
| #3 | $20,000 | Sprint 3 Final Acceptance |
| #4 | $20,000 | End of Support Phase (2 months later) |
| **Total** | **$100,000** | |

**Payment Terms**: Net 30 days from invoice date

---

## Sprint 1 (Weeks 1-2): Foundation & Core Development

### Database Foundation

**New Models**:
- **PatientAttestation** - 12-month validity tracking
- **CHP F&I Role** - Staff role with configurable permissions

**Enhanced Models**:
- **TreatmentRecord**:
  - Dual wound measurements
  - Graft traceability
- **TreatmentDocument**:
  - Expanded from 4 to 12 document types
- **IVRRequest**:
  - `order_number` field
  - `kx_modifier_code` field
  - `previous_treatment_date` field

### Backend Services

1. **IVR Validation Service**:
   - Identity and foundational document validation
   - Attestation expiry checks
   - IVR order number logic
   - KX modifier logic

2. **Attestation Alert Service**:
   - 30-day expiration detection
   - Expired attestation tracking
   - Widget data generation
   - Weekly digest email preparation

3. **Claims Export Service** (4 export types):
   - Standard Billing CSV
   - Payment Follow-up CSV
   - Audit Defense JSON
   - Denial Management CSV

4. **Commission Service**:
   - Calculate on collected amounts
   - Hierarchy logic
   - Reporting window

5. **WoundGraft Import Service**:
   - Backend development started
   - S3 buckets configured for WoundGraft photos

### Frontend Components & Pages

**Components**:
- AttestationAlertsWidget
- AttestationBanner
- IVRValidationPanel
- PaymentLinkModal
- DocumentStatusCard
- Navigation updates

**Pages**:
- F&I Dashboard
- Invoice Management

### Infrastructure
- Staging environment configured

---

## Sprint 2 (Weeks 3-4): Integration & Remaining Features

### Backend APIs & Services

1. **F&I API Endpoints**:
   - F&I Dashboard
   - Cross-doctor Invoice Management
   - A/R Dashboard
   - Commission Calculations
   - Claims Export APIs

2. **Ship-Trigger Invoice Creation**:
   - Invoices auto-generated on shipment
   - Invoice email with patient initials
   - Payment link embedded in invoice email

3. **WoundGraft Import Service** (Complete):
   - ZIP file parsing
   - Manifest validation
   - Photo upload to S3
   - Measurement extraction
   - Document type mapping
   - Duplicate detection

4. **SES Email Templates**:
   - Payment reminders
   - Attestation alerts

5. **Claims Export Privacy Modes**:
   - Audit Defense: Full (PHI) mode
   - Audit Defense: Redacted mode
   - De-Identified Export option (Exhibit C)

### Frontend Pages

1. **A/R Dashboard**:
   - Aging buckets (30/60/90/120+ days)
   - A/R by doctor
   - Drill-down capabilities
   - PDF export

2. **Commission Tracking Page**:
   - Hierarchy display
   - Period selection
   - CSV export for payroll

3. **Claims Export Interface**:
   - Export cards (4 types)
   - Filters and date ranges
   - One-click download
   - Export history
   - Privacy mode selection

4. **Attestation Alerts Page**:
   - Lists expiring/expired attestations
   - Grouped by doctor
   - Status badges
   - Filter/sort functionality

5. **Patient Intake Restructure**:
   - Separate identity documents section
   - Status cards
   - Validation/error display
   - Block save if incomplete

6. **Staff Role Dropdown**:
   - Updated with new roles

---

## Sprint 3 (Weeks 5-6): Phase 2 Features & Production Launch

### Payment Integration

**New Model**:
- **OrderPayment** - Track payment transactions

**Payment Service**:
- Authorize.net integration
- Token-based payment link generation
- Webhook verification and processing
- Payment confirmation flow

**Payment Endpoints**:
- Create payment link
- Webhook handler

**Order Status Flow Updates**:
- New status: `PENDING_PAYMENT`
- Auto-generate payment link
- Payment notification email
- Payment reminders
- **Shipping blocked until paid**

### WoundGraft Integration UI

**WoundGraft Import Modal**:
- 5 modal states (upload, processing, validation, duplicate handling, success)
- Drag-and-drop ZIP file upload
- Validations and progress indicators
- Duplicate handling workflow
- Success summary

**Treatment Detail Page Updates**:
- "Import from WoundGraft" button
- Measurement display
- Traceability fields
- Measurement method indicator

### Payment UI

**Components**:
- Payment Link Modal (URL display, copy to clipboard, expiration date)
- Payment status indicators
- Payment history display
- Payment reminder email templates

### Production Deployment

**Database Migrations**:
- PatientAttestation table
- TreatmentRecord fields
- TreatmentDocument constraint update (4→12 types)
- IVRRequest fields
- OrderPayment table

**Deployment**:
- Backend deployed to production
- Frontend deployed to production
- Environment variables configured

---

## Support Phase (2 Months Post-Launch)

**Duration**: 2 months after Sprint 3 Final Acceptance  
**Included Cap**: 20 Support Days (160 hours)

### In-Scope Support Examples:
- Bug fixes for Sprint 1-3 deliverables
- Performance tuning
- Minor UI/UX refinements
- Configuration updates
- Small workflow adjustments
- Email template adjustments
- Export formatting tweaks
- Redaction/de-identification refinements

### Out-of-Scope (Requires Change Order):
- New modules or major workflows
- New third-party integrations
- New payment processors
- Major data migrations
- Work exceeding 20 Support Day cap
- New export types not in Exhibit A

---

## Privacy & Compliance Features

### Export Privacy Modes (Exhibit C)

#### 1. Audit Defense Export
**Full (PHI) Mode**:
- All fields for audit defense
- Complete patient information

**Redacted Mode**:
- Removes direct identifiers:
  - Patient name
  - Full date of birth
  - Address
  - Phone
  - Email
  - MRN (Medical Record Number)
- Uses export-specific patient key

#### 2. De-Identified Patient Export (CSV/JSON)
- HIPAA "safe harbor" style redactions
- Removes all direct identifiers
- Export-specific patient key
- Optional date transformations (year-only)

#### 3. Audit Logging
All exports generate audit logs:
- Requesting user
- Timestamp
- Export type
- Date range
- Environment
- Visible in portal for authorized users

---

## Key Deliverables Summary

### Core Features

1. **Finance & Insurance (F&I)**:
   - New F&I role
   - F&I Dashboard
   - A/R tracking with aging buckets
   - Commission calculations
   - Invoice management

2. **Patient Attestation**:
   - 12-month validity tracking
   - 30-day expiration alerts
   - Expired attestation tracking
   - Widget and email alerts

3. **Treatment Documentation**:
   - Dual wound measurements
   - Graft traceability
   - 12 document types (up from 4)
   - WoundGraft import integration

4. **IVR Enhancements**:
   - Order tracking fields
   - **KX modifier support** (billing code indicating medical necessity)
   - Previous treatment date tracking
   - Enhanced validation

5. **Claims Export**:
   - 4 export types
   - 3 privacy modes
   - Audit logging
   - Export history

6. **Payment Processing**:
   - Authorize.net integration
   - Token-based payment links
   - Webhook handling
   - Email notifications
   - Payment reminders
   - Shipping hold until paid

7. **WoundGraft Integration**:
   - **WoundGraft** = iPhone app for capturing wound treatment data in the field
   - Doctors/staff use iPhone app to photograph wounds and record measurements
   - App creates ZIP file with photos + manifest
   - Woundcare app imports ZIP:
     - Photo upload to S3
     - Measurement extraction
     - Document mapping
     - Duplicate detection
   - Streamlines treatment documentation process

---

## Technologies Used in This Phase

### New Integrations
- **Authorize.net** - Payment processing
- **AWS S3** - WoundGraft photo storage
- **AWS SES** - Email templates (payment reminders, attestation alerts)

### Enhanced Services
- IVR validation
- Claims export (multi-format)
- Commission calculations
- A/R reporting

---

## Team Staffing (Literock)

**Core Delivery (Sprints 1-3)**:
- 1 Full Stack/DevOps Lead
- 2 Full Stack Developers
- 1 Frontend Developer
- 1 Project Manager

**Availability**: Substantially full-time during sprints

---

## Acceptance & Review Process

### Review Window
- **5 business days** per Sprint delivery
- Testing in staging environment
- GitHub Issues for defect tracking

### Acceptance Criteria
- Written sign-off by CHP, OR
- Auto-acceptance if no written rejection within Review Window

### Final Acceptance
- Sprint 3 production deployment complete
- Post-launch verification test passed

---

## Quality Standards

### Testing Requirements
- Unit tests for new services and validation logic
- Integration tests for key API endpoints
- HIPAA-compliant audit logging (all PHI access and exports)
- Documentation for:
  - New endpoints
  - Services
  - User-facing workflows
  - Internal training materials

---

## Change Management

### Change Order Triggers
- New modules not in Exhibit A
- New third-party integrations beyond those specified
- Support work exceeding 20 Support Day cap
- Material changes after Sprint acceptance
- Major redesigns or new workflows

### Change Order Process
- Written Change Order required
- Describes additional scope
- Fixed price or fixed-price support block
- Schedule impact assessment

---

## Sovereign Authority & Legal

### CHP Status
- Authorized Tribal Agent for federally recognized Tribal economic development corporation
- Blue Lake Rancheria Economic Development Corporation (BLREDC)
- Organized under Section 17, Indian Reorganization Act of 1934
- Sovereign immunity applies

### Related Agreements
**Order of Precedence**:
1. Non-Disclosure Agreement (NDA)
2. Business Associate Agreement (BAA) - if applicable
3. Professional Services Agreement (PSA)
4. This SOW
5. Exhibits/Attachments

---

## CHP's Role in CMS Claims

**Important Context from Michael**:
- CHP does **NOT** submit CMS claims
- CHP **advocates** for doctors
- Sovereign nation status → government-to-government engagement
- Helps doctors navigate CMS claim submission process
- Provides support and documentation for claims

**Why This Matters**:
- Claims Export features support doctors' needs
- Audit Defense exports help with claim documentation
- De-identified exports for analytics/research
- Privacy modes protect PHI while enabling advocacy work

---

## Mapping to Manual System

**Phase 2 Features Automate**:

| Manual Process | Automated Feature |
|----------------|------------------|
| Patient attestation tracking (manual checklist) | PatientAttestation model + alerts |
| Invoice creation and tracking | Ship-trigger invoicing + A/R dashboard |
| Payment follow-up (manual calls/emails) | Payment links + reminders + status tracking |
| Commission calculations (manual spreadsheets) | Commission Service + reporting |
| Treatment documentation (file uploads) | WoundGraft import + S3 storage |
| Claims export preparation (manual CSV creation) | 4 automated export types with privacy modes |
| Aging reports (manual tracking) | A/R Dashboard with aging buckets |
| IVR validation (manual checklist review) | IVR Validation Service |

---

## Success Metrics (Implied)

1. **Billing Accuracy**: Automated invoice generation on shipment
2. **Payment Collection**: Payment links + reminders → faster payment
3. **Compliance**: Audit logs + privacy modes → HIPAA compliance
4. **Commission Transparency**: Automated calculations + reporting
5. **Treatment Documentation**: WoundGraft integration → faster, more accurate
6. **Attestation Compliance**: 30-day alerts → prevent lapses
7. **Claims Support**: Multiple export formats → better doctor advocacy

---

## Status & Clarifications (from Michael - 2026-01-25)

1. **Current Sprint**: ✅ **Sprint 1** (Weeks 1-2)
2. **Deployment Status**: Sprint 1 in progress, not yet deployed to staging
3. **Testing Access**: ❌ Not yet - **Reminder set for tomorrow to request access**
4. **Priority Features**: ✅ **All features in SOW are priority** - Full adoption requires financial/reporting capabilities
5. **WoundGraft Details**: ✅ **iPhone app** for capturing treatment data (wound photos, measurements) → feeds into Woundcare app
6. **KX Modifier**: ✅ **Billing code** indicating **medical necessity** for insurance claims
7. **Adoption Blocker**: ✅ **Financial part of system with reports** - F&I Dashboard, A/R tracking, commission reporting

---

## Jarvis Support Opportunities

Now that I understand the SOW, I can help with:

1. **Testing Coordination**: Track deliverables, help with acceptance testing
2. **Documentation**: Write training materials for new features
3. **User Communication**: Draft emails explaining new features
4. **Manual→Digital Mapping**: Document how each manual process maps to app features
5. **Change Tracking**: Monitor what's delivered vs. what's in SOW
6. **Support Phase Management**: Track Support Day usage, prioritize requests
7. **Training Material Creation**: Video scripts, wiki pages for new features

---

*Last Updated: 2026-01-25*  
*Source: CHP SOW REVISIONS 2.0 for Literock*
