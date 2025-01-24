/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public.html"
  ],
  theme: {
    colors: {
      'lightgrey': '#D3D3D3',
      'grey': '#36393f',
      'darkgrey': '#212529',
      'black': '#0a0c0d',
      'yellow': '#ffc107',
      'orange': '#fd7e14',
      'red': '#dc3545',
      'white': '#ffffff',
      'purple': '#6f42c1',
      'blue': '#007bff',
      'green': '#28a745',
    },
    extend: {
      screens: {
        'mb': '640px',    'mp': { 'max': '639px' },       //Phone
        'tb': '768px',    'mt': { 'max': '767px' },       //Tablet
        'lp': '1024px',   'ml': { 'max': '1023px' },      //Laptop
        'dt': '1280px',   'md': { 'max': '1279px' },      //Desktop
      },
      width: {
        '1': '10%', '2': '20%',
        '3': '30%', '4': '40%',
        '5': '50%', '6': '60%',
        '7': '70%', '8': '80%',
        '9': '90%', 'full': '100%',
      },
      height: {
        '1': '10%', '2': '20%',
        '3': '30%', '4': '40%',
        '5': '50%', '6': '60%',
        '7': '70%', '8': '80%',
        '9': '90%', 'full': '100%',
      },
      scale: {
        '01': '1.01', '02': '1.02', '03': '1.03',
        '10': '1.10', '20': '1.20', '30': '1.30',
        '40': '1.40', '50': '1.50', '60': '1.60',
        '70': '1.70', '80': '1.80', '90': '1.90',
        '100': '2',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.center-all': {
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
        '.center-all-x': {
          justifyContent: 'center',
        },
        '.center-all-y': {
          alignItems: 'center',
        },
        // Scrollbar styles
        '.scrollbar': {
          'scrollbar-width': 'thin',  // For Firefox
          'scrollbar-color': '#17a2b8 #d3d3d3',  // Thumb and Track color for Firefox
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '8px',  // Width of the scrollbar
          height: '8px',  // Height of the scrollbar (for horizontal scroll)
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#17a2b8',  // Color of the thumb
          borderRadius: '10px',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#d3d3d3',  // Color of the track
        },
      };

      addUtilities(newUtilities, ['responsive']);
    }
  ],
};