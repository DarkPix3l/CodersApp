# Coders App challenge

- User authentication with Redux Toolkit
- Protected routes using react-router-dom
- Form validation using React state
- Conditional error messaging for invalid input or failed login
- Basic dashboard routing after login
- Responsive UI built with Tailwind CSS
- Leaderboard page displaying ranked users with score and solved challenges

## Theme Toggle

- Added Redux slice for managing light/dark mode state.
- Replaced automatic browser theme detection with manual toggle via Redux.
- Applied `data-theme` attribute on the root element to control CSS variables dynamically.
- Updated styles to use CSS variables for colors and backgrounds instead of inline Tailwind classes.
- Added a theme toggle button in the Navbar that dispatches Redux actions to switch themes.
