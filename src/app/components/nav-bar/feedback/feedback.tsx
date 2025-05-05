import Button from "../../button";
import IconSelector from "../../icon-selector";
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../dialog";
import { Textarea } from "../../textarea";

export default function Feedback() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondaryGray" size="md">
          <IconSelector icon="Announcement01" className="size-5" />
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription>
            Feel free to describe your feedback.
          </DialogDescription>
        </DialogHeader>

        <Textarea
          label="Description"
          placeholder="e.g. Website design"
          helperText="Please describe your feedback"
          fullWidth
        />
      </DialogContent>
    </Dialog>
  );
}
