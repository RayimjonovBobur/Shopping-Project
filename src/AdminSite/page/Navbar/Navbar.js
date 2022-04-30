import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { LogoAdmin, Seacrch } from "../../../assates/icons/Icons";
import adminLogo from "../../../assates/images/Ellipse3.png";
import { setCurrenPage } from "../../../Redux/stored_reducer";
import "../unversal.scss";
import { AllPages } from "../../grouping/grouping";
import SeacrchIcon from "../../Components/searchIcon/SeacrchIcon";
import { useState } from "react";

export const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      <div className="navbar-top ">
        <div className="navbar_content">
          <div>
            <LogoAdmin />
          </div>
          <div className="navbar_search">
            <input type="text" placeholder={"Search..."} />
            {<Seacrch />}
          </div>
          <div className="navbar_admin">
            <img src={adminLogo} alt="" />
            <h6>Admin</h6>
          </div>
        </div>
        <div className="navbar_left ">
          {AllPages?.map((page, i) => {
            page?.path === pathname && dispatch(setCurrenPage(page));
            return (
              <Link
                to={page.path}
                className={`nav-link ${pathname === page.path ? "active" : ""}`}
              >
                <span className="me-1 seact_icon">
                  <SeacrchIcon icon={page?.icon} />
                </span>
                <span>{page.text}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
