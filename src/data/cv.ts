// src/data/cv.ts

export interface ProjectEntry {
  title: string;
  context: string;
  summary: string;
  built: string[];
  stack: string[];
  links?: { label: string; url: string }[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface CVData {
  name: string;
  role: string;
  summary: string;
  github: string;
  linkedin: string;
  email: string;
  resumePath: string;
  projects: ProjectEntry[];
  skills: SkillGroup[];
  about: string[];
}

const cvData: CVData = {
  name: "Akhil Devarasetty",
  role: "Software Engineer · Backend / Systems / ML",
  summary:
    "I build distributed ML systems and backend infrastructure — from model serving pipelines to real-time inference APIs.",
  github: "https://github.com/DDH2004",
  linkedin: "https://www.linkedin.com/in/akhil-devarasetty-073a72244/",
  email: "akhild2004@gmail.com",
  resumePath: "/resume.pdf",

  projects: [
    {
      title: "ExoIdent",
      context: "NASA Space Apps Challenge",
      summary:
        "Multimodal ML system for exoplanet detection from Kepler/TESS observation data, serving real-time predictions through a distributed backend.",
      built: [
        "Designed multimodal model fusion strategy combining CNN time-series models with tabular feature classifiers",
        "Implemented distributed inference pipeline with Celery + Redis task queues, achieving ~1,000 predictions/sec at sub-100ms latency",
        "Built FastAPI backend with WebSocket-based real-time updates for a Next.js dashboard",
      ],
      stack: [
        "Python",
        "FastAPI",
        "Celery",
        "Redis",
        "TensorFlow",
        "Next.js",
        "Docker Compose",
      ],
      links: [],
    },
    {
      title: "Golden Gate Quest",
      context: "NVIDIA Spark Hack Series",
      summary:
        "GPU-accelerated RAG platform powering a real-time scavenger hunt with personalized guidance from multimodal inputs.",
      built: [
        "Designed and implemented the RAG backend with NeMo embeddings and GPU-accelerated vector similarity search",
        "Built session-aware FastAPI service connecting ML inference to real-time voice guidance and image comparison",
        "Integrated Supabase (PostgreSQL) persistence layer with React/TypeScript frontend",
      ],
      stack: [
        "Python",
        "FastAPI",
        "NeMo",
        "CUDA",
        "Supabase",
        "React",
        "TypeScript",
      ],
      links: [],
    },
    {
      title: "BART Aerial Track Inspection",
      context: "Computer Vision for Infrastructure Monitoring",
      summary:
        "Automated CV system that detects rail defects from aerial video, localizes issues via OCR mile markers, and generates structured maintenance reports.",
      built: [
        "Implemented end-to-end CV pipeline: frame extraction, object detection for obstructions/defects, OCR-based localization",
        "Built Django application with automated PDF report generation for downstream maintenance teams",
        "Transformed raw video data into structured, actionable inspection outputs",
      ],
      stack: ["Python", "OpenCV", "TensorFlow", "Django"],
      links: [],
    },
  ],

  skills: [
    {
      label: "Languages",
      items: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "R"],
    },
    {
      label: "Backend & Systems",
      items: [
        "FastAPI",
        "Django",
        "Flask",
        "Node.js",
        "Celery",
        "Redis",
        "WebSockets",
        "REST APIs",
      ],
    },
    {
      label: "ML & Data",
      items: [
        "TensorFlow",
        "OpenCV",
        "LangChain",
        "FAISS",
        "NumPy",
        "Pandas",
        "RAG Pipelines",
        "NeMo",
      ],
    },
    {
      label: "Infrastructure & DevOps",
      items: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "AWS",
        "Google Cloud",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
      ],
    },
  ],

  about: [
    "CS graduate from UC Merced with experience building distributed ML systems, backend services, and computer vision pipelines.",
    "Previously interned at Lawrence Livermore National Laboratory (NNSA) and Zscaler. Research work in IoT sensor fusion at IoT4Ag.",
    "Looking for software engineering roles in backend, systems, or ML infrastructure.",
  ],
};

export default cvData;
