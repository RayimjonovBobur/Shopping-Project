import React from "react";
import Footer from "../../ClientSide/Components/Footer/Footer";
import Header from "../../ClientSide/Components/Header/Header";
import {
  Building,
  Clock,
  LocationIcon,
} from "../../ClientSide/utilities/icons";
import "./Offices.scss";

const Offices = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="offices-container m-sm-4">
          <h3 className="offices-title mb-4">
            <span className="fw-bold">Bizning</span> ofislarimiz
          </h3>
          <div className="offices-content">
            <table class="table">
              <thead className="table-head">
                <tr>
                  <th scope="col" style={{ borderTopLeftRadius: "15px" }}>
                    <span className="">
                      <Building />
                    </span>
                    Filiallar
                  </th>
                  <th scope="col">
                    <span className="">
                      <LocationIcon />
                    </span>{" "}
                    Lokatsiya
                  </th>
                  <th scope="col" style={{ borderTopRightRadius: "15px" }}>
                    <span className="">
                      <Clock />
                    </span>{" "}
                    Ish vaqti
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Filial nomi:</td>
                  <td>Locatsiya</td>
                  <td>Ish vaqti</td>
                </tr>
                <tr>
                  <td scope="row">Filial nomi:</td>
                  <td>Locatsiya</td>
                  <td>Ish vaqti</td>
                </tr>
                <tr>
                  <td scope="row">Filial nomi:</td>
                  <td>Locatsiya</td>
                  <td>Ish vaqti</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Offices;
