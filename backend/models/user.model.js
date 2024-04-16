import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6 },
    gender: { type: String, required: true, enum: ["male", "female"] },
    // confirmPassword: { type: String, required: true, minLength: 6 },
    profilePic: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
