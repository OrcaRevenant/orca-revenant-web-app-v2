import Card from "@/app/components/card";
import LineChart from "@/app/components/line-chart";
import Select, {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/select";
import Typography from "@/app/components/typography";

export default function OverallPortfolioValue() {
  return (
    <Card
      title="Overall Portfolio Value"
      action={
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Time Periods</SelectLabel>
              <SelectItem value="1d">Daily</SelectItem>
              <SelectItem value="1w">Weekly</SelectItem>
              <SelectItem value="1m">Monthly</SelectItem>
              <SelectItem value="1y">Yearly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      }
    >
      <div className="h-[240px]">
        <LineChart
          data={[
            { time: "2023-12-31", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-01", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-02", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-03", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-04", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-05", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-06", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-07", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-08", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-09", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-10", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-11", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-12", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-13", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-14", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-15", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-16", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-17", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-18", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-19", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-20", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-21", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-22", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-23", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-24", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-25", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-26", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-27", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-28", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-29", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-30", value: Math.floor(Math.random() * 1000) },
            { time: "2024-01-31", value: Math.floor(Math.random() * 1000) },
            { time: "2024-02-01", value: Math.floor(Math.random() * 1000) },
            { time: "2024-02-02", value: Math.floor(Math.random() * 1000) },
            { time: "2024-02-03", value: Math.floor(Math.random() * 1000) },
            { time: "2024-02-04", value: Math.floor(Math.random() * 1000) },
            { time: "2024-02-05", value: Math.floor(Math.random() * 1000) },
            { time: "2024-02-06", value: Math.floor(Math.random() * 1000) },
            { time: "2024-02-07", value: Math.floor(Math.random() * 1000) },
          ]}
        />
      </div>

      <div className="flex flex-row gap-4 justify-evenly">
        <div className="flex flex-col gap-2 p-5">
          <Typography variant={"small"} weight={"semibold"} color={"tertiary"}>
            All Time High
          </Typography>
          <Typography
            variant={"displaySmall"}
            weight={"semibold"}
            color={"primary"}
          >
            $100,000
          </Typography>
        </div>

        <div className="flex flex-col gap-2 p-5">
          <Typography variant={"small"} weight={"semibold"} color={"tertiary"}>
            Average
          </Typography>
          <Typography
            variant={"displaySmall"}
            weight={"semibold"}
            color={"primary"}
          >
            $100,000
          </Typography>
        </div>
        
        <div className="flex flex-col gap-2 p-5">
          <Typography variant={"small"} weight={"semibold"} color={"tertiary"}>
            Average
          </Typography>
          <Typography
            variant={"displaySmall"}
            weight={"semibold"}
            color={"primary"}
          >
            $100,000
          </Typography>
        </div>
      </div>
    </Card>
  );
}
