/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#1B262C',
                yellow: '#ff9709',
                red: '#fc5185',
                blue: '#5356ff',
                grey: '#ddd',
                white: '#f5f7f8',
            },
        },
    },
    plugins: [require('daisyui')],
};
