// import { headerMenu } from "../../grouping/grouping";
import { Link } from "react-router-dom";
import { Logo } from "../../../assates/icons/Icons";
import "./navbar.scss";
import { useState } from "react";
import AccountPNG from "../../../assates/images/Ellipse 3.png";

export const Navbar = () => {
  const [active, setActive] = useState(0);
  const handleChange = (e) => {
    setActive(e);
  };

  const handleLog_out = () => {
    // DELETE(`/logout-user/${user?.id}`).then((res) => {
    //   if (res) {
    //     // toast.success(res.data.message);
    //   }
    // });
    // localStorage.clear();
    // dispatch(setUser(null));
  };
  return (
    <div className={"header"}>
      <div className={"header-logo"}>
        <Logo />
      </div>
      <div className={"header-nav_link"}>
        {/* {headerMenu?.map((page, i) => {
          return (
            <Link
              key={i}
              to={page?.path}
              className={`menu__link ${active === i ? "active_link" : ""}`}
              onClick={() => handleChange(i)}
            >
              <span>{page?.text}</span>
            </Link>
          );
        })} */}
      </div>
      <div className="header__user-profile">
        <div
          placement="bottomRight"
          title={
            <div style={{ textAlign: "center" }}>
              <img
                className="user-profile-image"
                src={AccountPNG}
                alt="Foydalanuvchi rasmi"
              />
              <h3>Boburbek</h3>
            </div>
          }
          trigger="click"
        >
          <img
            className="user-profile-image"
            src={AccountPNG}
            alt="Foydalanuvchi rasmi"
          />
        </div>
      </div>
    </div>
  );
};
