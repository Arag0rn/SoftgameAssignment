import axios from 'axios';
import { create } from 'zustand';
import { Game } from '../types/GameData'; 

axios.defaults.baseURL = 'https://getboardgames-jxxjux7fua-ey.a.run.app/';

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
      set({ games: response.data, loading: false }); 
    } catch (error) {
      set({ loading: false, error: `${error}Failed to fetch games.` }); 
    }
  },

  setFilter: (filter: string) => {
    set(() => ({
      filter,
    }));

  },
}));


export default useGameStore;