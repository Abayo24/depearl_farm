/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#009688',       // Teal (Material Design)
        muted: '#2F2F2F',          // For text & inactive icons
        background: '#ffffff',     // White background
      },
      fontFamily: {
        heading: ['Poppins_700Bold', 'System'],
        subheading: ['Poppins_600SemiBold', 'System'],
        body: ['Inter_400Regular', 'System'],
        'body-bold': ['Inter_600SemiBold', 'System'],
        button: ['Poppins_500Medium', 'System'],
        mono: ['System'],
      },
    },
  },
  
  plugins: [],
};

