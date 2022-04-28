import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, XIcon } from "../../../assates/icons/Icons";
import { setValues, toggleModal } from "../../../Redux/stored_reducer";
import "./modal.scss";
import ModalInputs from "./ModalInputs";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

const GlobalModal = () => {
  let subtitle;
  const { currentPage, values } = useSelector((state) => state?.users_reducer);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  console.log(values);

  const haldleChange = (e) => {
    setData({ ...data, ...e });
  };

  function openModal() {
    dispatch(toggleModal(true));
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    dispatch(toggleModal(false));
    dispatch(setValues([...values, data]));
  }

  return (
    <div>
      <button className="btn btn1 btn-outline-primary" onClick={openModal}>
        <AddIcon /> Qo'shish
      </button>
      <Modal
        isOpen={currentPage?.isOpenModal}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="header-modal p-1">
          <h5>{currentPage?.text}</h5>
          <div
            className="header-modal_icon"
            onClick={() => dispatch(toggleModal(false))}
          >
            <XIcon />
          </div>
        </div>
        <br />
        <div className="p-3">
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
                return <ModalInputs {...input} haldleChange={haldleChange} />;
              })}
            </div>
          ))}
          <div className="mt-4 text-center ">
            <button className="btn btn-outline-secondary" onClick={closeModal}>
              Orqaga
            </button>
            <button
              className="btn btn-outline-primary mx-4"
              onClick={closeModal}
            >
              Saqlash
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GlobalModal;
