import React from "react";
import { useSelector } from "react-redux";
import "./table.scss";

function GlobalTable() {
  const { currentPage, values } = useSelector((state) => state?.users_reducer);

  return (
    <>
      <div className="table-wrapper">
        <table className="table table-bordered " id="table">
          <thead>
            <tr>
              {currentPage?.columns?.map((column, i) => {
                return (
                  <th scope="col" style={{ width: column?.width }}>
                    {column?.text}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {/* {values?.map((value, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{value?.name}</td>
                  <td>{value?.last}</td>
                  <td width={140}>
                    <a
                      class="btn btn-light"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
                    >
                      <Edit />
                    </a>
                    <a className="btn btn-light mx-2">
                      <Delete />{" "}
                    </a>
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GlobalTable;
