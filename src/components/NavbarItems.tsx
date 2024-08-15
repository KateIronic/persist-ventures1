import React from "react";
import { Link } from "react-router-dom";
interface NavBarProps {
  name: string;
  to: string;
}
const NavbarItems: React.FC<NavBarProps> = ({ name, to }) => {
  return (
    <Link
      className="text-white font-poppins font-normal text-sm"
      to={to}>
      {name}
    </Link>
  );
};

export default NavbarItems;
