import Autocomplete from "../autocomplete";
import Button from "../button";
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import Typography from "../typography";
import ConnectionCard from "./connection-card";

const MOCK_EXCHANGES = [
  { label: "Binance", value: "binance" },
  { label: "KuCoin", value: "kucoin" },
  { label: "Bybit", value: "bybit" },
  { label: "OKX", value: "okx" },
  { label: "Huobi", value: "huobi" },
  { label: "Kraken", value: "kraken" },
  { label: "Bitfinex", value: "bitfinex" },
];

export default function ConnectionModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect to a new exchange</DialogTitle>
          <DialogDescription>
            Select the exchange you want to connect to
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6">
          <Autocomplete
            inputProps={{
              placeholder: "Binance, KuCoin, etc.",
              fullWidth: true,
            }}
            options={MOCK_EXCHANGES}
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Typography variant={"small"} weight={"semibold"}>
                Most popular
              </Typography>
              <div className="flex flex-row gap-3">
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Typography variant={"small"} weight={"semibold"}>
                Other Exchanges
              </Typography>
              <div className="flex flex-row gap-3">
                <ConnectionCard />
                <ConnectionCard />
                <ConnectionCard />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
