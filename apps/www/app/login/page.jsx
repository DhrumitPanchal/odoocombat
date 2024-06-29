"use client";

import React from 'react'
import { GoogleLogin } from "@react-oauth/google";

const page = () => {

    const handleSuccess = async (credentialResponse) => {
        const token = credentialResponse.credential;
        const userId = credentialResponse.clientId;

        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, userId }),
            });

            if (response.ok) {
                console.log('Credential saved');
            } else {
                console.error('Failed to save credential');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    );
}

export default page