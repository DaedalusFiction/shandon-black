import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import useGetImages from "../hooks/useGetImages";
import Image from "next/image";

const Art = () => {
    const [images] = useGetImages("artwork");
    const handleClick = () => {
        console.log(images);
    };
    return (
        <>
            <Typography variant="h1">Artwork</Typography>
            <Grid container spacing={2}>
                {images &&
                    images.length > 0 &&
                    images.map((image, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Image
                                    src="https://firebasestorage.googleapis.com/v0/b/shandon-black.appspot.com/o/artwork%2Fimage_6487327%20(3).JPG?alt=media&token=71e8e43b-2d80-4c64-9ac2-aa73939cd1b9"
                                    blurDataURL={image}
                                    placeholder="blur"
                                    width="100px"
                                    height="100px"
                                    layout="responsive"
                                    alt=""
                                />
                            </Grid>
                        );
                    })}
            </Grid>
            <Button variant="contained" onClick={handleClick}>
                Test
            </Button>
        </>
    );
};

export default Art;
