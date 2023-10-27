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

type User = {
    initialState: {
        user: {
            userInfo: {
                _id: string;
                avtImg: {
                    url: string;
                };
                coverImg: {
                    url: string;
                };
                fullName: string;
                sex: string;
                idUser: {
                    _id: string;
                    sdt: string;
                    email: string;
                    admin: boolean;
                };
                createdAt: string;
                updatedAt: string;
            };
            accessToken: string;
            refreshToken: string;
        };
        state: {
            loading: false;
            error: false;
            success: false;
        };
    } | null;
    increasePopulation: () => void;
    removeAllBears: () => void;
};

export const userStore = create<User>()(
    persist(
        (set, get) => ({
            initialState: null,
            increasePopulation: () => set((state) => ({ initialState: null })),
            removeAllBears: () => set({ initialState: null }),
        }),
        {
            name: 'user-storage', // unique name
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
);
