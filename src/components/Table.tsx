import React, { useEffect } from 'react';
import useGameStore from '../Zustand/store'; // Adjust the path as necessary

const GameTable: React.FC = () => {
  const { games, loading, error, fetchGames } = useGameStore();

  useEffect(() => {
    fetchGames(); 
  }, [fetchGames]);

  return (
    <div className="text-white">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {games.length > 0 ? (
        games.map((game) => (
          <div key={game.id} className="game-item mb-4">
            <p>ID: {game.id}</p>
            <p>Name: {game.name}</p>
            <p>Release Year: {game.releaseYear}</p>
            <p>Players: {game.players.min} - {game.players.max}</p>
            <p>Publisher: {game.publisher}</p>
            <p>Type: {game.type}</p>
            {/* <p>Expansions: {game.expansions.join(', ')}</p> */}
          </div>
        ))
      ) : (
        !loading && <p>No games available</p>
      )}
    </div>
  );
};

export default GameTable;