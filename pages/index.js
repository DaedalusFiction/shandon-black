import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Artist Portfolio</title>
                <meta
                    name="keywords"
                    content="art, portfolio, photography, clothing"
                />
            </Head>
            <Grid container>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "1rem",
                        }}
                    >
                        <Box>
                            <Typography>art sustains life</Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "1.5rem",
                                }}
                            >
                                <Link href="/about">Artist // Name</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5.5}
                    sx={{
                        // borderRight: { xs: "none", md: "1px solid black" },
                        // borderBottom: { xs: "1px solid black", md: "none" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        gap: ".5em",
                        padding: "5vw 5vw 25vw 5vw",
                    }}
                >
                    <Box>
                        <Typography variant="h2" align="end">
                            <Link href="/clothing">Clothing</Link>
                        </Typography>
                        <Typography align="center">
                            (wearable sculptures)
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={1}>
                    <Box
                        sx={{
                            transform: "rotate(45deg)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            backgroundColor: "black",
                            padding: "1rem",
                        }}
                    >
                        <Box
                            sx={{
                                border: "1px solid black",
                                transform: "rotate(45deg)",
                                // borderRadius: "100%",
                                width: "5vw",
                                height: "5vw",
                                backgroundColor: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "1.5rem",
                            }}
                        >
                            <Link href="/about">:&#125;</Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5.5}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end",
                        gap: ".5em",
                        padding: "25vw 5vw 5vw 5vw",
                    }}
                >
                    <Typography variant="h2">
                        <Link href="/art">Art</Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
