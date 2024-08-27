/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    gridTemplateColumns: {
      // Custom class for 16 repeating columns
      '16': 'repeat(16, minmax(0, 1fr))',
    },
  },
};
export const plugins = [];