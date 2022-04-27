import React from "react";
import GlobalTable from "../../Components/Table/GlobalTable";
import { Navbar } from "../Navbar/Navbar";

function Companies() {
  return (
    <>
      <Navbar />
      <div className="main-nav">
        <GlobalTable/>
      </div>
    </>
  );
}

export default Companies;
