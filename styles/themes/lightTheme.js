import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#000000",
        },
        mode: "light",
        background: {
            default: "white",
        },
        custom: {
            light: "white",
        },
    },
});

export default lightTheme;
