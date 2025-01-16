import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Thanks from "./Thanks";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/thank-you',
        element: <Thanks />
      }
    ]
  }
])