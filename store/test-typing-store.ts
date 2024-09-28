"use client"

import { create } from "zustand"

interface TestTypingStoreProps {
    correctWordIds: number[]
    notCorrectWordIds: number[]
    addCorrectWordId: (id: number) => void
    addNotCorrectWordId: (id: number) => void
    resetTestTypingStore: () => void
}

export const useTestTypingStore = create<TestTypingStoreProps>((set) => ({
    correctWordIds: [],
    notCorrectWordIds: [],
    addCorrectWordId: (id: number) =>
        set((state) => ({
            correctWordIds: [...state.correctWordIds, id]
        })),
    addNotCorrectWordId: (id: number) =>
        set((state) => ({
            notCorrectWordIds: [...state.notCorrectWordIds, id]
        })),
    resetTestTypingStore: () => set({
        correctWordIds: [],
        notCorrectWordIds: [],
    })
}))
