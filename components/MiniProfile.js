const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="/IMG_8939.jpg"
        alt=""
        className="rounded-full border p-[2px] w-16 h-16"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">Jake Lambert</h2>
        <h3 className="text-sm text-gray-400">This is a Next.js application</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
