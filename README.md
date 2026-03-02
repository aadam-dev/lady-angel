## Lady Angel Network

Lady Angel Network is a modern web platform for organizing, sharing, and presenting content for the Lady Angel initiative. The goal of this project is to provide a clear, welcoming, and polished experience for everyone who interacts with the network, whether they are viewing information or helping to maintain the site.

The primary web application lives in the `lan-app` directory and is built with a contemporary React/Next.js stack, with a strong emphasis on thoughtful UI, smooth interactions, and accessible design.

## Project structure

- `lan-app` – Next.js application containing the main UI
- `About Lady Angel Network_brief.docx` – narrative/brief for the network
- `LADY ANGEL NETWORK_ppt.pptx` – presentation deck
- `LAN PRESENTATION.pdf` – exported presentation

As the project grows, additional services and tools can be added alongside `lan-app`, but this repository is intended to stay focused and easy to navigate.

## Design and UX principles

- **Clarity first**: Interfaces should feel obvious, with minimal friction and clear language.
- **Accessibility**: Layouts, color choices, and interactive elements aim to be usable with keyboard navigation and assistive technologies.
- **Consistency**: Components, spacing, and typography follow a consistent system so pages feel cohesive.
- **Performance**: Pages should load quickly and respond smoothly, especially on constrained devices.

## Tech stack (current)

The main web app in `lan-app` uses:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint for linting

## Getting started

1. **Install dependencies**

   From the `lan-app` directory:

   ```bash
   cd lan-app
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Then open `http://localhost:3000` in your browser.

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## Code style and comments

The codebase favors:

- Clear naming and small, focused components
- Inline comments where they add context or explain non-obvious decisions
- Separation of UI components, layout, and domain logic where practical

When contributing, aim for comments that explain **why** something is implemented a certain way, rather than restating what the code already makes obvious.

## Contributing

1. Create a new branch for your change.
2. Make your updates in `lan-app` (and update this README if behavior or setup changes).
3. Run the lint and build commands before opening a pull request:

   ```bash
   npm run lint
   npm run build
   ```

4. Open a pull request with a concise summary of what changed and why.

