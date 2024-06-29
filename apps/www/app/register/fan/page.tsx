"use client";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import jwt from "jsonwebtoken"; // Import jsonwebtoken
import { useRouter } from "next/navigation";

interface DecodedToken {
	sub: string;
	name: string;
	email: string;
	picture: string;
}

const RegisterArtist = () => {
	const router = useRouter();
	const handleSuccess = async (credentialResponse: CredentialResponse) => {
		const token = credentialResponse.credential as string;

		// Decode the token using jsonwebtoken
		const decoded = jwt.decode(token) as DecodedToken;

		if (!decoded) {
			console.error('Failed to decode token');
			return;
		}

		const userId = decoded.sub;
		const username = decoded.name;
		const email = decoded.email;
		const photo = decoded.picture;

		console.log(decoded);

		try {
			const response = await fetch('/api/user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ token, userId, username, email, photo, role: "Fan" }),
			});

			if (response.ok) {
				console.log('Credential saved');
				localStorage.setItem('token', token);
				router.push('/');
			} else {
				console.error('Failed to save credential');
			}
		} catch (error) {
			console.error('An error occurred', error);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-full w-full gap-y-8">
			<h1 className="text-[2rem] tracking-tighter">
				Register as an Fan
			</h1>
			<div className="flex justify-center items-center">
				<GoogleLogin
					onSuccess={handleSuccess}
					onError={() => {
						console.log('Login Failed');
					}}
				/>
			</div>
		</div>
	);
};

export default RegisterArtist;
