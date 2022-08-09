import { Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Gallery from "../components/Gallery";

const Art = () => {
    return (
        <>
            <Head>
                <title>S//B - Art</title>
            </Head>
            <Typography variant="h1">Artwork</Typography>
            <Typography>(Images load on click to conserve energy.)</Typography>
            <br />
            <Gallery category="artwork" />
        </>
    );
};

export default Art;
