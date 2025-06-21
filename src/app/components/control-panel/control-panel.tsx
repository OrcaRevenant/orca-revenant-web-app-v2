"use client";

import { memo, useCallback } from "react";
import DropdownMenu, {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import IconButton from "../icon-button";
import IconSelector from "../icon-selector";
import Switch from "../switch";
import { appConfig, BaseCurrency, BaseTimeframe } from "@/config";
import { useControlPanel } from "@/providers/control-provider";

interface MenuItemProps {
  value: string;
  selectedValue: string;
  onClick: () => void;
}

const MenuItem = memo(({ value, selectedValue, onClick }: MenuItemProps) => (
  <DropdownMenuItem
    onClick={onClick}
    className={selectedValue === value ? "bg-background-secondary" : ""}
  >
    {value}
  </DropdownMenuItem>
));

MenuItem.displayName = "MenuItem";

export default memo(function ControlPanel({}: React.ComponentProps<"div">) {
  const { config, setConfig } = useControlPanel();

  const handleCurrencyChange = useCallback(
    (newCurrency: BaseCurrency) => {
      setConfig({ quoteCurrency: newCurrency });
    },
    [setConfig]
  );

  const handleBaseTimeframeChange = useCallback(
    (newBaseTimeframe: BaseTimeframe) => {
      setConfig({ timeframe: newBaseTimeframe });
    },
    [setConfig]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton variant="tertiaryGray">
          <IconSelector icon="Settings01" className="size-5" />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Currency</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {appConfig.quote.currencies.map((curr) => (
                  <DropdownMenuItem
                    key={curr.key}
                    onClick={() => handleCurrencyChange(curr)}
                  >
                    {curr.key.toUpperCase()}
                    {config.quoteCurrency.key === curr.key && (
                      <IconSelector
                        icon="Check"
                        className="text-utility-brand-500 ml-auto"
                      />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Timeframe</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {appConfig.timeframe.timeframes.map((tf) => (
                  <DropdownMenuItem
                    key={tf.key}
                    onClick={() => handleBaseTimeframeChange(tf)}
                  >
                    {tf.label}
                    {config.timeframe.key === tf.key && (
                      <IconSelector
                        icon="Check"
                        className="text-utility-brand-500 ml-auto"
                      />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuItem
          onClick={() => {
            if (config.palette === "dark")
              document.documentElement.classList.remove("dark");
            else document.documentElement.classList.add("dark");

            setConfig({
              palette: config.palette === "dark" ? "light" : "dark",
            });
          }}
        >
          Dark
          <Switch
            id="dark-mode"
            checked={config.palette === "dark"}
            className="ml-auto cursor-pointer"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
