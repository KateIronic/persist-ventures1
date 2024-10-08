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
        <NavbarItems
          name="Home"
          to="/"
        />
        <NavbarItems
          name="About Us"
          to="/"
        />
        <NavbarItems
          name="Our Team"
          to="/"
        />
        <NavbarItems
          name="Careers"
          to="/"
        />
        <NavbarItems
          name="Privacy Policy"
          to="/"
        />
        <NavbarItems
          name="Documentation"
          to="/documentation"
        />
      </div>
      <CustomButton
        text={"Get The App"}
        onClick={dummyFunction}
        className={
          "font-poppins text-sm text-white h-[41px] min-w-[126px] border-[1px] rounded-3xl bg-[#808080]"
        }
      />
    </div>
  );
};
const dummyFunction = () => {
  console.log("dummy function");
};

export default Navbar;
