// src/data/cv.ts
// This file contains structured CV data for easy maintenance and future extensibility.
// Add new sections or entries as needed.

export interface EducationEntry {
  degree: string;
  institution: string;
  date: string;
  honors?: string[];
  relevantCourses?: string[];
}

export interface SkillSection {
  hard: string[];
  soft: string[];
}

export interface ExperienceEntry {
  title: string;
  organization: string;
  date: string;
  description: string[];
}

export interface ProjectEntry {
  title: string;
  description: string[];
  links?: { label: string; url: string }[];
}

export interface CertificationEntry {
  name: string;
  details?: string;
}

export interface ClubEntry {
  name: string;
  role: string;
  date: string;
}

export interface CVData {
  education: EducationEntry[];
  skills: SkillSection;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  certifications: CertificationEntry[];
  clubs: ClubEntry[];
}

const cvData: CVData = {
  education: [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "University of California, Merced",
      date: "Aug 22 - May 25",
      honors: [
        "Chancellor’s Honor List for 2022/2023 and 2024/2024 Academic School Year"
      ],
      relevantCourses: [
        "Computer Vision", "Software Engineering", "Database System Implementation", "Databases", "Object-Oriented Programming", "Numerical Methods", "Linear Analysis", "Spatial Analysis and Modeling", "Data Analysis and Optimization", "Vector Calculus", "Statistics"
      ]
    }
  ],
  skills: {
    hard: [
      "C++", "Python", "R", "Matlab",
      "Tensorflow", "Numba", "Numpy", "Pandas", "Seaborn", "Matplotlib", "Quarto",
      "HPC", "3D printers", "Machining Equipment",
      "Gephi", "Microsoft Power BI", "Office 365", "Google Suite", "ArcGIS"
    ],
    soft: [
      "Collaboration", "Decision Making", "Insights"
    ]
  },
  experience: [
    {
      title: "MSIIP Intern",
      organization: "National Nuclear Security Administration",
      date: "Jun 25 - Aug 25",
      description: [
        "Supported Lawrence Livermore National Laboratory in environmental safety and health"
      ]
    },
    {
      title: "Undergraduate Student Research Assistant",
      organization: "IoT4Ag",
      date: "Mar 25 - May 25",
      description: [
        "Evaluate and test spatiotemporal fusion algorithms to determine optimal approaches for agricultural data integration",
        "Analyze the performance of different fusion techniques on multi-source sensor data",
        "Assist in the design and testing of sensor systems and communication technologies for precision agriculture",
        "Conduct literature reviews on state-of-the-art fusion methods and contribute to research discussions",
        "Participate in team meetings, trainings, and webinars focused on IoT and agricultural innovation"
      ]
    },
    {
      title: "Student Success Intern",
      organization: "University of California, Merced",
      date: "Nov 24 - May 25",
      description: [
        "Engineered a Python-based data pipeline for cleaning, deduplication, and analysis of student transactions.",
        "Developed custom data cleaning algorithms, improving dataset quality and reducing noise.",
        "Built an automated duplicate transaction detection system, reducing redundancy by 10%.",
        "Implemented dynamic visualizations using matplotlib/seaborn, enabling actionable insights into student behaviors.",
        "Designed an alternative execution environment (Google Colab) for non-technical users.",
        "Optimized data handling efficiency, improving processing time by 30%"
      ]
    },
    {
      title: "Learning Assistance for Calculus II and Precalculus",
      organization: "UC Merced",
      date: "Jan 2023 - Dec 2024",
      description: []
    },
    {
      title: "SWE Micro-Intern (CTI/Codeday)",
      organization: "Utopia-PHP",
      date: "Nov 24 - Dec 24",
      description: [
        "Made a pull request for issue #47 to implement static code analysis with PHPStan and automate analysis using Github actions."
      ]
    },
    {
      title: "Summer Internship",
      organization: "Zscaler",
      date: "July - Aug 2023",
      description: [
        "Rotational summer internship program, participated in NOC, Analyst, Product Management, and Monitoring teams.",
        "Product Management: Automation development for remote monitoring and notification, requirements gathering, feature prioritization, user journey mapping.",
        "Monitoring: Developed Python automation scripts (Paramiko) for server health, created automated notifications, network monitoring with Wireshark, traceroute, ping, log monitoring."
      ]
    },
    {
      title: "Externship",
      organization: "Extern.com / Webacy",
      date: "2024-2025",
      description: [
        "Blockchain and Web3 Security Research: Competitive analysis of Webacy and its products, SWOT analysis, internal sales training.",
        "Web3 Security Data Analytics: Gathered and validated data on smart contract vulnerabilities, formatted and analyzed data using Python."
      ]
    }
  ],
  projects: [
    {
      title: "Wordle game in C++",
      description: [
        "Developed a Wordle game in C++ for 5, 6, and 7-letter words as part of CSE 024.",
        "Implemented input validation, feedback system, UI for guesses and keyboard, memory optimization, and test automation."
      ]
    },
    {
      title: "Tic Tac Toe AI in C++",
      description: [
        "Created an AI program using Alpha-beta pruning for any board size, optimized board visibility, considered multithreading for large boards, and dynamic adaptation based on host specs."
      ]
    },
    {
      title: "S&P 500 Analysis with Quarto and R",
      description: [
        "Analyzed the impact of earnings on stock value, used Quarto for documentation, performed Pearson correlation on financial metrics."
      ]
    },
    {
      title: "Smart Contract Audit Cluster Analysis",
      description: [
        "Reviewed Web3 smart contracts, compiled vulnerability database, performed frequency, correlation, and clustering analysis using Python."
      ]
    },
    {
      title: "Airline Graphical Analysis for Google exploreCSR",
      description: [
        "Performed graphical analysis on airline data using Excel and Gephi, ranked routes, analyzed airport connectivity for virus spread modeling."
      ],
      links: [
        { label: "GitHub", url: "https://github.com/DDH2004/Global-Air-Transportation-Network-Graph-Analytics" }
      ]
    },
    {
      title: "NASA SpaceApps 2023",
      description: [
        "Built a web portal with animation to demonstrate solar eclipse mechanics, created trivia and resource links."
      ],
      links: [
        { label: "Repo", url: "https://github.com/DDH2004/eclipse-NASA-challenge-2023" },
        { label: "Submission", url: "https://eclipse-nasa-challenge-2023.vercel.app/" }
      ]
    },
    {
      title: "HTP!m 2023",
      description: [
        "Created a platform for hacking challenges using Kubernetes on Vercel, managed K8s clusters, designed social engineering and technical challenges."
      ]
    },
    {
      title: "NASA SpaceApps 2024",
      description: [
        "Built an app to visualize stars from different planets, integrated Aladdin Viewer Lite and astroquery API, plotted data with react-plotly.js."
      ],
      links: [
        { label: "Repo", url: "https://github.com/Shyam-723/NasaExoSkyChallenge" },
        { label: "Challenge", url: "https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/exosky/" }
      ]
    },
    {
      title: "SacHacks VI",
      description: [
        "Developed a gamified stock market simulator with Vite/React frontend and Flask backend, used Axios for data handling."
      ],
      links: [
        { label: "Repo", url: "https://github.com/DDH2004/SacHacksVI_TheCowsOverYonder" }
      ]
    },
    {
      title: "SASEHacks@UCM 2025",
      description: [
        "Designed a full-stack app for recycling incentives using blockchain, built UI with React/TypeScript/Tailwind, integrated Solana, Flask, MongoDB, and Three.js."
      ],
      links: [
        { label: "Devpost", url: "https://devpost.com/software/greenproof" },
        { label: "Repo", url: "https://github.com/DDH2004/SASEHacks-UCM2025_The-dApperBoys" }
      ]
    },
    {
      title: "IoT4Ag UC Merced Hackathon",
      description: [
        "Programmed KINOVA Cortex robotic arm for agricultural automation using Python and OpenCV, implemented object detection for selective leaf picking."
      ],
      links: [
        { label: "Repo", url: "https://github.com/ezsinehan/kinova-arm-challenge" }
      ]
    },
    {
      title: "AI Dungeon Master Assistant",
      description: [
        "Built a generative AI assistant for D&D using LangChain, Gemini, FAISS, Gradio, and RAG, published blog and video demo."
      ],
      links: [
        { label: "Repo", url: "https://github.com/DDH2004/Gen-AI-Intensive-Course-Capstone-2025Q1" }
      ]
    },
    {
      title: "Spot-It Object Detection and Matching System",
      description: [
        "Built a computer vision pipeline for Spot-It! game cards using Python, Roboflow, OpenCV, and REST APIs, robust batch processing and result validation."
      ],
      links: [
        { label: "Roboflow", url: "https://universe.roboflow.com/spot-it-n0ukj/spot-it-stayf" },
        { label: "Repo", url: "https://github.com/DDH2004/Spot_It" }
      ]
    },
    {
      title: "BART Aerial Track Inspection System",
      description: [
        "Developed Django web app for automated track inspection using computer vision, deep learning, OCR, and PDF reporting, collaborated with BART mentors."
      ]
    }
  ],
  certifications: [
    { name: "Google Project Management: Specialization" },
    { name: "Google Business Intelligence" },
    { name: "San Diego Supercomputing Center Summer Institute on HPC and Data Science" },
    { name: "IBM Skillsbuild Course on Data Analytics and Visualization" },
    { name: "Comptia A+ certification (In-progress)" },
    { name: "Project Destined Commercial Real estate Certification" },
    { name: "Project Destined Commercial Financial Modeling" },
    { name: "Deeplearning.AI Tensorflow developer course" },
    { name: "Uplimit Google fundamentals in SRE" },
    { name: "Zscaler Cybersecurity Fundamentals Associate Exam" },
    { name: "Codepath Intro to Cybersecurity" },
    { name: "Codepath Intermediate Cybersecurity" },
    { name: "UC Merced Marketing 101" },
    { name: "UC Merced Machine Shop Safety" },
    { name: "How to Network When You Don't Like Networking (Feb 2024)" },
    { name: "The Power of the Minimalist Entrepreneur (Mar 2024)" },
    { name: "How to Give Feedback People Can Actually Use (Mar 2024)" },
    { name: "Psychological Safety: Clear Blocks to Innovation, Collaboration, and Risk-Taking" },
    { name: "How to Set Goals When Everything Feels Like a Priority" },
    { name: "Google Cloud Skills: Boost Generative AI Fundamental" },
    { name: "AWS APAC Solutions Architecture virtual experience program on Forage - January 2025" },
    { name: "Datacom Introduction to Cloud Job Simulation on Forage - January 2025" },
    { name: "Goldman Sachs Software Engineering Virtual Experience Program on Forage - January 2025" }
  ],
  clubs: [
    { name: "HackMerced", role: "Coordinator and Director", date: "August 2023 - Present" },
    { name: "Association for Computing Machinery", role: "Secretary", date: "March 2023 - Present" },
    { name: "BobCAD", role: "Board Member, Ex-VP, and Treasurer", date: "August 2023 - Present" },
    { name: "NSF Innovation Corps", role: "Teal Lead", date: "August 2023 - Present" }
  ]
};

export default cvData;
