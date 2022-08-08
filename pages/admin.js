import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Head from "next/head";
import login from "../utility/login.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import FirebaseUploadForm from "../components/FirebaseUploadForm.js";

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSignIn = async () => {
        const user = await login();
        const userRef = doc(db, "users", user.uid);
        const task = await getDoc(userRef).then((response) => {
            setIsAdmin(response.data().admin);
        });
    };

    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <Typography variant="h1">Admin</Typography>
            <Box sx={{ padding: "4rem 0" }}>
                <Button variant="contained" onClick={handleSignIn}>
                    Sign in with google
                </Button>
                <FirebaseUploadForm />
            </Box>
        </>
    );
};

export default Admin;
