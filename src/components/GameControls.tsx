
import { Button } from "@/components/ui/button";

interface GameControlsProps {
  onMove: (direction: string) => void;
  onStart: () => void;
  onReset: () => void;
  gameStarted: boolean;
  score: number;
}

const GameControls = ({ onMove, onStart, onReset, gameStarted, score }: GameControlsProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch(e.key) {
      case 'ArrowUp':
        onMove('up');
        break;
      case 'ArrowDown':
        onMove('down');
        break;
      case 'ArrowLeft':
        onMove('left');
        break;
      case 'ArrowRight':
        onMove('right');
        break;
      default:
        break;
    }
  };

  return (
    <div 
      className="mt-4 flex flex-col items-center space-y-6"
      tabIndex={0} 
      onKeyDown={handleKeyDown}
    >
      <div className="text-xl font-bold">Score: {score}</div>
      
      {!gameStarted ? (
        <Button 
          onClick={onStart}
          className="bg-accent hover:bg-accent/80 text-white"
        >
          Start Game
        </Button>
      ) : (
        <Button 
          onClick={onReset}
          variant="outline"
          className="border-destructive text-destructive hover:bg-destructive/10"
        >
          Reset Game
        </Button>
      )}
      
      {gameStarted && (
        <>
          <div className="grid grid-cols-3 gap-2">
            <div></div>
            <Button 
              variant="secondary"
              onClick={() => onMove('up')}
              className="aspect-square"
            >
              ↑
            </Button>
            <div></div>
            
            <Button 
              variant="secondary"
              onClick={() => onMove('left')}
              className="aspect-square"
            >
              ←
            </Button>
            
            <Button 
              variant="secondary"
              onClick={() => onMove('down')}
              className="aspect-square"
            >
              ↓
            </Button>
            
            <Button 
              variant="secondary"
              onClick={() => onMove('right')}
              className="aspect-square"
            >
              →
            </Button>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            You can also use arrow keys to move
          </div>
        </>
      )}
    </div>
  );
};

export default GameControls;
