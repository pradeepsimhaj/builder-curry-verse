import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Heart,
  Star,
  CheckCircle,
  Rocket,
} from "lucide-react";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showOnboardingTooltip, setShowOnboardingTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Show onboarding tooltip after 2 seconds
    const tooltipTimer = setTimeout(() => {
      if (!hasInteracted) {
        setShowOnboardingTooltip(true);
      }
    }, 2000);

    // Hide tooltip after 5 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowOnboardingTooltip(false);
    }, 7000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!hasInteracted) {
        setHasInteracted(true);
        setShowOnboardingTooltip(false);
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, [hasInteracted]);

  const scrollProgress = Math.min(
    (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) *
      100,
    100,
  );

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-border/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float transition-all duration-300"
          style={{
            left: mousePosition.x * 0.02 - scrollY * 0.1 + "px",
            top: mousePosition.y * 0.02 - scrollY * 0.05 + "px",
            transform: hasInteracted ? "scale(1.2)" : "scale(1)",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-accent/20 blur-3xl animate-float animation-delay-400 transition-all duration-300"
          style={{
            right: mousePosition.x * 0.01 + scrollY * 0.05 + "px",
            bottom: mousePosition.y * 0.01 + scrollY * 0.03 + "px",
            transform: hasInteracted ? "scale(1.1)" : "scale(1)",
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full bg-primary/10 blur-2xl animate-float animation-delay-600 transition-all duration-500"
          style={{
            left: "60%",
            top: "70%",
            transform: `translateX(${mousePosition.x * 0.005}px) translateY(${mousePosition.y * 0.005}px) scale(${hasInteracted ? 1.3 : 1})`,
          }}
        />
      </div>

      {/* Onboarding Tooltip */}
      {showOnboardingTooltip && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-fade-in">
          <Card className="border-primary/20 bg-card/90 backdrop-blur-sm p-4 max-w-sm animate-glow">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <div>
                <p className="text-sm font-medium">Welcome to MotionFolio!</p>
                <p className="text-xs text-foreground/70">
                  Move your mouse to see the magic ✨
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div
          className={`text-2xl font-bold text-gradient transition-all duration-700 ${isVisible ? "animate-slide-in" : "opacity-0"}`}
        >
          MotionFolio
        </div>
        <div
          className={`flex items-center gap-6 transition-all duration-700 animation-delay-200 ${isVisible ? "animate-slide-in" : "opacity-0"}`}
        >
          <Link
            to="/work"
            className="text-foreground/80 hover:text-primary transition-colors hover:scale-110 transform"
          >
            Work
          </Link>
          <Link
            to="/about"
            className="text-foreground/80 hover:text-primary transition-colors hover:scale-110 transform"
          >
            About
          </Link>
          <Button
            asChild
            variant="outline"
            className="border-primary/20 hover:bg-primary/10 hover:scale-110 transform transition-all"
          >
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-12 md:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="secondary"
            className={`mb-6 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 transition-all duration-700 animation-delay-400 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Motion Designer & Developer
          </Badge>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 animation-delay-600 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            Crafting <span className="text-gradient">Beautiful</span>
            <br />
            Product Experiences
          </h1>

          <p
            className={`text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto transition-all duration-700 animation-delay-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            I design and develop stunning micro-interactions, onboarding flows,
            and celebratory moments that delight users and drive engagement.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 animation-delay-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group animate-glow"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/10 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo Reel
            </Button>
          </div>
        </div>
      </div>

      {/* Motion Showcase Cards */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-20 md:pt-32">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <MotionCard
            icon={<Zap className="w-8 h-8" />}
            title="Micro-Interactions"
            description="Delightful hover states, button animations, and form feedback that guide users naturally."
            delay="200"
          />
          <MotionCard
            icon={<Rocket className="w-8 h-8" />}
            title="Onboarding Flows"
            description="Smooth progressive disclosure and guided tours that welcome users without overwhelming them."
            delay="400"
          />
          <MotionCard
            icon={<Heart className="w-8 h-8" />}
            title="Celebratory Moments"
            description="Joyful success animations and achievement unlocks that make every win feel special."
            delay="600"
          />
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-20 md:pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the <span className="text-gradient">Magic</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-12">
            Hover, click, and interact with these examples to feel the
            difference motion makes.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <InteractiveDemo
              title="Button Evolution"
              description="From simple click to delightful interaction"
            />
            <InteractiveDemo
              title="Progress Celebration"
              description="Making achievements feel rewarding"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MotionCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setClickCount((prev) => prev + 1);
  };

  const getExtraContent = () => {
    switch (title) {
      case "Micro-Interactions":
        return "From button hover states to form validation feedback, every small interaction contributes to the overall user experience.";
      case "Onboarding Flows":
        return "Step-by-step guidance that reduces cognitive load and helps users discover features naturally without feeling overwhelmed.";
      case "Celebratory Moments":
        return "Transform routine tasks into memorable experiences with thoughtful animations that acknowledge user achievements.";
      default:
        return "";
    }
  };

  return (
    <Card
      className={`group border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 cursor-pointer animate-fade-in animation-delay-${delay} ${
        isExpanded ? "scale-105 border-primary/50" : ""
      } ${clickCount > 0 ? "animate-glow" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <CardContent className="p-6 text-center relative overflow-hidden">
        {/* Click celebration effect */}
        {clickCount > 0 && (
          <div className="absolute top-2 right-2 animate-fade-in">
            <Badge
              variant="secondary"
              className="text-xs bg-primary/20 text-primary border-primary/30"
            >
              +{clickCount} {clickCount === 1 ? "click" : "clicks"}
            </Badge>
          </div>
        )}

        <div
          className={`text-primary mb-4 transition-all duration-500 ${
            isHovered ? "scale-110 rotate-12" : ""
          } ${isExpanded ? "scale-125 rotate-180" : ""}`}
        >
          {icon}
        </div>

        <h3
          className={`text-xl font-semibold mb-3 transition-all duration-300 ${
            isExpanded ? "text-primary" : ""
          }`}
        >
          {title}
        </h3>

        <p className="text-foreground/70 mb-3">{description}</p>

        {/* Progressive disclosure content */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isExpanded ? "max-h-32 opacity-100 mb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-3 border-t border-primary/20">
            <p className="text-sm text-foreground/60">{getExtraContent()}</p>
          </div>
        </div>

        <div
          className={`flex items-center justify-center gap-2 text-xs text-primary transition-all duration-300 ${
            isHovered || isExpanded ? "opacity-100" : "opacity-60"
          }`}
        >
          <span>
            {isExpanded ? "Click to collapse" : "Click to learn more"}
          </span>
          <ArrowRight
            className={`w-3 h-3 transition-transform duration-300 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function InteractiveDemo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationStars, setCelebrationStars] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const handleDemo = () => {
    setProgress(0);
    setIsCompleted(false);
    setShowCelebration(false);
    setCelebrationStars([]);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsCompleted(true);
          triggerCelebration();
          return 100;
        }
        return prev + 3;
      });
    }, 30);
  };

  const triggerCelebration = () => {
    setShowCelebration(true);

    // Create floating stars
    const stars = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setCelebrationStars(stars);

    // Hide celebration after 3 seconds
    setTimeout(() => {
      setShowCelebration(false);
      setCelebrationStars([]);
    }, 3000);
  };

  const resetDemo = () => {
    setProgress(0);
    setIsCompleted(false);
    setShowCelebration(false);
    setCelebrationStars([]);
  };

  return (
    <Card className="border-primary/10 bg-card/50 backdrop-blur-sm p-6 relative overflow-hidden">
      {/* Celebration Stars */}
      {showCelebration &&
        celebrationStars.map((star) => (
          <div
            key={star.id}
            className="absolute pointer-events-none animate-float z-10"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.id * 200}ms`,
              animationDuration: "2s",
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
        ))}

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 mb-6">{description}</p>

      <div className="space-y-4">
        <Button
          onClick={isCompleted ? resetDemo : handleDemo}
          className={`w-full transition-all duration-500 transform ${
            isCompleted
              ? "bg-green-500 hover:bg-green-600 scale-105 animate-glow"
              : progress > 0 && progress < 100
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-primary hover:bg-primary/90 hover:scale-105"
          }`}
          disabled={progress > 0 && progress < 100}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2 animate-bounce" />
              Try Again!
              <Rocket className="w-4 h-4 ml-2 animate-bounce animation-delay-200" />
            </>
          ) : progress > 0 ? (
            <>
              <div className="w-4 h-4 mr-2 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              {progress < 50
                ? "Processing"
                : progress < 80
                  ? "Almost there"
                  : "Finishing"}
              ...
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Try Interactive Demo
            </>
          )}
        </Button>

        {progress > 0 && (
          <div className="bg-secondary rounded-full h-3 overflow-hidden relative">
            <div
              className={`h-full transition-all duration-200 ease-out relative ${
                progress === 100 ? "bg-green-500" : "bg-primary"
              }`}
              style={{ width: `${progress}%` }}
            >
              {progress > 20 && (
                <div className="absolute right-1 top-0 h-full flex items-center">
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                </div>
              )}
            </div>
          </div>
        )}

        {isCompleted && (
          <div className="text-center animate-fade-in space-y-2">
            <div className="inline-flex items-center gap-2 text-green-500 text-sm font-medium">
              <Star className="w-4 h-4 animate-pulse" />
              {title === "Button Evolution"
                ? "Smooth & Delightful!"
                : "Achievement Unlocked!"}
              <Star className="w-4 h-4 animate-pulse animation-delay-200" />
            </div>
            <div className="text-xs text-foreground/60">
              {title === "Button Evolution"
                ? "Notice how the button transforms with purpose"
                : "Every milestone deserves celebration ✨"}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
