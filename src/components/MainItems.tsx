import React from "react";

interface TitleSegment {
  text: string;
  highlight?: boolean;
}

interface MainItemsProps {
  title: TitleSegment[];
  description: string;
}

const MainItems: React.FC<MainItemsProps> = ({ title, description }) => {
  return (
    <div className="text-white">
      <h1 className="text-5xl leading-[72px] font-semibold mt-48">
        {title.map((segment, index) => (
          <span
            key={index}
            className={segment.highlight ? "text-[#A600FC]" : ""}>
            {segment.text}
          </span>
        ))}
      </h1>
      <p className="text-xl font-normal my-14">{description}</p>
    </div>
  );
};

export default MainItems;
