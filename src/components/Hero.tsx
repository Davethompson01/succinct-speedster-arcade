
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-secondary/30 rounded-full text-sm font-medium text-succinct-pink mb-2">
              Community-driven innovation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="bg-gradient-to-r from-succinct-pink to-succinct-lightpink bg-clip-text text-transparent shiny-text">Succinct Labs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Exploring the frontiers of blockchain technology through innovation, 
              collaboration, and community. Join us in building the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-succinct-pink hover:bg-succinct-pink/80 text-white">
                <a href="#game">Play Our Game</a>
              </Button>
              <Button size="lg" variant="outline" className="border-succinct-pink text-succinct-pink hover:bg-succinct-pink/10">
                <a href="https://x.com/SuccinctLabs" target="_blank" rel="noopener noreferrer">
                  Join Community
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 flex items-center justify-center">
            <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-succinct-lightpink/20 rounded-full filter blur-3xl" />
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-succinct-pink/20 rounded-full filter blur-3xl transform translate-x-8" />
            <div className="z-10 bg-gradient-to-br from-secondary to-background p-6 rounded-xl border border-border backdrop-blur-sm shadow-xl float">
              <div className="w-full h-32 md:h-48 bg-gradient-to-r from-succinct-lightpink/30 to-succinct-pink/30 rounded-lg flex flex-col items-center justify-center gap-4">
                <Logo size="large" />
                <span className="text-2xl md:text-4xl font-bold text-white">Succinct Labs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
