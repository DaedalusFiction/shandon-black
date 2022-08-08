import { Input, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const config = {
    title: "artwork",
    fields: [
        { name: "Title", type: "string", value: "" },
        {
            name: "Description",
            type: "string",
            value: "",
        },
        { name: "Year", type: "int", value: "" },
        { name: "Price", type: "int", value: "" },
        { name: "Medium", type: "string", value: "" },
    ],
};

const FirebaseUploadForm = () => {
    const [formData, setFormData] = useState(config);

    const handleFieldChange = (e, field, index) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };

        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ formData, fields: newFormDataFields });
        console.log(formData);
    };
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
            {formData.fields.map((field, index) => {
                return (
                    <TextField
                        color="secondary"
                        label={field.name}
                        key={index}
                        value={field.value}
                        onChange={(e) => {
                            handleFieldChange(e, field, index);
                        }}
                    />
                );
            })}
        </Box>
    );
};

export default FirebaseUploadForm;
