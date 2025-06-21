import IconButton from "@/app/components/icon-button";
import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";
import { cn } from "@/lib/utils";
// import { useSyncSelectedPortfolio } from "@/providers/portfolio-provider";
// import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function SyncButton() {
  // const queryClient = useQueryClient();
  // const syncSelectedPortfolio = useSyncSelectedPortfolio();
  const [isSyncing, setIsSyncing] = useState(false);

  const handleRefresh = async () => {
    // await queryClient.invalidateQueries();
    // syncSelectedPortfolio();
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      toast.success("Synced!");
    }, 1000);
  };

  return (
    <div className="flex items-center space-x-2 hover:**:data-[slot=last-sync-time]:opacity-100">
      <Typography
        data-slot="last-sync-time"
        variant={"xSmall"}
        className={cn("opacity-0 transition-opacity select-none duration-500", isSyncing && "!opacity-0")}
        color={"tertiary"}
      >
        Last sync: 4min ago
      </Typography>

      <IconButton variant="tertiaryGray" onClick={handleRefresh}>
        <IconSelector
          icon="RefreshCcw01"
          className={cn(
            isSyncing &&
              "animate-spin direction-reverse animation-duration-[300ms] text-utility-brand-500 transition"
          )}
        />
      </IconButton>
    </div>
  );
}
