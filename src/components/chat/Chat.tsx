import React, { useState } from "react";
import axios from "axios";

const CHATGPT_API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

interface ChatMessage {
    role: "user" | "chatbot";
    content: string;
}

const Chat: React.FC = () => {
    const [userMessage, setUserMessage] = useState("");
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  
    const sendMessage = async () => {
      if (userMessage.trim() === "") return;
  
      const newUserMessage: ChatMessage = { role: "user", content: userMessage };
      setChatHistory([...chatHistory, newUserMessage]);
      setUserMessage("");
  
      try {
        const response = await axios.post(
          CHATGPT_API_URL,
          {
            model: "gpt-3.5-turbo",
            messages: [...chatHistory, newUserMessage],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
  
        const chatGptResponse = response.data.choices[0].message;
        const chatbotMessage: ChatMessage = {
            role: "chatbot",
            content: chatGptResponse.content,
        };
        setChatHistory([...chatHistory, chatbotMessage]);
      } catch (error) {
        console.error("Erro ao enviar a mensagem:", error);
      }
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserMessage(e.target.value);
    };
  
    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      sendMessage();
    };
  
    return (
      <div>
        <div>
          {chatHistory.map((message, index) => (
            <div key={index}>
              {message.role === "user" ? "Usuário: " : "Chatbot: "}
              {message.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={userMessage}
            onChange={handleInputChange}
            placeholder="Digite sua mensagem..."
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
};
  
export default Chat;
  
  