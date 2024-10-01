import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}


interface DrinksStore {
  drinks: Drink[];
  loading: boolean;
  error: Error | null;
  fetchDrinks: (url: string) => void;
}


export const useDrinksStore = create<DrinksStore>()(
  devtools(
    persist(
      (set) => ({
        drinks: [],
        loading: false,
        error: null,
        fetchDrinks: async (url: string) => {
          set({ loading: true, error: null });
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            set({ drinks: data.drinks as Drink[], loading: false });
          } catch (error) {
            set({ error: error as Error, loading: false });
          }
        },
      }),
      {
        name: 'drinks',
      }
    )
  )
);
