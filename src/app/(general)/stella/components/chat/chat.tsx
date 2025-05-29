"use client";

import ChatInput from "./chat-input/chat-input";
import Typography from "@/app/components/typography";
import { useState, useEffect, useRef } from "react";
import ChatMessages from "./chat-messages";
import Container from "@/app/components/container";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsLoading(true);
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now().toString() + "-bot",
        text: `${text}`,
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col p-4 w-full pt-24">
      <Container maxWidth="xl" className="w-full">
        <div className="w-full">
          <Typography
            variant="displayMedium"
            weight={"medium"}
            className="text-center mb-8"
          >
            How can I assist you?
          </Typography>

          <div className="flex-grow flex flex-col overflow-hidden">
            <ChatMessages messages={messages} isLoading={isLoading} />
            <div ref={messagesEndRef} />
          </div>
        </div>
      </Container>
      <div className="w-full sticky pb-18 bottom-0 left-0 right-0 z-10 bg-bg-secondary">
        <Container maxWidth="xl" className="w-full">
          <ChatInput isLoading={isLoading} onSendMessage={handleSendMessage} />
        </Container>
      </div>
    </div>
  );
}
