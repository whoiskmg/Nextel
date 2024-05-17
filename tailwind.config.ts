import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                Vestel: {
                    primary: "#df2027",

                    secondary: "#2E2E2E",

                    accent: "#FF7F29",

                    neutral: "#df2027",

                    "base-100": "#fdfdfd",

                    info: "#00adff",

                    success: "#4CB848",

                    warning: "#FFCB00",

                    error: "#de002b",
                },
            },
        ],
    },
};
export default config;
