"use client";

import AiAvatar from "@/app/components/ai-avatar";
import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

export type ChatMessagesProps = {
  messages: Message[];
  isLoading?: boolean;
};

export default function ChatMessages({
  messages,
  isLoading,
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0) return null;

  return (
    <div
      id="chat-messages"
      className="flex flex-col flex-grow px-2.5 overflow-y-auto h-[calc(100vh-320px)] md:h-[calc(100vh-358px)] py-8 space-y-6 rounded-md w-full max-w-full"
    >
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div className="flex flex-row gap-3">
            {message.sender === "bot" && <AiAvatar size="sm" />}

            <div className="space-y-1.5">
              <Typography variant={"small"} weight={"medium"}>
                {message.sender === "user" ? "You" : "Stella"}
              </Typography>
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-3.5 py-2.5 rounded-lg shadow-xs ${
                  message.sender === "user"
                    ? "bg-bg-brand-solid text-white rounded-br-none"
                    : "bg-bg-secondary border border-border-secondary text-text-primary rounded-tl-none"
                }`}
              >
                <Typography
                  variant="medium"
                  color="secondary"
                  className="whitespace-pre-wrap break-words"
                >
                  {message.text}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={cn("text-center", !isLoading && "hidden")}>
        <IconSelector icon="Loading01" className="size-5 animate-spin" />
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
}
