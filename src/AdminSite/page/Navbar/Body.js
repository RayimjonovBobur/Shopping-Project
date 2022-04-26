import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
// import { AllPages } from "../../grouping/grouping";
// import PageController from "../../../pageController/PageController";

function Body() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div>
      {/* <Routes>
        {AllPages?.map((item, i) => {
          //   item?.path === pathname && dispatch(setcurrentPage(item));
          return (
            <Route
              path={item?.path}
              key={i}
              element={<PageController page={item} key={i} />}
            />
          );
        })}
      </Routes> */}
    </div>
  );
}

export default Body;
