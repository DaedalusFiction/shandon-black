import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        custom: {
            light: "white",
        },
    },
});

export default lightTheme;
