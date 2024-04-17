import Conversation from "../db/conversation.model.js";
import Message from "../db/message.model.js";
import errorHandler from "../errorHandler.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    errorHandler("sendMessage", res, error);
  }
};

export const getMessages = async (req, res) => {};