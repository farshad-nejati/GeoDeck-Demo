## GeoDeck Demo

GeoDeck Demo is a React-based web application that serves as a visualization platform for subsurface and geoscientific data. It focuses on making the interaction between scientific variables and their spatial and temporal dimensions straightforward and intuitive for both experts and non‑experts.  
The project is built on top of Snowpack, Ant Design, Apollo Client, Auth0, and React Router.

### Domain & Purpose

- **Subsurface data exploration**: Designed to host dashboards and views that help users explore spatial and temporal behavior of reservoirs and other subsurface systems.
- **Decision support**: Aims to support questions about reservoir behavior, composition, injection patterns, and uncertainty by providing an interactive web UI that can be extended with advanced visualizations.
- **XR-ready architecture**: The web-based architecture is intended to accommodate future integration with virtual and augmented reality experiences for more immersive analysis.

### Features

- **Authentication pages**: Login, registration, forgot password, and reset password screens.
- **Protected routes**: Main, gallery, and project pages rendered inside a shared layout.
- **UI component demos**: Buttons, forms, tables, tabs, dropdowns, typography, modals, popovers, and more under the demo page.
- **Routing**: Client-side routing with `react-router-dom` and lazy-loaded pages.
- **GraphQL-ready**: Apollo Client is configured in `client.js` for integrating a GraphQL backend.
- **Styling**: Ant Design components customized with LESS-based theme files.
- **State management scaffolding**: Redux structure (`store`, `reducers`, `actions`) prepared for application state.

### Tech Stack

- **Frontend**: React 17, React DOM
- **UI Library**: Ant Design
- **Routing**: `react-router-dom`
- **State Management**: Redux, React Redux, Redux Thunk
- **GraphQL**: Apollo Client, `graphql`
- **Auth**: Auth0 React SDK
- **Build Tooling**: Snowpack 3, LESS, Sass, Prettier, Web Test Runner

### Project Structure (high level)

- **`src/App.jsx`**: Root application component; sets up Apollo, routing, and layout.
- **`src/routes.js`**: Definition of public and private routes (login, register, gallery, project, demo, etc.).
- **`src/pages/`**: Page-level components (login, register, reset password, gallery, project, demo, main).
- **`src/components/`**: Reusable components and UI demos (auth, gallery, project, layout, spinner, demo components).
- **`src/store/`**: Redux store, reducers, actions, and initial state.
- **`src/less/`**: Global styles, theme, layout, and component-level LESS files.

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** or **Yarn**

### Installation

```bash
# install dependencies
npm install
# or
yarn install
```

### Available Scripts

- **`npm start`** / **`yarn start`**  
  Starts the development server with Snowpack.  
  Open `http://localhost:8080` in your browser. The page reloads on changes and shows lint errors in the console.

- **`npm run build`** / **`yarn build`**  
  Creates an optimized production build of the app using Snowpack.

- **`npm run format`** / **`yarn format`**  
  Formats source files in `src` with Prettier.

- **`npm run lint`** / **`yarn lint`**  
  Checks code style in `src` using Prettier.

- **`npm test`** / **`yarn test`**  
  Runs tests with Web Test Runner.

### Configuration

- **Snowpack configuration**: See `snowpack.config.js` for mount points, aliases, plugins, optimization options, and SPA routing setup.
- **Environment variables**: Managed via `@snowpack/plugin-dotenv`. Create a `.env` file in the project root as needed (for example, Auth0 or GraphQL endpoint configuration).

### Notes

- This project was originally bootstrapped with **Create Snowpack App (CSA)**.
- You can further optimize production builds by tuning Snowpack optimization options or adding additional plugins if required.

### License

This project is licensed under the **ISC License** (see `package.json`).