import { Typography } from "@mui/material";
import React from "react";
import Gallery from "../components/Gallery";

const Art = () => {
    return (
        <>
            <Typography variant="h1">Artwork</Typography>
            <Gallery category="artwork" />
        </>
    );
};

export default Art;
