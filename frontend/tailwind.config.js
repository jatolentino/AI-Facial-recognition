module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: "yello",
            secondary: "red",
            "text-base": "white",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};