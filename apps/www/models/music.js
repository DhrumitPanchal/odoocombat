import mongoose from 'mongoose';

const MusicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const Music = mongoose.models.Music || mongoose.model('Music', MusicSchema);

export default Music;