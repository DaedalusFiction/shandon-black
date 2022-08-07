import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";

const socialMedia = [
    { media: "twitter", url: "https://google.com" },
    { media: "instagram", url: "https://google.com" },
    { media: "facebook", url: "https://google.com" },
];

const contactInfo = [
    { type: "telephone", value: "555-555-5555" },
    { type: "email", value: "hello@artistName.com" },
    { type: "fax", value: "who the fuck faxes things" },
];

const Footer = () => {
    return (
        <Container maxWidth="xl" sx={{ marginTop: "4rem" }}>
            <Grid container>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1em",
                        }}
                    >
                        {socialMedia.map((item) => {
                            return (
                                <Link key={item.media} href={item.url}>
                                    {item.media}
                                </Link>
                            );
                        })}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1em",
                            alignItems: "end",
                        }}
                    >
                        {contactInfo.map((item) => {
                            return (
                                <Typography key={item.type} align="end">
                                    {item.value}
                                </Typography>
                            );
                        })}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
