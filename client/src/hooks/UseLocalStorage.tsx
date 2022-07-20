import { useState } from 'react';

interface LocalData {
    _id: string;
    name: string;
}

const useLocalStorage = (key: string, initialValue: LocalData) => {
    const [state, setState] = useState(() => {
        try {
            const item = localStorage.getItem(key);

            return item
                ? JSON.parse(item)
                : initialValue
        } catch (err) {
            console.log(err);
            return initialValue;
        }

    })

    const setItem = (value: string) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))

            setState(value)
        } catch (err) {
            console.log(err);
        }
    }

    return [
        state,
        setItem
    ]
}

export default useLocalStorage;