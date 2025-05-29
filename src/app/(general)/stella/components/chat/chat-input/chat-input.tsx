"use client";

import Badge from "@/app/components/badge";
import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import Input from "@/app/components/input";
import Typography from "@/app/components/typography";
import { useState } from "react";

const PRESET_QUESTIONS = [
  "Is my portfolio healthy?",
  "Could you calculate my unrealized PNL?",
];

export type ChatInputProps = {
  onSendMessage: (text: string) => void;
  isLoading?: boolean;
};

export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const handlePresetClick = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row space-x-2 w-full overflow-x-auto pb-2">
        {PRESET_QUESTIONS.map((item, index) => (
          <Badge
            variant="default"
            color="gray"
            size="sm"
            key={index}
            className="cursor-pointer flex-shrink-0"
            onClick={() => handlePresetClick(item)}
          >
            <IconSelector icon="Plus" className="mr-1" />
            <Typography variant={"xSmall"} weight={"medium"}>
              {item}
            </Typography>
          </Badge>
        ))}
      </div>
      <div className="flex flex-row w-full max-w-full gap-3 items-center">
        <Input
          disabled={isLoading}
          placeholder="Ask Anything"
          className="h-11 bg-bg-primary" 
          value={inputValue}
          endIcon={
            <IconSelector
              icon="Attachment01"
              className="size-5 cursor-pointer"
            />
          }
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <Button
          variant="primary"
          size={"lgIcon"}
          onClick={handleSend}
          disabled={isLoading}
        >
          {isLoading ? (
            <IconSelector icon="Loading01" className="size-5 animate-spin" />
          ) : (
            <IconSelector icon="ArrowUp" className="size-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
