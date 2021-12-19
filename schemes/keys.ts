import mongoose from "mongoose";

const KeysSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: [true, "Please insert a Key."],
      unique: true,
      index: true,
    },
    user: {
      type: String,
      required: [true, "Please insert a User."],
      unique: true,
      index: true,
    },
    limit: {
      type: Number,
      required: false,
      default: 0,
    },
    usage: {
      type: Array,
      required: true,
      default: [],
    },
  },
  { versionKey: "_version", timestamps: true }
);

export default mongoose.models.Keys || mongoose.model("Keys", KeysSchema);
