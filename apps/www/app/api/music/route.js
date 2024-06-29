import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import Music from '@/models/Music';

export async function GET(req) {
    await connectToDatabase();
    const music = await Music.find({});
    return NextResponse.json(music, { status: 200 });
};

export async function POST(req) {
    await connectToDatabase();
    const { title, artist, album, year, genre, url } = await req.json();

    if (!title || !artist || !album || !year || !genre || !url) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    try {
        const newMusic = new Music({ title, artist, album, year, genre, url });
        await newMusic.save();
        return NextResponse.json({ message: 'Music saved' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to save Music', error }, { status: 500 });
    }
};