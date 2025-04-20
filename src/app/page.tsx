import Typography from "./components/ui/typography";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center h-screen space-y-4">
      <div className="flex flex-col space-y-4">
        <Typography variant="Display2XLarge">Hello World</Typography>
        <Typography variant="DisplayXLarge">Hello World</Typography>
        <Typography variant="DisplayLarge">Hello World</Typography>
        <Typography variant="DisplayMedium">Hello World</Typography>
        <Typography variant="DisplaySmall">Hello World</Typography>
        <Typography variant="DisplayXSmall">Hello World</Typography>
        <Typography variant="XLarge">Hello World</Typography>
        <Typography variant="Large">Hello World</Typography>
        <Typography variant="Medium">Hello World</Typography>
        <Typography variant="Small">Hello World</Typography>
        <Typography variant="XSmall">Hello World</Typography>
      </div>
    </main>
  );
}
