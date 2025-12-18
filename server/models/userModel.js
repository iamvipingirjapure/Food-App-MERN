import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: [true, "Please add a name"] },
    userEmail: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
    },
    userPassword: { type: String, required: [true, "Please add a password"] },
    userAddress: { type: String },
    userPhoneNumber: { type: String },
    userType: { type: String, enum: ["client", "admin"], default: "client" },
    userProfilePicture: { type: String },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
