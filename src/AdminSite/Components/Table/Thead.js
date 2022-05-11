import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Thead() {
  const { currentPage, values } = useSelector((state) => state?.users_reducer);
  return (
    <>
      <thead className="table-fixed">
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
    </>
  );
}

export default Thead;
