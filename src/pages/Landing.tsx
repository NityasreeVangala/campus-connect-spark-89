import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Users,
  Briefcase,
  Target,
  TrendingUp,
  Shield,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import careerPath from "@/assets/career-path.jpg";
import dashboardIllustration from "@/assets/dashboard-illustration.jpg";

const Landing = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Resume Analyzer",
      description: "Get instant ATS score and personalized suggestions to optimize your resume.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Briefcase,
      title: "Smart Job Matching",
      description: "AI-powered recommendations match you with the perfect opportunities.",
      gradient: "from-secondary to-orange-500",
    },
    {
      icon: Users,
      title: "Multi-Role Platform",
      description: "Seamless collaboration between students, recruiters, and placement cells.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Application Tracking",
      description: "Monitor your job applications and interview schedules in one place.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Real-time insights and analytics for placement cells and recruiters.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security to protect your data and privacy.",
      gradient: "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">AI-Powered Campus Placement</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Your Career,{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Accelerated
                </span>
              </h1>

              <p className="text-xl text-muted-foreground">
                CampusCatalyst connects students, recruiters, and placement cells on one intelligent
                platform. Get AI-powered resume insights, smart job matching, and seamless placement
                management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="hero-gradient hover:shadow-glow transition-smooth text-lg px-8 h-14 w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 h-14 w-full sm:w-auto"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div className="text-3xl font-bold text-success">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Campus placement success"
                className="relative rounded-3xl shadow-xl border border-border w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for students, recruiters, and placement administrators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-smooth border-border hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-glow`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="hero-gradient border-0 shadow-glow">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Ready to Transform Your Campus Placement?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of students and recruiters already using CampusCatalyst to find their
                perfect match.
              </p>
              <Link to="/register">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 h-14 hover:scale-105 transition-smooth"
                >
                  Start Your Journey Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
