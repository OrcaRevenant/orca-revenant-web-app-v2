import AiAvatar from "@/app/components/ai-avatar";
import LoadingText from "@/app/components/loading-text";
import Typography from "@/app/components/typography";
import { cn } from "@/lib/utils";

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
  if (messages.length === 0) return null;

  return (
    <div className="flex-grow overflow-y-auto py-8 space-y-6 rounded-md">
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
                className={`max-w-xs md:max-w-md lg:max-w-lg px-3.5 py-2.5 rounded-lg ${
                  message.sender === "user"
                    ? "bg-bg-brand-solid text-white"
                    : "bg-bg-secondary border border-border-secondary text-text-primary"
                }`}
              >
                <Typography variant="medium" color="secondary">
                  {message.text}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={cn("text-center", !isLoading && "hidden")}>
        <LoadingText>Thinking</LoadingText>
      </div>
    </div>
  );
}
