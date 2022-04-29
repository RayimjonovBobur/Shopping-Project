import React from "react";
import GlobalModal from "../../Components/Modal/GlobalModal";
import GlobalTable from "../../Components/Table/GlobalTable";
import { Navbar } from "../Navbar/Navbar";

function Partner() {
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

export default Partner;
