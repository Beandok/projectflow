# Project charter — ProjectFlow

**Version:** 1.0 | **Date:** 2026-11-16 | **Status:** Implementation completed locally; deployment pending

**Problem:** Individuals and small teams often need an uncomplicated place to keep projects, deliverables, deadlines, assigned tasks, project contacts and risks together.

**Objective:** Ship a responsive, single-user project coordination MVP that is demonstrable in a portfolio without requiring SaaS accounts or database credentials.

**Sponsor/product owner:** Independent portfolio project owner. **Delivery team:** AI-assisted development under project-owner direction. No external employees, clients, or user-interview participants are claimed.

**Deliverables:** Functional web application, seeded examples, automated tests, production static build and `/docs` project artifact suite.

**Success measures (acceptance criteria, not fabricated outcomes):** CRUD for primary entities; persistence across reload; four task statuses; useful project reports; representative demo data; tests and build passing; deployable static bundle.

**Constraints:** Maintain independence from existing symptom research application; no secrets, paid infrastructure or external data; prioritize low operational overhead.

**Decision log:** Chose dependency-free ES modules and localStorage because registry access timed out in this environment, and deployment/portfolio demo benefit from a zero-config site. Cloud sync is deferred.

**Actual status:** Code created and unit tests passed locally on 2026-11-16. Public deployment remains unverified.