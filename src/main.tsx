import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { Error } from "./pages/Error";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AnimalList } from "./pages/AnimalList/AnimalList";
import { AnimalView } from "./pages/AnimalView/AnimalView";
import "../src/scss/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "/animals",
    element: <AnimalList></AnimalList>,
  },
  {
    path: "/animals/:id",
    element: <AnimalView></AnimalView>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
