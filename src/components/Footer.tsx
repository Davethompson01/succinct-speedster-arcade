
import { Button } from "@/components/ui/button";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Succinct Labs
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Exploring the frontiers of blockchain technology through innovation, 
              collaboration, and community.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#game" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Game
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Connect</h4>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full md:w-auto">
              <a href="https://x.com/SuccinctLabs" target="_blank" rel="noopener noreferrer">
                Follow on X (Twitter)
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {year} Succinct Labs Community Fan Site. This is an unofficial community website.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
