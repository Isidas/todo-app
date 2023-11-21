import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#30d5c8",
    },
    secondary: {
      main: purple[500],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
