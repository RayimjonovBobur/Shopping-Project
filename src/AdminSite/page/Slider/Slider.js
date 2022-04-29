import React from "react";
import { Navbar } from "../Navbar/Navbar";
import GlobalTable from "../../Components/Table/GlobalTable";
import GlobalModal from "../../Components/Modal/GlobalModal";

function Slider() {
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

export default Slider;
