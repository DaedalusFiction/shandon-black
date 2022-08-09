import { Box, Button, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const FirestoreListingItem = ({ image }) => {
    const handleDelete = () => {
        console.log(image.data().fields[0].name);
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
