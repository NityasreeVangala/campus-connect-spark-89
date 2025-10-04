import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Upload,
  FileText,
  Briefcase,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Zap,
  Target,
  Award,
  Brain,
} from "lucide-react";

const StudentDashboard = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [atsScore, setAtsScore] = useState(78);

  const handleResumeUpload = () => {
    if (!resumeFile) {
      toast.error("Please select a file to upload");
      return;
    }
    
    setIsAnalyzing(true);
    toast.loading("Analyzing your resume with AI...");
    
    // Simulate AI analysis
    setTimeout(() => {
      const newScore = Math.floor(Math.random() * 20) + 75; // Random score between 75-95
      setAtsScore(newScore);
      toast.dismiss();
      toast.success(`Resume analyzed! Your ATS score is ${newScore}/100`);
      setShowUploadModal(false);
      setResumeFile(null);
      setIsAnalyzing(false);
    }, 2500);
  };

  const recommendedJobs = [
    {
      id: "1",
      title: "Software Engineer Intern",
      company: "Tech Corp",
      match: 95,
      type: "Internship",
    },
    {
      id: "2",
      title: "Frontend Developer",
      company: "Digital Solutions",
      match: 88,
      type: "Full-time",
    },
    {
      id: "3",
      title: "Data Analyst",
      company: "Analytics Pro",
      match: 82,
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar isAuthenticated userRole="student" onLogout={() => {}} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back,{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Student
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Track your applications and discover new opportunities
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 animate-scale-in">
            <Card className="border-2 hover:border-primary transition-spring hover-lift gradient-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">12</div>
                  <Briefcase className="w-8 h-8 text-primary/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-spring hover-lift gradient-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Interviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold gradient-secondary bg-clip-text text-transparent">3</div>
                  <Clock className="w-8 h-8 text-secondary/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-success transition-spring hover-lift gradient-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Offers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold gradient-success bg-clip-text text-transparent">1</div>
                  <CheckCircle2 className="w-8 h-8 text-success/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-tertiary transition-spring hover-lift gradient-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  ATS Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold gradient-tertiary bg-clip-text text-transparent">{atsScore}%</div>
                  <TrendingUp className="w-8 h-8 text-tertiary/30" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Enhanced AI Resume Analyzer */}
            <Card className="lg:col-span-2 border-2 animate-bounce-in shadow-2xl gradient-card hover:shadow-glow-primary transition-spring">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center animate-pulse-slow shadow-glow-primary">
                        <Brain className="w-6 h-6 text-primary-foreground" />
                      </div>
                      AI Resume Analyzer
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Get instant AI-powered feedback and improve your ATS score
                    </CardDescription>
                  </div>
                  <Button
                    onClick={() => setShowUploadModal(true)}
                    className="gradient-primary hover:shadow-glow-primary transition-spring hover:scale-105"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Resume
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* ATS Score Circle */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full gradient-primary flex items-center justify-center shadow-glow-primary animate-pulse-slow">
                      <div className="w-36 h-36 rounded-full bg-background flex flex-col items-center justify-center">
                        <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                          {atsScore}
                        </div>
                        <div className="text-sm text-muted-foreground">ATS Score</div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 gradient-success rounded-full flex items-center justify-center animate-bounce-in shadow-glow-tertiary">
                      <Sparkles className="w-6 h-6 text-success-foreground" />
                    </div>
                  </div>
                </div>

                {/* Score Details */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Score</span>
                      <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">{atsScore}/100</span>
                    </div>
                    <Progress value={atsScore} className="h-3" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <Card className="gradient-card border-success/30 hover-lift transition-spring">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-success" />
                          <div className="text-xs font-medium text-success">Keywords</div>
                        </div>
                        <div className="text-2xl font-bold gradient-success bg-clip-text text-transparent">85%</div>
                      </CardContent>
                    </Card>

                    <Card className="gradient-card border-tertiary/30 hover-lift transition-spring">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-tertiary" />
                          <div className="text-xs font-medium text-tertiary">Format</div>
                        </div>
                        <div className="text-2xl font-bold gradient-tertiary bg-clip-text text-transparent">92%</div>
                      </CardContent>
                    </Card>

                    <Card className="gradient-card border-warning/30 hover-lift transition-spring">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-warning" />
                          <div className="text-xs font-medium text-warning">Skills</div>
                        </div>
                        <div className="text-2xl font-bold text-warning">78%</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Strengths & Improvements */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="gradient-card border-success/20 hover-lift transition-spring">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5 animate-pulse-slow" />
                        <div className="flex-1">
                          <div className="font-medium text-success mb-2">Strengths</div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Strong industry keywords</li>
                            <li>• Clean formatting</li>
                            <li>• Quantified achievements</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="gradient-card border-warning/20 hover-lift transition-spring">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-warning mt-0.5 animate-pulse-slow" />
                        <div className="flex-1">
                          <div className="font-medium text-warning mb-2">Improvements</div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Add more technical skills</li>
                            <li>• Include certifications</li>
                            <li>• Expand project details</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* AI Suggestions */}
                <div className="gradient-card rounded-lg p-4 space-y-3 border border-primary/20">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary animate-pulse-slow" />
                    AI-Powered Suggestions
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>Add quantifiable achievements with metrics (e.g., "Increased efficiency by 40%")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <span>Include more action verbs: Led, Developed, Optimized, Implemented</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                      <span>Expand technical skills section with in-demand technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      <span>Add relevant certifications and online courses</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 animate-slide-in-right gradient-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your profile and applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/student/jobs">
                  <Button variant="outline" className="w-full justify-start transition-spring hover:gradient-primary hover:text-primary-foreground hover:border-primary hover-lift">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Browse Jobs
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start transition-spring hover:gradient-secondary hover:text-secondary-foreground hover:border-secondary hover-lift">
                  <FileText className="w-4 h-4 mr-2" />
                  View Applications
                </Button>
                <Button variant="outline" className="w-full justify-start transition-spring hover:gradient-tertiary hover:text-tertiary-foreground hover:border-tertiary hover-lift">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
                <Button 
                  onClick={() => setShowUploadModal(true)}
                  variant="outline" 
                  className="w-full justify-start transition-spring hover:gradient-success hover:text-success-foreground hover:border-success hover-lift"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Analyze Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recommended Jobs */}
          <Card className="border-2 animate-scale-in shadow-xl gradient-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary animate-pulse-slow" />
                    Recommended For You
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Jobs matched based on your profile and preferences
                  </CardDescription>
                </div>
                <Link to="/student/jobs">
                  <Button variant="outline" className="gap-2 transition-spring hover:gradient-primary hover:text-primary-foreground hover-lift">
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedJobs.map((job, index) => (
                  <Card 
                    key={job.id} 
                    className="border hover:border-primary transition-spring hover-lift gradient-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg">{job.title}</h4>
                            <Badge className="gradient-secondary text-secondary-foreground">{job.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{job.company}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Match Score:</span>
                            <Progress value={job.match} className="w-32 h-2" />
                            <span className="text-sm font-bold gradient-primary bg-clip-text text-transparent">{job.match}%</span>
                          </div>
                        </div>
                        <Button className="gradient-primary hover:shadow-glow-primary transition-spring hover:scale-105">
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Modal
        open={showUploadModal}
        onOpenChange={setShowUploadModal}
        title="Upload Resume for AI Analysis"
        description="Upload your resume to get instant AI-powered feedback and ATS scoring"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="resume">Choose File</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
              className="transition-smooth"
              disabled={isAnalyzing}
            />
            <p className="text-xs text-muted-foreground">
              Supported formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>
          {resumeFile && (
            <div className="gradient-card p-3 rounded-lg border border-success/20">
              <div className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-success" />
                <span className="font-medium">{resumeFile.name}</span>
              </div>
            </div>
          )}
          <div className="flex gap-3">
            <Button
              onClick={handleResumeUpload}
              className="flex-1 gradient-primary hover:shadow-glow-primary transition-spring disabled:opacity-50"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <Brain className="w-4 h-4 mr-2 animate-pulse-slow" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Upload & Analyze
                </>
              )}
            </Button>
            <Button
              onClick={() => setShowUploadModal(false)}
              variant="outline"
              className="flex-1"
              disabled={isAnalyzing}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
