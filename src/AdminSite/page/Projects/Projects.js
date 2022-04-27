import React from "react";
import { Navbar } from "../Navbar/Navbar";
import GlobalTable from "../../Components/Table/GlobalTable";

function Projects() {
  return (
    <>
      <Navbar />
      <div className="main-nav">
        <GlobalTable />
      </div>
    </>
  );
}

export default Projects;
