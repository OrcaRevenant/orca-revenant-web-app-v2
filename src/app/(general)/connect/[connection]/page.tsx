"use client";

import Container from "@/app/components/container";
import Typography from "@/app/components/typography";
import HintBox from "../../../components/hint-box";
import AddPortfolioForm from "./components/add-portolio-from";
import ConnectionLogo from "@/app/components/connection-logo";
import { useParams } from "next/navigation";
import toPascalCase from "@/utils/to-pascal-case";
import { useConnectionById } from "@/api";

export default function ConnectPage() {
  const { connection } = useParams();

  const { data: connectionData } = useConnectionById({
    id: connection as string,
  });

  if (!connectionData) {
    return <div>Connection not found</div>;
  }

  return (
    <Container
      maxWidth="2xl"
      className="h-fit py-16 px-4 sm:px-0 min-h-[calc(100vh-var(--navbar-height))]"
    >
      <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
        <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
          <ConnectionLogo size="xl" connectionName={connection as string} />
          <div className="flex flex-col gap-1">
            <Typography variant="displayMedium" weight="semibold">
              Add {toPascalCase(connection as string)} Portfolio
            </Typography>
            <Typography variant="medium" weight="normal" color="tertiary">
              With that connection you can add your {connection} exchange as a
              portfolio.
            </Typography>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 w-full">
          <div className="col-span-12 sm:col-span-6 flex flex-col gap-5 w-full">
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
          <AddPortfolioForm
            className="col-span-12 sm:col-span-6 flex-1 h-full"
            connection={connectionData}
          />
        </div>
      </div>
    </Container>
  );
}
