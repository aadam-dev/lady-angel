## Lady Angel Network web app

This directory contains the Lady Angel Network web application. It is built with Next.js and React, with styling handled by Tailwind CSS and TypeScript used throughout the codebase.

The focus of the app is a clean, modern interface with smooth interactions, accessible layouts, and clear copy that reflects the goals of the Lady Angel Network.

---

## Development workflow: Option A (branch + preview)

We use **branches** so you can try changes safely, preview them, then either add them to the main site or throw them away—without breaking what’s already live.

### What is a branch?

Think of your project as one timeline of work. **Main** (often called `main`) is that “official” timeline: the version you consider the real site.

A **branch** is a copy of that timeline where you do new work. It starts from `main` but then has its own commits. So you have:

- **main** – the current “real” site
- **feature/xyz** – a separate line of work (e.g. “add Fuller quote and About section”)

Nothing you do on a branch changes `main` until you **merge** that branch into `main`. So you can experiment without risk.

### Step-by-step: view first, then add to main or change direction

1. **Create a branch** (one per improvement or set of changes)
   ```bash
   git checkout main
   git pull
   git checkout -b feature/fuller-quote-and-about
   ```
   - `git checkout main` – switch to the main timeline.
   - `git pull` – get the latest from the remote (if you use one).
   - `git checkout -b feature/fuller-quote-and-about` – create and switch to a new branch with a descriptive name. Use names like `feature/membership-section` or `feature/navbar-midnight-navy`.

2. **Make your changes**  
   Edit code as usual (e.g. add the Fuller quote, About section, footer contact). Save files.

3. **Run the app and view first**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) and check:
   - Does it look right?
   - Does it match the design and content goals?

4. **Commit on the branch**
   ```bash
   git add .
   git commit -m "Add Fuller quote to hero and About section"
   ```
   Your changes are now saved on this branch only; `main` is unchanged.

5. **Decide what to do next**
   - **Add to main (keep the changes):** merge the branch into `main`.
     ```bash
     git checkout main
     git merge feature/fuller-quote-and-about
     ```
     Now the “real” site has your changes. You can delete the branch if you’re done:  
     `git branch -d feature/fuller-quote-and-about`
   - **Modify further:** stay on the branch, make more edits, run `npm run dev` again, then commit and repeat until you’re happy—then merge as above.
   - **Return to previous build (discard this branch):** don’t merge. Switch back to `main` and you’re on the previous version.
     ```bash
     git checkout main
     ```
     Your branch still exists with the experiments; `main` is unchanged. You can delete the branch later with `git branch -D feature/fuller-quote-and-about` if you don’t need it.

### Quick reference

| Goal                         | What to do                                                                 |
|-----------------------------|----------------------------------------------------------------------------|
| Start a new improvement     | `git checkout main` then `git checkout -b feature/your-feature-name`      |
| Preview your work           | `npm run dev` and open http://localhost:3000                              |
| Save progress on the branch | `git add .` then `git commit -m "Describe what you did"`                   |
| Make this the new “real” site | `git checkout main` then `git merge feature/your-feature-name`           |
| Go back to the old site     | `git checkout main` and do **not** merge the branch                       |

---

## Getting started

From the repository root:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start by editing `app/page.tsx` or any component under `app/`. The development server supports fast refresh, so changes appear almost immediately in the browser.

## Scripts

- `npm run dev` – start the development server
- `npm run build` – create an optimized production build
- `npm start` – run the production server
- `npm run lint` – run ESLint over the project

## Code guidelines

- Prefer small, focused components with clear responsibilities.
- Keep layouts responsive and accessible (labels, focus states, and contrast matter).
- Add comments where they explain intent or non-obvious behavior, rather than repeating what the code already says.
