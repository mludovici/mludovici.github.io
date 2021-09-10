module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                45: '45%',
            },
            fontFamily: {
                sans: ['Inter var'],
            },
            boxShadow: {
                quizBox: '1px 2px 8px 6px #0000005c',
            },
        },
    },
    variants: {
        extend: { grayscale: ['hover', 'focus'] },
    },
    plugins: [],
    //prefix: 'tw-',
}
