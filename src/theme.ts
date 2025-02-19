import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF9C66",
    },
    secondary: {
      main: "#FCDC94", 
    },
    background: {
      default: "#C8CFA0",
      paper: "#78ABA8",
    },
    text: {
      primary: "#333",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
});

export default theme;
