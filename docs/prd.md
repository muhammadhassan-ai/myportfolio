# Requirements Document

## 1. Application Overview

**Application Name**: Muhammad Hassan Portfolio Website

**Application Description**: A single-page personal portfolio website showcasing Muhammad Hassan's professional profile, technical skills, projects, education background, and certifications. The website serves as an online resume and professional showcase for potential employers and collaborators.

## 2. Users and Usage Scenarios

**Target Users**:
- Recruiters and hiring managers seeking AI/ML engineers or software developers
- Potential collaborators and clients
- Academic institutions and professional networks

**Core Usage Scenarios**:
- Recruiters reviewing candidate qualifications and project portfolio
- Visitors exploring technical skills and project demonstrations
- Professional contacts seeking contact information and social profiles

## 3. Page Structure and Functional Description

### Page Structure
```
Portfolio Website (Single Page)
├── Header (Sticky Navigation)
├── Hero Section
├── About Section
├── Skills Section
├── Projects Section
├── Education Section
├── Certifications Section
└── Contact Section
```

### 3.1 Header (Sticky Navigation)

**Function**: Provide persistent navigation access across all sections

**Content**:
- Navigation links to all main sections: About, Skills, Projects, Education, Certifications, Contact
- Remains visible at top of viewport when scrolling
- Clicking navigation link smoothly scrolls to corresponding section

### 3.2 Hero Section

**Function**: Present primary identity and professional positioning

**Content**:
- Name: Muhammad Hassan
- Professional Title: AI/ML Engineer | Software Development | Automation Engineering
- Call-to-action button linking to Contact section
- Visual design with dark theme and tech/AI aesthetic

### 3.3 About Section

**Function**: Display professional summary and background

**Content**:
- Professional Summary: Final-year Computer Science student at Lahore Garrison University building production-style AI/ML systems and full-stack applications — from training ensemble classifiers and writing a from-scratch compiler to deploying Flask APIs and automation pipelines. Comfortable working across the stack: React frontends, n8n workflows, and Claude API integrations. Seeking a software development internship where I can contribute practically and grow within an engineering team.
- Location: Lahore, Pakistan
- Animated entrance effect when section becomes visible

### 3.4 Skills Section

**Function**: Showcase technical competencies organized by category

**Content Categories and Skills**:

**Languages**:
- Python
- JavaScript
- C++
- HTML
- CSS

**Frameworks & Libraries**:
- React
- Node.js
- Flask
- Scikit-learn
- Pandas
- NumPy
- Matplotlib

**AI & Automation**:
- Claude API (Anthropic)
- n8n
- ManyChat
- ML model deployment

**Databases & Tools**:
- MySQL
- Git
- GitHub
- VS Code

**Networking**:
- Cisco Packet Tracer

**Concepts**:
- Machine Learning
- REST APIs
- OOP
- Data Analysis
- Cloud Computing
- Compiler Design

**Display Format**: Skills displayed as categorized badges or tags with visual distinction

### 3.5 Projects Section

**Function**: Present portfolio projects with descriptions and access links

**Project 1: Smart Healthcare Prediction System**
- Technologies: Python, Flask, React, Scikit-learn, Pandas, NumPy
- Description: Benchmarked 4 classifier types (Random Forest, Gradient Boosting, SVM, Logistic Regression) on class-imbalanced clinical dataset. Applied SMOTE for class rebalancing; Voting Classifier achieved best test F1 of 0.60 across 3 classes. Flask REST API + React frontend for real-time inference.
- GitHub Link: github.com/muhammadhassan-ai/machine-learning-project

**Project 2: SentinelX — Mini Compiler Assistant**
- Technologies: Python, Flask, PLY (Lex/Yacc)
- Description: Full compiler pipeline: lexical analysis, parsing, semantic analysis, IR generation with 4 optimization passes, tree-walking interpreter. Flask web interface to inspect each compilation stage. Supports statically-typed mini language; detects 7 distinct error types.
- GitHub Link: github.com/muhammadhassan-ai/SentinelX

**Project 3: Roman Pizza Website**
- Technologies: React, Node.js, CSS, Selenium
- Description: Full-stack pizza ordering website, deployed and publicly available. Mobile-responsive UI; Selenium-based automated test suite.
- GitHub Link: github.com/muhammadhassan-ai/Roman-pizza-website

**Project 4: Instagram DM Auto-Reply Agent**
- Technologies: Node.js, ManyChat API, Claude API
- Description: Automated Instagram DM handling for a business client using Claude API + ManyChat. Rule-based routing + AI-generated replies, 24/7 coverage.
- GitHub Link: Not provided

**Display Format**: Project cards with tech stack badges, project description, and clickable GitHub links

### 3.6 Education Section

**Function**: Display academic background and relevant coursework

**Content**:
- Degree: Bachelor of Science in Computer Science (BSCS)
- Institution: Lahore Garrison University
- Status: Final Year
- Expected Graduation: 2027
- Relevant Coursework: Machine Learning, Parallel & Distributed Computing, Compiler Construction, Software Quality Assurance, Cloud Computing, Database Systems

### 3.7 Certifications Section

**Function**: List professional certifications and completion dates

**Certifications**:
- Elements of AI — University of Helsinki & MinnaLearn (June 2026)
- Google AI Agents — Google Skills (March 2025)

### 3.8 Contact Section

**Function**: Provide contact information and social profile links

**Contact Information**:
- Phone: +92 318 484 1177
- Email: muhammadhassan24064@gmail.com
- LinkedIn: linkedin.com/in/muhammad-hassan-817678328
- GitHub: github.com/muhammadhassan-ai

**Display Format**: Contact details with clickable links for email, LinkedIn, and GitHub profiles

## 4. Business Rules and Logic

### 4.1 Navigation Behavior
- Clicking navigation link in header triggers smooth scroll to target section
- Header remains fixed at top of viewport during scroll
- Active section indicator updates based on current scroll position

### 4.2 Animation Behavior
- Sections display fade-in animation when entering viewport during scroll
- Animation triggers once per section on initial view

### 4.3 Responsive Behavior
- Layout adapts to different screen sizes (mobile, tablet, desktop)
- Mobile-first design approach ensures optimal mobile experience
- Navigation may collapse to hamburger menu on mobile devices

### 4.4 Link Behavior
- External links (GitHub, LinkedIn, email) open in new browser tab
- Email link triggers default email client
- Phone link triggers phone dialer on mobile devices

## 5. Exceptions and Edge Cases

| Scenario | Handling |
|----------|----------|
| GitHub link unavailable or broken | Display link as-is; user responsible for link validity |
| Section content overflows on small screens | Enable vertical scroll within section or adjust layout |
| Animation not supported by browser | Display content without animation effects |
| External link fails to open | Standard browser error handling; no custom error message |
| User disables JavaScript | Display static content without animations and smooth scroll |

## 6. Acceptance Criteria

1. User opens portfolio website and views Hero section with name, title, and call-to-action button
2. User clicks navigation link in header and page smoothly scrolls to corresponding section
3. User scrolls down and observes fade-in animation effects as each section enters viewport
4. User views Projects section and clicks GitHub link on project card, opening repository in new tab
5. User views Skills section and sees all technical skills organized by category with visual badges
6. User scrolls to Contact section and clicks email link, triggering email client with pre-filled recipient address
7. User accesses website on mobile device and experiences responsive layout with readable content and functional navigation

## 7. Features Not Included in This Release

- User authentication or login system
- Backend data storage or database
- Content management system for updating portfolio content
- Blog or article publishing functionality
- Visitor analytics or tracking
- Contact form with server-side processing
- Multi-language support
- Dark/light theme toggle
- Project filtering or search functionality
- Downloadable resume PDF
- Testimonials or recommendations section
- Social media feed integration
- Interactive project demos or embedded applications
- Admin panel for content editing