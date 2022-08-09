import { Typography } from "@mui/material";
import React from "react";
import useGetImages from "../hooks/useGetImages";
import FirestoreListingItem from "./FirestoreListingItem";

const FirestoreListing = ({ category }) => {
    const [images] = useGetImages(category);
    return (
        <>
            <Typography variant="h5">
                Delete {category} database entries
            </Typography>
            {images &&
                images.length > 0 &&
                images.map((image, index) => {
                    return <FirestoreListingItem key={index} image={image} />;
                })}
        </>
    );
};

export default FirestoreListing;
