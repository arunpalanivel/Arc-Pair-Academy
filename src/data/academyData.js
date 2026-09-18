export const ACADEMY_DATA = {
  announcement: "Campus Partnerships Open for 2026-2027 Academic Batches — Free Pilot Workshop Available for TPOs & HODs",

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
    { title: "Zero Fluff", desc: "No theoretical slide-decks or generic lectures" },
    { title: "100% on GitHub", desc: "Every project hosted, reviewed & verifiable" },
    { title: "Zero False Guarantees", desc: "Honest, battle-tested engineering skills" },
    { title: "Real Toolchains", desc: "Docker, FastAPI, LangChain, pgvector" }
  ],

  pipelineStages: [
    { id: "01", name: "Understand", label: "01 - Req", desc: "Problem framing, dataset boundary definition, baseline performance metrics." },
    { id: "02", name: "Explore", label: "02 - Raw", desc: "Data parsing, chunking strategy comparison, embedding model benchmarks." },
    { id: "03", name: "Design", label: "03 - Arch", desc: "Vector DB topology, memory/state store selection, API schema design." },
    { id: "04", name: "Build", label: "04 - Core", desc: "FastAPI REST API, LangChain chain orchestration, structured output validation." },
    { id: "05", name: "Test", label: "05 - Eval", desc: "Groundedness checks, latency optimization, hallucination rate evaluation." },
    { id: "06", name: "Deploy", label: "06 - Prod", desc: "Docker containerization, CI/CD pipeline push, public review URL live." },
    { id: "07", name: "Improve", label: "07 - Loop", desc: "User feedback ingestion, telemetry logging, API documentation sync." }
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
      number: "Module 01",
      title: "AI Education & Foundations",
      desc: "A real look at how LLMs work under the hood: tokens, context windows, prompt engineering, and structured evaluation.",
      tags: ["Tokens", "Prompt Design", "Embeddings", "Context Windows"],
      details: "Students gain an intuitive and mathematical understanding of vector spaces, temperature parameters, and system prompts."
    },
    {
      id: "mod-2",
      number: "Module 02",
      title: "AI Application Development",
      desc: "Build production-style apps with retrieval-augmented generation (RAG), vector databases, and tool-calling agents.",
      tags: ["pgvector", "LangChain", "FastAPI", "RAG Pipeline"],
      details: "Build and deploy production-grade API endpoints wrapping vector databases and custom knowledge retrieval chains."
    },
    {
      id: "mod-3",
      number: "Module 03",
      title: "AI Automation Systems",
      desc: "Create event-driven workflows, automated document processing pipelines, and lightweight agentic automation.",
      tags: ["Agent Workflows", "Webhooks", "Docker", "LangGraph"],
      details: "Connect AI agents to real-world triggers, databases, Slack/Email webhooks, and containerized cloud runners."
    }
  ],

  projects: [
    {
      id: "proj-1",
      slug: "arc-pair/syllabus-tutor",
      title: "College Syllabus Tutor",
      desc: "A custom RAG system indexing a department's own syllabus, lecture notes, and 5 years of past university exam papers.",
      tags: ["LangChain", "pgvector", "FastAPI", "React"],
      category: "RAG",
      repo: "https://github.com/arc-pair/syllabus-tutor"
    },
    {
      id: "proj-2",
      slug: "arc-pair/resume-analyzer",
      title: "Resume & Portfolio Analyzer",
      desc: "Parses candidate PDFs and GitHub profile repositories, scoring project completeness against modern job descriptions.",
      tags: ["FastAPI", "Docker", "Python", "LLM Eval"],
      category: "FastAPI",
      repo: "https://github.com/arc-pair/resume-analyzer"
    },
    {
      id: "proj-3",
      slug: "arc-pair/support-agent",
      title: "Institutional Support Agent",
      desc: "Answers complex student queries 24/7 by retrieving verified guidelines from a college's official handbook.",
      tags: ["Agents", "Webhooks", "LangChain", "Qdrant"],
      category: "Agents",
      repo: "https://github.com/arc-pair/support-agent"
    },
    {
      id: "proj-4",
      slug: "arc-pair/code-auditor",
      title: "Automated Code Auditor",
      desc: "GitHub Action workflow bot that analyzes pull requests for security flaws, syntax bugs, and test coverage gaps.",
      tags: ["GitHub Actions", "Docker", "Python", "AST"],
      category: "Docker",
      repo: "https://github.com/arc-pair/code-auditor"
    },
    {
      id: "proj-5",
      slug: "arc-pair/exam-generator",
      title: "Question Paper Synthesizer",
      desc: "Generates Bloom's taxonomy balanced university question papers with automatic marking rubrics.",
      tags: ["FastAPI", "Pydantic", "Prompt Eng"],
      category: "FastAPI",
      repo: "https://github.com/arc-pair/exam-generator"
    },
    {
      id: "proj-6",
      slug: "arc-pair/research-assistant",
      title: "Faculty Research Paper Copilot",
      desc: "Indexes arXiv and IEEE papers to auto-generate literature reviews and extract core methodology charts.",
      tags: ["RAG", "LangChain", "Vector DB"],
      category: "RAG",
      repo: "https://github.com/arc-pair/research-assistant"
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
