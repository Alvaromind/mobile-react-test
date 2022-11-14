# Mobile React Test

Mobile shop application using [React](https://reactjs.org/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs ESLint to analyze the `.js` and `.jsx` files in the `src` folder and find errors and warnings.

## Architecture

### Routing

For Routing I've used [React Router v6.4](https://reactrouter.com/en/main/start/overview) which has allowed me to easily build a SPA (Single Page Application). In [version 6.4](https://reactrouter.com/en/main/start/overview), React Router has nested routes that are useful for many things, in this case, I've added a Layout to all the routes with a header and breadcrumbs.

### State

For managing the state I've used [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) to handle API request and caching them.

### Testing

For testing, I've used [Jest](https://jestjs.io/) that is a very popular testing framework alongside [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) that provides methods to test UI components comfortably. I've also used [Mock Service Worker](https://mswjs.io/) to mock the API endpoints and help with some use cases.
