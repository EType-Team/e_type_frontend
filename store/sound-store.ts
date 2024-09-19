"use client"

import { create } from "zustand"

interface SoundStore {
    soundEnabled: boolean
    toggleSound: () => void
}

export const useSoundStore = create<SoundStore>((set) => ({
    soundEnabled: true, // デフォルトのサウンドは有効
    toggleSound: () =>
        set((state) => ({ soundEnabled: !state.soundEnabled }))
}))