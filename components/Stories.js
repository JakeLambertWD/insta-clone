import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "../components/Story";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Generate fake user data
    const fakeData = [...Array(20)].map((_, i) => ({
      avatar: `https://i.pravatar.cc/150?img=${faker.datatype.number({
        min: 1,
        max: 70,
      })}`,
      username: faker.internet.userName(),
      id: i,
    }));

    setSuggestions(fakeData);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 overflow-x-scroll rounded-sm scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
