import GoogleIcon from "@/assets/GoogleIcon";
import { Button } from "@/components/ui/button";
import React from "react";

const RegisterFan = () => {
	return (
		<div className="flex flex-col items-center justify-center h-full w-full gap-y-8">
			<h1 className="text-[2rem] tracking-tighter">
				Register as Fan
			</h1>
			<div className="flex gap-y-4 flex-col justify-end w-1/3">
				<Button className="flex gap-x-4">
					<GoogleIcon />
					<span>Signin with Google</span>
				</Button>
			</div>
		</div>
	);
};

export default RegisterFan;
