import Autocomplete from "../autocomplete";
import Button from "../button";
import Modal from "../modal";
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
    <Modal
      trigger={<Button variant="primary">Open Modal</Button>}
      headerProps={{
        title: "Connect to a new exchange",
        description: "Select the exchange you want to connect to",
      }}
      DialogContentProps={{
        className: "sm:max-w-[640px] pb-6",
      }}
      disableAction
    >
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
    </Modal>
  );
}
