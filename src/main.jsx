import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NewPost from "./components/NewPost.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "", element: <App /> },
  { path: "new", element: <NewPost /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
