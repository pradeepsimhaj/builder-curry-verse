import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description = "This page is coming soon! Continue exploring other sections or contact me to discuss your project needs.",
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <Link
          to="/"
          className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
        >
          MotionFolio
        </Link>
        <div className="flex items-center gap-6">
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-20">
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/10 bg-card/50 backdrop-blur-sm animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Construction className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-foreground/80">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/10"
                >
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button className="bg-primary hover:bg-primary/90">
                  Get in Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
