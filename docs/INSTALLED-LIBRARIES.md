# Installed Libraries & Tools - Full Capability Stack
## Installed: 2026-01-29

This document lists all Python libraries and CLI tools installed to extend Jarvis's capabilities.

---

## ✅ PYTHON LIBRARIES (60+)

### Data Processing & Analytics
- **pandas** - DataFrames, CSV/Excel analysis, data manipulation
- **numpy** - Numerical computing, arrays, mathematical operations
- **scipy** - Scientific computing, advanced math
- **scikit-learn** - Machine learning, classification, regression
- **statsmodels** - Statistical modeling, time series analysis

### Visualization & Reporting
- **plotly** - Interactive charts and dashboards
- **matplotlib** - Static charts, publication-quality graphs
- **seaborn** - Statistical data visualization

### PDF & Document Processing
- **PyPDF2** - PDF reading and basic manipulation
- **pdfplumber** - Advanced PDF text extraction
- **python-docx** (docx) - Word document creation/editing
- **python-pptx** - PowerPoint presentation automation
- **openpyxl** - Read/write Excel files
- **xlsxwriter** - Create formatted Excel files

### Web Scraping & APIs
- **requests** - HTTP requests, REST API calls
- **httpx** - Async HTTP client
- **beautifulsoup4** (bs4) - HTML/XML parsing
- **lxml** - Fast XML/HTML processing
- **selenium** - Browser automation, web testing
- **playwright** - Modern browser automation (with Chromium installed)

### OCR & Text Processing
- **pytesseract** - Tesseract OCR wrapper
- **nltk** - Natural language toolkit
- **spacy** - Industrial NLP library
- **textblob** - Text processing, sentiment analysis

### Email & Communication
- **imapclient** - IMAP email reading
- **email-validator** - Email address validation

### Image & Video Processing
- **Pillow** (PIL) - Image manipulation, thumbnails
- **opencv-python** (cv2) - Computer vision, image processing
- **moviepy** - Video editing and manipulation

### Audio Processing
- **pydub** - Audio manipulation (cut, splice, effects)
- **ffmpeg-python** - FFmpeg wrapper
- **audioop-lts** - Audio operations backport for Python 3.14

### QR Codes & Barcodes
- **qrcode** - QR code generation
- **python-barcode** - Barcode generation

### Task Scheduling
- **schedule** - Simple task scheduler
- **apscheduler** - Advanced job scheduling

### Database Drivers
- **sqlalchemy** - SQL toolkit and ORM
- **psycopg2-binary** - PostgreSQL driver
- **pymongo** - MongoDB driver
- **redis** - Redis database client

### Cloud Services
- **boto3** - AWS SDK (S3, EC2, CloudWatch, etc.)
- **botocore** - AWS core functionality
- **s3transfer** - S3 transfer manager

### SSH & Remote Access
- **paramiko** - SSH2 protocol library
- **fabric** - Remote execution and deployment

### Data Validation
- **pydantic** - Data validation using type hints
- **cerberus** - Schema validation

### Config & Formats
- **pyyaml** (yaml) - YAML file processing
- **markdown** - Markdown to HTML conversion
- **python-dateutil** - Advanced date parsing
- **pytz** - Timezone handling

### Supporting Libraries
- Many additional dependencies installed automatically

---

## ✅ CLI TOOLS (Homebrew)

### PDF Processing
- **poppler** - PDF utilities (pdftoppm, pdftotext)
- **tesseract** - OCR engine

### Data Processing
- **jq** - JSON parsing and manipulation
- **yq** - YAML processing
- **ripgrep** (rg) - Ultra-fast search

### File Management
- **fzf** - Fuzzy finder
- **bat** - Better cat with syntax highlighting

### System Monitoring
- **htop** - Interactive process viewer

### Media
- **ffmpeg** - Video/audio conversion

---

## 🎯 CAPABILITY MATRIX

| Capability | Tools/Libraries |
|------------|-----------------|
| **Data Analysis** | pandas, numpy, scipy, scikit-learn, statsmodels |
| **Visualization** | plotly, matplotlib, seaborn |
| **PDF Processing** | PyPDF2, pdfplumber, poppler |
| **Word Docs** | python-docx |
| **PowerPoint** | python-pptx |
| **Excel** | pandas, openpyxl, xlsxwriter |
| **Web Scraping** | beautifulsoup4, lxml, requests |
| **Browser Automation** | selenium, playwright (+ Chromium) |
| **OCR** | pytesseract, tesseract |
| **NLP** | nltk, spacy, textblob |
| **Email** | imapclient, email-validator |
| **Images** | Pillow, opencv-python |
| **Video** | moviepy, ffmpeg, opencv |
| **Audio** | pydub, ffmpeg-python |
| **QR/Barcodes** | qrcode, python-barcode |
| **Scheduling** | schedule, apscheduler |
| **PostgreSQL** | psycopg2-binary |
| **MongoDB** | pymongo |
| **Redis** | redis |
| **AWS** | boto3 |
| **SSH** | paramiko, fabric |
| **JSON/YAML** | jq, yq, pyyaml |
| **Fast Search** | ripgrep |

---

## 💡 WHAT JARVIS CAN NOW DO

### Documents & Reports
- ✅ Generate Word documents programmatically
- ✅ Create PowerPoint presentations automatically
- ✅ Parse and extract PDF text (even from scans)
- ✅ Create formatted Excel reports with charts
- ✅ Convert between document formats

### Data & Analytics
- ✅ Advanced statistical analysis
- ✅ Machine learning models
- ✅ Interactive data visualizations
- ✅ Time series forecasting
- ✅ Data transformation pipelines

### Web & Automation
- ✅ Scrape websites for research
- ✅ Automate browser interactions
- ✅ Fill web forms automatically
- ✅ Test web applications
- ✅ Screenshot web pages

### Media Processing
- ✅ Batch process images (resize, crop, thumbnails)
- ✅ Edit videos (cut, combine, add text)
- ✅ Manipulate audio files (trim, fade, combine)
- ✅ Generate QR codes and barcodes
- ✅ Extract frames from videos

### Communication & Integration
- ✅ Read and process emails
- ✅ Connect to databases (PostgreSQL, MongoDB, Redis)
- ✅ AWS automation (S3, EC2, etc.)
- ✅ SSH into remote servers
- ✅ Deploy applications remotely

### Intelligence & NLP
- ✅ Extract text from images (OCR)
- ✅ Sentiment analysis
- ✅ Text summarization
- ✅ Keyword extraction
- ✅ Language processing

---

## 📊 STORAGE IMPACT

**Total install size:** ~1.5-2GB (well within 4TB drive capacity)

---

## 🔧 MAINTENANCE

All libraries installed with:
```bash
pip3 install --user --break-system-packages [package]
```

**Location:** `/Users/michaelparson/Library/Python/3.14/lib/python/site-packages/`

**Update all:**
```bash
pip3 list --outdated --user
pip3 install --upgrade --user --break-system-packages [package]
```

---

## 📝 NOTES

- Some scripts installed to `/Users/michaelparson/Library/Python/3.14/bin` (not on PATH)
- Playwright browsers installed to `/Users/michaelparson/Library/Caches/ms-playwright/`
- Chromium headless browser ready for automation

---

*Last updated: 2026-01-29 19:45 EST*
*Installed by: Jarvis (autonomous capability expansion)*
