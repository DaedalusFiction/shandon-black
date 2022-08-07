import { Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

const about = () => {
    return (
        <div>
            <Head>
                <title>About Me</title>
                <meta name="keywords" content="photography, art, clothing" />
            </Head>
            <Typography variant="h1">About</Typography>
        </div>
    );
};

export default about;
