"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import details from "@/config/details.config";
import { Separator } from "@/components/ui/separator";

const Register = () => {
	const router = useRouter();

	const handleRegisterArtist = () => {
		router.push("/register/artist");
	};

	const handleRegisterFan = () => {
		router.push("/register/fan");
	};

	return (
		<div className="h-full flex gap-y-4 flex-col items-center justify-center">
			<h1 className="mb-8 text-[2rem]">
				Welcome to <b>{details.name}</b>
			</h1>
			<div className="flex gap-x-4 items-center">
				<p>Register as an Artist:</p>
				<Button onClick={handleRegisterArtist}>
					Register as Artist
				</Button>
			</div>
			<div className="flex items-center gap-x-4">
				<Separator className="w-24 my-4"></Separator>
				<p className="opacity-50">or</p>
				<Separator className="w-24 my-4"></Separator>
			</div>
			<div className="flex gap-x-4 items-center">
				<p>Register as an fan:</p>
				<Button onClick={handleRegisterFan}>Register as Fan</Button>
			</div>
		</div>
	);
};

export default Register;
