import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const drinksStore = (set) => ({

    drinks: [],
    loading: false,
    error: null,
    fetchDrinks: async (url) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const { drinks } = await response.json();
            set({ drinks: drinks, loading: false });
        } catch (error) {
            set({ error, loading: false });
        }
    },
});

export const useDrinksStore = create(
    devtools(
        persist(drinksStore, {
            name: 'drinks',
        })
    )
);
