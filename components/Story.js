const Story = ({ img, username }) => {
  return (
    <div>
      <img
        src={img}
        alt="Profile Pic"
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition-all duration-150 ease-out"
      />
      <p className="text-sm w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
