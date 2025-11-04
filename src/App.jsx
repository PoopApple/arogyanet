// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// @ts-ignore
import "./App.css";

// @ts-ignore
import "@mantine/core/styles.css";
// @ts-ignore
import { Button, createTheme, MantineProvider } from "@mantine/core";
import AppRoutes from "./Routes/AppRoutes";
import React from "react";

const theme = createTheme({
  focusRing: "never",
  fontFamily: "Poppins, sans-serif",
  headings: {
    fontFamily: "Merriweather, serif",
  },
  colors: {
    neutral: [
      "#f6f6f6",
      "#e7e7e7",
      "#d1d1d1",
      "#b0b0b0",
      "#888888",
      "#6d6d6d",
      "#5d5d5d",
      "#4f4f4f",
      "#454545",
      "#3d3d3d",
      "#000000",
    ],
    primary: [
      "#fff0f0",
      "#ffdddd",
      "#ffc1c1",
      "#ff9696",
      "#ff5a5a",
      "#ff2727",
      "#fb0707",
      "#d40101",
      "#ae0606",
      "#900c0c",
      "#620000",
    ],
    backg: [
      "#f6f6f6",
      "#e7e7e7",
      "#d1d1d1",
      "#b0b0b0",
      "#888888",
      "#6d6d6d",
      "#5d5d5d",
      "#4f4f4f",
      "#454545",
      "#3d3d3d",
      "#141414",
    ],
  },
  primaryColor: "primary",
  primaryShade: 6,
  defaultGradient: { from: "primary.5", to: "primary.8", deg: 120 },
});

function App() {
  // const [count, setCount] = useState(0)
  return (
    <MantineProvider theme={theme}>
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;
