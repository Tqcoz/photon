module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#f2636d',
        steel: {
          '50':  '#f1f7f8',
          '100': '#d5f0f8',
          '200': '#a6e3f1',
          '300': '#6fc6dc',
          '400': '#37a4c2',
          '500': '#2885a7',
          '600': '#236c8d',
          '700': '#1f526e',
          '800': '#173850',
          '900': '#0e2236',
        },
        royalblue: {
          '50':  '#f6f9fb',
          '100': '#e3f0fc',
          '200': '#c4dafa',
          '300': '#9ab7f2',
          '400': '#758fe8',
          '500': '#5e6be0',
          '600': '#4d4fd1',
          '700': '#3b3bb1',
          '800': '#292883',
          '900': '#171953',
        },
        denim: {
          '50':  '#f8fafb',
          '100': '#ebeffc',
          '200': '#d6d6f9',
          '300': '#b5b0ef',
          '400': '#9a87e3',
          '500': '#8262da',
          '600': '#6b46c9',
          '700': '#5135a6',
          '800': '#382478',
          '900': '#1f1749',
        },
        cerise: {
          '50':  '#fcfbfb',
          '100': '#f9eff4',
          '200': '#f4cdea',
          '300': '#e8a1d1',
          '400': '#e472b4',
          '500': '#d64f9b',
          '600': '#be347b',
          '700': '#97285b',
          '800': '#6c1c3b',
          '900': '#411220',
        },
        blush: {
          '50':  '#fdfcfa',
          '100': '#fbf0ee',
          '200': '#f7cfdd',
          '300': '#eca2bb',
          '400': '#e87295',
          '500': '#db4f74',
          '600': '#c33555',
          '700': '#9c283e',
          '800': '#701c28',
          '900': '#451216',
        },
        chocolate: {
          '50':  '#fcfbf8',
          '100': '#faf0da',
          '200': '#f5d6b4',
          '300': '#e7ad82',
          '400': '#db7f54',
          '500': '#c75c33',
          '600': '#aa4221',
          '700': '#84311b',
          '800': '#5c2214',
          '900': '#3a150d',
        },
        sepia: {
          '50':  '#fbfaf4',
          '100': '#f9efc0',
          '200': '#f1dc86',
          '300': '#ddb753',
          '400': '#c08d2e',
          '500': '#a26d17',
          '600': '#84530f',
          '700': '#653e0d',
          '800': '#452b0c',
          '900': '#2e1a09',
        },
        olive: {
          '50':  '#fbf9f3',
          '100': '#f8efb7',
          '200': '#efde79',
          '300': '#d6bb48',
          '400': '#b09226',
          '500': '#8f7412',
          '600': '#735b0c',
          '700': '#58440b',
          '800': '#3c2e0a',
          '900': '#281d08',
        },
        green: {
          '50':  '#f5f7f3',
          '100': '#e7f0df',
          '200': '#c7e5b9',
          '300': '#91c885',
          '400': '#4aa654',
          '500': '#348a31',
          '600': '#2b7322',
          '700': '#25581d',
          '800': '#1b3c18',
          '900': '#132513',
        },
        seagreen: {
          '50':  '#eff6f5',
          '100': '#d1f0f3',
          '200': '#9ce6e4',
          '300': '#62cbc3',
          '400': '#27ad9b',
          '500': '#1c9174',
          '600': '#197a5b',
          '700': '#175e48',
          '800': '#124036',
          '900': '#0c2728',
        },
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
