/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF3D00',
                secondary: {
                    50: '#f8f9fa',
                    100: '#f0f0f0',
                    200: '#e0e0e0',
                    300: '#c0c0c0',
                    400: '#9e9e9e',
                    500: '#757575',
                    600: '#616161',
                    700: '#4a4a4a',
                    800: '#424242',
                    900: '#1a1a1a',
                    950: '#0d0d0d',
                },
                success: '#00C853',
                error: '#FF3D00',
                blue: {
                    primary: '#2979ff',
                    deep: '#651fff',
                }
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'sm': '0 1px 2px rgba(0,0,0,0.02)',
                'card': '0 1px 3px rgba(0,0,0,0.05)',
            }
        },
    },
    plugins: [],
}
