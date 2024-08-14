import ImageSlider from "./ImageSlider";
import image1 from "../assets/imagePV.png";
import image2 from "../assets/logoPV.png";

const Hero = () => {
  const slides = [image1, image2, image1, image2];
  return (
    <div className="w-[81vw] mt-14 mx-auto h-[75vh]">
      <ImageSlider images={slides} />
    </div>
  );
};

export default Hero;
