import React from "react";
import { useSelector } from "react-redux";
import GlobalModal from "../../Components/Modal/GlobalModal";
import GlobalTable from "../../Components/Table/GlobalTable";
import { Navbar } from "../Navbar/Navbar";
import "../unversal.scss";
function Doshboard() {
  return (
    <div className="background">
      <Navbar />
      <div className="main-nav "></div>
    </div>
  );
}

export default Doshboard;
