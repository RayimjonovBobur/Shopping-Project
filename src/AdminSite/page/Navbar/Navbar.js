import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Logo, Seacrch } from "../../../assates/icons/Icons";
import adminLogo from "../../../assates/images/Ellipse3.png";
import { setActive, setCurrenPage } from "../../../Redux/stored_reducer";
import "../unversal.scss";
import { AllPages } from "../../grouping/grouping";

export const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  return (
    <>
      <nav class="main navbar-expand-lg navbar-background">
        <div class="pt-4">
          <a class="navbar-brand p-4" href="#">
            <Logo />
          </a>
          <div class="mt-4 ">
            <div class="navbar_nav">
              {AllPages?.map((page, i) => {
                page?.path === pathname && dispatch(setCurrenPage(page));
                return (
                  <Link
                    to={page.path}
                    className={`nav-link ${
                      pathname === page.path ? "active" : ""
                    }`}
                  >
                    {page.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar-top">
        <div className="navbar_content">
          <div className="navbar_search">
            <input
              type="text"
              className="form-control"
              placeholder={"Search..."}
            />
            <button>{<Seacrch />}</button>
          </div>
          <div className="navbar_admin">
            <img src={adminLogo} alt="" />
            <h6>Admin</h6>
          </div>
        </div>
      </div>
    </>
  );
};
