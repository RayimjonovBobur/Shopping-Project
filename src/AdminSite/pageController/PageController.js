import React from "react";
import Category from "../AdminSite/page/Category/Category";
import Main from "../AdminSite/page/Main/Main";
import { CATEGORY_PAGE, MAIN_PAGE } from "../Pages/ProgrammesPage/PageType";

const PageController = ({ page }) => {
  switch (page?.type) {
    case MAIN_PAGE:
      return <Main />;
    case CATEGORY_PAGE:
      return <Category />;
    default: {
      return <div>404</div>;
    }
  }
};

export default PageController;
