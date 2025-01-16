import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Thanks from "./Thanks";
import Contact from "./Contact";

// Define the router configuration
export const router = createBrowserRouter([
  {
    path: '/', // This is the root route that renders the `App` component
    element: <App />, // Renders App at the root route
  },
  {
    path: '/thank-you', // This route renders the Thanks page
    element: <Thanks />,
  },
  {
    path: '/contact', // This route renders the Contact page
    element: <Contact />,
  }
]);
