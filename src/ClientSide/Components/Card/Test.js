import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../utilities/icons";
import komp from "../../../assates/images/komp.jpg";

const customStyles = {
  content: {
    position: "absolute",
    inset: "50% auto auto 50%",
    border: "1px solid rgb(204, 204, 204)",
    background: "rgb(255, 255, 255)",
    overflow: "auto",
    borderRadius: "15px",
    outline: "none",
    padding: "20px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "510px",
    transition: "all 3s ease 0s",
    width: "60rem",
  },
};

const Test = (props) => {
  const [clickClount, setClickCount] = useState(0);

  const prevCarouselItem = () => {
    if (clickClount !== 0) {
      let firstCard = document.getElementsByClassName("project-card");
      if (clickClount <= firstCard.length - 3) {
        setClickCount(clickClount - 1);

        for (let i = 0; i < firstCard.length; i++) {
          console.log(firstCard[i]);
          let a = firstCard[i].style.transform.substring(
            10,
            firstCard[i].style.transform.length - 3
          );
          firstCard[i].style.transform = `translate(${+a + 339}px)`;
        }
      }
    }
  };
  const nextCarouselItem = () => {
    let firstCard = document.getElementsByClassName("project-card");
    if (clickClount < firstCard.length - 3) {
      setClickCount(clickClount + 1);
      for (let i = 0; i < firstCard.length; i++) {
        console.log(firstCard[i]);
        let a = firstCard[i].style.transform.substring(
          10,
          firstCard[i].style.transform.length - 3
        );
        firstCard[i].style.transform = `translate(${+a - 339}px)`;
      }
    }
  };
  const isActiveNextBtn = () => {
    let firstCard = document.getElementsByClassName("project-card");
    if (clickClount === 0 || clickClount < firstCard.length - 3) {
      return "projects-head__enabled-btn";
    } else {
      return "projects-head__disabled-btn";
    }
  };

  return (
    <div>
      <div className="projects-section container-fluid">
        <div className="projects-head">
          <h1 data-aos="fade-right" className="projects-head__title">
            Biz qilgan loyihalar
          </h1>
          <div data-aos="fade-left" className="projects-head__btns">
            <button
              className={
                clickClount !== 0
                  ? "projects-head__enabled-btn"
                  : "projects-head__disabled-btn"
              }
              onClick={() => prevCarouselItem()}
            >
              <ArrowLeftIcon />
            </button>
            <button
              className={isActiveNextBtn()}
              onClick={() => nextCarouselItem()}
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="/" class="card-link">
              Card link
            </a>
            <a href="/" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
