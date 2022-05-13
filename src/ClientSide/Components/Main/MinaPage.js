import React from "react";
import CardShop from "../Card Shop/CardShop";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../Header/headerShop.scss";

function MinaPage() {
  return (
    <>
      {/* <Header1 /> */}
      <Header />
      <div className="site-background_img">
        <div className="header-main">
          <div className="container">
            <div className="site-content">
              <div>
                <h2>Cinturato</h2>
                <p>
                  CINTURATO WHEELS shinalariniSG959 promokodi orqali 50%chegirma
                  bilan harid qiling!
                </p>
                <button className="btn btn-secondary">Batafsil</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Reference /> */}
      {/* <FilterData /> */}
      <CardShop />
      {/* <Card /> */}
      <Footer />
    </>
  );
}

export default MinaPage;
