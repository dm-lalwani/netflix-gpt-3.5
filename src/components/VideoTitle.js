const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="
        absolute top-0 left-0 w-full h-full
        flex flex-col justify-center
        px-2 md:px-12
        text-white
        bg-gradient-to-r from-black/70 via-black/40 to-transparent
        mt-10 md:mt-[64px]
      "
    >
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:block py-4 text-lg max-w-md">{overview}</p>
      <div className="flex gap-4 mt-4">
        <button className="bg-white text-black px-3 md:px-6 py-1 md:py-2 text-lg rounded-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500/70 text-white px-6 py-2 text-lg rounded-md hover:bg-gray-500 hidden md:block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
