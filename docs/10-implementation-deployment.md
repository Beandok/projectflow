# Implementation and deployment guide

## Environment

Node.js 20+ and a browser. No runtime secrets or paid infrastructure. `npm run dev` starts http://localhost:4173. `npm run build` generates `dist/`. No dependency install step is needed.

## Data model

One JSON root containing `version`, `projects`, `tasks`, `milestones`, `stakeholders`, `risks`. All linked records reference `projectId`. Tasks can reference `milestoneId`; milestone deletion unlinks tasks. Browser key: `projectflow:v1`.

## Deployment

1. Create a **new** GitHub repository called `projectflow`, separate from existing applications.
2. Add the contents of this ProjectFlow directory to that repository, without secrets. Do not include `node_modules`, `.env`, or local backups.
3. In Vercel, import this repository; select Framework Preset **Other**.
4. Set build command `npm run build`, output directory `dist`, and no environment variables. Use zero-dependency install/no install where offered.
5. Deploy, visit the public URL, verify page render, task editing, browser reload persistence, and responsive navigation. Only then mark deployment complete.

## Backup, restore and troubleshooting

Settings → Export JSON saves a copy of the workspace. Settings → Import JSON checks the file schema and replaces stored records. Settings → Reset restores demos. If data fails to persist, check browser storage restrictions/quotas, and export immediately; use a non-private window for routine work.

## Future upgrade path

Introduce a typed API and managed Postgres-backed persistence, add authentication and proper per-user access control with row-level security, and migrate local data by importing JSON. No claim that this exists today.