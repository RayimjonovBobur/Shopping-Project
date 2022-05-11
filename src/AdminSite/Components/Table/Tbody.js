import React from "react";
import { useSelector } from "react-redux";
import { Delete, Edit } from "../../../assates/icons/Icons";

function Tbody() {
  const { values } = useSelector((state) => state?.users_reducer);

  return (
    <>
      <tbody>
        {values.lenght == 0 ? (
          <>...loading</>
        ) : (
          values?.map((value, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{value?.name}</td>
                <td>{value?.age}</td>
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
          })
        )}
      </tbody>
    </>
  );
}

export default Tbody;
