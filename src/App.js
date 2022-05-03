import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import News from "./ClientSide/Components/News/News";
import MinaPage from "./ClientSide/Pages/MinaPage";
import Newcomers from "./ClientSide/Components/Newcomers/Newcomers";
import Discounts from "./ClientSide/Components/Discounts/Discounts";
import PayInInstallments from "./ClientSide/Components/Payininstallments/PayInInstallments";
import Books from "./ClientSide/Components/Books/Books";
import Furniture from "./ClientSide/Components/Furniture/Furniture";
import PhoneGadgets from "./ClientSide/Components/PhonesandGadgets/PhoneGadgets";
import AirConditioners from "./ClientSide/Components/AirConditioners/AirConditioners";
import Doshboard from "./AdminSite/page/Doshboard/Doshboard";
import Kategorya from "./AdminSite/page/Kategorya/Kategorya";
import Product from "./AdminSite/page/Product/Product";
import Slider from "./AdminSite/page/Slider/Slider";
import Partner from "./AdminSite/page/Partner/Partner";
import Customer from "./AdminSite/page/Customer/Customer";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MinaPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/newcomers" element={<Newcomers />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/payininstallments" element={<PayInInstallments />} />
        <Route path="/books" element={<Books />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/phone" element={<PhoneGadgets />} />
        <Route path="/airconditioners" element={<AirConditioners />} />
        <Route path="/admin" element={<Doshboard />} />
        <Route path="/admin/category" element={<Kategorya />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/slider" element={<Slider />} />
        <Route path="/admin/partner" element={<Partner />} />
        <Route path="/admin/customer" element={<Customer />} />
      </Routes>
    </div>
  );
}

export default App;
