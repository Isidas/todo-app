import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { purple, deepOrange, teal } from "@mui/material/colors";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#30d5c8",
    },
    secondary: {
      main: purple[500],
    },
    error: {
      main: deepOrange[400],
    },
    info: {
      main: teal[400],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
