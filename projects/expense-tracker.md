# Expense Tracker & Tax Report Builder - Project Plan

**Status:** Planning / Not Started  
**Priority:** Medium  
**Created:** 2026-01-30  
**Type:** Web-based tool (single HTML file like Kanban)

---

## Project Overview

Build a web-based expense tracker that:
1. Accepts PDF uploads (credit card statements, bank statements)
2. Extracts and categorizes transactions (Personal/Business/Write-Off)
3. Detects recurring subscriptions automatically
4. Generates tax reports for accountant
5. Learns from previous categorizations (AI-assisted)

---

## Key Requirements

### PDF Processing
- Upload multiple PDF statements
- Extract all transactions using vision analysis (like P4 reports)
- Handle multiple credit cards and bank statements
- Process multiple months at once

### Categorization System
- **Personal** - Not deductible
- **Business** - Fully deductible (CHP work, office expenses)
- **Write-Off** - Tax deductible (studio gear, music equipment, AI tools for business)
- **Mixed** - Partial deductible (needs notes)
- **Unclear** - Needs manual review

### Subscription Detection
- Identify recurring charges across multiple months
- Auto-flag subscriptions (Netflix, Spotify, Claude, etc.)
- Track subscription costs separately
- Alert when subscriptions appear/disappear

### Smart Learning
- Month 1: Manual categorization
- Month 2+: AI suggests categories based on past behavior
- Learn merchant patterns ("Apple.com/bill" = Business)
- Improve accuracy over time

### Export/Reporting
- CSV export for accountant
- PDF summary report
- Categorized by expense type
- Business vs Personal split
- Total deductions calculated
- Optional: Attach receipts/statements

---

## Technical Approach

**Architecture:**
- Single HTML file (like opportunity-board.html)
- Client-side JavaScript
- Local storage for data persistence
- Dark theme

**PDF Processing:**
- Use Clawdbot's image tool to analyze PDF pages
- Extract transaction data via vision analysis
- Parse dates, merchants, amounts

**AI Categorization:**
- Send transaction list to Gemini/Claude
- Get category suggestions
- Store learning patterns in localStorage

**Data Structure:**
```json
{
  "transactions": [
    {
      "id": "unique-id",
      "date": "2026-01-15",
      "merchant": "Spotify",
      "amount": 9.99,
      "category": "personal",
      "isSubscription": true,
      "notes": "",
      "month": "2026-01"
    }
  ],
  "subscriptions": [
    {
      "name": "Spotify",
      "amount": 9.99,
      "frequency": "monthly",
      "category": "personal",
      "lastSeen": "2026-01-15"
    }
  ],
  "learningPatterns": {
    "Spotify": "personal",
    "AWS": "business",
    "Guitar Center": "write-off"
  }
}
```

---

## Development Phases

### Phase 1 - Basic Tracker (1-2 hours)
- PDF upload interface
- Manual transaction extraction (paste from PDF)
- Drag-and-drop categorization buckets
- Basic CSV export
- Pre-load Michael's known expenses

### Phase 2 - Smart Features (This week)
- PDF vision analysis for auto-extraction
- Subscription detection across months
- AI category suggestions
- Better export formats

### Phase 3 - Advanced (Next week)
- Multi-month historical tracking
- Year-to-date summaries
- Category templates
- Receipt linking
- Accountant-ready reports

---

## Michael's Current Monthly Expenses

### Utilities/Services
- Duke Energy: $313.82
- Bargersville: $31.65
- Greenwood: $75.23
- AT&T: $248.76

### Major Bills
- Rent: $1,450.00
- Car (Hyundai): $1,134.57
- Car Insurance: $236.60

### AI Subscriptions (Potential Write-Offs)
- Claude: $100.00
- ChatGPT: $20.00
- Grok: $30.00

### Credit Cards (Current Balances)
- Apple Card: $172.66
- Costco Citi: $286.67
- Chase Ink Card: $288.47
- Discover: $11.99
- Prime Card: $25.23
- Guitar Center: $300.00

**Monthly Total: $4,728.85**
- Fixed Bills: $3,490.63
- AI Subscriptions: $150.00/month ($1,800/year)
- Credit Card Debt: $1,085.02

---

## Questions to Answer Before Building

### For Accountant
- What format does your accountant prefer? (CSV, Excel, PDF)
- Do they need specific categories or just Business/Personal?
- Do they need receipts attached or just the report?
- Any specific tax forms they're filling out?

### Business Expenses
- CHP work-related charges (what types?)
- Music/band equipment (guitars, studio, software)
- Home office expenses?
- Travel for work?
- Software/AI tools for business?
- Equipment purchases?

### Categorization Rules
- Which AI subscriptions are business vs personal?
- Music gear: All write-off or mixed?
- Office supplies: Where do they go?
- Vehicle: Personal, business, or mixed?

---

## Design Mockup

```
┌─────────────────────────────────────────────────────────┐
│  📊 Expense Tracker & Tax Report Builder                │
│  [Upload PDF] [January 2026 ▼] [Export Report]          │
│  Total: $4,728.85 | Business: $X | Personal: $X          │
└─────────────────────────────────────────────────────────┘

┌─ Transactions (Drag to categorize) ────────────────────┐
│ Jan 15  Spotify              $9.99    → Personal        │
│ Jan 18  AWS Hosting        $127.50    → Business        │
│ Jan 22  Guitar Center      $450.00    → Write-Off       │
│ Jan 25  Costco              $86.43    → Unclear         │
└─────────────────────────────────────────────────────────┘

┌─ Personal ──┐ ┌─ Business ──┐ ┌─ Write-Off ──┐ ┌─ Review ─┐
│ Spotify     │ │ AWS         │ │ Studio Gear  │ │ Costco   │
│ Netflix     │ │ Office 365  │ │ Claude       │ │ Random   │
│ Groceries   │ │ ZohoCRM     │ │ ChatGPT      │ │ Unclear  │
│             │ │             │ │              │ │          │
│ $XXX.XX     │ │ $XXX.XX     │ │ $XXX.XX      │ │ $XX.XX   │
└─────────────┘ └─────────────┘ └──────────────┘ └──────────┘

┌─ Subscriptions Detected ────────────────────────────────┐
│ ✓ Spotify            $9.99/mo   Personal   Last: Jan 15 │
│ ✓ Claude           $100.00/mo   Business   Last: Jan 10 │
│ ✓ Netflix           $15.99/mo   Personal   Last: Jan 20 │
│ ? Adobe CC          $54.99/mo   (New - Categorize)      │
└─────────────────────────────────────────────────────────┘
```

---

## Notes

- **Privacy:** All data stored locally in browser (localStorage)
- **Backup:** Export JSON file periodically
- **Security:** No data leaves your Mac unless you export it
- **Portability:** Single HTML file, can be opened anywhere

---

## Next Steps

1. Answer questions about accountant requirements
2. Define business expense categories
3. Decide when to start building (Phase 1 = 1-2 hours)
4. Test with one month's statements first
5. Iterate based on actual use

---

## Related Files

- Opportunity Board: `opportunity-board.html` (similar architecture)
- Budget data will live here when built

---

*Project created: 2026-01-30 by Jarvis*  
*Last updated: 2026-01-30*
