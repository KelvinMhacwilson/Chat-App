import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => {
    set({ selectedConversation });
    localStorage.setItem(
      "selectedConversation",
      JSON.stringify(selectedConversation)
    );
  },
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
