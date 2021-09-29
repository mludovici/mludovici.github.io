module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bgTimeline: '#474e5d',
                address: '#5bcbf0',
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
            // marginTop: {
            //     half: '50%',
            // },
        },
    },
    variants: {
        extend: {
            grayscale: ['hover', 'focus'],
            backgroundColor: {
                bgCV: '#005e9b',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
    //prefix: 'tw-',
}
