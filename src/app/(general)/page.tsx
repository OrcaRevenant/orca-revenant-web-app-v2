import Button from "@/app/components/button";
import Container from "@/app/components/container";
import IconSelector from "@/app/components/icon-selector";
import Typography from "@/app/components/typography";

export default function LandingPage() {
  return (
    <div className="w-full h-[calc(100vh-var(--navbar-height))]">
      <div className="relative flex flex-col h-full w-full justify-center items-center">
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/videos/arua.webm" type="video/webm" />
          </video>
        </div>
        <Container maxWidth="xl" className="relative z-10">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col">
              <Typography
                variant="display2XLarge"
                weight="semibold"
                color="primary"
                className="text-center"
              >
                Connect, Track, and Maximize Your Profits Effortlessly.
              </Typography>
              <Typography
                variant="medium"
                weight="medium"
                color="secondary"
                className="text-center"
              >
                Effortless Crypto Portfolio Tracking – Stay Ahead with Real-Time
                Insights.
              </Typography>
            </div>
            <div className="flex flex-row space-x-2 w-full justify-center">
              <Button variant="secondaryGray" size="md">
                <IconSelector icon="Telescope" className="size-5" />
                Learn More
              </Button>
              <Button variant="primary" size="md">
                <IconSelector icon="Rocket02" className="size-5" />
                Get Started
              </Button>
            </div>
            <Typography variant="xSmall" color="tertiary">
              Powered by Orca 🐳
            </Typography>
          </div>
        </Container>
      </div>
    </div>
  );
}
