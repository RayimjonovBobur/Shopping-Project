import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { pages } from "./pages/Main";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {pages.map((page) => (
          <Route path={page?.path} element={page?.page} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
