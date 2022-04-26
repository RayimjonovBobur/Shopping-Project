import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logo } from "../../../assates/icons/Icons";
import { setAdminActive } from "../../../Redux/stored_reducer";
import "./navbar.scss";
import { NavTamplate } from "./NavTamplate";

export const Navbar = () => {
  const { adminActive } = useSelector((state) => state?.users_reducer);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    dispatch(setAdminActive(i));
  };
  return (
    <nav class="main navbar-expand-lg navbar-light bg-light">
      <div class="mt-3">
        <a class="navbar-brand" href="#">
          <Logo />
        </a>
        <div class="mt-2">
          <div class="navbar_item">
            {NavTamplate?.map((page, i) => (
              <Link
                to={page.path}
                className={`nav-link ${adminActive === i ? "active" : ""}`}
                onClick={() => handleClick(i)}
              >
                {page.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
