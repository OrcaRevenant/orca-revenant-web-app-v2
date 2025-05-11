import Link from "next/link";
import ConnectionLogo from "../../connection-logo";
import IconSelector from "../../icon-selector";
import Typography from "../../typography";
import { SourceConnection } from "@/api";

export type ConnectionCardProps = {
  connection: SourceConnection;
};

export default function ConnectionCard({ connection }: ConnectionCardProps) {
  return (
    <Link href={`/connect/${connection.id}`} passHref className="w-full">
      <div
        data-slot="connection-card"
        className="flex hover:cursor-pointer hover:**:data-[slot=connection-card-arrow-right]:text-bg-primary transition-colors hover:bg-bg-active flex-col bg-bg-secondary border border-border-secondary rounded-xl p-3 w-full h-[100px] justify-between"
      >
        <div className="flex flex-row gap-1 items-center">
          <ConnectionLogo
            size={"sm"}
            connectionName={connection.name.toLowerCase()}
          />
          <Typography variant={"small"} weight={"medium"}>
            {connection.name}
          </Typography>
        </div>
        <div className="flex flex-row gap-1 items-center justify-between">
          <Typography variant={"xSmall"} color={"quaternary"}>
            {connection.enabled ? "Connected" : "Disconnected"}
          </Typography>
          <IconSelector
            data-slot="connection-card-arrow-right"
            icon="ArrowRight"
            className="size-6 text-border-secondary transition-colors"
          />
        </div>
      </div>
    </Link>
  );
}
