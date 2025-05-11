"use client";

import Badge from "@/app/components/badge";
import Button from "@/app/components/button";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import Input from "@/app/components/input";
import Typography from "@/app/components/typography";
import { useState } from "react";

const MOCK_DATA = [
  "Is my portfolio healthy?",
  "Could you calculate my unrealized PNL?",
  "List near events",
  "Analyze the market",
];

export default function StellaPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-var(--navbar-height))] w-full">
      <Container maxWidth="xl">
        <div className="flex flex-col items-center space-y-8">
          <Typography variant="displayMedium" weight={"medium"}>
            How can i assist you?
          </Typography>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row space-x-2 w-full">
              {MOCK_DATA.map((item, index) => (
                <Badge
                  variant="default"
                  color="gray"
                  size="sm"
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <IconSelector icon="Plus" />
                  <Typography variant={"xSmall"} weight={"medium"}>
                    {item}
                  </Typography>
                </Badge>
              ))}
            </div>
            <div className="flex flex-row w-full gap-3 items-center">
              <Input
                placeholder="Ask Anything"
                className="w-full h-11"
                value={selectedItem || ""}
                onChange={(e) => setSelectedItem(e.target.value)}
              />
              <Button variant="primary" size={"lgIcon"}>
                <IconSelector icon="ArrowUp" className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
