import { DocumentScanner } from "@mui/icons-material";
import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

const FirebaseUploadForm = ({ config }) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [selectedImages, setSelectedImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const fileInputRef = useRef();

    const handleFieldChange = (e, field, index) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };

        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    const handleImagesChange = (e) => {
        console.log(e.target.value);
        setSelectedImages([...selectedImages, e.target.files[0]]);

        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (e) => {
                setPreviews([...previews, e.target.result]);
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleUpload = (e) => {
        fileInputRef.current.children[0].value = null;
        setFormData(JSON.parse(JSON.stringify(config)));
        setPreviews([]);
        setSelectedImages([]);
    };
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
            <Typography variant="h3">
                Upload new {formData.title} item.
            </Typography>
            {formData.fields.map((field, index) => {
                return (
                    <TextField
                        color="secondary"
                        label={field.name}
                        key={index}
                        multiline={field.multiline}
                        rows={field.rows}
                        value={field.value}
                        onChange={(e) => {
                            handleFieldChange(e, field, index);
                        }}
                    />
                );
            })}
            <Input
                variant="contained"
                type="file"
                ref={fileInputRef}
                onChange={handleImagesChange}
            >
                Select File
            </Input>
            <Grid container spacing={1}>
                {previews.length > 0 &&
                    previews.map((preview, index) => {
                        return (
                            <Grid item xs={3} key={index}>
                                <Image
                                    blurDataURL={preview}
                                    placeholder="blur"
                                    src={preview}
                                    alt="image preview"
                                    width="100px"
                                    height="100px"
                                    layout="responsive"
                                />
                            </Grid>
                        );
                    })}
            </Grid>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleUpload}
            >
                Upload
            </Button>
        </Box>
    );
};

export default FirebaseUploadForm;
