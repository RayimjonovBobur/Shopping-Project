import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import CardShop from "./ClientSide/Components/Card Shop/CardShop";
import HeaderShop2 from "./ClientSide/Components/Header/HeaderShop2";
import { pages } from "./pages/Main";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <ToastContainer />
        <Routes>
          {pages.map((page) => (
            <Route path={page?.path} element={page?.page} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
