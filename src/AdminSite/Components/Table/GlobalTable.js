import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "../../../assates/icons/Icons";
import { toggleModal } from "../../../Redux/stored_reducer";
import "./table.scss";
import Tbody from "./Tbody";
import Thead from "./Thead";

function GlobalTable() {
  const { currentPage, values } = useSelector((state) => state?.users_reducer);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(toggleModal(true));
  };

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
