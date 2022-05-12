import Customer from "../AdminSite/page/Customer/Customer";
import Dashboard from "../AdminSite/page/Dashboard/Dashboard";
import Kategorya from "../AdminSite/page/Kategorya/Kategorya";
import Partner from "../AdminSite/page/Partner/Partner";
import Product from "../AdminSite/page/Product/Product";
import Slider from "../AdminSite/page/Slider/Slider";
import Books from "../ClientSide/Components/Books/Books";
import Furniture from "../ClientSide/Components/Furniture/Furniture";
import HeaderShop2 from "../ClientSide/Components/Header/HeaderShop2";
import NewHeader from "../ClientSide/Components/Header/NewHeader/NewHeader";
import MinaPage from "../ClientSide/Pages/MinaPage";

export const pages = [
  {
    path: "/",
    page: <MinaPage />,
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
    path: "/admin",
    page: <Dashboard />,
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
    page: <HeaderShop2 />,
  },
  {
    path: "/header_shop",
    page: <NewHeader />,
  },
];
