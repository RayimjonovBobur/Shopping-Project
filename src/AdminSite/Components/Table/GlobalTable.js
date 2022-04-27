import React from "react";
import { useSelector } from "react-redux";
import { Delete, Edit } from "../../../assates/icons/Icons";
import "./table.scss";

function GlobalTable() {
  const { curretPage } = useSelector((state) => state?.users_reducer);
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            {curretPage?.columns?.map((column, i) => {
              return <th scope="col">{column?.text}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td width={140}>
              <button className="table_btn">
                <Delete />{" "}
              </button>
              <button className="table_btn">
                <Edit />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td width={140}>
              <button className="table_btn">
                <Delete />{" "}
              </button>
              <button className="table_btn">
                <Edit />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td width={140}>
              <button className="table_btn">
                <Delete />{" "}
              </button>
              <button className="table_btn">
                <Edit />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default GlobalTable;
