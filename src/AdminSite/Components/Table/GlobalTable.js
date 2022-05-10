import React from "react";
import { useSelector } from "react-redux";
import "./table.scss";
import Tbody from "./Tbody";
import Thead from "./Thead";

function GlobalTable() {
  const { currentPage } = useSelector((state) => state?.users_reducer);

  return (
    <>
      <div className="table-wrapper">
        <table className="table table-bordered " id="table">
          <Thead />
          <Tbody />
        </table>
      </div>
    </>
  );
}

export default GlobalTable;
