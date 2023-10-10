import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BooksPage from "../pages/BooksPage";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default Router;
