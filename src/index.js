import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // importing BrowserRouter and renaming Router
import App from "./App";// import App component
import "tailwindcss/tailwind.css"; // Import Tailwind CSS


//Wrapping the App component with the Router component to enable routing in all the components
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
