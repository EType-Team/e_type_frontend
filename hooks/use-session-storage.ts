import { useState, useEffect } from 'react'

function useSessionStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(initialValue)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const item = sessionStorage.getItem(key)
            if (item) {
                try {
                    setStoredValue(JSON.parse(item))
                } catch (error) {
                    console.error(`セッションストレージのキー "${key}" の解析中にエラーが発生しました:`, error)
                }
            }
        }
    }, [key])

    const setValue = (value: T | ((val: T) => T)) => {
        setStoredValue(prev => {
            const valueToStore = value instanceof Function ? value(prev) : value
            if (typeof window !== 'undefined') {
                sessionStorage.setItem(key, JSON.stringify(valueToStore))
            }
            return valueToStore
        })
    }

    const remove = () => {
        setStoredValue(initialValue)
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(key)
        }
    }

    return { storedValue, setValue, remove }
}

export default useSessionStorage
