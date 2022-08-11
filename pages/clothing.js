import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import React from "react";
import Gallery from "../components/Gallery";

const clothing = () => {
    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="art, portfolio, photography, clothing"
                />
                <title>S//B - Wearable Sculptures</title>
            </Head>
            <Box
                sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <Typography variant="h1">Wearable Sculptures</Typography>
                <Typography sx={{ paddingBottom: "2em" }}>
                    (Images load on click to conserve energy.)
                </Typography>
            </Box>
            <br />
            <Gallery category="clothing" />
        </>
    );
};

export default clothing;
