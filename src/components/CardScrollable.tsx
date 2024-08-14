import Card from "./Card";

interface CardScrollableProps {
  title: string;
}

const CardScrollable: React.FC<CardScrollableProps> = ({ title }) => {
  return (
    <div className="ml-[9%]">
      <div className="text-4xl text-white font-medium leading-[48px] mt-36">
        {title}
      </div>
      <div className="flex gap-[20px] overflow-x-visible overflow-y-visible mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardScrollable;
