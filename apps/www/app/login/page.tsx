"use client";

import { GoogleLogin } from "@react-oauth/google";

export default function Home() {
    const handleSuccess = async (credentialResponse: any) => {
        const token = credentialResponse.credential;
        const userId = credentialResponse.clientId;

        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, userId }),
            });

            if (response.ok) {
                console.log("Credential saved");
            } else {
                console.error("Failed to save credential");
            }
        } catch (error) {
            console.error("An error occurred", error);
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </div>
    );
}
