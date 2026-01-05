// Portfolio Content Configuration
// Edit this file to update your portfolio content

export const siteConfig = {
  name: "Vineet Jujjavarapu",
  title: "Vineet Jujjavarapu | Data Engineer",
  location: "College Park, Maryland, USA",
  description: "Building production-grade data and ML systems that scale. Currently pursuing an M.S. in Data Science at the University of Maryland, College Park, previously at Lam Research and Viatris delivering cloud pipelines, APIs, and analytics for real-world operations.",
  github: "https://github.com/vineetj5",
  linkedin: "https://www.linkedin.com/in/vineet-jujjavarapu/",
  medium: "https://medium.com/@jvineet50",
  resumeUrl: "/Vineet Jujjavarapu Resume_DataEngineer (1).pdf", // Place your resume PDF in public folder
  email: "vineetj5@terpmail.umd.edu",
  phone: "+1 (240) 461-0053",
  hero: {
    headline: "MS Data Science @ University of Maryland | Data & ML Engineer",
    subtext: [
      "Building production-grade data and ML systems that scale. Currently pursuing an M.S. in Data Science at the University of Maryland, College Park, previously at Lam Research and Viatris delivering cloud pipelines, APIs, and analytics for real-world operations."
    ]
  },

  highlights: [
    "3+ years experience",
    "Data pipelines + APIs",
    "GenAI/RAG + NLP projects",
    "Azure + Databricks + Airflow"
  ],

  openToRoles: [
    "Software Engineer",
    "Data Engineer",
    "Data Scientist",
    "ML Engineer"
  ],

  availability: {
    type: "Available for Full-Time Employment",
    graduation: "May 2026"
  }
};

export const aboutContent = {
  intro: "I'm a Master's student in Data Science at the University of Maryland, College Park, with 3+ years of experience building production-grade data pipelines, APIs, and analytics systems. I previously worked at Lam Research as a Data Engineer, where I built scalable backend services and cloud ETL workflows using Azure and Databricks, and optimized data access through robust APIs. More recently, as a Data Analyst at Viatris, I worked on data engineering and analytics initiatives to improve supply chain visibility and reporting. My interests sit at the intersection of cloud data platforms (Azure, Databricks), big data tools (Spark, Airflow), and emerging GenAI applications—turning raw data into reliable products and decision-ready insights.",
  profileImage: "/vineet_profile.jpg", // Place your profile picture in public folder

  whatIBring: [
    "Scalable data engineering systems",
    "Cloud ETL & pipeline design",
    "RESTful API architecture",
    "Production-oriented GenAI applications (RAG, LLM integration)",
    "End-to-end ML pipeline development (data prep → training → evaluation → deployment)",
    "Model evaluation & experimentation (metrics, error analysis, A/B mindset)",
    "Feature engineering & predictive modeling (classical ML + deep learning basics)",
    "NLP systems (tokenization, fine-tuning basics, embedding models, vector indexing, similarity search, reranking)",
    "MLOps fundamentals (reproducibility, versioning, CI/CD-ready workflows)",
    "Strong technical writing"
  ]
};

export const education = [
  {
    institution: "University of Maryland, College Park",
    location: "Maryland, USA",
    degree: "Master of Science in Data Science",
    current: true,
    logo: "/umd.png",
    gpa: "3.92/4.0",
    period: "Aug 2024 – May 2026",
    coursework: ["Machine Learning", "NLP", "Big Data Systems", "Data Visualization", "Statistical Modeling"]
  },
  {
    institution: "PES University",
    location: "Bangalore, India",
    degree: "Bachelor of Technology, Electronics & Communication",
    logo: "/pes.jpg",
    gpa: "8.21/10",
    period: "August 2018 - May 2022",
    coursework: [],
    minor: {
      degree: "Minors in Computer Science Engineering",
      gpa: "8.65/10",
      period: "August 2019 - May 2021"
    }
  }
];

export const skills = {
  programming: {
    label: "Programming",
    items: ["Python", "Java", "SQL", "C++"]
  },
  toolsFrameworks: {
    label: "Tools & Frameworks",
    items: ["Spark", "Hadoop", "Airflow", "Tableau", "Power BI", "Docker", "Spring Boot", "CI/CD (Azure DevOps)"]
  },
  cloudDatabases: {
    label: "Cloud & Databases",
    items: ["Azure", "Databricks", "PostgreSQL", "Neo4j", "MongoDB"]
  },
  mlAiFrameworks: {
    label: "ML/AI Frameworks",
    items: ["Pandas", "NumPy", "Scikit-learn", "LangChain", "Word2Vec", "TF-IDF", "PyTorch"]
  },
  softSkills: {
    label: "Soft Skills",
    items: ["Agile", "Teamwork", "Communication", "Problem Solving", "Ownership & Accountability"]
  }
};

export const experience = [
  {
    company: "Viatris",
    role: "Supply Chain Data Intern",
    location: "Canonsburg, PA",
    logo: "/viatris.jpeg",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Built and automated ETL pipelines for SAP procurement and logistics data into a centralized data warehouse",
      "Enabled Power BI analytics for vendor performance tracking and logistics anomaly detection",
      "Automated validation workflows reducing manual effort and improving data accuracy/compliance"
    ],
    tech: ["Python", "SQL", "SAP", "Power BI", "ETL Automation"]
  },
  {
    company: "Lam Research",
    role: "Data Engineer / Software Engineer",
    location: "Bengaluru, India",
    logo: "/lam.png",
    period: "Jul 2022 – Aug 2024",
    bullets: [
      "Designed and deployed data-driven APIs using Java, Spring boot and Azure, improving data availability and accessibility for process engineers to efficiently analyze and manage semiconductor recipe files.",
      "Developed internal microservices using Python and FastAPI, optimizing the ingestion and retrieval of over 500,000 equipment recipe data entries in semiconductor manufacturing, improving data processing speed by 40%.",
      "Developed and optimized ETL pipelines in Azure Databricks using Python to process 1M+ wafer recipe records, integrating internal APIs for automated data extraction, file handling, and parent-child recipe relationship detection. Improved runtime efficiency by 30% and reduced manual overhead in semiconductor process simulations.",
      "Wrote and optimized SQL queries for API-based file uploads, metadata extraction, and download functionalities; enhanced performance of analytical operations on large datasets used in semiconductor process simulations.",
      "Implemented CI/CD pipelines in Azure DevOps to automate the deployment of APIs, ensuring seamless integration, faster releases, and improved reliability of semiconductor data processing solutions."
    ],
    tech: ["Python", "Java", "Spring Boot", "FastAPI", "SQL", "Azure", "Databricks", "CI/CD"]
  },
  {
    company: "Lam Research",
    role: "Data Engineer / Software Engineer Intern",
    location: "Bengaluru, India",
    logo: "/lam.png",
    period: "Jan 2022 – Jun 2022",
    bullets: [
      "Designed and deployed backend services for a customer-facing application utilized by process engineers in the USA, leveraging Java, Spring Boot, and REST API’s to streamline data retrieval and improve workflow automation.",
      "Implemented a file re-ingestion feature with a timestamp-based filtering mechanism, allowing selective re-processing of files originally stored in HDFS. Utilized Apache Spark for data processing and Oozie for job scheduling, capturing the job status of processed files."
    ],
    tech: ["Java", "Spring Boot", "Spark", "Hadoop", "Oozie", "HDFS"]
  },
  {
    company: "PES University",
    role: "Teaching Assistant — Intro to Python",
    location: "Bengaluru, India",
    logo: "/pes.jpg",
    period: "Jan 2021 – May 2021",
    bullets: [
      "Assisted lab sessions, mentored students, and debugged programming assignments"
    ],
    tech: ["Python", "Teaching"]
  }
];

export type ProjectCategory = "Data Eng" | "ML" | "GenAI" | "NLP" | "Analytics";

export interface Project {
  id: string;
  title: string;
  pitch: string;
  problem: string;
  approach: string;
  impact: string;
  tech: string[];
  categories: ProjectCategory[];
  github?: string;
  demo?: string;
  writeup?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "bitcoin-rag",
    title: "Real-time Bitcoin Graph Analysis with RAG-Enabled NLP Chatbot",
    image: "/neo4j.webp",
    pitch: "Natural language querying of Bitcoin transaction graphs using LLM-powered RAG",
    problem: "Analyzing complex Bitcoin transaction flows required deep Cypher knowledge",
    approach: "Built a Neo4j property graph with real-time pipeline + LangChain RAG chatbot that converts natural language to Cypher queries",
    impact: "Enabled non-technical users to explore fund flows and transaction patterns via conversational interface",
    tech: ["Python", "WebSockets", "Neo4j", "Py2neo", "LangChain", "LLaMA", "FastAPI", "Docker"],
    categories: ["GenAI", "NLP", "Data Eng"],
    github: "https://github.com/vineetj5"
  },
  {
    id: "stock-etl",
    title: "Automated Stock Data ETL + Predictive Feature Engineering",
    image: "/Etl.webp",
    pitch: "Production-grade Airflow pipelines for financial data processing",
    problem: "Manual stock data processing was error-prone and not scalable",
    approach: "Dockerized ETL with Apache Airflow (Astro) for incremental ingestion, transformation, and PostgreSQL loading",
    impact: "Achieved production reliability with logging, validation checks, and automated alerting",
    tech: ["Apache Airflow", "Docker", "PostgreSQL", "Python", "Astro"],
    categories: ["Data Eng", "Analytics"],
    github: "https://github.com/vineetj5"
  },
  {
    id: "coursera-nlp",
    title: "Personalized Coursera Recommendation System",
    image: "/CourseRecommendation.png",
    pitch: "NLP-powered course recommendations based on content similarity",
    problem: "Finding relevant courses among thousands of options was overwhelming",
    approach: "Web-scraped course data; built content-based recommendations using TF-IDF + Word2Vec with skill trend analysis",
    impact: "Surfaced in-demand skills and personalized course suggestions based on learning goals",
    tech: ["Python", "scikit-learn", "NLTK", "TF-IDF", "Word2Vec", "Clustering"],
    categories: ["NLP", "ML", "Analytics"],
    github: "https://github.com/vineetj5"
  },
  {
    id: "indian-films",
    title: "Forecasting Gross Income of Indian Films",
    image: "/movieGross.webp",
    pitch: "End-to-end ML pipeline for box office prediction",
    problem: "Studios needed data-driven insights for release planning and budgeting",
    approach: "Built complete pipeline from web scraping → data cleaning → feature engineering → ensemble modeling",
    impact: "Achieved ~85% accuracy in gross income prediction",
    tech: ["Python", "scikit-learn", "pandas", "Regression", "Ensemble Models"],
    categories: ["ML", "Analytics"],
    github: "https://github.com/vineetj5"
  },
  {
    id: "umd-events",
    title: "UMD Events Conversational Q&A",
    image: "/umd.png",
    pitch: "RAG-powered chatbot for university event discovery",
    problem: "Students struggled to find relevant campus events across multiple sources",
    approach: "Built vector search pipeline with embeddings and RAG evaluation framework",
    impact: "In Progress — Academic project exploring conversational search for event discovery",
    tech: ["Embeddings", "Vector DB", "RAG", "Python"],
    categories: ["GenAI", "NLP"],
    github: "https://github.com/vineetj5"
  }
];

// Medium blog posts - will be populated from RSS or manually curated
export interface BlogPost {
  title: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "How I Built an Automated Stock Data ETL Pipeline That Saves Hours Every Week",
    excerpt: "Orchestrating an end-to-end ETL pipeline with Apache Airflow, Docker, and PostgreSQL to automate financial data processing.",
    tags: ["Data Engineering", "Airflow", "Docker"],
    publishDate: "Nov 20, 2025",
    readTime: "6 min read",
    url: "https://medium.com/@jvineet50/how-i-built-an-automated-stock-data-etl-pipeline-that-saves-hours-every-week-9b0a76b9af76"
  },
  {
    title: "Real-Time Bitcoin Transaction Analysis with LangChain and Neo4j",
    excerpt: "Building an AI-powered graph analysis tool that converts natural language queries into Cypher to analyze Bitcoin transaction flows.",
    tags: ["GenAI", "Neo4j", "LangChain"],
    publishDate: "Aug 3, 2025",
    readTime: "9 min read",
    url: "https://medium.com/@jvineet50/real-time-bitcoin-transaction-analysis-with-langchain-and-neo4j-an-ai-powered-graph-approach-b6e5065e36cb"
  },
  {
    title: "Beyond the Scoreboard: A Soccer Stats App for Predicting Team Performance",
    excerpt: "Developing a Streamlit application to visualize and predict soccer match outcomes using historical performance data.",
    tags: ["Data Analysis", "Python", "Streamlit"],
    publishDate: "Nov 2, 2024",
    readTime: "5 min read",
    url: "https://medium.com/@jvineet50/beyond-the-scoreboard-a-soccer-stats-app-for-predicting-team-performance-678be11d3efb"
  },
  {
    title: "Predicting the Box Office Success of Indian Cinema",
    excerpt: "A deep dive into data analysis and machine learning to build a predictive model for the gross income of Indian movies.",
    tags: ["Machine Learning", "Data Science", "Python"],
    publishDate: "Sep 26, 2024",
    readTime: "10 min read",
    url: "https://medium.com/@jvineet50/predicting-the-box-office-success-of-indian-cinema-a-deep-dive-into-data-analysis-and-machine-e2585a91a8c4"
  },
  {
    title: "Stock Market Analysis using Linear Regression",
    excerpt: "Applying linear regression techniques to historical stock market data to identify trends and potential price movements.",
    tags: ["Machine Learning", "Finance", "Python"],
    publishDate: "Aug 2, 2024",
    readTime: "3 min read",
    url: "https://medium.com/@jvineet50/stock-market-analysis-using-linear-regression-44e641551ce7"
  },
  {
    title: "Is Toss really a factor for winning an IPL match?",
    excerpt: "Analyzing years of IPL match data to determine if winning the toss actually provides a statistically significant advantage.",
    tags: ["Data Analysis", "Cricket", "Pandas"],
    publishDate: "Jul 18, 2024",
    readTime: "4 min read",
    url: "https://medium.com/@jvineet50/is-toss-really-a-factor-for-winning-an-ipl-match-d4bd53a5f67b"
  }
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Medium Articles", href: "#writing" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];
