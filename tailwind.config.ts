import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".why": {
          ".so": {
            "&.serious": {
              backgroundColor: "red",
            },
          },
        },
      });
    }),
  ],
};
