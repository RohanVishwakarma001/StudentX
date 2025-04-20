import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // hashed password
    profilePicture: {
      type: String,
      default:
        "https://res.cloudinary.com/dqj8v0x5g/image/upload/v1698231234/default_profile_picture.png",
    },
    bio: { type: String, default: "" },
    role: {
      type: String,
      enum: ["user", "admin", "owner", "freelancer", "client"],
      default: "user",
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    skills: [{ type: String, default: ["Nothing"] }], // Array of skill names

    subscriptions: {
      type: String,
      enum: ["free", "premium"],
      default: "free",
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
    toJSON: { virtuals: true }, // Include virtuals in JSON output
  }
);

const User = mongoose.model("User", userSchema);

export default User;
