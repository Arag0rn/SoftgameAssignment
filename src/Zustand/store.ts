import axios from 'axios';
import { create } from 'zustand';
import { Game } from '../types/GameData'; // Импортируйте интерфейс Game


axios.defaults.baseURL = 'https://getboardgames-jxxjux7fua-ey.a.run.app';


const UNSPLASH_ACCESS_KEY = 'GP84ettFgJ1FFpSDsLlX-G4i_h-DhP_6pjxzYXWHr48';

interface GameState {
  games: Game[];
  filter: string; 
  loading: boolean;
  error: string | null;
}

interface GameStore extends GameState {
  fetchGames: () => Promise<void>;
  setFilter: (filter: string) => void;
}

const useGameStore = create<GameStore>((set) => ({
  games: [],
  filter: '',
  loading: false,
  error: null,

  fetchGames: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('/'); 
      const gamesWithImages = await Promise.all(response.data.map(async (game: Game) => {
        const imageUrl = await fetchImageForGame(`${game.name} boardgame`);
        return { ...game, image: imageUrl }; 
      }));
      set({ games: gamesWithImages, loading: false });
    } catch (error) {
      console.log(error);
      set({ loading: false, error: 'Failed to fetch games.' });
    }
  },

  setFilter: (filter: string) => {
    set(() => ({
      filter,
    }));

  },
}));

const fetchImageForGame = async (gameName: string) => {
    const query = `${gameName} board game box`;
    
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: query,
          per_page: 1, 
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      });
  
      if (response.data.results && response.data.results.length > 0) {
        return response.data.results[0].urls.regular; 
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  
    return 'https://example.com/default-image.jpg'; 
  };

export default useGameStore;