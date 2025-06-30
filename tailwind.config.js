/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000',      // Teal (Material Design)
        olive: '#6B8E23' , // Olive Green (Material Design)
        muted: '#4a4a4a',          // For text & inactive icons
        background: '#FAF3E0', 
        promo: '#EB8E57',
        code: '#F2D0C4',  
        grey: '#A8A8A8',     // Gray background
        greyLight: '#A5A5A5', // Light gray background
      },
      fontFamily: {
        heading: ['Poppins_700Bold', 'System'],
        subheading: ['Poppins_600SemiBold', 'System'],
        subsubheading: ['Poppins_500Medium', 'System'],
        body: ['Inter_400Regular', 'System'],
        'body-bold': ['Inter_600SemiBold', 'System'],
        button: ['Poppins_500Medium', 'System'],
        mono: ['System'],
      },
    },
  },
  
  plugins: [],
};

