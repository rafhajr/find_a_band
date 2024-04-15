import { ColorScale, nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const brand: ColorScale = {
  100: '#FFF1CC',
  200: '#FFE099',
  300: '#FFC966',
  400: '#FFB43F',
  500: '#FF9000',
  600: '#DB7200',
  700: '#B75700',
  800: '#933F00',
  900: '#7A2F00'
};

const primary: ColorScale = {
  100: '#F0ECF5',
  200: '#E0DAEB',
  300: '#B5AEC3',
  400: '#7B7587',
  500: '#312e38',
  600: '#252130',
  700: '#1B1728',
  800: '#120E20',
  900: '#0C081A'
};

const success: ColorScale = {
  100: '#E4FBDA',
  200: '#C4F8B5',
  300: '#99EB8C',
  400: '#70D86B',
  500: '#3FBF45',
  600: '#2EA43E',
  700: '#1F8937',
  800: '#146E30',
  900: '#0C5B2C'
};

const warning: ColorScale = {
  100: '#FCF3CB',
  200: '#FAE398',
  300: '#F1CC63',
  400: '#E4B23C',
  500: '#D38E04',
  600: '#B57302',
  700: '#975B02',
  800: '#7A4501',
  900: '#653600'
};

const danger: ColorScale = {
  100: '#FED6CC',
  200: '#FDA59B',
  300: '#FA6A68',
  400: '#F64352',
  500: '#f10731',
  600: '#CF053C',
  700: '#AD0342',
  800: '#8B0241',
  900: '#730141'
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {},
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'dark',
      defaultExtendTheme: 'dark',
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {} // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: primary[600],
            default: {
              ...brand,
              DEFAULT: brand[700],
              foreground: '#ffffff'
            },
            primary: {
              ...primary,
              DEFAULT: primary[700],
              foreground: '#ffffff'
            },
            success: {
              ...success,
              DEFAULT: success[700],
              foreground: '#ffffff'
            },
            danger: {
              ...danger,
              DEFAULT: danger[700],
              foreground: '#ffffff'
            },
            warning: {
              ...warning,
              DEFAULT: warning[700],
              foreground: '#ffffff'
            }
          }
        }
      }
    })
  ]
};
export default config;
