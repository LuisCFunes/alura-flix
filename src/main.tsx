import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.tsx";
import ErrorPage from "./Pages/Error.tsx";
import NewVideo from "./Pages/NewVideo.tsx";
import { VideoProvider } from "./fetching/VideoContext.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "New",
    element: <NewVideo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VideoProvider>
      <RouterProvider router={router} />
    </VideoProvider>
  </React.StrictMode>
);
