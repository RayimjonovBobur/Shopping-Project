import React from "react";
import { Navbar } from "../Navbar/Navbar";
import GlobalTable from "../../Components/Table/GlobalTable";

function Services() {
  return (
    <>
      <Navbar />
      <div className="main-nav">
        <GlobalTable />
      </div>
    </>
  );
}

export default Services;
