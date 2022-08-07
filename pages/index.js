import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import { Container } from "@mui/system";

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
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12}>
                        <Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    textAlign: "end",
                                    margin: "1em",
                                    fontSize: "1.5rem",
                                }}
                            >
                                Artist // Name
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{
                            borderRight: { xs: "none", sm: "1px solid black" },
                            borderBottom: { xs: "1px solid black", sm: "none" },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "end",
                            gap: ".5em",
                            padding: "5vw 5vw 25vw 5vw",
                        }}
                    >
                        <Box>
                            <Typography variant="h2">
                                <Link href="/clothing">Clothing</Link>
                            </Typography>
                            <Typography align="center">
                                (wearable sculptures)
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "end",
                            gap: ".5em",
                            padding: "25vw 5vw 5vw 5vw",
                        }}
                    >
                        <Typography variant="h2">
                            <Link href="/clothing">Art</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
