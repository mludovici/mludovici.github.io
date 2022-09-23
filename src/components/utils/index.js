import { useState, useEffect } from 'react'

export const setErrorTimeout = (cb, error) => {
    cb(error)
    const timer = setTimeout(() => {
        cb(null)
        clearTimeout(timer)
    }, 10000)
}

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue)
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue),
    ]
}

export const useTitle = (title) => {
    useEffect(() => {
        let prevTitle = document.title || "Marc's Homepage";
        document.title = title;
        return () => {
            document.title = prevTitle;
        };
    }, [title]);
}