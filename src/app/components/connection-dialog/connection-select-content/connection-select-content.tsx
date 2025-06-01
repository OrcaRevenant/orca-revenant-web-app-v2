"use client";

import { useConnections } from "@/api";
import { useState } from "react";
import Command from "../../command";
import CommandInput from "../../command/command-input";
import Typography from "../../typography";
import ConnectionCard from "../connection-card";
export default function ConnectionSelectContent() {
  const [search, setSearch] = useState("");
  const { data: connections } = useConnections();

  return (
    <>
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput
          disableChevronIcon
          placeholder="Binance, KuCoin, etc."
          value={search}
          onValueChange={setSearch}
        />
      </Command>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Typography variant={"small"} weight={"semibold"}>
            Connections
          </Typography>
          <div className="grid grid-cols-3 w-full gap-3">
            {connections
              ?.filter((connection) =>
                connection.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((connection) => (
                <div className="col-span-1" key={connection.id}>
                  <ConnectionCard connection={connection} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
