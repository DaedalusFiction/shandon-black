import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

const GalleryImage = ({ image }) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(true);
    };
    return (
        <Box>
            {isVisible ? (
                <>
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
                </>
            ) : (
                <>
                    <Box
                        sx={{
                            height: "45vh",
                            width: "100%",
                            backgroundColor: "black",
                            cursor: "pointer",
                        }}
                        onClick={handleClick}
                    ></Box>
                </>
            )}
        </Box>
    );
};

export default GalleryImage;
