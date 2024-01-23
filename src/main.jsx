import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Posts, { loader as postLoader } from "./routes/Posts.jsx";
import "./index.css";
import NewPost, { action as newPostAction } from "./components/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetails, {
  loader as showDetailLoader,
} from "./components/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Posts />,
        children: [
          { path: "new", element: <NewPost />, action: newPostAction },
          { path: "/:id", element: <PostDetails />, loader: showDetailLoader },
        ],
        loader: postLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
