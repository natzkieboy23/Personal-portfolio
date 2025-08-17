# Gemini CLI Rules and Constraints

This file outlines the rules and constraints for the Gemini CLI to follow while working in this project.

## Project Structure and Conventions

*   **Framework**: Next.js 15 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Components**: shadcn/ui
*   **Package Manager**: Bun

Adhere to the existing project structure as defined in the `README.md`. When adding new components, use the `bunx shadcn@latest add [component-name]` command.

## Data Management

All data is managed in the `/data` directory. Do not introduce any database connections. Modify the TypeScript files in this directory to update content.

*   `personalInfo.ts`: Personal information, social links, about section.
*   `skills.ts`: Skills and their categories.
*   `experience.ts`: Work history and achievements.
*   `projects.ts`: Project portfolio details.

## Image Handling

Place all new images in the `public/images/` directory. Follow the naming conventions found in the `README.md` for profile and project images.

## Development Scripts

Use the following scripts for development tasks:

*   `bun dev`: Start the development server.
*   `bun build`: Create a production build.
*   `bun start`: Run the production server.
*   `bun lint`: Execute ESLint for code analysis.

## Version Control

Commit messages should be clear and descriptive. Do not push to the remote repository unless explicitly asked.
