
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <Logo />
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-foreground/80 hover:text-succinct-pink transition-colors">Home</a>
          <a href="#about" className="text-foreground/80 hover:text-succinct-pink transition-colors">About</a>
          <a href="#game" className="text-foreground/80 hover:text-succinct-pink transition-colors">Game</a>
          <a href="https://x.com/SuccinctLabs" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-succinct-pink text-succinct-pink hover:bg-succinct-pink/10">Follow on X</Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-foreground/80 hover:text-succinct-pink transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-succinct-pink transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#game" 
              className="text-foreground/80 hover:text-succinct-pink transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Game
            </a>
            <a 
              href="https://x.com/SuccinctLabs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2"
            >
              <Button variant="outline" className="border-succinct-pink text-succinct-pink hover:bg-succinct-pink/10 w-full">
                Follow on X
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
