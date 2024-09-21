import { useEffect, useState } from "react";
import useGameStore from "../Zustand/store";
import { Game } from "../types/GameData";
import {
  BsEmojiGrin,
  BsEmojiHeartEyes,
  BsEmojiLaughing,
  BsEmojiWink,
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
  BsSortNumericDown,
  BsSortNumericDownAlt,
} from "react-icons/bs";

const GameTable = () => {
  const { games, loading, error, fetchGames, filter, setFilter } =
    useGameStore();
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredGames, setFilteredGames] = useState(games);

  const emojiIcons = [<BsEmojiGrin />, <BsEmojiHeartEyes />, <BsEmojiLaughing />, <BsEmojiWink />];

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  useEffect(() => {
    if (filter.length > 2) {
      const currentFilter = filter.toLowerCase();

      const filteredGamesByName = games.filter(
        (game) =>
          game.name?.toLowerCase().includes(currentFilter) ||
          game.publisher?.toLowerCase().includes(currentFilter)
      );

      setFilteredGames(filteredGamesByName);
      console.log(filteredGamesByName);
    } else {
      setFilteredGames(games);
    }
  }, [filter, games]);

  const handleSort = (field: keyof Game) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);

    const sortedGames = [...filteredGames].sort((a, b) => {
      if (order === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });

    setFilteredGames(sortedGames);
  };

  return (
    <div className="text-white p-10">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        placeholder="Search games..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2  text-black outline-[#18910d] bg-[#d7eed5] "
      />

      {filteredGames.length > 0 ? (
        <div className="min-w-full rounded-[8px] border-[1px] border-#E4E4EF text-black ">
          <ul className="flex w-[100%]">
            <li
              onClick={() => handleSort("name")}
              className="px-4 py-2 cursor-pointer h-[50px] flex justify-between items-center w-[100%] font-extrabold"
            >
              <span>Name</span>
              {sortField === "name" && sortOrder === "asc" ? (
                <BsSortAlphaDown size={30} />
              ) : sortField === "name" && sortOrder === "desc" ? (
                <BsSortAlphaDownAlt size={30} />
              ) : (
                <BsSortAlphaDown size={30} />
              )}
            </li>
            <li
              onClick={() => handleSort("releaseYear")}
              className="px-4 py-2 cursor-pointer h-[50px] flex justify-between items-center w-[100%] font-extrabold"
            >
              <span>Release Year</span>
              {sortField === "releaseYear" && sortOrder === "asc" ? (
                <BsSortNumericDown size={30} />
              ) : sortField === "releaseYear" && sortOrder === "desc" ? (
                <BsSortNumericDownAlt size={30} />
              ) : (
                <BsSortNumericDown size={30} />
              )}
            </li>
            <li
              onClick={() => handleSort("players")}
              className="px-4 py-2 cursor-pointer h-[50px] flex justify-between items-center w-[100%] font-extrabold"
            >
              <span>Players</span>
              {sortField === "players" && sortOrder === "asc" ? (
                <BsSortNumericDown size={30} />
              ) : sortField === "players" && sortOrder === "desc" ? (
                <BsSortNumericDownAlt size={30} />
              ) : (
                <BsSortNumericDown size={30} />
              )}
            </li>
            <li
              onClick={() => handleSort("publisher")}
              className="px-4 py-2 cursor-pointer h-[50px] flex justify-between items-centerl w-[100%] font-extrabold"
            >
              <span>Publisher</span>
              {sortField === "publisher" && sortOrder === "asc" ? (
                <BsSortAlphaDown size={30} />
              ) : sortField === "publisher" && sortOrder === "desc" ? (
                <BsSortAlphaDownAlt size={30} />
              ) : (
                <BsSortAlphaDown size={30} />
              )}
            </li>
            <li
              onClick={() => handleSort("type")}
              className="px-4 py-2 cursor-pointer h-[50px] flex justify-between items-center w-[100%] font-extrabold"
            >
              <span>Type</span>
              {sortField === "type" && sortOrder === "asc" ? (
                <BsSortAlphaDown size={30} />
              ) : sortField === "type" && sortOrder === "desc" ? (
                <BsSortAlphaDownAlt size={30} />
              ) : (
                <BsSortAlphaDown size={30} />
              )}
            </li>
          </ul>

          <ul className="w-full">
  {filteredGames.map((game, index) => (
    <li
      key={game.id}
      className={`flex ${index % 2 === 0 ? "bg-[#d7eed5]" : "bg-white"} rounded-[8px] mb-2`}
    >
      <span className="px-4 py-2 h-[50px] flex justify-between items-center w-[100%] rounded-[8px] border-[1px] border-gray-300">
        {game.name || "no data"}
        {/* Render a random emoji icon */}
        <div className="ml-2">
          {emojiIcons[Math.floor(Math.random() * emojiIcons.length)]}
        </div>
      </span>
      <span className="px-4 py-2 h-[50px] w-[100%] rounded-[8px] border-[1px] border-gray-300">
        {game.releaseYear || "no data"}
      </span>
      <span className="px-4 py-2 h-[50px] w-[100%] rounded-[8px] border-[1px] border-gray-300">
        {game.players.min || "no data"} - {game.players.max || "no data"}
      </span>
      <span className="px-4 py-2 h-[50px] w-[100%] rounded-[8px] border-[1px] border-gray-300">
        {game.publisher || "no data"}
      </span>
      <span className="px-4 py-2  h-[50px] w-[100%] rounded-[8px] border-[1px] border-gray-300">
        {game.type || "no data"}
      </span>
    </li>
  ))}
</ul>
        </div>
      ) : (
        !loading && <p>No games available</p>
      )}
    </div>
  );
};

export default GameTable;
