import React from "react";
import Card from "../Components/Card/Card";
import FilterData from "../Components/FilterData/FilterData";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Header/Header1";

function MinaPage() {
  return (
    <>
      <Header1 />
      <FilterData />
      <Card />
      <Footer />
    </>
  );
}

export default MinaPage;
