import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

const GalleryImage = ({ image }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
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
                        unoptimized
                        width="100"
                        height={100 / ratio}
                        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                            setRatio(naturalWidth / naturalHeight)
                        }
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
                            paddingTop: "100%",
                            width: "100%",
                            backgroundColor: "white",
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
