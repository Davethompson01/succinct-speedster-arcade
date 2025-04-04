
import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import GameControls from "./GameControls";

interface Position {
  x: number;
  y: number;
}

interface Obstacle {
  id: number;
  position: Position;
  moveDirection: 'left' | 'right';
}

const GameBoard = ({ size = 10 }: { size?: number }) => {
  const { toast } = useToast();
  const [car, setCar] = useState<Position>({ x: Math.floor(size/2), y: size - 1 });
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(600); // milliseconds
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const obstacleIdRef = useRef(0);

  // Create game board grid cells
  const grid = Array(size).fill(0).map(() => Array(size).fill(0));

  const createObstacle = () => {
    if (!gameStarted) return;
    
    const newObstacleX = Math.floor(Math.random() * size);
    const moveDir: 'left' | 'right' = Math.random() > 0.5 ? 'left' : 'right';
    
    const newObstacle: Obstacle = { 
      id: obstacleIdRef.current++, 
      position: { x: newObstacleX, y: 0 },
      moveDirection: moveDir
    };
    
    setObstacles(prev => [...prev, newObstacle]);
  };

  const moveObstacles = () => {
    setObstacles(prev => {
      // Move obstacles down and sideways based on their direction
      const movedObstacles = prev.map(obstacle => {
        let newX = obstacle.position.x;
        
        // Occasionally move the crab left or right
        if (Math.random() < 0.3) {
          if (obstacle.moveDirection === 'left' && newX > 0) {
            newX -= 1;
          } else if (obstacle.moveDirection === 'right' && newX < size - 1) {
            newX += 1;
          }
        }
        
        return {
          ...obstacle,
          position: {
            x: newX,
            y: obstacle.position.y + 1
          }
        };
      });
      
      // Remove obstacles that go off the board
      return movedObstacles.filter(obs => obs.position.y < size);
    });
  };

  const checkCollision = () => {
    for (const obstacle of obstacles) {
      if (obstacle.position.x === car.x && obstacle.position.y === car.y) {
        endGame();
        return true;
      }
    }
    return false;
  };

  const incrementScore = () => {
    setScore(prev => prev + 1);
    
    // Increase speed every 10 points
    if (score > 0 && score % 10 === 0) {
      setGameSpeed(prev => Math.max(200, prev - 50));
      toast({
        title: "Speed Increased!",
        description: "The game just got faster!",
        duration: 2000
      });
    }
  };

  const endGame = () => {
    setGameStarted(false);
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    
    toast({
      title: "Game Over!",
      description: `Your score: ${score}`,
      variant: "destructive"
    });
  };

  const startGame = () => {
    setCar({ x: Math.floor(size/2), y: size - 1 });
    setObstacles([]);
    setScore(0);
    setGameSpeed(600);
    setGameStarted(true);
  };

  const resetGame = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    setGameStarted(false);
    setCar({ x: Math.floor(size/2), y: size - 1 });
    setObstacles([]);
    setScore(0);
  };

  const moveCar = (direction: string) => {
    if (!gameStarted) return;
    
    setCar(prev => {
      let newPos = { ...prev };
      
      switch(direction) {
        case 'up':
          if (prev.y > 0) newPos.y = prev.y - 1;
          break;
        case 'down':
          if (prev.y < size - 1) newPos.y = prev.y + 1;
          break;
        case 'left':
          if (prev.x > 0) newPos.x = prev.x - 1;
          break;
        case 'right':
          if (prev.x < size - 1) newPos.x = prev.x + 1;
          break;
        default:
          break;
      }
      
      return newPos;
    });
  };

  // Game loop
  useEffect(() => {
    if (gameStarted) {
      gameLoopRef.current = setInterval(() => {
        moveObstacles();
        incrementScore();
        
        // Random chance to create new obstacle
        if (Math.random() < 0.3) {
          createObstacle();
        }
      }, gameSpeed);
    }
    
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [gameStarted, gameSpeed]);

  // Check for collisions after car or obstacles move
  useEffect(() => {
    if (gameStarted) {
      checkCollision();
    }
  }, [car, obstacles, gameStarted]);

  return (
    <div className="flex flex-col items-center">
      <div 
        className="grid gap-1 bg-secondary/30 p-4 rounded-lg border border-border"
        style={{ 
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          width: 'min(100%, 500px)', // Increased from 400px to 500px
          height: 'min(100vw, 500px)' // Added height to maintain aspect ratio
        }}
      >
        {grid.map((row, rowIndex) => 
          row.map((_, colIndex) => {
            const isCar = car.x === colIndex && car.y === rowIndex;
            const obstacle = obstacles.find(o => o.position.x === colIndex && o.position.y === rowIndex);
            
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  aspect-square rounded-sm relative
                  ${isCar ? 'bg-primary' : 'bg-secondary/50'}
                `}
                style={{ width: `${100 / size}%` }}
              >
                {obstacle && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl animate-bounce text-pink-300 crab-walk">
                      🦀
                    </div>
                  </div>
                )}
                {isCar && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-lg">
                      🚗
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
      
      <GameControls 
        onMove={moveCar} 
        onStart={startGame}
        onReset={resetGame}
        gameStarted={gameStarted}
        score={score}
      />
    </div>
  );
};

const CarGame = () => {
  return (
    <section id="game" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Succinct Speedster Arcade
            </span>
          </h2>
          <p className="text-muted-foreground">
            Test your reflexes with our simple car racing game. Avoid the crabs, 
            collect points, and see how long you can last as the speed increases!
          </p>
        </div>

        <div className="max-w-2xl mx-auto"> <!-- Increased from max-w-lg to max-w-2xl -->
          <Card className="bg-card/50 backdrop-blur-sm border border-border overflow-hidden">
            <CardHeader>
              <CardTitle>Crab Dodge</CardTitle>
              <CardDescription>
                Use arrow keys or buttons to move your car and avoid the crabs
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <GameBoard size={10} /> <!-- Increased from 8 to 10 -->
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CarGame;
