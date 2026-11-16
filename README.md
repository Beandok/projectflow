# ProjectFlow

**Work, in flow.** A lightweight project-management web app for organizing projects, Kanban tasks, milestones, stakeholders, risks, issues and status reports.

> **Status:** Local-first MVP built and verified with Node test suite. The two included workspaces are **fictional, illustrative demos**, not records of real organizations or events. No public deployment is claimed.

## Features

- Active project dashboard with task completion, overdue and blocked metrics
- Create, edit, archive and restore projects
- Task CRUD with priority, due date, ownership, status and milestone associations
- Four-lane drag-and-drop Kanban: To Do, In Progress, Blocked, Completed
- Milestone completion ratios, stakeholder directory, risk and issue register
- Project-level status reporting with downloadable/copyable summary
- Browser-local persistent storage, JSON export/import, demo reset
- Responsive layout for mobile and desktop; keyboard-editable tasks
- Two seeded projects: Community Music Festival and Healthcare Software Implementation

## Run locally

Requires **Node.js 20+**, no package installation or API keys.

```sh
npm run dev
```

Visit **http://localhost:4173**. To run checks and create a standalone `dist/` directory:

```sh
npm run build
```

## Deploy to Vercel

Create a **new and separate repository** for ProjectFlow; do not reuse or overwrite another application's repository. Push only the ProjectFlow folder contents. Import that new repo into Vercel with **Framework Preset: Other**, **Build Command: `npm run build`**, **Output Directory: `dist`**, and **Install Command: empty** (or leave default if Vercel accepts a zero-dependency project). No environment variables required. Deploy and verify the live public URL before describing it as deployed.

Alternatively, publish `dist/` on any static host. There is no backend and no server dependency in the deployed build.

## Screenshots

Headless Chromium smoke checks exercised create/edit flows and navigation using a local-only test harness. Deployment and cross-browser verification remain pending.

## Architecture

- `index.html` – accessible entry point
- `src/app.js` – UI rendering, event handlers, forms, drag/drop, reporting
- `src/store.js` – data validation, persistence and selectors
- `src/data.js` – data definitions and fictional seeded demo
- `src/style.css` – responsive design system
- `tests/store.test.mjs` – unit tests run by Node's test runner
- `server.mjs` – local development HTTP server
- `scripts/build.mjs` – static production build
- `docs/` – project management artifact trail

Data is saved to `localStorage` under `projectflow:v1`; the stored object has five collections: `projects`, `tasks`, `milestones`, `stakeholders`, and `risks`. Child records have `projectId` references; tasks may also have `milestoneId`. Data is scoped to the current browser profile. JSON backups are user-managed.

## Limitations and security

- No authentication, multi-user access, cloud synchronization, notifications or hosted DB.
- Browser storage can be cleared; use **Settings → Export JSON backup**. Private data should not be entered on shared devices. JSON export is not encrypted.
- Demo stakeholder email addresses are fictional `example.org` addresses.
- UI templates escape user-entered text to prevent HTML injection. Input validation enforces required titles, email format and project date ordering.
- Drag-and-drop is optimized for mouse/trackpad; keyboard users can edit task statuses using the task form (Enter on a card).
- No claim of historical festival metrics, verified stakeholder interviews, production deployment or external user acceptance testing.
- Google Fonts are optional and may require network access; system font fallbacks work offline.

## Portfolio perspective

ProjectFlow demonstrates defining MVP scope, maintaining a project charter and PRD, prioritizing backlog items, coordinating delivery milestones, tracking risks, reporting status and documenting acceptance criteria. See `/docs` for genuine implementation decisions and evidence; technical authorship includes AI-assisted code generation.

## License

No license granted until the repository owner selects one.
Note: Screenshot PNGs are included in the local downloadable release archive; GitHub's source-only mirror omits binary screenshot assets.
