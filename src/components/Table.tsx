import { useEffect, useState } from 'react';
import useGameStore from '../Zustand/store'; 
import { Game } from '../types/GameData';

const GameTable = () => {
  const { games, loading, error, fetchGames, filter, setFilter } = useGameStore();
  const [sortField, setSortField] = useState(''); 
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [filteredGames, setFilteredGames] = useState(games); 



  useEffect(() => {
    fetchGames();
  }, [fetchGames]);


  useEffect(() => {
    if (filter.length > 2) { 
      const currentFilter = filter.toLowerCase();
  
      const filteredGamesByName = games.filter((game) =>
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
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  
    const sortedGames = [...filteredGames].sort((a, b) => {
      if (order === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
  
    setFilteredGames(sortedGames);
  };

  return (
    <div className="text-white">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search games..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)} 
        className="mb-4 p-2 rounded text-black"
      />
      
      {filteredGames.length > 0 ? (
        <table className="min-w-full border-collapse border border-gray-800">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')} className="border px-4 py-2 cursor-pointer">Name</th>
              <th onClick={() => handleSort('releaseYear')} className="border px-4 py-2 cursor-pointer">Release Year</th>
              <th onClick={() => handleSort('players')} className="border px-4 py-2 cursor-pointer">Players</th>
              <th onClick={() => handleSort('publisher')} className="border px-4 py-2 cursor-pointer">Publisher</th>
              <th onClick={() => handleSort('type')} className="border px-4 py-2 cursor-pointer">Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredGames.map((game) => (
              <tr key={game.id}>
                <td className="border px-4 py-2">{game.id}</td>
                <td className="border px-4 py-2">{game.name}</td>
                <td className="border px-4 py-2">{game.releaseYear}</td>
                <td className="border px-4 py-2">{game.players.min} - {game.players.max}</td>
                <td className="border px-4 py-2">{game.publisher}</td>
                <td className="border px-4 py-2">{game.type}</td>
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