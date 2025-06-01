import IconButton from "@/app/components/icon-button";
import IconSelector from "@/app/components/icon-selector";
import { useSyncSelectedPortfolio } from "@/providers/portfolio-provider";
import { useQueryClient } from "@tanstack/react-query";

export default function SyncButton() {
  const queryClient = useQueryClient();
  const syncSelectedPortfolio = useSyncSelectedPortfolio();

  const handleRefresh = async () => {
    await queryClient.invalidateQueries();
    syncSelectedPortfolio();
  };

  return (
    <IconButton variant="tertiaryGray" onClick={handleRefresh}>
      <IconSelector icon="RefreshCcw01" />
    </IconButton>
  );
}
