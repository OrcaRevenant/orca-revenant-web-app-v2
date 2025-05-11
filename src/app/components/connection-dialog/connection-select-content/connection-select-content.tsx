"use client";

import ConnectionCard from "../connection-card";
import CommandInput from "../../command/command-input";
import Command from "../../command";
import Typography from "../../typography";
import { useConnections } from "@/api";

export default function ConnectionSelectContent() {
  const { data: connections } = useConnections();

  return (
    <>
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Binance, KuCoin, etc." />
      </Command>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Typography variant={"small"} weight={"semibold"}>
            Connections
          </Typography>
          <div className="flex flex-row gap-3">
            {connections?.map((connection) => (
              <ConnectionCard key={connection.id} connection={connection} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
