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
} from "lucide-react";

const StudentDashboard = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleResumeUpload = () => {
    if (!resumeFile) {
      toast.error("Please select a file to upload");
      return;
    }
    toast.success("Resume uploaded successfully!");
    setShowUploadModal(false);
    setResumeFile(null);
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
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Student
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Track your applications and discover new opportunities
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 animate-scale-in">
            <Card className="border-2 hover:border-primary transition-smooth">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-primary">12</div>
                  <Briefcase className="w-8 h-8 text-primary/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-smooth">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Interviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-secondary">3</div>
                  <Clock className="w-8 h-8 text-secondary/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-success transition-smooth">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Offers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-success">1</div>
                  <CheckCircle2 className="w-8 h-8 text-success/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-smooth">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Profile Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-accent">85%</div>
                  <TrendingUp className="w-8 h-8 text-accent/30" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Resume Analyzer */}
            <Card className="lg:col-span-2 border-2 animate-scale-in shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Sparkles className="w-6 h-6 text-primary" />
                      AI Resume Analyzer
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Get instant feedback and improve your ATS score
                    </CardDescription>
                  </div>
                  <Button
                    onClick={() => setShowUploadModal(true)}
                    className="hero-gradient hover:shadow-glow transition-smooth"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Resume
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">ATS Score</span>
                    <span className="text-2xl font-bold text-primary">78/100</span>
                  </div>
                  <Progress value={78} className="h-3" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-success/10 border-success/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                        <div>
                          <div className="font-medium text-success mb-1">Strong Keywords</div>
                          <p className="text-sm text-muted-foreground">
                            Good use of industry-relevant terms
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-destructive/10 border-destructive/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                        <div>
                          <div className="font-medium text-destructive mb-1">Missing Skills</div>
                          <p className="text-sm text-muted-foreground">
                            Add more technical skills
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    Improvement Suggestions
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Add quantifiable achievements with metrics</li>
                    <li>• Include more action verbs at the start of bullet points</li>
                    <li>• Expand technical skills section</li>
                    <li>• Add relevant certifications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 animate-scale-in">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your profile and applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/student/jobs">
                  <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-primary hover:text-primary-foreground">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Browse Jobs
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-secondary hover:text-secondary-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  View Applications
                </Button>
                <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-accent hover:text-accent-foreground">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recommended Jobs */}
          <Card className="border-2 animate-scale-in shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Recommended For You
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Jobs matched based on your profile and preferences
                  </CardDescription>
                </div>
                <Link to="/student/jobs">
                  <Button variant="outline" className="gap-2 transition-smooth hover:bg-primary hover:text-primary-foreground">
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedJobs.map((job) => (
                  <Card key={job.id} className="border hover:border-primary transition-smooth">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg">{job.title}</h4>
                            <Badge variant="secondary">{job.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{job.company}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Match Score:</span>
                            <Progress value={job.match} className="w-32 h-2" />
                            <span className="text-sm font-bold text-primary">{job.match}%</span>
                          </div>
                        </div>
                        <Button className="hero-gradient hover:shadow-glow transition-smooth">
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
        title="Upload Resume"
        description="Upload your resume for AI-powered analysis"
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
            />
            <p className="text-xs text-muted-foreground">
              Supported formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleResumeUpload}
              className="flex-1 hero-gradient hover:shadow-glow transition-smooth"
            >
              Upload & Analyze
            </Button>
            <Button
              onClick={() => setShowUploadModal(false)}
              variant="outline"
              className="flex-1"
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
