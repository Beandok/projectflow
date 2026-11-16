# Product requirements document

## User stories and implemented acceptance criteria

| ID | User story | Acceptance criteria | Status |
|---|---|---|---|
| P1 | Manage projects | Add, edit, archive, restore and see status/progress/due date | Implemented |
| T1 | Manage tasks | Add, edit, delete, assign, set priority/due/milestone | Implemented |
| T2 | Coordinate using Kanban | Four statuses and drag-to-move; edit status without dragging | Implemented |
| M1 | Track milestones | Create/edit/delete milestone; see due date and linked task completion | Implemented |
| S1 | Track stakeholders | Record name, role, email and notes | Implemented |
| R1 | Track risks/issues | Type, severity, status, owner and mitigation notes | Implemented |
| G1 | Report project status | Completion, blocked, overdue, coming due and unresolved risk counts | Implemented |
| D1 | Try real scenarios | Two labeled illustrative projects with linked entities | Implemented |
| D2 | Keep work between sessions | Browser-local persistence, import/export backup | Implemented |
| UX1 | Work on mobile | Responsive navigation, scrollable board and tables | Implemented; visual verification required |

## Core business rules

Progress = completed tasks / all tasks in project; empty projects are 0%. Overdue means due date before the current calendar date and not completed. Due soon means not completed, due today or within seven days. Archiving hides projects from active selections but retains associated records. Deleting a milestone clears its task associations. Deletion of other records is confirmed before execution.

## Nonfunctional requirements

Zero credentials required; no external requests for user data; readable interface; XSS-safe text rendering; clear errors and input validation; modern Chromium/Firefox/Safari expected (browser-specific QA limited).