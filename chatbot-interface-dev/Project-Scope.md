# Project Scope: Chatbot Interface Dev

## Overview
Build a customizable, extensible web-based interface for managing interactions with an AI assistant (like Roxy), storing persistent memory, and organizing context by project and topic. This UI will support rebranding and repurposing for other AI copilots.

---

## Core Objectives
- Enable persistent memory linked to projects and topics
- Allow users to organize conversations by project folders and topic threads
- Provide a visually interactive interface with drag-and-drop, modals, and context menus
- Support interaction logging and automated memory capture
- Integrate directly with Supabase (data) and Render (deployment)
- Allow embedded or sidebar-based AI chat via GPT models

---

## User Roles
- **Owner/Builder**: Full access to all memory, projects, and configuration
- **Collaborators** *(future)*: View/edit access to specific projects
- **Guests** *(optional)*: Read-only view of selected threads or summaries

---

## Data Model
- **Projects**
  - `project_id` (UUID)
  - `name`
  - `description`
  - `status`
  - `created_at`, `updated_at`
- **Memory**
  - `memory_id` (UUID)
  - `project_id` (FK)
  - `topic`
  - `content`
  - `tags` (array)
  - `created_at`, `updated_at`

---

## User Interactions
- Click to open projects/topics
- Drag-and-drop to reorder threads or group topics
- Modal form to add memory or tag content
- Rich text or markdown-style inputs
- Real-time chat view with optional GPT responses
- AI suggestions or summaries on demand

---

## AI Actions (Roxy/GPT)
- Save memory entries on command or trigger
- Recall relevant memory by tag/topic/project
- Summarize threads or projects
- Automate tasks like syncing with GitHub, logging schema changes, etc

---

## Integrations
- **Supabase**
  - Database, Auth, Storage
  - Access via server-side SDK with Service Role
- **Render**
  - Deploy frontend and optional backend endpoints
  - Manage secrets and CI/CD
- **GitHub (optional)**
  - Log commits or sync project metadata
  - Trigger memory inserts from commit messages or issues

---

## MVP Features
- Project + topic folder interface
- Manual memory entry + recall
- Live AI chat linked to selected project/topic
- Supabase connection
- Render deployment

## Future Phases
- File uploads, search indexing
- Multi-user access control
- Public read-only dashboards
- Timeline or graph-based memory visualization

---

## Reusability / Rebranding
- Fully decoupled from specific AI identity
- Configurable app name, assistant persona, and memory schema
- Template for other chatbot-based apps
