"use client";

import { useControlPanelStore } from "@/hooks/useControlPanel";
import { memo, useCallback } from "react";
import DropdownMenu, {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import IconButton from "../icon-button";
import IconSelector from "../icon-selector";
import Switch from "../switch";

const CURRENCIES = ["USD", "EUR", "GBP"] as const;
const TIMEFRAMES = ["Daily", "Weekly", "Monthly", "Yearly"] as const;

type Currency = (typeof CURRENCIES)[number];
type Timeframe = (typeof TIMEFRAMES)[number];

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

export default memo(function ControlPanel({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    isDarkMode,
    currency,
    timeframe,
    setDarkMode,
    setCurrency,
    setTimeframe,
  } = useControlPanelStore();

  const handleCurrencyChange = useCallback(
    (newCurrency: Currency) => {
      setCurrency(newCurrency);
    },
    [setCurrency]
  );

  const handleTimeframeChange = useCallback(
    (newTimeframe: Timeframe) => {
      setTimeframe(newTimeframe);
    },
    [setTimeframe]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton variant="tertiaryGray">
          <IconSelector icon="Settings01" className="size-5" />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Control Panel</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Currency</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {CURRENCIES.map((curr) => (
                  <DropdownMenuItem
                    key={curr}
                    onClick={() => handleCurrencyChange(curr)}
                  >
                    {curr}
                    {currency === curr && (
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
                {TIMEFRAMES.map((tf) => (
                  <DropdownMenuItem
                    key={tf}
                    onClick={() => handleTimeframeChange(tf)}
                  >
                    {tf}
                    {timeframe === tf && (
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

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setDarkMode(!isDarkMode)}>
          Dark
          <Switch
            id="dark-mode"
            checked={isDarkMode}
            onCheckedChange={setDarkMode}
            className="ml-auto cursor-pointer"
          />
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <div className="w-full border-t border-border-secondary" />

        <DropdownMenuItem className="text-text-error-primary">
          Log out
          <IconSelector icon="LogOut01" className="size-5 ml-auto" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
