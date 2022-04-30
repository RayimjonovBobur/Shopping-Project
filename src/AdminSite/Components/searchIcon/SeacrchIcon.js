import React from "react";
import {
  HomeIcon,
  ListIcon,
  UserIcon,
  PartnerIcon,
} from "../../../assates/icons/Icons";

function SeacrchIcon({ icon }) {
  switch (icon) {
    case "HomeIcon":
      return <HomeIcon />;
    case "ListIcon":
      return <ListIcon />;
    case "UserIcon":
      return <UserIcon />;
    case "PartnerIcon":
      return <PartnerIcon />;
    default:
      return null;
  }
}

export default SeacrchIcon;
