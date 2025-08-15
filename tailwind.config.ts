import type { Config } from "tailwindcss";

export default {
        darkMode: ["class"],
        content: [
                "./pages/**/*.{js,jsx}",
                "./components/**/*.{js,jsx}",
                "./app/**/*.{js,jsx}",
                "./src/**/*.{js,jsx}",
                "./pages/**/*.{ts,tsx}",
                "./components/**/*.{ts,tssx}",
                "./app/**/*.{ts,tsx}",
                "./src/**/*.{ts,tsx}",
        ],
        prefix: "",
        theme: {
                container: {
                        center: true,
                        padding: "2rem",
                        screens: {
                                "2xl": "1400px",
                        },
                },
                extend: {
                        colors: {
                                border: "rgb(var(--border))",
                                input: "rgb(var(--input))",
                                ring: "rgb(var(--ring))",
                                background: "rgb(var(--background))",
                                foreground: "rgb(var(--foreground))",
                                primary: {
                                        DEFAULT: "rgb(var(--primary))",
                                        foreground: "rgb(var(--primary-foreground))",
                                },
                                secondary: {
                                        DEFAULT: "rgb(var(--secondary))",
                                        foreground: "rgb(var(--secondary-foreground))",
                                },
                                destructive: {
                                        DEFAULT: "rgb(var(--destructive))",
                                        foreground: "rgb(var(--destructive-foreground))",
                                },
                                muted: {
                                        DEFAULT: "rgb(var(--muted))",
                                        foreground: "rgb(var(--muted-foreground))",
                                },
                                accent: {
                                        DEFAULT: "rgb(var(--accent))",
                                        foreground: "rgb(var(--accent-foreground))",
                                },
                                popover: {
                                        DEFAULT: "rgb(var(--popover))",
                                        foreground: "rgb(var(--popover-foreground))",
                                },
                                card: {
                                        DEFAULT: "rgb(var(--card))",
                                        foreground: "rgb(var(--card-foreground))",
                                },
                                sidebar: {
                                        DEFAULT: "rgb(var(--sidebar-background))",
                                        foreground: "rgb(var(--sidebar-foreground))",
                                        primary: "rgb(var(--sidebar-primary))",
                                        "primary-foreground":
                                                "rgb(var(--sidebar-primary-foreground))",
                                        accent: "rgb(var(--sidebar-accent))",
                                        "accent-foreground":
                                                "rgb(var(--sidebar-accent-foreground))",
                                        border: "rgb(var(--sidebar-border))",
                                        ring: "rgb(var(--sidebar-ring))",
                                },
                                teal: {
                                        primary: "rgb(var(--teal-primary))",
                                        light: "rgb(var(--teal-light))",
                                        dark: "rgb(var(--teal-dark))",
                                },
                                "yellow-soft": "rgb(var(--yellow-soft))",
                                "orange-soft": "rgb(var(--orange-soft))",
                                "green-soft": "rgb(var(--green-soft))",
                        },
                        backgroundImage: {
                                "gradient-hero": "var(--gradient-hero)",
                                "gradient-teal": "var(--gradient-teal)",
                                "gradient-soft": "var(--gradient-soft)",
                        },
                        boxShadow: {
                                soft: "var(--shadow-soft)",
                                card: "var(--shadow-card)",
                                button: "var(--shadow-button)",
                        },
                },
        },
        plugins: [require("tailwindcss-animate")],
} satisfies Config;
