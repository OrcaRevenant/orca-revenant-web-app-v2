import Button from "../../button";
import IconSelector from "../../icon-selector";
import Modal from "../../modal";
import { Textarea } from "../../textarea";

export default function Feedback() {
  return (
    <Modal
      trigger={
        <Button variant="secondaryGray" size="md">
          <IconSelector icon="Announcement01" className="size-5" />
          Feedback
        </Button>
      }
      headerProps={{
        title: "Feedback",
        description: "Feel free to describe your feedback.",
        decorativeProps: {
          mask: "redialCenter",
          size: "sm",
          variant: "dots",
        },
        featuredIcon: {
          icon: "Announcement01",
          variant: "modern",
          size: "lg",
        },
      }}
      actionProps={{
        submitText: "Send",
      }}
    >
      <Textarea
        label="Description"
        placeholder="e.g. Website design"
        helperText="Please describe your feedback"
        fullWidth
      />
    </Modal>
  );
}
