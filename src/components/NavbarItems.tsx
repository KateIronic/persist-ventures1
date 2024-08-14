import React from "react";
interface NavBarProps {
  name: string;
}
const NavbarItems: React.FC<NavBarProps> = ({ name }) => {
  return <div className="text-white font-poppins font-normal text-sm">{name}</div>;
};

export default NavbarItems;
