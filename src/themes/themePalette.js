import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import KanitRegular from "../assets/fonts/Kanit-Regular.ttf";
import KanitLight from "../assets/fonts/Kanit-Light.ttf";
import KanitBold from "../assets/fonts/Kanit-Bold.ttf";
import KanitLight1 from "../assets/fonts/Kanit-Light.woff2";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1f2a40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#fff",
          200: "#a9d9d5",
          300: "#7fc6bf",
          400: "#54b3aa",
          500: "#29a095",
          600: "#218077",
          700: "#196059",
          800: "#10403c",
          900: "#08201e",
          1000: "#49CEC1",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
          1000: "#ffffff",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    breakpoints: {
      values: {
        xs: 0,
        custom: 350,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Kanit-Regular';
            font-style: normal;
            font-display: swap;
            src: local('Kanit-Regular'), local('Kanit-Regular'), url(${KanitRegular}) format('truetype');
          },
          @font-face {
            font-family: 'Kanit-Light';
            font-style: normal;
            font-display: swap;
            src: local('Kanit-Light'), local('Kanit-Light'), url(${KanitLight1}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          },
          @font-face {
            font-family: 'Kanit-Bold';
            font-style: normal;
            font-display: swap;
            src: local('Kanit-Bold'), local('Kanit-Bold'), url(${KanitBold}) format('truetype');
          },          
        `,
      },
    },
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 14,
        color: "#271F1F",
      },
      h6: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 12,
        color: "#7E8299",
      },
      h7: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 18,
      },

      h8: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 17,
      },

      h9: {
        fontFamily: ["Kanit", "sans-serif"].join(","),
        fontSize: 15,
      },
    },
    button: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      color: "#FFFFFF",
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
