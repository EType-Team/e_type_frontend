"use client"

import { create } from "zustand"

type EditUserWordProgress = {
    id: number
    total_typings: number
}

type userWordProgressState = {
    editedUserWordProgress: EditUserWordProgress
    updateEditedUserWordProgress: (state: EditUserWordProgress) => void
    resetEditedUserWordProgress: () => void
}

const useUserWordProgressStore = create<userWordProgressState>((set) => ({
    editedUserWordProgress: { id: 0, total_typings: 0 },
    updateEditedUserWordProgress: (state) => set({ editedUserWordProgress: state }),
    resetEditedUserWordProgress: () => set({ editedUserWordProgress: { id: 0, total_typings: 0 } })
}))

export default useUserWordProgressStore