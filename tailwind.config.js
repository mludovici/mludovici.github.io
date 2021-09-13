module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bgTimeline: '#474e5d',
            },
            inset: {
                45: '45%',
            },
            fontFamily: {
                sans: ['Helvetica', 'Inter var'],
            },
            boxShadow: {
                quizBox: '1px 2px 8px 6px #0000005c',
            },
        },
    },
    variants: {
        extend: { grayscale: ['hover', 'focus'] },
    },
    plugins: [require('@tailwindcss/forms')],
    //prefix: 'tw-',
}
