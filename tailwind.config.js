/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: [
        "./src/**/*.{html,js,jsx}",
        "/src/components/*.{html,js,jsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                "theme-red": "#770013",
                "theme-bg": "#07112E",
            },
            boxShadow: {
                "inner": "inset 0 6px 8px 0 rgb(0 0 0 / 0.5)",
            },
        },
    },
    plugins: [],
};
