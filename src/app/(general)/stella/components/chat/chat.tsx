"use client";

import Button from "@/app/components/button";
import ChatHistory from "@/app/components/chat-history";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";
import { useEffect, useRef, useState } from "react";
import ChatInput from "./chat-input/chat-input";
import ChatMessages from "./chat-messages";

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
    <div className="flex flex-col p-2 sm:p-4 w-full h-[calc(100vh-72px)] md:h-[calc(100vh-72px)] justify-between md:justify-start overflow-y-auto">
      <Container
        maxWidth="xl"
        className="flex flex-col w-full h-full justify-center items-center"
      >
        <div className="flex w-full gap-3 mb-4">
          <ChatHistory />
          <Button variant="secondaryColor" size="sm">
            <IconSelector icon="Plus" />
            <Typography variant="xSmall" weight={"medium"}>
              New Chat
            </Typography>
          </Button>
        </div>
        <div
          className={
            "flex flex-col w-full h-full flex-1 justify-center items-center"
          }
        >
          <div className={"flex flex-col w-full flex-1 md:flex-none"}>
            {messages.length === 0 && (
              <Typography
                variant="displayMedium"
                weight={"medium"}
                className="text-center mb-4 sm:mb-8 h-full flex items-center justify-center"
              >
                How can I assist you?
              </Typography>
            )}
            {messages.length !== 0 && (
              <div className="w-full flex flex-col overflow-y-auto flex-1">
                <ChatMessages messages={messages} isLoading={isLoading} />
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
          <div className="w-full sticky pb-4 left-0 right-0 z-10 bg-bg-secondary">
            <ChatInput
              isLoading={isLoading}
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
