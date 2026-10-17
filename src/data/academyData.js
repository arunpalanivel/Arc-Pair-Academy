export const ACADEMY_DATA = {
  announcement: "Campus Partnerships Open • Practical AI Programs For Colleges",

  codeSnippets: {
    fastapi: {
      file: "APP.PY",
      language: "python",
      code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_community.vectorstores import PGVector
from langchain_openai import OpenAIEmbeddings

app = FastAPI(title="Arc Pair RAG Engine API")

class Query(BaseModel):
    question: str
    department_id: str

@app.post("/ask")
async def ask_rag(q: Query):
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    store = PGVector(collection_name=q.department_id, connection=DB_URL)
    results = store.similarity_search(q.question, k=4)
    answer = generate_grounded_response(q.question, results)
    return {"question": q.question, "answer": answer, "sources": [r.metadata for r in results]}`
    },
    rag: {
      file: "RAG_PIPELINE.PY",
      language: "python",
      code: `from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import PyPDFDirectoryLoader
from langchain_community.vectorstores import Qdrant

def index_syllabus_documents(pdf_directory: str):
    loader = PyPDFDirectoryLoader(pdf_directory)
    raw_docs = loader.load()
    
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    chunks = splitter.split_documents(raw_docs)
    
    qdrant = Qdrant.from_documents(
        chunks,
        embedding=OpenAIEmbeddings(),
        location=":memory:",
        collection_name="academic_syllabi"
    )
    return qdrant`
    },
    docker: {
      file: "DOCKERFILE",
      language: "dockerfile",
      code: `FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]`
    }
  },

  proofPoints: [
    { title: "Project-First", desc: "From concepts to implementation." },
    { title: "Build With Real Tools", desc: "Python + FastAPI + Ollama + RAG" },
    { title: "Debug, Don't Copy", desc: "Students learn to inspect, break and fix their code" },
    { title: "Show Your Work", desc: "Projects + Documentation + Demo" }
  ],

  pipelineStages: [
    { id: "01", name: "Understand", label: "01 - Understand", desc: "Understand the problem, requirements and basic architecture." },
    { id: "02", name: "Explore", label: "02 - Explore", desc: "Work with AI tools and investigate possible approaches." },
    { id: "03", name: "Build", label: "03 - Build", desc: "Implement a working application or project." },
    { id: "04", name: "Debug", label: "04 - Debug", desc: "Test, reproduce and fix implementation problems." },
    { id: "05", name: "Extend", label: "05 - Extend", desc: "Add features and improve the solution." },
    { id: "06", name: "Showcase", label: "06 - Showcase", desc: "Explain, demonstrate and document the final result." }
  ],

  pedagogyStages: [
    { num: "01", title: "Assess", desc: "Diagnostic assessments to benchmark student syntax and git proficiency." },
    { num: "02", title: "Learn", desc: "Live architecture teardowns and systems engineering breakdowns." },
    { num: "03", title: "Practice", desc: "Terminal-based exercises with structured instructor pair programming." },
    { num: "04", title: "Build", desc: "API integration, vector database indexing, and frontend UI connection." },
    { num: "05", title: "Evaluate", desc: "Automated test suites evaluating groundedness, latency, and edge cases." },
    { num: "06", title: "Showcase", desc: "Public live demo day presentation to institutional leaders and hiring partners." }
  ],

  engagementTiers: [
    {
      id: "pilot",
      title: "Free Pilot Workshop",
      ribbon: "Zero Institution Risk",
      ribbonClass: "dark-ribbon",
      duration: "1 - 2 Days",
      desc: "On-campus practical workshop to validate technical curriculum quality before signing long-term institutional agreements.",
      commercial: "100% Free Pilot",
      commercialSub: "Approved Deans & TPOs only. Batch limit 60-120 students.",
      deliverables: [
        "Foundational LLM APIs and structured outputs hands-on.",
        "Baseline vs. post-workshop assessment report for TPO.",
        "Live in-lab demo day with a functional micro-tool.",
        "Student feedback metrics compiled for HOD review."
      ],
      buttonText: "Claim Campus Pilot",
      buttonClass: "yellow"
    },
    {
      id: "bootcamp",
      title: "AI Bootcamp Intensive",
      ribbon: "Most High-Impact",
      ribbonClass: "red-ribbon",
      duration: "3 - 5 Days",
      desc: "Intensive full-day technical immersion designed to convert traditional syntax programmers into modern AI software builders.",
      commercial: "Subsidized Institutional Rate",
      commercialSub: "Pre-structured flat cohort pricing or departmental sponsorship.",
      deliverables: [
        "End-to-end RAG architecture implementation.",
        "Local open weights quantization and deployment.",
        "Structured 24-hour campus hackathon with industry judges.",
        "All code published to individual student GitHub accounts."
      ],
      buttonText: "Request Formal MOU",
      buttonClass: "dark"
    },
    {
      id: "cohort",
      title: "AI Builder Cohort",
      ribbon: "Department Flagship",
      ribbonClass: "blue-ribbon",
      duration: "2 - 4 Weeks (12 Days)",
      desc: "Structured semester module or summer intersession. Prepares students for elite product engineering roles and technical master's degrees.",
      commercial: "Institutional MOU Structure",
      commercialSub: "Department integration with elective academic credits option.",
      deliverables: [
        "Agentic workflows, LangGraph orchestration, vector databases.",
        "Production CI/CD pipelines and cloud container inference.",
        "Official institutional portfolio directory hosted for campus.",
        "Exclusive placement showcases with verified hiring partners."
      ],
      buttonText: "Request Formal MOU",
      buttonClass: "dark"
    }
  ],

  modules: [
    {
      id: "mod-1",
      number: "01",
      title: "AI Foundations",
      desc: "Understand how modern AI and LLMs work, including tokens, context, prompting, structured outputs and limitations.",
      tags: ["LLMs", "Prompting", "Python", "AI Fundamentals"],
      details: "Students gain an intuitive and mathematical understanding of vector spaces, temperature parameters, and system prompts."
    },
    {
      id: "mod-2",
      number: "02",
      title: "AI Application Development",
      desc: "Build applications using Python, FastAPI, Ollama, embeddings, RAG and GitHub.",
      tags: ["Python", "FastAPI", "Ollama", "RAG", "GitHub"],
      details: "Build and deploy production-grade API endpoints wrapping vector databases and custom knowledge retrieval chains."
    },
    {
      id: "mod-3",
      number: "03",
      title: "AI Projects & Automation",
      desc: "Apply AI to real-world problems through guided projects, tool integration and automation workflows.",
      tags: ["AI Tools", "APIs", "Workflows", "Projects"],
      details: "Connect AI agents to real-world triggers, databases, Slack/Email webhooks, and containerized cloud runners."
    }
  ],

  projects: [
    {
      id: "proj-1",
      status: "Application concept",
      title: "College Syllabus Tutor",
      desc: "A knowledge-based AI application that lets students interact with syllabus and course materials using document retrieval and RAG.",
      tags: ["LangChain", "pgvector", "FastAPI", "React"],
      category: "RAG",
    },
    {
      id: "proj-2",
      status: "Application concept",
      title: "AI Resume Analyzer",
      desc: "Analyzes resume content and compares skills and experience with a job description to highlight areas for improvement.",
      tags: ["FastAPI", "Docker", "Python", "LLM Eval"],
      category: "FastAPI",
    },
    {
      id: "proj-3",
      status: "Coming with the first cohort",
      title: "Student Capstone",
      desc: "Students will develop a practical AI application addressing a real-world problem using concepts covered during the cohort.",
      tags: ["AI Applications", "Guided Projects", "Student Showcase"],
      category: "Student Capstone",
    }
  ],

  faqs: [
    {
      q: "What is the cost of the Pilot Workshop for colleges?",
      a: "The pilot workshop is 100% free of charge for verified colleges, TPO departments, and HODs to evaluate our curriculum quality with 60-120 students."
    },
    {
      q: "Are student certificates provided?",
      a: "Yes! Every student completing the bootcamp or builder cohort receives a GitHub-verified certificate linked directly to their capstone codebase."
    },
    {
      q: "What infrastructure does the college need to provide?",
      a: "A computer lab with internet access and Chrome/VS Code installed. We bring all curriculum materials, cloud API credits, and exercise sandboxes."
    }
  ]
};
