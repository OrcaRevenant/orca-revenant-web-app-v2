import Button from "@/app/components/button";
import IconSelector from "@/app/components/icon-selector";
import Sheet, {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/sheet";
import PortfolioAllGroupCard from "../portfolio-all-group-card";
import PortfolioCard from "../portfolio-card";
import ScrollArea, { ScrollBar } from "@/app/components/scroll-area";
import Typography from "@/app/components/typography";

export default function PortfolioPanel() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondaryGray">Portfolio Tracker</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Portfolios</SheetTitle>
            <SheetDescription>Select your portfolio</SheetDescription>
          </SheetHeader>
          <div className="h-full flex flex-col w-full py-3 px-2.5 space-y-3">
            <Button className="w-full" variant="secondaryGray">
              <IconSelector icon="PlusSquare" />
              Add Portfolio
            </Button>
            <PortfolioAllGroupCard />
            <ScrollArea type="auto" className="flex-auto w-full overflow-y-auto h-0">
              <div className="space-y-3">
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
              </div>
              <ScrollBar />
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
