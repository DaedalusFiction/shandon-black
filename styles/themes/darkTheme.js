import { createTheme } from "@mui/material/styles";

let darkTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#ffffff",
        },
        mode: "dark",
        background: {
            default: "#000000",
        },
        custom: {
            light: "#000000",
            lightMuted: "#000000",
            dark: "#ffffff",
            darkMuted: "#ffffff",
        },
    },
    // typography: {
    //     primary: {
    //         accent: "Yeseva",
    //         decorative: "InconsolataRegular",
    //         main: "InconsolataRegular",
    //     },
    // },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: `

    //     @font-face {
    //       font-family: 'Yeseva';
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 600;
    //       src: local('Yeseva'), local('Yeseva-regular'), url(${yeseva}) format('truetype');
    //     }
    //     @font-face {
    //       font-family: 'inconsolataRegular';
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 600;
    //       src: local('inconsolataRegular'), local('inconsolataRegular'), url(${inconsolataRegular}) format('truetype');
    //     }
    //   `,
    //     },
    // },
});

darkTheme = createTheme(darkTheme, {
    border: "1px solid red",
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
        },
    },
    typography: {
        h1: {
            // fontFamily: darkTheme.typography.darkTheme.accent,
            color: darkTheme.palette.custom.dark,
            lineHeight: ".85em",
            fontSize: "clamp(3.5rem, 9vw, 7rem)",
        },
        h2: {
            // fontFamily: darkTheme.typography.darkTheme.accent,
            color: darkTheme.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 10rem)",
        },
        h3: {
            // fontFamily: darkTheme.typography.darkTheme.accent,
            color: darkTheme.palette.custom.dark,
        },
        h5: {
            // color: darkTheme.palette.text.secondary,
            fontWeight: "bold",
        },
        h6: {
            fontWeight: "bold",
        },
        subtitle1: {
            color: darkTheme.palette.custom.darkMuted,
            fontSize: "1rem",
        },
        subtitle2: {
            color: darkTheme.palette.custom.darkMuted,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: "1rem",
            color: darkTheme.palette.custom.darkMuted,
            // fontFamily: darkTheme.typography.darkTheme.main,
        },
        body2: {
            fontSize: "1rem",
            lineHeight: "1rem",
            // color: darkTheme.palette.custom.decorative,
            // fontFamily: darkTheme.typography.darkTheme.decorative,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: darkTheme.palette.custom.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: darkTheme.typography.darkTheme.accent,
                    fontSize: "1rem",
                },
            },
        },
    },
});

export default darkTheme;
