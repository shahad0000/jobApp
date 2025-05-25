import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/Layout";
import Application from "../pages/Application";
import Submission from "../pages/Submission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { path: "/", element: <Application /> },
        { path: "/submission", element: <Submission /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
