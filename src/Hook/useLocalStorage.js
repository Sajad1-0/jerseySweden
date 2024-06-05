import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setSotredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function? value(storedValue) : value;
            setSotredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    }

    const clearValue = () => {
        
        window.localStorage.removeItem(key);  
        console.log('hej', key);
    }

    return [storedValue, setValue, clearValue];
}