import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle,
  Heart,
  Globe,
  Coffee,
  Clock,
  Star,
  Zap,
} from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after celebration
    setTimeout(() => {
      setFormData({ name: "", email: "", project: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float top-20 left-20" />
        <div className="absolute w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float animation-delay-400 bottom-20 right-20" />
        <div className="absolute w-48 h-48 rounded-full bg-primary/5 blur-2xl animate-float animation-delay-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <Link
          to="/"
          className={`text-2xl font-bold text-gradient hover:scale-105 transition-transform ${isVisible ? "animate-slide-in" : "opacity-0"}`}
        >
          MotionFolio
        </Link>
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
          <Badge
            variant="secondary"
            className="bg-primary/20 text-primary border-primary/30"
          >
            Contact
          </Badge>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div
            className={`transition-all duration-700 animation-delay-400 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <Badge
              variant="secondary"
              className="mb-6 text-sm px-4 py-2 bg-accent/10 text-accent border-accent/20"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Let's Create Something Amazing
            </Badge>
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 animation-delay-600 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            Ready to <span className="text-gradient">Collaborate</span>?
          </h1>

          <p
            className={`text-xl text-foreground/80 mb-8 max-w-2xl mx-auto transition-all duration-700 animation-delay-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            I'd love to hear about your project and discuss how we can bring
            your ideas to life with stunning motion design.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card
            className={`border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-700 animation-delay-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`transition-all duration-300 ${
                        focusedField === "name"
                          ? "scale-105 border-primary"
                          : ""
                      } ${formData.name ? "border-green-500" : ""}`}
                    />
                    {formData.name && (
                      <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500 animate-fade-in" />
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`transition-all duration-300 ${
                        focusedField === "email"
                          ? "scale-105 border-primary"
                          : ""
                      } ${formData.email ? "border-green-500" : ""}`}
                    />
                    {formData.email && (
                      <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500 animate-fade-in" />
                    )}
                  </div>
                </div>

                <div className="relative">
                  <Input
                    placeholder="Project type (e.g., Website, App, Animation)"
                    value={formData.project}
                    onChange={(e) =>
                      handleInputChange("project", e.target.value)
                    }
                    onFocus={() => setFocusedField("project")}
                    onBlur={() => setFocusedField(null)}
                    className={`transition-all duration-300 ${
                      focusedField === "project"
                        ? "scale-105 border-primary"
                        : ""
                    } ${formData.project ? "border-green-500" : ""}`}
                  />
                  {formData.project && (
                    <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500 animate-fade-in" />
                  )}
                </div>

                <div className="relative">
                  <Textarea
                    placeholder="Tell me about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`min-h-32 transition-all duration-300 ${
                      focusedField === "message"
                        ? "scale-105 border-primary"
                        : ""
                    } ${formData.message ? "border-green-500" : ""}`}
                  />
                  {formData.message && (
                    <CheckCircle className="absolute right-3 top-3 w-4 h-4 text-green-500 animate-fade-in" />
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 hover:bg-green-600"
                      : isFormValid
                        ? "bg-primary hover:bg-primary/90 animate-glow"
                        : "bg-muted"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Heart className="w-4 h-4 mr-2 animate-pulse" />
                      Message Sent! Thank You!
                      <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {isSubmitted && (
                  <div className="text-center animate-fade-in">
                    <div className="inline-flex items-center gap-2 text-green-500 text-sm">
                      <Star className="w-4 h-4 animate-pulse" />
                      I'll get back to you within 24 hours!
                      <Star className="w-4 h-4 animate-pulse animation-delay-200" />
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-700 animation-delay-1200 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <ContactInfoCard
              icon={<Globe className="w-6 h-6" />}
              title="Work Globally"
              description="Based in San Francisco, working with clients worldwide"
              highlight="Remote-first approach"
            />

            <ContactInfoCard
              icon={<Clock className="w-6 h-6" />}
              title="Quick Response"
              description="Typically respond within 4-6 hours during business days"
              highlight="PST Timezone"
            />

            <ContactInfoCard
              icon={<Coffee className="w-6 h-6" />}
              title="Coffee Chat"
              description="Love discussing projects over virtual coffee"
              highlight="30-min discovery calls"
            />

            {/* Quick Stats */}
            <Card className="border-primary/10 bg-card/50 backdrop-blur-sm p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-foreground/70">
                    Response Time
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-foreground/70">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-foreground/70">
                    Client Satisfaction
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">3+</div>
                  <div className="text-sm text-foreground/70">
                    Years Experience
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoCard({
  icon,
  title,
  description,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="border-primary/10 bg-card/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-primary/30 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={`text-primary transition-all duration-300 ${isHovered ? "scale-110 rotate-12" : ""}`}
          >
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-foreground/70 text-sm mb-2">{description}</p>
            <Badge
              variant="secondary"
              className="text-xs bg-primary/10 text-primary border-primary/20"
            >
              {highlight}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
