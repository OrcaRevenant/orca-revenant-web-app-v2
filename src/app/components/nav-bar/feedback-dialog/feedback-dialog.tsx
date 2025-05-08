import Button from "../../button";
import IconSelector from "../../icon-selector";
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../dialog";
import { Textarea } from "../../textarea";

export default function FeedbackDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondaryGray" size="md">
          <IconSelector icon="Announcement01" className="size-5" />
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent title="Feedback">
        <DialogHeader icon="Announcement01">
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription>
            Feel free to describe your feedback.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6">
          <Textarea placeholder="e.g. Website design"/>
        </div>
        <DialogFooter>
          <Button className="flex-1" variant="secondaryGray" size="md">
            Cancel
          </Button>
          <Button className="flex-1" variant="primary" size="md">
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
