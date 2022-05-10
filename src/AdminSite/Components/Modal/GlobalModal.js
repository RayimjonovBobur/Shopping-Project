import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XIcon } from "../../../assates/icons/Icons";
import { setValues } from "../../../Redux/stored_reducer";
import ModalInputs from "./ModalInputs";
import "./modal.scss"

function GlobalModal() {
  const { currentPage, values } = useSelector((state) => state?.users_reducer);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [item, setItem] = useState(false);

  const haldleChange = (e) => {
    setData({ ...data, ...e });
    if (e === "") {
      setItem(false);
    } else {
      setItem(true);
    }
    if (e) {
      dispatch(setValues({ ...values, ...e }));
    }
  };
  const handleSubmit = () => {
    if (item) {
      dispatch(setValues([...values, data]));
    }
    setItem(false);
  };
  return (
    <div className="admin_modal">
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style={{ width: currentPage?.modal?.width }}
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                {currentPage?.text}
              </h5>

              <div
                className="header-modal_icon "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <XIcon />
              </div>
            </div>
            <div class="modal-body">
              {currentPage?.form?.map((form) => (
                <div
                  key={form?.grid}
                  style={{
                    display: "grid",
                    gridTemplateColumns: form.grid?.columns,
                    gridAutoRows: form.grid?.rows,
                    gap: "12px",
                  }}
                >
                  {form?.inputs?.map((input) => {
                    return (
                      <>
                        <ModalInputs {...input} haldleChange={haldleChange} />
                      </>
                    );
                  })}
                </div>
              ))}
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-outline-secondary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Orqaga
              </button>
              <button
                class="btn btn-primary save"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle={item ? "modal" : ""}
                onClick={handleSubmit}
                style={{ padding: "5px 50px" }}
              >
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        class="btn btn-success"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Qo'shish
      </a>
    </div>
  );
}

export default GlobalModal;
