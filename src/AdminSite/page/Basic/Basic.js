import React from "react";
import GlobalModal from "../../Components/Modal/GlobalModal";
import GlobalTable from "../../Components/Table/GlobalTable";
import { Navbar } from "../Navbar/Navbar";
import "../unversal.scss";
function Basic() {
  return (
    <div className="background">
      <Navbar />
      <div className="main-nav">
        <div className="mb-3">
          <GlobalModal />
        </div>
        <GlobalTable />
      </div>
    </div>
  );
}

export default Basic;
