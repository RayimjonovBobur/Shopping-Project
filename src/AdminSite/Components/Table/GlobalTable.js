import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "../../../assates/icons/Icons";
import { toggleModal } from "../../../Redux/stored_reducer";
import "./table.scss";

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
          <thead>
            <tr>
              {currentPage?.columns?.map((column, i) => {
                return <th scope="col">{column?.text}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {values?.map((value, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{value?.name}</td>
                  <td>{value?.last}</td>
                  <td>{value?.handle}</td>
                  <td width={140}>
                    <button className="table_btn" onClick={handleEdit}>
                      <Edit />
                    </button>
                    <button className="table_btn">
                      <Delete />{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GlobalTable;
