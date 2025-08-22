"use client";

import { useStella } from "@/api/core/hooks/stella";
import PortfolioPanel from "@/app/(general)/(panel)/dashboard/components/portfolio-panel";
import Button from "@/app/components/button";
import ChatHistory from "@/app/components/chat-history";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";
import { useSelectedPortfolio } from "@/providers/portfolio-provider";
import { getCookie } from "cookies-next";
import { useEffect, useRef, useState } from "react";
import ChatInput from "./chat-input/chat-input";
import ChatMessages from "./chat-messages";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: number;
}

export default function Chat() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const stellaMutation = useStella();
  const selectedPortfolio = useSelectedPortfolio();
  const accessToken = getCookie("orca_access_token") as string;

  return (
    <div className="flex flex-col p-2 sm:p-4 w-full h-[calc(100vh-72px)] md:h-[calc(100vh-72px)] justify-between md:justify-start overflow-y-auto">
      <Container
        maxWidth="xl"
        className="flex flex-col w-full h-full justify-center items-center"
      >
        <div className="flex w-full gap-3 mb-4">
          <ChatHistory />
          <Button variant="secondaryColor">
            <IconSelector icon="Plus" />
            <Typography variant="xSmall" weight={"medium"}>
              New Chat
            </Typography>
          </Button>
          <div className="flex-1 flex justify-end">
            <PortfolioPanel />
          </div>
        </div>
        <div
          className={
            "flex flex-col w-full h-full flex-1 justify-center items-center"
          }
        >
          <div className={"flex flex-col w-full flex-1 md:flex-none"}>
            {chatMessages.length === 0 && (
              <Typography
                variant="displayMedium"
                weight={"medium"}
                className="text-center mb-4 sm:mb-8 h-full flex items-center justify-center"
              >
                How can I assist you?
              </Typography>
            )}
            {chatMessages.length !== 0 && (
              <div className="w-full flex flex-col overflow-y-auto flex-1">
                <ChatMessages
                  messages={chatMessages}
                  isLoading={stellaMutation.isPending}
                />
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
          <div className="w-full sticky pb-4 left-0 right-0 z-10 bg-bg-secondary">
            <ChatInput
              isLoading={stellaMutation.isPending}
              onSendMessage={(text) => {
                const timestamp = Date.now();
                const userMessage: ChatMessage = {
                  id: `user-${timestamp}`,
                  text: text,
                  sender: "user",
                  timestamp,
                };

                // Add user message immediately
                setChatMessages((prevMessages) => [
                  ...prevMessages,
                  userMessage,
                ]);

                stellaMutation.mutate(
                  {
                    payload: {
                      question: text,
                      token: accessToken,
                      portfolio_id: selectedPortfolio?.id.toString() ?? "",
                    },
                  },
                  {
                    onSuccess: (response) => {
                      console.log("API Response:", response); // Debug log

                      // Handle response structure
                      const answer =
                        response.answer ||
                        "Sorry, I couldn't process your request.";

                      const botMessage: ChatMessage = {
                        id: `bot-${Date.now()}`,
                        text: answer,
                        sender: "bot",
                        timestamp: Date.now(),
                      };

                      // Add bot response
                      setChatMessages((prevMessages) => [
                        ...prevMessages,
                        botMessage,
                      ]);
                    },
                    onError: (error) => {
                      console.error("API Error:", error);

                      const errorMessage: ChatMessage = {
                        id: `error-${Date.now()}`,
                        text: "Sorry, I encountered an error. Please try again.",
                        sender: "bot",
                        timestamp: Date.now(),
                      };

                      // Add error message
                      setChatMessages((prevMessages) => [
                        ...prevMessages,
                        errorMessage,
                      ]);
                    },
                  }
                );
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
