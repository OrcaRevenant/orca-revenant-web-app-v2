import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import Input from "@/app/components/input";

export default function AddPortfolioForm() {
  return (
    <div className="flex flex-col justify-between w-full h-full gap-5 sm:gap-0">
      <div className="flex flex-col gap-5">
        <Input
          label="Portfolio Title"
          placeholder="Binance, KuCoin, etc..."
          inputSize="sm"
          required
          fullWidth
        />
        <Input
          label="API Key"
          placeholder="*****"
          helperText="This setting can be found within your exchange account preferences."
          inputSize="sm"
          required
          fullWidth
        />
        <Input
          label="API Secret"
          placeholder="*****"
          helperText="If exchange provide it."
          inputSize="sm"
          fullWidth
        />
      </div>
      <Button size="lg">
        <IconSelector icon="Rocket02" />
        Start Tracking
      </Button>
    </div>
  );
}
