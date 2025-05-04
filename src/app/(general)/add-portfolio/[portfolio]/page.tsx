import Container from "@/app/components/container";
import Typography from "@/app/components/typography";
import { CexLogo } from "react-cex-logo";
import HintBox from "../../../components/hint-box";
import AddPortfolioForm from "./components/AddPortfolioForm";

export default function page() {
  return (
    <Container maxWidth="2xl" className="h-fit py-16 px-4 sm:px-0">
      <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
        <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
          <CexLogo exchange="binance" className="size-[72px] rounded-xl" />
          <div className="flex flex-col gap-1">
            <Typography variant="displayMedium" weight="semibold">
              Add Binance Portfolio
            </Typography>
            <Typography variant="medium" weight="normal" color="tertiary">
              With that connection you can add your binance exchange as a
              portfolio.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row gap-5 w-full">
          <div className="flex flex-col gap-5 w-full">
            <HintBox
              title="Read Before Connect!"
              icon="InfoHexagon"
              className="w-full"
            >
              <div className="flex flex-col gap-3 pl-4">
                <Typography
                  variant="xSmall"
                  weight="normal"
                  color="tertiary"
                  className="w-4/5"
                >
                  *Some exchanges allow write access to your account. <br />
                  Please ensure that two-factor authentication (2FA) is enabled
                  before connecting.
                </Typography>
                <Typography
                  variant="xSmall"
                  weight="normal"
                  color="tertiary"
                  className="w-4/5"
                >
                  *If the exchange offers data separation options, <br />
                  ensure that the API provides both deposit and withdrawal data
                  for a better experience.
                </Typography>
                <Typography
                  variant="xSmall"
                  weight="normal"
                  color="tertiary"
                  className="w-4/5"
                >
                  *Always review the API documentation for each exchange to
                  understand the rate limits and usage policies to avoid
                  unnecessary disruptions.
                </Typography>
              </div>
            </HintBox>
            <HintBox headless className="w-full">
              <div className="flex flex-col gap-4">
                <Typography variant="small" weight="semibold">
                  Connections
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography
                    variant="xSmall"
                    weight="medium"
                    color="secondary"
                    className="w-4/5"
                  >
                    This connection is exclusively available on the Orca
                    platform for linking a CEX portfolio.
                  </Typography>
                  <Typography
                    variant="xSmall"
                    weight="medium"
                    color="secondary"
                    className="w-4/5"
                  >
                    Our security team will evaluate the security level of each
                    custom connection before integrating it into our platform.
                  </Typography>
                  <Typography variant="xSmall" weight="normal" color="tertiary">
                    The creator of this connection has the ability to begin or
                    cease selling at any moment.
                  </Typography>
                </div>
              </div>
            </HintBox>
          </div>
          <AddPortfolioForm />
        </div>
      </div>
    </Container>
  );
}
