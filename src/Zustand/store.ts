
import axios from 'axios';
import { create } from 'zustand';
import { Game } from '../types/GameData'; // Import the Game interface

// Set the base URL for Axios
axios.defaults.baseURL = 'https://getboardgames-jxxjux7fua-ey.a.run.app';

interface GameState {
  games: Game[]; 
  loading: boolean; 
  error: string | null;
}

interface GameStore extends GameState {
  fetchGames: () => Promise<void>; 
}

const useGameStore = create<GameStore>((set) => ({
  games: [],
  loading: false,
  error: null,

  fetchGames: async () => {
    set({ loading: true, error: null }); 
    try {
      const response = await axios.get('/'); 
      set({ games: response.data, loading: false }); 
    } catch (error) {
        console.log(error);
      set({ loading: false, error: 'Failed to fetch games.' }); 
    }
  },
}));

export default useGameStore;