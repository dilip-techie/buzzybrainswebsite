# AI Coding Agent Guidelines for BuzzyBrains Website

Welcome to the BuzzyBrains website codebase! This document provides essential guidelines for AI coding agents to be productive and aligned with the project's structure and conventions.

## Project Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app`. It is designed for the marketing needs of a coaching institute. The project uses the App Router (`app/` directory) and leverages modern Next.js features like server components and optimized fonts.

### Key Directories
- **`app/`**: Contains the core application logic, including pages, layouts, and global styles.
  - `coaching-homepage.tsx`: Main component for the coaching homepage.
  - `layout.tsx`: Defines the layout structure for the app.
  - `globals.css`: Global CSS styles.
- **`public/`**: Static assets like images and fonts.

### External Dependencies
- **Next.js**: Framework for building the application.
- **`next/font`**: Used for optimizing and loading fonts.
- **Geist Font**: A custom font family for branding.

## Developer Workflows

### Running the Development Server
Use one of the following commands to start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
The server runs at [http://localhost:3000](http://localhost:3000).

### Building the Project
To create a production build:
```bash
npm run build
```

### Debugging
- Use the browser's developer tools for inspecting components and styles.
- Leverage Next.js's built-in error overlay for runtime and build-time errors.

## Project-Specific Conventions

### Component Structure
- Follow the file-based routing system of Next.js.
- Use server components where possible to optimize performance.
- Co-locate component-specific styles within the same directory.

### Styling
- Global styles are defined in `globals.css`.
- Use CSS modules or inline styles for component-specific styling.

### Fonts
- Fonts are managed using `next/font` for automatic optimization.

## Examples

### Adding a New Page
1. Create a new file in the `app/` directory, e.g., `app/new-page.tsx`.
2. Export a React component as the default export.
3. The file name will automatically map to the route `/new-page`.

### Updating Global Styles
Modify `globals.css` to apply styles globally across the application.

## Notes for AI Agents
- Always follow the Next.js conventions for file-based routing and component structure.
- When adding dependencies, ensure they align with the project's existing stack and are necessary for the task.
- Document any significant changes in the `README.md` file.

For further details, refer to the [Next.js Documentation](https://nextjs.org/docs).