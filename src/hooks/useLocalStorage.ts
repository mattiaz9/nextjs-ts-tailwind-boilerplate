import { useEffect, useState } from "react"

/**
 * Get / Set a local storage value
 * @param key Storage key
 * @param defaultValue Default value
 * @returns The parsed value
 */
const useLocalStorage = <T>(
  key: string,
  defaultValue: T | null = null
): [T | null | undefined, (value: T) => void, () => void] => {
  const localStorage = typeof window !== "undefined" ? window.localStorage : null

  const [storedValue, setStoredValue] = useState<T | null | undefined>(defaultValue || undefined)

  useEffect(() => {
    setStoredValue(getValue())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getValue = () => {
    try {
      const item = localStorage?.getItem(key)
      return item ? JSON.parse(item) as T : defaultValue
    } catch (error) {
      console.log(error)
      return defaultValue
    }
  }

  const setValue = (value: T) => {
    try {
      // Save state
      setStoredValue(value)
      // Save to local storage
      localStorage?.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteItem = () => {
    localStorage?.removeItem(key)
  }

  return [storedValue, setValue, deleteItem]
}

export default useLocalStorage
