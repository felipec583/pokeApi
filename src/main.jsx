import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import StateProvider from "./context/ContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);

