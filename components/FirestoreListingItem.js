import { Box, Button, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { db, storage } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const FirestoreListingItem = ({
    image,
    category,
    updateCounter,
    setUpdateCounter,
}) => {
    const handleDelete = () => {
        let urls = image.data().URLs;
        urls.forEach((url) => {
            deleteObject(ref(storage, url));
        });
        deleteDoc(doc(db, category, image.id));
        setUpdateCounter(updateCounter + 1);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                border: "1px solid white",
                padding: ".5em",
                margin: ".5em 0",
            }}
        >
            <Box>
                {image &&
                    image.data().fields.map((field, index) => {
                        return (
                            <Typography
                                key={index}
                            >{`${field.name}: ${field.value}`}</Typography>
                        );
                    })}
            </Box>
            <IconButton variant="contained" onClick={handleDelete}>
                <ClearIcon />
            </IconButton>
        </Box>
    );
};

export default FirestoreListingItem;
