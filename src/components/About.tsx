
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Community First",
    description: "Building with and for our vibrant community of developers, researchers, and enthusiasts.",
    buttonText: "Join Us",
    buttonUrl: "https://x.com/SuccinctLabs",
  },
  {
    title: "Open Innovation",
    description: "Collaborating on cutting-edge technologies that push the boundaries of what's possible.",
    buttonText: "Learn More",
    buttonUrl: "https://x.com/SuccinctLabs",
  },
  {
    title: "Tech Excellence",
    description: "Committed to technical excellence and rigorous standards in everything we build.",
    buttonText: "Explore",
    buttonUrl: "https://x.com/SuccinctLabs",
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Succinct Labs</h2>
          <p className="text-muted-foreground">
            We're a community-driven team working at the forefront of blockchain technology 
            and decentralized systems. Our mission is to create innovative solutions that 
            empower users and developers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 min-h-[80px]">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a href={feature.buttonUrl} target="_blank" rel="noopener noreferrer">
                    {feature.buttonText}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Connect With Our Community</h3>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/80 text-white">
            <a href="https://x.com/SuccinctLabs" target="_blank" rel="noopener noreferrer">
              Follow on X (Twitter)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
