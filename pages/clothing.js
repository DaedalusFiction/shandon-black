import { Typography } from "@mui/material";
import React from "react";
import Gallery from "../components/Gallery";

const clothing = () => {
    return (
        <>
            <Typography variant="h1">Clothing</Typography>
            <Gallery category="clothing" />
        </>
    );
};

export default clothing;
