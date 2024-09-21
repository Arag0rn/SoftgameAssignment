import { useEffect, useState } from "react";
import useGameStore from "../Zustand/store";
import { Game } from "../types/GameData";
import {
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
        className="mb-4 p-2 rounded text-black"
      />

      {filteredGames.length > 0 ? (
   <table className="min-w-full table-auto border-collapse border border-gray-800">

  <thead>
    <tr>
      <th
        onClick={() => handleSort("name")}
        className="border px-4 py-2 cursor-pointer h-[100px] text-left"
      >
        <div className="flex justify-between items-center">
          <span>Name</span>
          {sortField === "name" && sortOrder === "asc" ? (
            <BsSortAlphaDown size={30} />
          ) : sortField === "name" && sortOrder === "desc" ? (
            <BsSortAlphaDownAlt size={30} />
          ) : (
            <BsSortAlphaDown size={30} />
          )}
        </div>
      </th>
      <th
        onClick={() => handleSort("releaseYear")}
        className="border px-4 py-2 cursor-pointer h-[100px] text-left"
      >
        <div className="flex justify-between items-center">
          <span>Release Year</span>
          {sortField === "releaseYear" && sortOrder === "asc" ? (
            <BsSortNumericDown size={30} />
          ) : sortField === "releaseYear" && sortOrder === "desc" ? (
            <BsSortNumericDownAlt size={30} />
          ) : (
            <BsSortNumericDown size={30} />
          )}
        </div>
      </th>
      <th
        onClick={() => handleSort("players")}
        className="border px-4 py-2 cursor-pointer h-[100px] text-left"
      >
        <div className="flex justify-between items-center">
          <span>Players</span>
          {sortField === "players" && sortOrder === "asc" ? (
            <BsSortNumericDown size={30} />
          ) : sortField === "players" && sortOrder === "desc" ? (
            <BsSortNumericDownAlt size={30} />
          ) : (
            <BsSortNumericDown size={30} />
          )}
        </div>
      </th>
      <th
        onClick={() => handleSort("publisher")}
        className="border px-4 py-2 cursor-pointer h-[100px] text-left"
      >
        <div className="flex justify-between items-center">
          <span>Publisher</span>
          {sortField === "publisher" && sortOrder === "asc" ? (
            <BsSortAlphaDown size={30} />
          ) : sortField === "publisher" && sortOrder === "desc" ? (
            <BsSortAlphaDownAlt size={30} />
          ) : (
            <BsSortAlphaDown size={30} />
          )}
        </div>
      </th>
      <th
        onClick={() => handleSort("type")}
        className="border px-4 py-2 cursor-pointer h-[100px] text-left"
      >
        <div className="flex justify-between items-center">
          <span>Type</span>
          {sortField === "type" && sortOrder === "asc" ? (
            <BsSortAlphaDown size={30} />
          ) : sortField === "type" && sortOrder === "desc" ? (
            <BsSortAlphaDownAlt size={30} />
          ) : (
            <BsSortAlphaDown size={30} />
          )}
          
        </div>
      </th>
    </tr>
  </thead>
          <tbody>
            {filteredGames.map((game) => (
              <tr key={game.id}>
                <td className="border px-4 py-2">{game.name || "no data"}</td>
                <td className="border px-4 py-2">
                  {game.releaseYear || "no data"}
                </td>
                <td className="border px-4 py-2">
                  {game.players.min || "no data"} -{" "}
                  {game.players.max || "no data"}
                </td>
                <td className="border px-4 py-2">
                  {game.publisher || "no data"}
                </td>
                <td className="border px-4 py-2">{game.type || "no data"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No games available</p>
      )}
    </div>
  );
};

export default GameTable;
