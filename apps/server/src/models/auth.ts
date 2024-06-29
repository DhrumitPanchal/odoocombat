import mongoose, { Document, Schema } from 'mongoose';

type UserType = 'artist' | 'fan';

interface IUser extends Document {
  username: string;
  email: string;
  profilePicUrl?: string;
  userType: UserType;
}

const UserSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicUrl: { type: String },
  userType: { type: String, enum: ['artist', 'fan'], required: true }
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
