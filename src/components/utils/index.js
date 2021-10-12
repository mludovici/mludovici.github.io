import { useState } from 'react'

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
