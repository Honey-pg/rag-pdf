# RAG PDF

A premium, full-stack Retrieval-Augmented Generation (RAG) application that allows you to chat interactively with your PDF documents.

## Features

- **Interactive Chat Interface**: Ask complex questions and get context-aware answers.
- **Side-by-side PDF Viewer**: View the document as you chat with it.
- **Glassmorphic UI**: A premium, modern dark-themed user interface.
- **Markdown Support**: Rich text rendering for code snippets, lists, and bold text.
- **FastAPI Backend & Next.js Frontend**: High performance and seamless experience.

## Getting Started

### Prerequisites
- Node.js (v18+)
- Python 3.10+
- Gemini API Key

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## UI Component Catalog

- **`Tooltip`**: Hover tooltips with directional positioning.
- **`Accordion`**: Collapsible content sections for FAQs.
- **`Tabs`**: Tabbed navigation panels.
- **`Dropdown`**: Custom glassmorphic select dropdown.
- **`SearchInput`**: Search bar with clear button.
- **`Badge`**: Status badge indicators.
- **`Card`**: Reusable container cards.
- **`Modal`**: Slide-up backdrop blur modal.
- **`Toast`**: Global toast notifications.
- **`Sidebar`**: Sliding side drawer panel.

## API Endpoints

- `POST /api/upload`: PDF document upload & ingestion.
- `POST /api/query`: Vector context retrieval & Q&A.
- `GET /api/health`: Frontend system status monitoring.

## Architecture
- **Frontend**: Next.js (Pages Router), React, CSS Modules
- **Backend**: Python, FastAPI, Gemini API, PyMuPDF

## License
MIT
