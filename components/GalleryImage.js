import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

const GalleryImage = ({ image, index }) => {
    return (
        <Box>
            <Image
                src={image.URLs[0]}
                blurDataURL={image}
                placeholder="blur"
                width="100px"
                height="100px"
                layout="responsive"
                alt=""
            />
            {image.fields.map((field, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            gap: ".5rem",
                        }}
                    >
                        <Typography variant="subtitle2">
                            {field.name}:
                        </Typography>
                        <Typography variant="subtitle2">
                            {field.value}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default GalleryImage;
