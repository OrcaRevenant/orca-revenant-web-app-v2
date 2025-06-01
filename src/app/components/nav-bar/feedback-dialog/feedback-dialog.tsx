"use client";

import { useCreateFeedback } from "@/api/core/hooks/feedback";
import { useState } from "react";
import Button from "../../button";
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../dialog";
import IconSelector from "../../icon-selector";
import FeedbackForm from "./feedback-form";

export default function FeedbackDialog() {
  const { mutate: createFeedback, isPending } = useCreateFeedback({
    onSuccess() {
      setIsOpen(false);
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondaryGray" size="md">
          <IconSelector icon="Announcement01" className="size-5" />
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent maxWidth={"sm"} title="Feedback">
        <DialogHeader icon="Announcement01">
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription>
            Feel free to describe your feedback.
          </DialogDescription>
        </DialogHeader>

        <FeedbackForm
          id="feedback-form"
          onSubmit={(data) => {
            createFeedback({
              payload: { title: "Feedback", content: data.feedback },
            });
          }}
        />
        <DialogFooter>
          <Button
            onClick={() => setIsOpen(false)}
            className="flex-1"
            variant="secondaryGray"
          >
            Cancel
          </Button>
          <Button
            form="feedback-form"
            disabled={isPending}
            className="flex-1"
            variant="primary"
            size="md"
          >
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
