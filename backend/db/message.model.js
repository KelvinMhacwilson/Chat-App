import { Schema, model } from "mongoose";

const messagesSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: { type: String, required: true },
  },
  { timestamps: true } // createdAt and updatedAt
);

const Message = model("Message", messagesSchema);

export default Message;
