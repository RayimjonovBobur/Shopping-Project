import Customer from "../AdminSite/page/Customer/Customer";
import Doshboard from "../AdminSite/page/Doshboard/Doshboard";
import Kategorya from "../AdminSite/page/Kategorya/Kategorya";
import Partner from "../AdminSite/page/Partner/Partner";
import Product from "../AdminSite/page/Product/Product";
import Slider from "../AdminSite/page/Slider/Slider";
import AirConditioners from "../ClientSide/Components/AirConditioners/AirConditioners";
import Books from "../ClientSide/Components/Books/Books";
import Discounts from "../ClientSide/Components/Discounts/Discounts";
import Furniture from "../ClientSide/Components/Furniture/Furniture";
import Header1 from "../ClientSide/Components/Header/Header1";
import Newcomers from "../ClientSide/Components/Newcomers/Newcomers";
import News from "../ClientSide/Components/News/News";
import PayInInstallments from "../ClientSide/Components/Payininstallments/PayInInstallments";
import PhoneGadgets from "../ClientSide/Components/PhonesandGadgets/PhoneGadgets";
import MinaPage from "../ClientSide/Pages/MinaPage";

export const pages = [
  {
    path: "/",
    page: <MinaPage />,
  },
  {
    path: "/news",
    page: <News />,
  },
  {
    path: "/newcomers",
    page: <Newcomers />,
  },
  {
    path: "/discounts",
    page: <Discounts />,
  },
  {
    path: "/payininstallments",
    page: <PayInInstallments />,
  },
  {
    path: "/books",
    page: <Books />,
  },
  {
    path: "/furniture",
    page: <Furniture />,
  },
  {
    path: "/phone",
    page: <PhoneGadgets />,
  },
  {
    path: "/airconditioners",
    page: <AirConditioners />,
  },
  {
    path: "/admin",
    page: <Doshboard />,
  },
  {
    path: "/admin/category",
    page: <Kategorya />,
  },
  {
    path: "/admin/product",
    page: <Product />,
  },
  {
    path: "/admin/slider",
    page: <Slider />,
  },
  {
    path: "/admin/partner",
    page: <Partner />,
  },
  {
    path: "/admin/customer",
    page: <Customer />,
  },
  {
    path: "/header",
    page: <Header1 />,
  },
];
