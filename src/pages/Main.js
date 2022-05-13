import Customer from "../AdminSite/page/Customer/Customer";
import Dashboard from "../AdminSite/page/Dashboard/Dashboard";
import Kategorya from "../AdminSite/page/Kategorya/Kategorya";
import Partner from "../AdminSite/page/Partner/Partner";
import Product from "../AdminSite/page/Product/Product";
import Slider from "../AdminSite/page/Slider/Slider";
import Furniture from "../ClientSide/Components/Furniture/Furniture";
import MinaPage from "../ClientSide/Components/Main/MinaPage";
import ProductsBasket from "../ClientSide/Components/ProductsBasket/ProductsBasket";
import TirePage from "../ClientSide/Components/TirePage/TirePage";

export const pages = [
  {
    path: "/",
    page: <MinaPage />,
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
    path: "/header_shop",
    page: <TirePage />,
  },
  {
    path: "/products_basket",
    page: <ProductsBasket />,
  },
];
