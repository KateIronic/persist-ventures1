import MainItems from "./MainItems";

const Main = () => {
  const mainItemsData = [
    {
      title: [
        { text: "What " },
        { text: "Steve Jobs", highlight: true },
        { text: " Thought" },
      ],
      description:
        "In 1983, Steve Jobs envisioned a future where technology could virtualize human consciousness, making it immortal. Though this dream remains unrealized, it continues to inspire. What does it mean to be immortal? Is it to never die, or to live on through the memories we leave behind? At OvaDrive, we explore this question by pushing the boundaries of technology and imagination. Our mission is to preserve and interact with human consciousness, creating a world where the line between life and legacy blurs, and the dream of immortality comes closer to reality.",
    },
    {
      title: [
        { text: "The " },
        { text: "Vision", highlight: true },
        { text: " Behind OvaDrive" },
      ],
      description:
        "Imagine having a Personal Documentarian—a digital companion that lives your life alongside you, fully under your control. It listens to what you hear, watches what you see, and captures the essence of your experiences. Now, imagine integrating this with a finely tuned Large Language Model, tailored to the unique context of Your World. This isn't just about evolving Artificial General Intelligence; it's about creating an Artificial Soul, a digital entity that understands and resonates with the depth of your existence, far beyond what current digital assistants can offer.",
    },
    {
      title: [
        { text: "The " },
        { text: "Future", highlight: true },
        { text: " Of OvaDrive" },
      ],
      description:
        "Our journey begins with a mobile app that captures notes from your surroundings, but this is just the beginning. OvaDrive will evolve to include watches, rings, bracelets, necklaces, glasses, holograms, and even the metaverse. This isn't just about achieving immortality; it's about preserving and deeply understanding the essence of human experience. By expanding into these new realms, OvaDrive will open up unprecedented frontiers in psychology, history, and our understanding of consciousness itself.",
    },
  ];

  return (
    <div>
      <div className="space-y-10 font-poppins mx-[9%]">
        {mainItemsData.map((item, index) => (
          <MainItems
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="text-5xl font-semibold leading-[72px] font-poppins text-white text-center mx-auto w-[65%] mt-48">
        OvaDrive isn't just about saving your chats, Its the beginning to make
        your <span className="text-[#A600FC]">Soul Immortal</span>
      </div>
    </div>
  );
};

export default Main;
