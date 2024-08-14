import React from "react";
import NavbarItems from "./NavbarItems";
import CustomButton from "./CustomButton";
import image from "../assets/logoPV.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around">
      <div className="h-[46px] w-[46px] rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center gap-9">
        {" "}
        <NavbarItems name="Home" />
        <NavbarItems name="About Us" />
        <NavbarItems name="Our Team" />
        <NavbarItems name="Careers" />
        <NavbarItems name="Privacy Policy" />
        <NavbarItems name="Documentation" />
      </div>
      <CustomButton
        text={"Get The App"}
        onClick={dummyFunction}
        className={
          "font-poppins text-sm text-white h-[41px] min-w-[126px] border-[1px] rounded-3xl"
        }
      />
    </div>
  );
};
const dummyFunction = () => {
  console.log("dummy function");
};

export default Navbar;
