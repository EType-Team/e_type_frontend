import useSessionStorage from "./use-session-storage"

function useWordSessionStorage() {
    const {
        storedValue: correctWordIds,
        setValue: setCorrectWordIds,
        remove: removeCorrectWordIds
    } = useSessionStorage<number[]>('correctWordIds', [])

    const {
        storedValue: notCorrectWordIds,
        setValue: setNotCorrectWordIds,
        remove: removeNotCorrectWordIds
    } = useSessionStorage<number[]>('notCorrectWordIds', [])

    const addCorrectWordId = (id: number) => {
        setCorrectWordIds((prev) => [...prev, id])
    }

    const addNotCorrectWordId = (id: number) => {
        setNotCorrectWordIds((prev) => [...prev, id])
    }

    const resetWordIds = () => {
        removeCorrectWordIds()
        removeNotCorrectWordIds()
    }

    return {
        correctWordIds,
        notCorrectWordIds,
        addCorrectWordId,
        addNotCorrectWordId,
        resetWordIds
    }
}

export default useWordSessionStorage
