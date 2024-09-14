"use client"

import { create } from "zustand"

interface TypingStore {
    completedWordIds: number[]
    addCompletedWordId: (id: number) => void
    resetCompletedWords: () => void
}

export const useTypingStore = create<TypingStore>((set) => ({
    completedWordIds: [],
    addCompletedWordId: (id: number) =>
        set((state) => ({
            completedWordIds: [...state.completedWordIds, id]
        })),
    resetCompletedWords: () => set({ completedWordIds: []})
}))
