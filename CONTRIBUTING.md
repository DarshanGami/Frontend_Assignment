# Contributing to Quiz App

Thank you for considering contributing to this project!

## Development Setup

1. Fork the repository
2. Clone your fork
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature`
5. Make your changes
6. Run tests: `npm test`
7. Run linter: `npm run lint`
8. Format code: `npm run format`
9. Commit your changes
10. Push to your fork
11. Create a Pull Request

## Code Standards

### TypeScript
- Use strict TypeScript mode
- Avoid `any` types
- Add proper type annotations
- Document complex types

### React
- Use functional components
- Use hooks appropriately
- Follow React best practices
- Add prop types for all components

### Styling
- Use Tailwind utility classes
- Follow the design system in `tailwind.config.ts`
- Maintain responsive design
- Ensure accessibility

### Code Quality
- Run `npm run lint` before committing
- Run `npm run format` to format code
- Write tests for new features
- Maintain test coverage

## Component Guidelines

1. **File Structure**: One component per file
2. **Naming**: PascalCase for components
3. **Props**: Define TypeScript interfaces
4. **Accessibility**: Include ARIA labels
5. **Animation**: Use Framer Motion consistently

## Commit Messages

Use conventional commits format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `test:` - Tests
- `chore:` - Maintenance

Example: `feat: add timer to quiz questions`

## Pull Request Process

1. Update README if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update documentation
5. Request review

## Questions?

Open an issue for questions or discussions.
