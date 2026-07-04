export const portfolioData = {
  name: 'Muhammad Hassan',
  title: 'AI/ML Engineer | Software Development | Automation Engineering',
  summary:
    'Final-year Computer Science student at Lahore Garrison University building production-style AI/ML systems and full-stack applications — from training ensemble classifiers and writing a from-scratch compiler to deploying Flask APIs and automation pipelines. Comfortable working across the stack: React frontends, n8n workflows, and Claude API integrations. Seeking a software development internship where I can contribute practically and grow within an engineering team.',
  contact: {
    phone: '+92 318 484 1177',
    email: 'muhammadhassan24064@gmail.com',
    linkedin: 'https://linkedin.com/in/muhammad-hassan-817678328',
    github: 'https://github.com/muhammadhassan-ai',
    location: 'Lahore, Pakistan',
  },
  education: [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'Lahore Garrison University',
      status: 'Final Year',
      expected: 'Expected 2027',
      coursework: [
        'Machine Learning',
        'Parallel & Distributed Computing',
        'Compiler Construction',
        'Software Quality Assurance',
        'Cloud Computing',
        'Database Systems',
      ],
    },
  ],
  skills: {
    Languages: ['Python', 'JavaScript', 'C++', 'HTML', 'CSS'],
    'Frameworks & Libraries': ['React', 'Node.js', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    'AI & Automation': ['Claude API (Anthropic)', 'n8n', 'ManyChat', 'ML model deployment'],
    'Databases & Tools': ['MySQL', 'Git', 'GitHub', 'VS Code'],
    Networking: ['Cisco Packet Tracer'],
    Concepts: ['Machine Learning', 'REST APIs', 'OOP', 'Data Analysis', 'Cloud Computing', 'Compiler Design'],
  },
  projects: [
    {
      name: 'Smart Healthcare Prediction System',
      tech: ['Python', 'Flask', 'React', 'Scikit-learn', 'Pandas', 'NumPy'],
      description:
        'Benchmarked four classifier types — Random Forest, Gradient Boosting, SVM, and Logistic Regression — on a class-imbalanced clinical dataset. Applied SMOTE for rebalancing and StandardScaler for normalization, then combined the models in a Voting Classifier. Served predictions through a Flask REST API connected to a React frontend. Achieved the best test F1 of 0.60 across Non-Diabetic, Pre-Diabetic, and Diabetic classes.',
      github: 'https://github.com/muhammadhassan-ai/machine-learning-project',
    },
    {
      name: 'SentinelX — Mini Compiler Assistant',
      tech: ['Python', 'Flask', 'PLY (Lex/Yacc)'],
      description:
        'Implemented a full compiler pipeline covering lexical analysis, parsing with context-free grammar, semantic analysis, intermediate representation generation with four optimization passes, and a tree-walking interpreter. Exposed the pipeline through a Flask web interface so users can inspect lexer tokens, AST, IR, and execution output. Supports a statically-typed mini language and reports seven distinct error types.',
      github: 'https://github.com/muhammadhassan-ai/SentinelX',
    },
    {
      name: 'Roman Pizza Website',
      tech: ['React', 'Node.js', 'CSS', 'Selenium'],
      description:
        'Built a full-stack pizza ordering website with a dynamic React frontend, interactive cart, and order placement flow. Implemented a mobile-responsive UI with a component-based architecture. Created and ran a Selenium-based automated test suite covering the ordering flow as the Software Quality Assurance coursework deliverable.',
      github: 'https://github.com/muhammadhassan-ai/Roman-pizza-website',
    },
    {
      name: 'Instagram DM Auto-Reply Agent',
      tech: ['Node.js', 'ManyChat API', 'Claude API'],
      description:
        'Automated Instagram DM handling for a business client by combining rule-based routing with Claude API-generated replies. Integrated the ManyChat API with a Node.js backend to route and respond to incoming messages at scale, eliminating manual effort and enabling 24/7 coverage.',
      github: null,
    },
  ],
  certifications: [
    {
      name: 'Elements of AI',
      issuer: 'University of Helsinki & MinnaLearn',
      date: 'June 2026',
    },
    {
      name: 'Google AI Agents',
      issuer: 'Google Skills',
      date: 'March 2025',
    },
  ],
} as const;

export type PortfolioData = typeof portfolioData;
