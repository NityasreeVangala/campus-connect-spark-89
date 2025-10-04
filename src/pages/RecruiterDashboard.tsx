import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Modal from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Plus,
  Users,
  Briefcase,
  Eye,
  TrendingUp,
  FileText,
  Mail,
  Building2,
  CheckCircle2,
} from "lucide-react";

const RecruiterDashboard = () => {
  const [showJobModal, setShowJobModal] = useState(false);

  const handleCreateJob = () => {
    toast.success("Job posted successfully!");
    setShowJobModal(false);
  };

  const recentApplications = [
    { name: "John Smith", position: "Software Engineer", score: 92, status: "Under Review" },
    { name: "Sarah Johnson", position: "Data Analyst", score: 88, status: "Interview Scheduled" },
    { name: "Mike Chen", position: "Frontend Developer", score: 85, status: "Under Review" },
  ];

  const activeJobs = [
    { title: "Software Engineer", applicants: 45, views: 320, posted: "3 days ago" },
    { title: "Product Manager", applicants: 28, views: 215, posted: "5 days ago" },
    { title: "UI/UX Designer", applicants: 32, views: 189, posted: "1 week ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar isAuthenticated userRole="recruiter" onLogout={() => {}} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="flex items-center justify-between animate-fade-in-up">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Recruiter{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Manage your job postings and find the best candidates
              </p>
            </div>
            <Button
              onClick={() => setShowJobModal(true)}
              className="hero-gradient hover:shadow-glow transition-smooth text-lg px-6 h-12"
            >
              <Plus className="w-5 h-5 mr-2" />
              Post New Job
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 animate-scale-in">
            <Card className="border-2 hover:border-primary transition-smooth">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-primary">8</div>
                  <Briefcase className="w-8 h-8 text-primary/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-smooth">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-secondary">105</div>
                  <Users className="w-8 h-8 text-secondary/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-success transition-smooth">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Shortlisted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-success">24</div>
                  <CheckCircle2 className="w-8 h-8 text-success/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-smooth">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Profile Views
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-accent">724</div>
                  <TrendingUp className="w-8 h-8 text-accent/30" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Applications */}
            <Card className="lg:col-span-2 border-2 animate-scale-in shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Recent Applications</CardTitle>
                <CardDescription>Latest candidates who applied to your jobs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application, index) => (
                    <Card key={index} className="border hover:border-primary transition-smooth">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold">
                              {application.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">{application.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                Applied for {application.position}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="text-sm font-medium text-muted-foreground">
                                ATS Score
                              </div>
                              <div className="text-2xl font-bold text-primary">
                                {application.score}
                              </div>
                            </div>
                            <Badge variant="secondary">{application.status}</Badge>
                            <Button variant="outline" size="sm" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 animate-scale-in">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your recruitment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/recruiter/jobs">
                  <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-primary hover:text-primary-foreground">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Manage Jobs
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-secondary hover:text-secondary-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  View All Applicants
                </Button>
                <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-accent hover:text-accent-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Messages
                </Button>
                <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-success hover:text-success-foreground">
                  <Building2 className="w-4 h-4 mr-2" />
                  Company Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Active Jobs */}
          <Card className="border-2 animate-scale-in shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Active Job Postings</CardTitle>
                  <CardDescription className="mt-2">
                    Track performance of your current openings
                  </CardDescription>
                </div>
                <Link to="/recruiter/jobs">
                  <Button variant="outline" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                    View All Jobs
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeJobs.map((job, index) => (
                  <Card key={index} className="border hover:border-primary transition-smooth">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{job.title}</h4>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-primary" />
                              <span>{job.applicants} Applicants</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Eye className="w-4 h-4 text-secondary" />
                              <span>{job.views} Views</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-accent" />
                              <span>Posted {job.posted}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="transition-smooth hover:bg-secondary hover:text-secondary-foreground">
                            View Applicants
                          </Button>
                        </div>
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
        open={showJobModal}
        onOpenChange={setShowJobModal}
        title="Post New Job"
        description="Fill in the details for your job posting"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input id="jobTitle" placeholder="e.g. Software Engineer" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Your company name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="City, Country" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobType">Job Type</Label>
              <Input id="jobType" placeholder="Full-time, Part-time, etc." />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea id="description" placeholder="Describe the role..." rows={4} />
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleCreateJob}
              className="flex-1 hero-gradient hover:shadow-glow transition-smooth"
            >
              Post Job
            </Button>
            <Button onClick={() => setShowJobModal(false)} variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default RecruiterDashboard;
