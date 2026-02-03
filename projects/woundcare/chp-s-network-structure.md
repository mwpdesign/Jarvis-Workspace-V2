# CHP S Network - Manual Documentation System

**Location**: `~/Desktop/CHP S Network/`  
**Purpose**: Manual file system documenting Clear Health Pass Woundcare workflows  
**Last Explored**: 2026-01-25

---

## Overview

This is the MANUAL form of how Clear Health Pass Woundcare operates. It's a hierarchical folder structure with templates, checklists, and forms that document the entire patient care workflow from distributor onboarding through CMS claim submission.

---

## Top-Level Structure

### 1. Admin Check List
Master checklists for the entire workflow (numbered 01-10)

### 2. Distributor Template no SR
Template structure for distributors WITHOUT sales reps

### 3. Distributor Template w SR  
Template structure for distributors WITH sales reps

### 4. Supporting Files
- `How to Create a Distributor.docx`
- `Distributor Template Copier.xlsx`

---

## Organizational Hierarchy

```
Distributor
├── Sales Rep (optional)
│   └── Doctor/Provider
│       └── Patient
└── Doctor/Provider (if no SR)
    └── Patient
```

---

## Complete Workflow (Admin Checklists 01-10)

### **Phase 1: Onboarding**
1. **01_Distributor_Onboarding_Checklist.docx**
   - Distributor setup and documentation
   
2. **02_Sales_Rep_Onboarding_Checklist.docx**
   - Sales representative setup (if applicable)
   
3. **03_Provider_Onboarding_Checklist.docx**
   - Doctor/provider registration and credentialing

### **Phase 2: Patient Intake**
4. **04_Patient_Intake_Checklist.docx**
   - Initial patient enrollment
   - Includes: `04.1_30_Day_Conservative_Treatment_Tracker.docx`

### **Phase 3: Insurance & Authorization**
5. **05_IVR_Submission_Checklist.docx**
   - Insurance Verification Request submission
   
6. **06_Insurance_Premium_Checklist.docx**
   - Insurance premium processing

### **Phase 4: Treatment & Fulfillment**
7. **07_Order_Shipping_Checklist.docx**
   - Skin graft order and shipping process
   
8. **08_Treatment_Documentation_Checklist.docx**
   - Clinical documentation, images, logs

### **Phase 5: Billing & Claims**
9. **09_Billing_Payment_Checklist.docx**
   - Billing and payment processing
   
10. **10_CMS_Claim_Submission_Checklist.docx**
    - Medicare/CMS claim submission

---

## Patient Template Folders

Each patient folder contains subfolders for different workflow stages:

### **Intake**
- Patient Intake Form v7 (PDF)
- 30 Day Conservative Treatment Tracker
- Patient Assignments Forms
- Patient Intake Checklist

### **IVR** (Insurance Verification Request)
- IVR Request Form (PDF fillable)
- IVR Submission Checklist

### **Insurance Premium**
- Insurance Premium Checklist
- Related premium documentation

### **Orders - Shipping**
- Provider Order Form v6 (PDF)
- Order Shipping Checklist

### **Treatment Images-Logs-Notes**
Subfolders:
- **Images**: Clinical pictures
- **Graft Logs**: Treatment logs
- **Notes**: Clinical notes
- Treatment Documentation Checklist
- Clinical Picture Requirements

### **Billing**
- Billing Payment Checklist
- Payment documentation

---

## Provider (Doctor) Documents

### Required Signed Documents:
- `Doctor_Agreement.docx`
- `Doctor_Registration_Form V3.pdf`
- `PC BAA_Agreement v1.docx` (HIPAA Business Associate Agreement)
- `PC NDA_Agreement.docx` (Non-Disclosure Agreement)
- `W-9_Form_IRS.pdf`

### Instructions:
- `Provider Instructions Guide_v2.docx`
- `How to Create a Patient.docx`

---

## Distributor Documents

### Required Documents:
- Distributor Onboarding Checklist
- Distributor Required Documents (folder)
- Signed documents (subfolder)

### Instructions:
- `Distributor Instructions Guide_v2.docx`
- `How to Create a Doctor.docx`

---

## Sales Rep Template (when applicable)

### Documents:
- `Sales Rep Instructions Guide_v2.docx`
- `How to Create a Doctor.docx`

### Structure:
Same nested structure as "no SR" template:
- Sales Rep → Doctor → Patient

---

## Key Forms (Latest Versions)

- **Patient Intake Form**: v7 (PDF)
- **Provider Order Form**: v6 (PDF)
- **Doctor Registration Form**: V3 (PDF)
- **IVR Request Form**: V2 (PDF fillable)
- **PC BAA Agreement**: v1 (DOCX)

---

## Document Types

1. **Checklists** (.docx)
   - Step-by-step workflows
   - Numbered admin checklists (01-10)
   - Stage-specific checklists

2. **Forms** (.pdf, fillable)
   - Patient intake
   - Provider orders
   - IVR requests
   - Doctor registration

3. **Agreements** (.docx)
   - BAA (Business Associate Agreement - HIPAA)
   - NDA (Non-Disclosure Agreement)
   - Doctor/Provider agreements

4. **Guides** (.docx)
   - Role-specific instructions
   - "How to Create..." guides
   - Setup guides

---

## Guides Folder

Located: `Admin Check List/Guides/`

### Procedure Documents (Detailed workflows)

**Admin Procedures** (CHP-ADMIN):
- `CHP-ADMIN-01_Distributor_Onboarding_Procedure_v2.docx`
- `CHP-ADMIN-02_Sales_Rep_NDA_Processing.docx`
- `CHP-ADMIN-03_Provider_Onboarding_Procedure.docx`

**Operations Procedures** (CHP-OPS):
- `CHP-OPS-01_Intake_Verification_Procedure.docx`
- `CHP-OPS-02_IVR_Processing_Procedure_PLACEHOLDER.docx`
- `CHP-OPS-03_Insurance_Premium_Procedure_PLACEHOLDER.docx`
- `CHP-OPS-04_Order_Processing_Procedure.docx`
- `CHP-OPS-05_Shipping_Invoicing_Procedure.docx`

### Role Instructions (Reference guides)

Located: `Guides/Role Instructions for Reference/`
- `Distributor_Instructions_Guide_v2.docx`
- `Provider_Instructions_Guide_v2.docx`
- `Sales_Rep_Instructions_Guide_v2.docx`

### Admin Team Manual

- `S_Network_Admin_Team_Instructions_Manual.docx` (comprehensive guide)

### Archive

Historical versions and deprecated documentation

---

## Two Operating Models

### Model 1: Direct to Provider (no SR)
```
Distributor → Doctor → Patient
```

### Model 2: Sales Rep Model (with SR)
```
Distributor → Sales Rep → Doctor → Patient
```

Both models follow the same 10-step patient workflow once a patient is onboarded.

---

## Clinical Workflow Stages

1. **Onboarding** (Distributor/SR/Provider setup)
2. **Patient Intake** (Registration, 30-day conservative care tracking)
3. **Insurance Verification** (IVR submission)
4. **Premium Processing** (Insurance premium)
5. **Order Fulfillment** (Skin graft ordering and shipping)
6. **Treatment** (Application, documentation, imaging)
7. **Billing** (Payment processing)
8. **Claims** (CMS/Medicare submission)

---

## Use Cases for This System

This manual file system appears to be:

1. **Training documentation** - How to perform each role
2. **Process templates** - Reusable folder structures
3. **Compliance tracking** - Checklists for regulatory requirements
4. **File organization** - Standard structure for patient records
5. **Onboarding guide** - Setting up new distributors/providers/patients

---

## Automation Opportunities

**This entire manual system is a TARGET for Woundcare app automation:**

- Each checklist = potential app workflow
- Each form = potential app data entry screen
- Each folder structure = potential database schema
- Each "How to Create" guide = potential app feature

**Clear Health Pass Woundcare likely digitizes/automates these processes.**

---

## Questions for Michael

- Is the Woundcare app a digital version of this manual system?
- Which parts are still manual vs. automated in the app?
- Are these templates still actively used, or are they legacy documentation?
- Should I map this structure to the Woundcare app features?

---

## Notes

- **HIPAA-sensitive**: Contains patient workflow documentation
- **Regulatory**: CMS/Medicare claim processes
- **Tribal healthcare**: Mentioned in briefing context
- **Skin graft focus**: Clear throughout documentation
- **Version control**: Forms have version numbers (need to track latest)

---

*This document will be updated as I learn more about the CHP S Network structure and its relationship to the Woundcare application.*
