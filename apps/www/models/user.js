import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {    
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        // required: true,
        default: '',
    },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
