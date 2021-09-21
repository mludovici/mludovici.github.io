export const setErrorTimeout = (cb, error) => {
    cb(error)
    const timer = setTimeout(() => {
        cb(null)
        clearTimeout(timer)
    }, 10000)
}
