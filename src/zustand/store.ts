import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BearState {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}

export const useBearStore = create<BearState>()(
    persist(
        (set, get) => ({
            bears: 0,
            increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
            removeAllBears: () => set({ bears: 0 }),
        }),
        {
            name: 'bear-storage', // unique name
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
);
