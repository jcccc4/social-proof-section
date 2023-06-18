/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ls: ["League Spartan", "sans-serif"],
      },fontSize:{
        h1:['40px','32px'],
        p:['19px','25px'],
        review:['17px','16px'],
        'h1-lg':['56px','48px'],
        "review-dsk":['17px','22px'],
      },colors:{
        violet:'#512051',
      }
    },
  },
  plugins: [],
};
