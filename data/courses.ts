export interface CourseModule {
  number: number;
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Software Engineering' | 'Design & UX' | 'Data & AI' | 'Cloud & Security' | 'IT & Growth';
  categorySlug: 'software-engineering' | 'design-ux' | 'data-ai' | 'cloud-security' | 'it-growth';
  badge: string;
  icon: string;
  duration: string;
  level: string;
  mode: string;
  schedule: string;
  tuition: string;
  tuitionInstallment: string;
  overview: string;
  targetAudience: string;
  prerequisites: string;
  certification: string;
  capstoneProject: {
    title: string;
    description: string;
  };
  tools: string[];
  skills: string[];
  careerRoles: string[];
  modules: CourseModule[];
}

export const COURSES: Course[] = [
  {
    id: 'fullstack-web-development',
    slug: 'fullstack-web-development',
    title: 'Full-Stack Web Development',
    subtitle: 'Master modern frontend & backend development to build production-grade web applications.',
    category: 'Software Engineering',
    categorySlug: 'software-engineering',
    badge: 'Most Popular',
    icon: '💻',
    duration: '16 Weeks',
    level: 'Beginner to Advanced',
    mode: 'Hybrid (Lagos Hub + Virtual) & 100% Online',
    schedule: 'Weekday Intensive or Weekend Cohort',
    tuition: '₦220,000 / $250',
    tuitionInstallment: 'Flexible 2-3 Part Installments Available',
    overview:
      'Become an industry-ready full-stack software engineer. This comprehensive 16-week immersive program takes you from foundational web fundamentals (HTML5, CSS3, JavaScript ES6+) all the way through advanced frontend engineering with React 19 and Next.js, backend architecture with Node.js and Express, relational databases with PostgreSQL, authentication, REST & GraphQL APIs, and cloud deployments on Vercel & AWS.',
    targetAudience:
      'Beginners wanting to launch a high-paying tech career, college students, career switchers, and junior developers looking to level up to modern full-stack engineering.',
    prerequisites:
      'No prior programming experience required. A functional laptop (minimum 8GB RAM recommended) and enthusiasm to learn.',
    certification: 'Pinfeeds Academy Certified Full-Stack Software Engineer & Portfolio Verification',
    capstoneProject: {
      title: 'Full-Stack SaaS Platform / Multi-Vendor Marketplace',
      description:
        'Architect, build, and deploy an end-to-end web application with user authentication, database persistence, payment integration (Paystack/Stripe), automated testing, and CI/CD deployment.',
    },
    tools: ['JavaScript ES6+', 'TypeScript', 'React 19', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Git & GitHub', 'Tailwind CSS', 'Vercel', 'Docker'],
    skills: [
      'Responsive Web Architecture',
      'Modern Frontend with React & Next.js',
      'RESTful & GraphQL API Design',
      'Database Modeling & SQL Queries',
      'Authentication & Security (JWT, OAuth)',
      'State Management & Server Actions',
      'Git Workflow & Agile Collaboration',
      'Automated Testing & Deployment',
    ],
    careerRoles: ['Full-Stack Developer', 'Frontend Engineer', 'Backend Developer', 'React / Next.js Specialist'],
    modules: [
      {
        number: 1,
        title: 'Web Foundations & Modern JavaScript Mastery',
        duration: 'Weeks 1 - 4',
        description: 'Establish rock-solid programming foundations, DOM manipulation, asynchronous programming, and clean code principles.',
        topics: [
          'Semantic HTML5, Accessibility (a11y), and Modern CSS3 (Flexbox, Grid, Animations)',
          'JavaScript ES6+ fundamentals: Variables, Data Structures, Functions, and Scope',
          'Asynchronous JS: Callbacks, Promises, Async/Await, and Fetch API',
          'Git version control, branching strategies, and collaborative GitHub workflows',
        ],
      },
      {
        number: 2,
        title: 'Modern Frontend Engineering with React & Next.js',
        duration: 'Weeks 5 - 8',
        description: 'Build lightning-fast, reactive user interfaces with modern component architecture and server components.',
        topics: [
          'React 19 core: Components, Props, State, and Hooks (useState, useEffect, useMemo, custom hooks)',
          'Client-side state management, Context API, and form handling with validation',
          'Next.js App Router: Server Components, Client Components, Dynamic Routing, and SEO optimization',
          'Styling at scale: CSS Modules, Tailwind CSS, and headless UI libraries',
        ],
      },
      {
        number: 3,
        title: 'Backend Architecture, APIs & Databases',
        duration: 'Weeks 9 - 12',
        description: 'Build robust, scalable server applications with Node.js, Express, and PostgreSQL relational databases.',
        topics: [
          'Node.js runtime, event loop, and modular architectural patterns',
          'RESTful API development with Express.js and middleware pipelines',
          'Relational database design, PostgreSQL, migrations, and Prisma ORM',
          'Secure Authentication: JWT, bcrypt password hashing, session management, and OAuth',
        ],
      },
      {
        number: 4,
        title: 'Advanced Full-Stack Integration, DevOps & Capstone Project',
        duration: 'Weeks 13 - 16',
        description: 'Integrate frontend and backend, implement payments, containerize applications, and deploy production SaaS solutions.',
        topics: [
          'Full-stack integration, caching strategies, and performance tuning',
          'Payment gateway integration (Paystack / Flutterwave / Stripe) and webhook handling',
          'Containerization basics with Docker and cloud hosting (Vercel, Railway, AWS)',
          'Capstone project defense, code reviews, and mock technical interviews',
        ],
      },
    ],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development (React Native & Flutter)',
    subtitle: 'Build native iOS and Android mobile apps from a single codebase with high-performance UI.',
    category: 'Software Engineering',
    categorySlug: 'software-engineering',
    badge: 'High Demand',
    icon: '📱',
    duration: '14 Weeks',
    level: 'Beginner to Intermediate',
    mode: 'Live Online & Hybrid Lagos Hub',
    schedule: 'Weekday Evenings or Weekend Cohort',
    tuition: '₦200,000 / $230',
    tuitionInstallment: 'Flexible 2-3 Part Installments Available',
    overview:
      'Learn how to engineer cross-platform mobile apps for both iOS and Android. This course provides comprehensive, hands-on training in cross-platform mobile frameworks (React Native & Flutter), native device API integration (Camera, Geolocation, Push Notifications), state management, offline database synchronization, and publishing directly to the Apple App Store and Google Play Store.',
    targetAudience:
      'Developers wishing to expand into mobile, entrepreneurs wanting to build app MVPs, and beginners passionate about creating mobile experiences.',
    prerequisites:
      'Basic knowledge of programming logic or JavaScript is helpful, but introductory modules cover core concepts.',
    certification: 'Pinfeeds Certified Mobile Application Engineer',
    capstoneProject: {
      title: 'On-Demand Service & Booking Mobile App',
      description:
        'A production-ready mobile application featuring real-time geolocation tracking, push notifications, in-app messaging, seamless payment integration, and App Store readiness.',
    },
    tools: ['React Native', 'Expo', 'Flutter', 'Dart', 'TypeScript', 'Firebase', 'SQLite', 'Redux Toolkit', 'Google Play Console', 'Xcode'],
    skills: [
      'Cross-Platform Mobile Architecture',
      'Native Device Hardware Integration',
      'Push Notifications & Background Tasks',
      'Mobile UI/UX Design Patterns',
      'Offline Data Storage & Sync',
      'App Store & Play Store Deployment',
    ],
    careerRoles: ['Mobile App Developer', 'React Native Engineer', 'Flutter Developer', 'Cross-Platform Engineer'],
    modules: [
      {
        number: 1,
        title: 'Mobile Architecture & Framework Foundations',
        duration: 'Weeks 1 - 3',
        description: 'Set up mobile development environments (Expo, Xcode, Android Studio) and master core UI layout principles.',
        topics: [
          'Mobile ecosystem overview: iOS vs Android, Native vs Cross-Platform paradigms',
          'React Native & Expo toolchain setup, mobile project scaffolding',
          'Mobile layout with Flexbox, touchable feedback, gestures, and responsive screens',
          'Navigation patterns: Stack, Bottom Tabs, and Drawer navigators',
        ],
      },
      {
        number: 2,
        title: 'State Management, Forms & Device Hardware APIs',
        duration: 'Weeks 4 - 7',
        description: 'Connect native device sensors, cameras, location tracking, and handle complex mobile application state.',
        topics: [
          'State management with Redux Toolkit and Context API in mobile apps',
          'Accessing device sensors: Camera, Gallery, Geolocation, and Biometrics (Fingerprint/FaceID)',
          'Local offline storage with SQLite and AsyncStorage',
          'Audio, video, and multimedia playback and recording',
        ],
      },
      {
        number: 3,
        title: 'Cloud Backends, Realtime Sync & Push Notifications',
        duration: 'Weeks 8 - 11',
        description: 'Connect to backend services, cloud databases, authentication, and push messaging.',
        topics: [
          'Firebase integration: Auth, Cloud Firestore, and Cloud Storage',
          'Real-time communication with WebSockets & chat interfaces',
          'Apple Push Notification Service (APNs) and Firebase Cloud Messaging (FCM)',
          'Performance profiling, memory optimization, and battery consumption best practices',
        ],
      },
      {
        number: 4,
        title: 'App Store Submission & Capstone Launch',
        duration: 'Weeks 12 - 14',
        description: 'Prepare production builds, configure provisioning profiles, and submit apps to the stores.',
        topics: [
          'App Store guidelines, privacy policies, and app review requirements',
          'Generating signed APKs/AABs and iOS IPAs with EAS build',
          'Deploying to Google Play Console and Apple App Store Connect',
          'Capstone project exhibition and code review',
        ],
      },
    ],
  },
  {
    id: 'ui-ux-design-product-strategy',
    slug: 'ui-ux-design-product-strategy',
    title: 'UI/UX Design & Product Strategy',
    subtitle: 'Craft captivating, intuitive digital interfaces, design systems, and user-centric digital products.',
    category: 'Design & UX',
    categorySlug: 'design-ux',
    badge: 'Creative & Tech',
    icon: '🎨',
    duration: '12 Weeks',
    level: 'Beginner to Intermediate',
    mode: 'Hybrid & Live Online',
    schedule: 'Weekday Morning or Weekend Cohort',
    tuition: '₦180,000 / $210',
    tuitionInstallment: 'Flexible 2 Part Installments Available',
    overview:
      'Learn how to solve real human problems through design. This immersive UI/UX program teaches you user research methodologies, empathy mapping, information architecture, wireframing, high-fidelity UI prototyping in Figma, interactive micro-animations, scalable design systems, and developer handoff processes.',
    targetAudience:
      'Creative individuals, aspiring product designers, graphic designers transitioning to tech, product managers, and entrepreneurs.',
    prerequisites: 'No coding required. A laptop and a keen eye for visual aesthetics and problem-solving.',
    certification: 'Pinfeeds Certified UI/UX Product Designer & Portfolio Review',
    capstoneProject: {
      title: 'End-to-End Fintech or HealthTech Product Case Study',
      description:
        'A comprehensive design case study documenting the entire product journey: user research, personas, wireframes, component design system, and interactive clickable prototype ready for stakeholder presentation.',
    },
    tools: ['Figma', 'FigJam', 'Notion', 'Miro', 'Adobe Illustrator basics', 'Zeplin / DevMode', 'Lottie'],
    skills: [
      'User Research & Empathy Mapping',
      'Wireframing & Low-Fidelity Prototyping',
      'High-Fidelity Interface Design',
      'Scalable Design Systems (Auto Layout, Tokens)',
      'Interactive Micro-Animations',
      'Usability Testing & Iteration',
      'Developer Handoff & Design Systems',
    ],
    careerRoles: ['UI Designer', 'UX Researcher', 'Product Designer', 'Interaction Designer'],
    modules: [
      {
        number: 1,
        title: 'Design Thinking, User Research & Problem Discovery',
        duration: 'Weeks 1 - 3',
        description: 'Understand the user experience lifecycle, conduct user interviews, and synthesize research into actionable insights.',
        topics: [
          'Introduction to UI/UX, Design Thinking framework, and cognitive psychology in design',
          'Conducting quantitative and qualitative user research and competitive audits',
          'Creating user personas, empathy maps, journey maps, and user story maps',
          'Information architecture, sitemaps, and card sorting exercises',
        ],
      },
      {
        number: 2,
        title: 'Wireframing, User Flows & Figma Mastery',
        duration: 'Weeks 4 - 6',
        description: 'Master Figma tools, shortcuts, constraints, and translate ideas into low-fidelity and mid-fidelity wireframes.',
        topics: [
          'Figma interface deep-dive: Vector tools, constraints, frames, and groups',
          'Low-fidelity sketching and wireframing best practices',
          'Building intuitive user flows and task completion paths',
          'Typography hierarchy, 8pt spatial grid system, and color theory for digital screens',
        ],
      },
      {
        number: 3,
        title: 'Design Systems, High-Fidelity UI & Micro-Interactions',
        duration: 'Weeks 7 - 9',
        description: 'Build enterprise-grade design systems with Figma components, auto-layout, variants, and interactive states.',
        topics: [
          'Mastering Figma Auto Layout 5.0 and responsive layout grids',
          'Component architecture, component properties, variants, and design tokens',
          'Interactive micro-animations: Smart Animate, transitions, and hover/click effects',
          'Web and mobile accessibility (WCAG contrast ratios, accessible touch targets)',
        ],
      },
      {
        number: 4,
        title: 'Usability Testing, Developer Handoff & Portfolio Polish',
        duration: 'Weeks 10 - 12',
        description: 'Test your prototypes with real users, prepare production handoffs, and write an outstanding case study.',
        topics: [
          'Planning and conducting remote and in-person usability testing sessions',
          'Analyzing usability metrics, feedback matrices, and iterative design refinement',
          'Developer handoff: Figma Dev Mode, specs, redlining, and asset export',
          'Structuring a world-class Behance / Medium / Dribbble portfolio case study',
        ],
      },
    ],
  },
  {
    id: 'data-science-ai-machine-learning',
    slug: 'data-science-ai-machine-learning',
    title: 'Data Science & AI / Machine Learning',
    subtitle: 'Harness Python, data analytics, predictive machine learning models, and modern generative AI APIs.',
    category: 'Data & AI',
    categorySlug: 'data-ai',
    badge: 'Trending',
    icon: '🤖',
    duration: '16 Weeks',
    level: 'Beginner to Advanced',
    mode: 'Live Online & Hybrid Lagos Hub',
    schedule: 'Weekday Evenings or Weekend Cohort',
    tuition: '₦240,000 / $270',
    tuitionInstallment: 'Flexible 2-3 Part Installments Available',
    overview:
      'Step into the frontier of the technological revolution. This comprehensive program equips you with Python programming, statistical analysis, data cleaning and visualization (Pandas, NumPy, Matplotlib, Seaborn), classical machine learning algorithms (Scikit-Learn), and modern Generative AI engineering (Prompt Engineering, LangChain, OpenAI APIs, and Vector Databases).',
    targetAudience:
      'Numerate graduates, analysts, developers looking to transition to data science, and professionals aiming to integrate AI into enterprise operations.',
    prerequisites:
      'Basic familiarity with computer usage and high school mathematics (algebra & statistics). Prior coding is not mandatory.',
    certification: 'Pinfeeds Certified Data Scientist & AI Specialist',
    capstoneProject: {
      title: 'Predictive Analytics & Generative AI Knowledge Assistant',
      description:
        'A deployed AI application combining machine learning prediction (e.g. customer churn or financial risk model) and an intelligent retrieval-augmented generation (RAG) assistant using vector embeddings.',
    },
    tools: ['Python 3', 'Jupyter Notebooks', 'NumPy', 'Pandas', 'Matplotlib & Seaborn', 'Scikit-Learn', 'SQL', 'OpenAI APIs', 'LangChain', 'Streamlit'],
    skills: [
      'Python for Scientific Computing',
      'Exploratory Data Analysis (EDA)',
      'Statistical Modeling & Hypothesis Testing',
      'Supervised & Unsupervised Machine Learning',
      'Feature Engineering & Model Evaluation',
      'LLM Integration & Prompt Engineering',
      'RAG Systems & Vector Search',
      'Interactive Dashboard Deployment with Streamlit',
    ],
    careerRoles: ['Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 'AI Solutions Consultant'],
    modules: [
      {
        number: 1,
        title: 'Python for Data Science & Exploratory Analytics',
        duration: 'Weeks 1 - 4',
        description: 'Master Python syntax, data structures, and scientific computation libraries.',
        topics: [
          'Python programming essentials: Data structures, control flow, functions, and OOP basics',
          'Numerical computing with NumPy: Multi-dimensional arrays and vectorization',
          'Data manipulation with Pandas: DataFrames, indexing, filtering, grouping, and aggregations',
          'Data visualization with Matplotlib and Seaborn: Distributions, relationships, and trends',
        ],
      },
      {
        number: 2,
        title: 'SQL, Data Cleaning & Feature Engineering',
        duration: 'Weeks 5 - 8',
        description: 'Extract data from databases, handle missing values, outliers, and prepare feature sets.',
        topics: [
          'Advanced SQL querying: Joins, subqueries, window functions, and data extraction',
          'Data wrangling: Imputing missing data, categorical encoding, feature scaling, and normalization',
          'Statistical hypothesis testing, correlation analysis, and business metric derivation',
          'Automated data pipelines and ETL processes',
        ],
      },
      {
        number: 3,
        title: 'Machine Learning Algorithms & Model Evaluation',
        duration: 'Weeks 9 - 12',
        description: 'Train, fine-tune, and evaluate supervised and unsupervised predictive models.',
        topics: [
          'Supervised learning: Linear & Logistic Regression, Decision Trees, Random Forests, XGBoost',
          'Unsupervised learning: K-Means Clustering and Principal Component Analysis (PCA)',
          'Model evaluation metrics: Precision, Recall, F1-Score, ROC-AUC curves, and Cross-Validation',
          'Hyperparameter tuning with GridSearchCV and preventing overfitting',
        ],
      },
      {
        number: 4,
        title: 'Generative AI, Large Language Models & Deployment',
        duration: 'Weeks 13 - 16',
        description: 'Build modern AI applications utilizing OpenAI APIs, vector databases, and interactive web dashboards.',
        topics: [
          'Introduction to LLMs, Transformers, and Prompt Engineering strategies',
          'Building Retrieval-Augmented Generation (RAG) pipelines with LangChain and vector databases',
          'Packaging and deploying models as REST APIs using FastAPI and interactive apps via Streamlit',
          'Capstone project defense and portfolio review',
        ],
      },
    ],
  },
  {
    id: 'cloud-computing-devops-engineering',
    slug: 'cloud-computing-devops-engineering',
    title: 'Cloud Computing & DevOps Engineering',
    subtitle: 'Deploy, scale, and automate cloud infrastructure with AWS, Docker, CI/CD, and Kubernetes.',
    category: 'Cloud & Security',
    categorySlug: 'cloud-security',
    badge: 'Enterprise',
    icon: '☁️',
    duration: '14 Weeks',
    level: 'Intermediate',
    mode: '100% Live Online & Hybrid Lagos Hub',
    schedule: 'Weekend Cohort or Weekday Evening',
    tuition: '₦230,000 / $260',
    tuitionInstallment: 'Flexible 2-3 Part Installments Available',
    overview:
      'Cloud infrastructure powers every modern software application. In this hands-on DevOps and Cloud Engineering program, you will master Linux system administration, Amazon Web Services (AWS) cloud architecture, containerization with Docker, orchestration with Kubernetes, Infrastructure as Code (Terraform), and automated CI/CD deployment pipelines.',
    targetAudience:
      'Software developers, system administrators, IT support staff, and tech enthusiasts who want to master cloud infrastructure and DevOps automation.',
    prerequisites: 'Basic understanding of command-line terminal and web fundamentals.',
    certification: 'Pinfeeds Certified Cloud & DevOps Engineer (Prepares for AWS Solutions Architect & CKA)',
    capstoneProject: {
      title: 'Automated Multi-Environment Cloud Infrastructure & CI/CD Pipeline',
      description:
        'Provision high-availability cloud infrastructure on AWS using Terraform, package microservices into Docker containers, and set up an automated GitHub Actions CI/CD deployment pipeline to Kubernetes.',
    },
    tools: ['Linux / Bash', 'AWS (EC2, S3, RDS, IAM, VPC, ECS)', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Nginx', 'Prometheus & Grafana'],
    skills: [
      'Linux Server Administration & Bash Scripting',
      'AWS Cloud Infrastructure Design & Security',
      'Containerization & Microservices Architecture',
      'CI/CD Pipeline Automation (GitHub Actions)',
      'Infrastructure as Code (IaC) with Terraform',
      'Container Orchestration with Kubernetes',
      'Cloud Monitoring, Logging & Alerting',
    ],
    careerRoles: ['DevOps Engineer', 'Cloud Engineer', 'Site Reliability Engineer (SRE)', 'Cloud Infrastructure Specialist'],
    modules: [
      {
        number: 1,
        title: 'Linux System Administration & Networking Essentials',
        duration: 'Weeks 1 - 3',
        description: 'Master the Linux terminal, server security, user permissions, networking, and shell scripting.',
        topics: [
          'Linux filesystem hierarchy, command-line mastery, and user/group permissions',
          'Networking fundamentals: IP addressing, DNS, DHCP, ports, firewalls (UFW/iptables)',
          'Bash shell scripting and task automation with Cron jobs',
          'SSH key management, hardening remote servers, and Nginx reverse proxy setup',
        ],
      },
      {
        number: 2,
        title: 'Amazon Web Services (AWS) Core Architecture',
        duration: 'Weeks 4 - 7',
        description: 'Design and deploy resilient, scalable cloud architectures on the world leading cloud provider.',
        topics: [
          'Cloud computing concepts, AWS Global Infrastructure, and IAM security governance',
          'Virtual Private Clouds (VPC), subnets, route tables, and Internet Gateways',
          'Compute & Storage: EC2 instances, Auto Scaling, Elastic Load Balancing (ALB), and S3 buckets',
          'Managed Cloud Databases: AWS RDS PostgreSQL/MySQL, read replicas, and automated backups',
        ],
      },
      {
        number: 3,
        title: 'Docker Containerization & CI/CD Automation',
        duration: 'Weeks 8 - 11',
        description: 'Package applications into lightweight containers and automate testing and deployment.',
        topics: [
          'Docker architecture, writing efficient Dockerfiles, multi-stage builds, and Docker Compose',
          'Container registry management (Docker Hub and AWS ECR)',
          'Continuous Integration & Continuous Deployment (CI/CD) with GitHub Actions',
          'Automated linting, testing, image building, and production deployment pipelines',
        ],
      },
      {
        number: 4,
        title: 'Kubernetes Orchestration, Terraform & Monitoring',
        duration: 'Weeks 12 - 14',
        description: 'Scale containers across clusters, automate infrastructure with code, and monitor health.',
        topics: [
          'Infrastructure as Code (IaC) principles: Terraform syntax, state management, and AWS provisioning',
          'Kubernetes fundamentals: Pods, Deployments, Services, ConfigMaps, and Ingress controllers',
          'Application monitoring and observability using Prometheus and Grafana dashboards',
          'Capstone project deployment, disaster recovery simulation, and career defense',
        ],
      },
    ],
  },
  {
    id: 'cybersecurity-ethical-hacking',
    slug: 'cybersecurity-ethical-hacking',
    title: 'Cybersecurity & Ethical Hacking',
    subtitle: 'Defend systems, assess vulnerabilities, conduct penetration tests, and secure digital assets.',
    category: 'Cloud & Security',
    categorySlug: 'cloud-security',
    badge: 'High Salary',
    icon: '🛡️',
    duration: '12 Weeks',
    level: 'Beginner to Intermediate',
    mode: 'Live Online & Hybrid Lagos Hub',
    schedule: 'Weekday Evening or Weekend Cohort',
    tuition: '₦210,000 / $240',
    tuitionInstallment: 'Flexible 2 Part Installments Available',
    overview:
      'Learn how to defend modern organizations against cyber threats and unauthorized intrusions. This comprehensive curriculum covers network defense, vulnerability scanning, ethical penetration testing, web application security (OWASP Top 10), incident response protocols, and security compliance frameworks.',
    targetAudience:
      'IT professionals, network technicians, developers who want to specialize in security, and students passionate about cybersecurity.',
    prerequisites: 'Basic computer literacy and foundational knowledge of networks/operating systems.',
    certification: 'Pinfeeds Certified Cybersecurity Analyst (Prepares for CompTIA Security+ & CEH)',
    capstoneProject: {
      title: 'Comprehensive Penetration Testing & Vulnerability Assessment Report',
      description:
        'Conduct a thorough security audit on a simulated corporate network and web application in a sandboxed lab environment, identifying vulnerabilities, demonstrating exploit mitigation, and writing an executive remediation report.',
    },
    tools: ['Kali Linux', 'Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'OWASP ZAP', 'Nessus / OpenVAS', 'John the Ripper'],
    skills: [
      'Network Vulnerability Assessment & Packet Sniffing',
      'OWASP Top 10 Web Application Exploits & Defenses',
      'Penetration Testing Methodologies & Ethics',
      'Cryptographic Principles & Secure Protocols',
      'Firewall & Intrusion Detection Configuration',
      'Security Incident Response & Compliance Reporting',
    ],
    careerRoles: ['Cybersecurity Analyst', 'Junior Penetration Tester', 'SOC Analyst', 'Information Security Officer'],
    modules: [
      {
        number: 1,
        title: 'Cybersecurity Foundations, Ethics & Networking',
        duration: 'Weeks 1 - 3',
        description: 'Understand threat landscapes, legal boundaries of ethical hacking, and TCP/IP protocol security.',
        topics: [
          'Introduction to Information Security, CIA Triad, and Ethical Hacking legal frameworks',
          'TCP/IP networking deep dive: Packets, protocols, handshake analysis with Wireshark',
          'Kali Linux configuration, command-line navigation, and lab sandbox setup',
          'Reconnaissance and passive information gathering (OSINT, Whois, Shodan, Google Dorking)',
        ],
      },
      {
        number: 2,
        title: 'Active Scanning, Enumeration & Vulnerability Assessment',
        duration: 'Weeks 4 - 6',
        description: 'Scan targets for open ports, running services, and known system vulnerabilities.',
        topics: [
          'Port scanning and host discovery techniques with Nmap and Zenmap',
          'Service enumeration: SMB, SNMP, SSH, FTP, and web servers',
          'Automated vulnerability scanning using Nessus and OpenVAS',
          'Analyzing Common Vulnerabilities and Exposures (CVE) and CVSS scoring',
        ],
      },
      {
        number: 3,
        title: 'Web Application Security & OWASP Top 10',
        duration: 'Weeks 7 - 9',
        description: 'Identify and mitigate the most common web application vulnerabilities.',
        topics: [
          'Web architecture and HTTP request/response inspection using Burp Suite',
          'SQL Injection (SQLi): Identification, exploitation, and parameterized query remediation',
          'Cross-Site Scripting (XSS), CSRF, and broken access control vulnerabilities',
          'Authentication bypasses, insecure direct object references (IDOR), and API security',
        ],
      },
      {
        number: 4,
        title: 'System Exploitation, Incident Response & Reporting',
        duration: 'Weeks 10 - 12',
        description: 'Practice controlled exploitation, privilege escalation, and write professional remediation reports.',
        topics: [
          'Controlled exploitation using Metasploit framework and payload generation',
          'Password cracking techniques: Dictionary attacks, rainbow tables, and hash identification',
          'Incident handling, digital forensics basics, and log analysis',
          'Professional penetration test reporting and capstone presentation',
        ],
      },
    ],
  },
  {
    id: 'it-support-network-administration',
    slug: 'it-support-network-administration',
    title: 'IT Support & Systems Engineering',
    subtitle: 'Master enterprise hardware, local network setup, server management, and IT helpdesk operations.',
    category: 'IT & Growth',
    categorySlug: 'it-growth',
    badge: 'Fast Track',
    icon: '🛠️',
    duration: '10 Weeks',
    level: 'Beginner',
    mode: 'Hybrid (Lagos Hub) & Online',
    schedule: 'Weekday Morning or Weekend Cohort',
    tuition: '₦150,000 / $170',
    tuitionInstallment: 'Flexible 2 Part Installments Available',
    overview:
      'Gain the practical, real-world troubleshooting skills required to keep business IT infrastructure running smoothly. Learn PC assembly, hardware diagnostics, LAN/Wi-Fi cabling and router configuration, Windows/Linux server management, Active Directory user administration, and ticketing workflows.',
    targetAudience:
      'Beginners wanting an immediate entry-point into the tech industry, computer science students, and office staff seeking IT engineering skills.',
    prerequisites: 'Basic computer user skills.',
    certification: 'Pinfeeds Certified IT Systems Support Specialist (Prepares for CompTIA A+ & Network+)',
    capstoneProject: {
      title: 'Corporate IT Infrastructure Deployment & Support Simulation',
      description:
        'Configure an office network infrastructure with configured routers, access points, static IP assignments, an Active Directory domain controller, and automated backup routines.',
    },
    tools: ['Windows Server 2022', 'Active Directory', 'Cisco Packet Tracer', 'pfSense', 'TeamViewer / AnyDesk', 'Jira Service Management', 'Hardware Diagnostic Toolkits'],
    skills: [
      'Hardware Assembly & Diagnostics',
      'LAN/WAN & Wi-Fi Configuration',
      'Windows Server & Active Directory Admin',
      'Remote Support & Helpdesk Operations',
      'System Backup & Disaster Recovery',
      'Data Security & Endpoint Protection',
    ],
    careerRoles: ['IT Support Specialist', 'Helpdesk Engineer', 'Junior Network Administrator', 'Systems Support Technician'],
    modules: [
      {
        number: 1,
        title: 'Computer Hardware Architecture & Diagnostics',
        duration: 'Weeks 1 - 2',
        description: 'Understand motherboard components, CPU, RAM, storage drives, power supplies, and troubleshooting.',
        topics: [
          'Component functions: Motherboards, processors, RAM types, SSDs/HDDs, and PSUs',
          'PC assembly, thermal paste application, and cable management best practices',
          'POST errors, BIOS/UEFI configuration, and hardware diagnostics',
          'Operating system installation (Windows 11, Linux distributions) and driver management',
        ],
      },
      {
        number: 2,
        title: 'Networking Fundamentals & Infrastructure Setup',
        duration: 'Weeks 3 - 5',
        description: 'Cable termination, switches, routers, IP addressing, and wireless network optimization.',
        topics: [
          'Ethernet cabling (Cat6/Cat6a RJ45 crimping and testing with punch-down tools)',
          'IPv4/IPv6 addressing, subnet masks, default gateways, and DNS servers',
          'Configuring commercial routers, switches, VLANs, and wireless access points (SSID/WPA3)',
          'Network troubleshooting commands: ping, traceroute, ipconfig, netstat, nslookup',
        ],
      },
      {
        number: 3,
        title: 'Windows Server, Active Directory & Cloud Office Admin',
        duration: 'Weeks 6 - 8',
        description: 'Manage users, security policies, shared resources, and Microsoft 365 / Google Workspace.',
        topics: [
          'Windows Server installation and Active Directory Domain Services (AD DS) setup',
          'User account creation, group policies (GPO), and file sharing permissions',
          'DHCP and DNS server roles configuration',
          'Administering cloud suites: Microsoft 365, Google Workspace, and corporate email accounts',
        ],
      },
      {
        number: 4,
        title: 'IT Helpdesk Operations, Remote Support & Security',
        duration: 'Weeks 9 - 10',
        description: 'Handle tickets, deliver remote desktop support, and implement backup strategies.',
        topics: [
          'Helpdesk ticketing workflows with Jira Service Management and SLA management',
          'Remote desktop tools (TeamViewer, RDP, AnyDesk) and customer communication etiquette',
          'Data backup solutions, disk cloning (Clonezilla), and ransomware prevention',
          'Capstone simulation exam and hands-on lab defense',
        ],
      },
    ],
  },
  {
    id: 'digital-marketing-growth-strategy',
    slug: 'digital-marketing-growth-strategy',
    title: 'Digital Marketing & Growth Hacking',
    subtitle: 'Drive explosive online growth with Search Engine Optimization (SEO), Paid Ads, and Content Strategy.',
    category: 'IT & Growth',
    categorySlug: 'it-growth',
    badge: 'Business & Tech',
    icon: '📈',
    duration: '10 Weeks',
    level: 'All Levels',
    mode: 'Live Online & Hybrid',
    schedule: 'Weekday Morning or Weekend Cohort',
    tuition: '₦160,000 / $180',
    tuitionInstallment: 'Flexible 2 Part Installments Available',
    overview:
      'Learn how to acquire, convert, and retain customers in today digital economy. This hands-on program covers Technical and On-Page SEO, Google Ads, Meta Ads (Facebook & Instagram), Email Marketing Automation, Conversion Rate Optimization (CRO), Content Marketing, and Google Analytics 4 (GA4).',
    targetAudience:
      'Marketers, entrepreneurs, business owners, content creators, and professionals wanting to generate revenue online.',
    prerequisites: 'A laptop, internet access, and a desire to learn data-driven marketing.',
    certification: 'Pinfeeds Certified Digital Growth Specialist (Prepares for Google Ads & GA4 Certification)',
    capstoneProject: {
      title: 'Full-Funnel Digital Marketing & Growth Campaign',
      description:
        'Develop and present a live digital acquisition strategy: SEO keyword audit, optimized landing page copy, targeted Meta & Google Ads campaign plan with budget allocation, and a tracking setup in GA4.',
    },
    tools: ['Google Analytics 4', 'Google Search Console', 'Meta Ads Manager', 'Google Ads', 'SEMrush / Ahrefs', 'Mailchimp / Brevo', 'Canva'],
    skills: [
      'Search Engine Optimization (Technical & On-Page)',
      'High-ROI Paid Advertising (Google & Meta Ads)',
      'Data-Driven Web Analytics with GA4',
      'High-Converting Landing Page Copywriting',
      'Email Marketing & Retention Funnels',
      'Conversion Rate Optimization (CRO)',
    ],
    careerRoles: ['Digital Marketing Manager', 'SEO Specialist', 'Performance Marketer', 'Growth Hacker'],
    modules: [
      {
        number: 1,
        title: 'Search Engine Optimization (SEO) & Content Strategy',
        duration: 'Weeks 1 - 3',
        description: 'Rank websites organically on Google and create content that drives qualified traffic.',
        topics: [
          'How search engines work: Crawling, indexing, algorithms, and ranking factors',
          'Keyword research, search intent analysis, and competitive gap auditing',
          'On-page SEO: Meta tags, headings, URL structure, and image optimization',
          'Technical SEO: Core Web Vitals, XML sitemaps, robots.txt, and structured schema markup',
        ],
      },
      {
        number: 2,
        title: 'Paid Advertising Mastery (Meta Ads & Google Ads)',
        duration: 'Weeks 4 - 6',
        description: 'Create targeted ad campaigns that generate high-converting leads and sales.',
        topics: [
          'Meta Ads Manager: Audience targeting, custom audiences, lookalikes, and Meta Pixel setup',
          'Ad copywriting and creative design strategies for high click-through rates (CTR)',
          'Google Search Ads: Quality score, ad rank, bid strategies, and negative keywords',
          'Google Display and YouTube Video Ads configuration and conversion tracking',
        ],
      },
      {
        number: 3,
        title: 'Analytics, Tracking & Conversion Optimization',
        duration: 'Weeks 7 - 8',
        description: 'Measure campaign performance accurately and optimize customer journeys.',
        topics: [
          'Google Analytics 4 (GA4) implementation, events, conversions, and custom reports',
          'Google Tag Manager (GTM) setup for automated tag and event tracking',
          'Conversion Rate Optimization (CRO): A/B testing, heatmaps, and funnel drop-off analysis',
          'Customer journey mapping and landing page design principles that convert',
        ],
      },
      {
        number: 4,
        title: 'Email Marketing, Marketing Automation & Capstone',
        duration: 'Weeks 9 - 10',
        description: 'Build automated email sequences, retention funnels, and present your growth project.',
        topics: [
          'Email marketing automation: Welcome series, lead nurturing, and abandoned cart flows',
          'Copywriting for high open rates and click rates, deliverability best practices',
          'Growth hacking tactics, viral loops, and referral marketing mechanics',
          'Capstone growth campaign pitch and execution audit',
        ],
      },
    ],
  },
];
