import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import User from '@/models/Users';

export async function POST(req) {
    await connectToDatabase();
    const { token, userId } = await req.json();

    try {
        const newUser = new User({ token, userId });
        await newUser.save();
        return NextResponse.json({ message: 'User saved' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to save User', error }, { status: 500 });
    }
}

export function DELETE(req) {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
