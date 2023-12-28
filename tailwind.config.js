
/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"


export default withMT({
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],

  daisyui: {
    darkTheme: "light",
   },
});
