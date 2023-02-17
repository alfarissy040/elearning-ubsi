/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0071B1",
                secondary: "#438D86",
                accent: "#E3F1EF",
                dark: "#3D4856",
                gray: "#A0ACBD",
                light: "#E6F4F1",
            },
        },
    },
    plugins: [],
};
