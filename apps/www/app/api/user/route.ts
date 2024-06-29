import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/Users";

export async function POST(req: NextRequest) {
    await connectToDatabase();
    const { token, userId, username, email, photo } = await req.json();

    try {
        const newUser = new User({ token, userId, username, email, photo });
        await newUser.save();
        return NextResponse.json({ message: "User saved" }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to save User", error },
            { status: 500 },
        );
    }
}

export function DELETE(req: NextRequest) {
    return NextResponse.json(
        { message: "Method not allowed" },
        { status: 405 },
    );
}
