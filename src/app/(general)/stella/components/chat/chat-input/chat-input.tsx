"use client";

import Badge from "@/app/components/badge";
import IconButton from "@/app/components/icon-button";
import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handlePresetClick = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="flex flex-col gap-1 w-full max-w-full">
      <div className="hidden flex-row space-x-2 w-full pb-2 md:flex">
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
      <div className="flex flex-row w-full gap-3 items-end">
        <div
          className={cn(
            "relative flex flex-col flex-1 gap-3 p-3 bg-bg-primary rounded-lg transition-[box-shadow]",
            isFocused && "ring-2 ring-ring ring-utility-brand-500"
          )}
        >
          <textarea
            aria-multiline={true}
            ref={textareaRef}
            disabled={isLoading}
            placeholder="Ask Anything"
            className="w-full bg-bg-primary rounded-lg resize-none overflow-x-hidden focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <div className="flex flex-row gap-3 w-full justify-end">
            <IconButton
              variant="secondaryColor"
              size={"md"}
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = ".doc,.docx,.csv,.jpg,.jpeg,.png";
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    // Handle file upload here
                    console.log("File selected:", file);
                  }
                };
                input.click();
              }}
            >
              <IconSelector icon="Attachment01" className="size-5" />
            </IconButton>
            <IconButton
              variant="primary"
              size={"md"}
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
            >
              {isLoading ? (
                <IconSelector
                  icon="Loading01"
                  className="size-5 animate-spin"
                />
              ) : (
                <IconSelector icon="ArrowUp" className="size-5" />
              )}
            </IconButton>
          </div>
        </div>
      </div>
      <Typography
        variant="xSmall"
        weight="medium"
        className="text-text-tertiary text-center"
      >
        Stella can make mistakes. Check important info.
      </Typography>
    </div>
  );
}
