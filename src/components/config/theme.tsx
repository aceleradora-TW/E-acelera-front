import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  button = "rgb(11, 73, 122)",
  title = "rgb(0, 44, 83)",
  descriptionCard = "rgb(44, 44, 44)",
  descriptionText = "rgb(0, 0, 0)",
  statusInProgress = "rgb(225, 222, 107)",
  statusConcluded = "rgb(155, 255, 133)",
  statusPending = "rgb(225, 225, 225)",
  mainBg = "rgb(245, 245, 245)",
  whiteBg = "rgb(255, 255, 255)",
  shawdowBg = "rgba(0, 0, 0, 0.25)",
}

const theme = createTheme({
  palette: {
    primary: {
      main: themePalette.title,
      light: themePalette.button,
      dark: themePalette.descriptionText,
      contrastText: themePalette.descriptionCard,
    },

  },
  typography: {
    h1: {
      fontSize: "48px",
      lineHeight: 1.16,
      fontWeight: 500,
      letterSpacing: 0.15,
    },

    h2: {
      fontSize: "25.6px",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.15,
    },

    button: {
      fontSize: "17.6px",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.4,
      textTransform: "uppercase",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 4,
    },

    subtitle1: {
      fontSize: "18px",
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: 0.4,
    },

    body1: {
      fontSize: "16px",
      lineHeight: 1.5,
      fontWeight: 400,
      letterSpacing: 0.15,
    },
    caption: {
      fontSize: "22px",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.15,
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { theme };
