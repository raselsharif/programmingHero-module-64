import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routes/Routers";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={Routers}></RouterProvider>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
