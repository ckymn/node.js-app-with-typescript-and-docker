import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    email: String,
    firstName: String,
    lastName: String,
}

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
})

export default mongoose.model<IUser>("User", UserSchema);