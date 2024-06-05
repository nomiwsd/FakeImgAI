/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primarycl: '#0F172A',
        mainbg: '#0F172A',
        
    },
    fontFamily: {
        roboto: 'Roboto',
    },
    shadow: {
        navbarsh: '0px 0px 30px 0px #0000006B'
    }
    },
  },
  plugins: [],
}