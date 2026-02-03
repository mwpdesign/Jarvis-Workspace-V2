# Clear Health Pass Woundcare - Technical Stack

**Repository**: https://github.com/CHP-Commits/CHPAWS  
**Branch**: main  
**Local Clone**: `~/.clawdbot/workspace/repos/CHPAWS/`  
**Status**: READ-ONLY (Jarvis never modifies repo)

---

## Platform Overview

**Official Name**: Healthcare IVR Platform  
**Purpose**: HIPAA-compliant Insurance Verification Request (IVR) system for healthcare providers

**Core Functionality**:
- Insurance verification request automation
- Healthcare order management (skin graft treatments)
- Multi-role access control (8 user roles)
- Territory-based distributor operations
- Real-time notifications and status updates

---

## Technology Stack

### Frontend

**Framework**: React 18.2 + TypeScript  
**Build Tool**: Vite 5.0  
**Styling**: Tailwind CSS 3.4  
**UI Libraries**:
- Material-UI (MUI) 5.17 + Icons
- Headless UI 1.7
- Heroicons 2.0
- Lucide React 0.358

**State Management**:
- React Query 3.39
- React Hook Form 7.51
- React Context API

**Routing**: React Router DOM 6.11

**Forms & Validation**:
- React Hook Form
- Yup 1.4
- Zod 3.22

**Data Visualization**:
- Chart.js 4.4 + React Chart.js 2
- Recharts 2.15

**File Handling**:
- React Dropzone 14.3
- React PDF 7.7

**Rich Text**: TinyMCE React 6.1

**Notifications**: React Hot Toast 2.5, React Toastify 10.0

**AWS Integration**: AWS Amplify 6.14

**HTTP Client**: Axios 1.6

**Utilities**:
- Lodash 4.17
- Date-fns 3.6
- Crypto-js 4.2
- CLSX 2.1

---

### Backend

**Framework**: FastAPI 0.109  
**Language**: Python 3.x  
**ASGI Server**: Uvicorn 0.27  
**Process Manager**: Gunicorn 23.0

**Database**:
- **ORM**: SQLAlchemy 2.0 (async)
- **Migrations**: Alembic 1.13
- **Driver**: asyncpg 0.29 (PostgreSQL)
- **Production**: Aurora PostgreSQL (AWS)
- **Local**: PostgreSQL with psycopg2-binary 2.9

**Caching**: Redis 6.1 (ElastiCache on AWS)

**Authentication**:
- Python-JOSE 3.3 (JWT tokens)
- Passlib 1.7 (password hashing)
- Bcrypt 4.3
- AWS Cognito integration

**AWS Services**:
- Boto3 1.34 (AWS SDK)
- S3 (encrypted file storage)
- CloudWatch (logging/monitoring)
- App Runner (backend hosting)

**Security**:
- Cryptography 42.0
- Rate Limiting: SlowAPI 0.1

**Email**: Python-Multipart 0.0.9

**Monitoring**:
- Prometheus Client 0.19
- Structlog 24.1

**Utilities**:
- Pydantic 2.6 (data validation)
- Pydantic-Settings 2.2
- Python-Dotenv 1.0

**Data Processing**:
- Pandas 2.2
- NumPy 1.26
- Scikit-learn 1.4

**Testing**:
- Pytest 8.0
- Pytest-asyncio 0.23
- Pytest-cov 4.1
- Coverage 7.10

**Code Quality**:
- Black 24.1 (formatter)
- Flake8 7.0 (linter)
- MyPy 1.8 (type checker)
- Isort 5.13 (import sorter)
- Bandit 1.7 (security)

---

### Infrastructure (AWS)

**Deployment Tool**: OpenTofu (Terraform fork)  
**Deployment Method**: One-click via `./deploy.sh`

**AWS Services**:
- **Compute**: App Runner (backend), Amplify (frontend CI/CD)
- **Database**: Aurora PostgreSQL (HIPAA-compliant)
- **Cache**: ElastiCache Redis
- **Storage**: S3 (encrypted)
- **Auth**: Cognito
- **Networking**: VPC, Private Subnets
- **Monitoring**: CloudWatch

**Naming Convention**: `chp-wcp-dev` (consistent across all resources)

**Security**:
- Private networking (no public IPs for backend)
- Encrypted storage (S3, Aurora)
- Zero hardcoded secrets (all via environment variables)
- HIPAA compliance built-in

---

## System Architecture

### User Roles (8 Total)

1. **CHP Admin** - System administration
2. **Distributor (Master/Regional)** - Distribution management
3. **Sales Representative** - Territory sales operations
4. **Doctor/Provider** - Healthcare provider interface
5. **Office Medical Staff** - Provider staff access
6. **IVR Company** - Insurance verification operations
7. **(Additional roles per RBAC system)**

### Core Modules

1. **Authentication & RBAC**
   - JWT-based authentication
   - Role-based access control
   - Permission-based endpoint protection
   - Multi-factor authentication support

2. **Insurance Verification (IVR)**
   - Automated verification workflow
   - Insurance carrier integration
   - Approval/denial processing
   - Status tracking and notifications

3. **Order Management**
   - Order creation and processing
   - Fulfillment workflow
   - Shipping and logistics
   - Invoice generation

4. **User Management**
   - Multi-role user administration
   - Territory assignments
   - Distributor hierarchy
   - Invitation system

5. **Patient Management**
   - Patient records (HIPAA-compliant)
   - Treatment tracking
   - Medical documentation
   - PHI encryption

6. **Inventory & Products**
   - Product catalog
   - Inventory management
   - Pricing and billing

7. **Notifications**
   - Real-time WebSocket updates
   - Email notifications
   - Mobile push notifications
   - In-app alerts

8. **Audit & Compliance**
   - Comprehensive audit logging
   - HIPAA compliance tracking
   - Enhanced audit trails
   - Sensitive data protection

---

## Database Models

**Total Models**: 40+

**Key Models**:
- `User` - User accounts and authentication
- `UserProfile` - Extended user information
- `Patient` - Patient records (PHI encrypted)
- `IVR` - Insurance verification requests
- `Order` - Order records
- `Invoice` - Billing and invoicing
- `Provider` - Healthcare provider profiles
- `DoctorProfile` - Doctor-specific data
- `Distributor` - Distributor organizations
- `SalesRep` - Sales representative data
- `Product` - Product catalog
- `Inventory` - Stock management
- `Shipping` - Logistics tracking
- `Notification` - User notifications
- `Audit` - Audit logging
- `Template` - Email/document templates
- `Settings` - System configurations

**Associations**:
- Complex many-to-many relationships
- Territory-based hierarchies
- Distributor-Sales-Doctor chains
- Role-permission mappings

---

## API Structure

**API Version**: v1  
**Base Path**: `/api/v1/`

**Endpoint Categories**:
- `/auth/` - Authentication
- `/ivr/` - Insurance verification
- `/orders/` - Order management
- `/users/` - User management
- `/patients/` - Patient records
- `/distributors/` - Distributor operations
- `/sales/` - Sales operations
- `/doctors/` - Provider operations
- `/products/` - Product catalog
- `/notifications/` - Notification system
- `/audit/` - Audit logs
- `/admin/` - Admin operations

**Real-Time**:
- WebSocket endpoints for live updates
- Pub/sub notification system

---

## Security & Compliance

### HIPAA Compliance

- **Field-level PHI encryption**
- **Audit logging** (all data access tracked)
- **Encrypted storage** (S3, Aurora)
- **Private networking** (no public database access)
- **Secure authentication** (JWT + Cognito)
- **Access controls** (role-based permissions)

### Security Features

- **Password hashing**: Bcrypt
- **JWT tokens**: Python-JOSE
- **Rate limiting**: SlowAPI
- **CORS configuration**: Secure origins
- **Environment secrets**: No hardcoded credentials
- **Security scanning**: Bandit (static analysis)

---

## Development Workflow

### Local Development

**Frontend**:
```bash
cd frontend
npm install
npm run dev  # Vite dev server
```

**Backend**:
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Testing

**Frontend**:
```bash
npm test  # Vitest
npm run lint  # ESLint
npm run typecheck  # TypeScript
```

**Backend**:
```bash
pytest  # Run tests
pytest --cov  # With coverage
black .  # Format code
flake8  # Lint
mypy .  # Type check
```

### Deployment

**One-Click Deploy**:
```bash
./deploy.sh  # Deploys everything to AWS
```

**Verification**:
```bash
./verify-deployment-ready.sh
```

**Cleanup**:
```bash
./aws-cleanup-final.sh
```

---

## File Structure

```
CHPAWS/
├── backend/
│   ├── app/
│   │   ├── api/           # API endpoints
│   │   ├── core/          # Core config/utilities
│   │   ├── models/        # SQLAlchemy models
│   │   ├── schemas/       # Pydantic schemas
│   │   ├── services/      # Business logic
│   │   └── main.py        # FastAPI app
│   ├── alembic/           # Database migrations
│   ├── scripts/           # Utility scripts
│   └── requirements.txt   # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── contexts/      # React contexts
│   │   └── types/         # TypeScript types
│   ├── public/            # Static assets
│   └── package.json       # Node dependencies
├── docs/                  # Documentation
├── scripts/               # Deployment scripts
└── infrastructure/        # OpenTofu/Terraform (assumed)
```

---

## Documentation Available

Located in `docs/`:
- System Architecture Overview
- Comprehensive Training Guide
- Deployment & Maintenance Guide
- Admin Invoice Management
- Doctor Dashboard Documentation
- Healthcare IVR System Documentation
- Office Medical Staff Permissions
- OTP Login Implementation
- Permission System Examples

---

## Key Integrations

1. **AWS Cognito** - User authentication
2. **AWS S3** - File storage (encrypted)
3. **Aurora PostgreSQL** - Primary database
4. **ElastiCache Redis** - Caching layer
5. **CloudWatch** - Logging and monitoring
6. **AWS Amplify** - Frontend hosting and CI/CD
7. **App Runner** - Backend hosting

---

## What This Automates from Manual System

The CHP S Network folder system (manual) maps to this app:

| Manual System | Woundcare App Feature |
|--------------|----------------------|
| Distributor Onboarding Checklist | Distributor creation workflow |
| Provider Onboarding Checklist | Doctor/provider registration |
| Patient Intake Checklist | Patient record creation |
| IVR Submission Checklist | IVR module (automated workflow) |
| Insurance Premium Checklist | Insurance tracking |
| Order Shipping Checklist | Order management module |
| Treatment Documentation | Patient treatment tracking |
| Billing Payment Checklist | Invoice generation |
| CMS Claim Submission | (To be implemented?) |

---

## Current Status

**Deployment**: One-click AWS deployment ready  
**Environment**: Production-ready with HIPAA compliance  
**Active Development**: Enhancements in progress (see SOW)  
**Adoption**: Transitional - manual folder system still in use

---

## Notes for Jarvis

- **Repository Access**: READ-ONLY
- **Never commit or push changes**
- **Use for**: Code reference, architecture understanding, troubleshooting support
- **Purpose**: Answer Michael's questions, provide context, suggest improvements

---

*Last Updated: 2026-01-25*
