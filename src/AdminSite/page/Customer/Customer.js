import React from "react";
import { Navbar } from "../Navbar/Navbar";
import GlobalModal from "../../Components/Modal/GlobalModal";
import GlobalTable from "../../Components/Table/GlobalTable";

function Customer() {
  return (
    <>
      <Navbar />
      <div className="main-nav">
        <div className="mb-3">
          <GlobalModal />
        </div>
        <GlobalTable />
      </div>
    </>
  );
}

export default Customer;
