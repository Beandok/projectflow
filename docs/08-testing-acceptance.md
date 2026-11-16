# Testing plan and acceptance evidence

## Automated local verification

Run `npm run build` to perform JavaScript parse checks, Node unit tests and static bundle output. Test cases: sample schema, persistence across new store instances, task editing/status/deletion, progress arithmetic, overdue logic, import validation, import/export/reset, and simulated blocked storage.

**Recorded run (2026-11-16):** Syntax checks passed; 8 Node tests passed; static build generated `dist/`. This is test evidence, not an external QA sign-off.

## Headless browser interaction smoke test

**Recorded run (2026-11-16):** Headless Chromium executed the actual app logic via an inline, local-only test harness after the environment blocked navigation to local HTTP addresses. Verified render, project creation, task creation, task status editing, milestone creation, stakeholder creation, risk creation, reporting view, mobile menu behavior, and no JavaScript page errors. Screenshots captured under `assets/`. This does **not** verify the production network/deployment environment or cross-session browser persistence.

## Manual browser test checklist

- [ ] Create a project, refresh, verify persistence; edit, archive and restore (creation verified in Chromium; reload persistence verified by Node unit test)
- [ ] Create a task, change status by drag/drop and form, refresh, delete
- [ ] Create milestone, attach task, verify progress; delete milestone, verify unlinked task
- [ ] Create/edit/delete stakeholder and risk/issue
- [ ] Test all three severity/status choices and input errors
- [ ] Copy and download report; confirm blocked/overdue counts
- [ ] Export JSON, reset, import backup, verify restoration
- [ ] Test Chrome, Firefox, Safari and mobile layout (Chromium desktop/mobile viewport smoke test passed; other browsers pending)
- [ ] Confirm keyboard navigation and screen reader labels
- [ ] Deploy and verify public link on Vercel

Unchecked items are **not claimed as tested**. No user interviews or UAT participants are invented.