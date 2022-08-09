import { Box, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Gallery from "../components/Gallery";

const Art = () => {
    return (
        <>
            <Head>
                <title>S//B - Art</title>
            </Head>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    alignItems: "center",
                }}
            >
                <Typography variant="h1">Artwork</Typography>
                <Typography sx={{ paddingBottom: "2em" }}>
                    (Images load on click to conserve energy.)
                </Typography>
            </Box>
            <br />
            <Gallery category="artwork" />
        </>
    );
};

export default Art;
