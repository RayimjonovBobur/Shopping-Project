import React from "react";
import { Navbar } from "../Navbar/Navbar";
import GlobalTable from "../../Components/Table/GlobalTable";
import GlobalModal from "../../Components/Modal/GlobalModal";

function Kategorya() {
  return (
    <>
      <Navbar />
      <div className={`main-nav `}>
        <div className="mb-3 modalll">
          <GlobalModal />
          {/* <Modall /> */}
        </div>
        <GlobalTable />
      </div>
    </>
  );
}

export default Kategorya;
