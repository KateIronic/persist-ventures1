import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-[1052px] h-[461.94px] bg-[#282929] flex flex-col items-center justify-center text-center rounded-3xl gap-16 my-36 mx-auto">
      <div className="text-5xl text-white font-semibold leading-[72px]">
        Master your data, seize your life, shape your future with{" "}
        <span className="text-[#A600FC]">OvaDrive</span>
      </div>
      <button className="text-base font-medium bg-white rounded-3xl w-[184px] h-[53px] flex justify-center items-center leading-6">
        Try OvaDrive
        <MdArrowOutward
          size={24}
          className="ml-2"
        />
      </button>
    </footer>
  );
};

export default Footer;
