import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllApps from "./pages/Allapps.tsx";
import Analytics from "./pages/Analytics.tsx";
import Authentication from "./pages/Authentication.tsx";
import Settings from "./pages/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllApps />,
      },
      {
        path: "/Analytics",
        element: <Analytics />,
      },
      {
        path: "/Authentication",
        element: <Authentication />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
