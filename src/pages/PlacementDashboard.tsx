import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  Briefcase,
  Building2,
  TrendingUp,
  Target,
  Award,
  Calendar,
  BarChart3,
} from "lucide-react";
import dashboardIllustration from "@/assets/dashboard-illustration.jpg";

const PlacementDashboard = () => {
  const stats = [
    { label: "Total Students", value: "1,234", icon: Users, color: "primary" },
    { label: "Active Jobs", value: "45", icon: Briefcase, color: "secondary" },
    { label: "Partner Companies", value: "87", icon: Building2, color: "accent" },
    { label: "Placement Rate", value: "92%", icon: Target, color: "success" },
  ];

  const companyActivity = [
    { company: "Tech Corp", jobs: 5, applicants: 89, hired: 3 },
    { company: "Digital Solutions", jobs: 3, applicants: 67, hired: 2 },
    { company: "Innovation Labs", jobs: 4, applicants: 54, hired: 1 },
    { company: "Future Systems", jobs: 2, applicants: 43, hired: 2 },
  ];

  const placementTrends = [
    { department: "Computer Science", placed: 85, total: 92 },
    { department: "Electronics", placed: 78, total: 88 },
    { department: "Mechanical", placed: 71, total: 95 },
    { department: "Civil", placed: 65, total: 81 },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar isAuthenticated userRole="placement" onLogout={() => {}} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold mb-2">
              Placement Cell{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Monitor campus placement activities and analytics
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 animate-scale-in">
            {stats.map((stat, index) => (
              <Card key={index} className={`border-2 hover:border-${stat.color} transition-smooth`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</div>
                    <stat.icon className={`w-8 h-8 text-${stat.color}/30`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Overview Card */}
            <Card className="lg:col-span-2 border-2 animate-scale-in shadow-xl card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl">Placement Overview</CardTitle>
                <CardDescription>Current academic year statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Overall Placement Rate</span>
                        <span className="text-2xl font-bold text-primary">92%</span>
                      </div>
                      <Progress value={92} className="h-3" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Students Placed</span>
                        <span className="text-lg font-bold text-success">1,136 / 1,234</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Active Recruiters</span>
                        <span className="text-lg font-bold text-secondary">87</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Avg. Package</span>
                        <span className="text-lg font-bold text-accent">$65k</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <img
                      src={dashboardIllustration}
                      alt="Dashboard analytics"
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 animate-scale-in">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage placement activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/placement/jobs">
                  <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-primary hover:text-primary-foreground">
                    <Briefcase className="w-4 h-4 mr-2" />
                    View All Jobs
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-secondary hover:text-secondary-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  Student Database
                </Button>
                <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-accent hover:text-accent-foreground">
                  <Building2 className="w-4 h-4 mr-2" />
                  Company Partners
                </Button>
                <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-success hover:text-success-foreground">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Reports
                </Button>
                <Button variant="outline" className="w-full justify-start transition-smooth hover:bg-purple-500 hover:text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Drive
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Department-wise Placement */}
          <Card className="border-2 animate-scale-in shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Department-wise Placement Trends
              </CardTitle>
              <CardDescription>Track placement success across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {placementTrends.map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{dept.department}</span>
                      <span className="text-sm text-muted-foreground">
                        {dept.placed} / {dept.total} students
                      </span>
                    </div>
                    <Progress value={(dept.placed / dept.total) * 100} className="h-3" />
                    <div className="text-right text-sm font-bold text-primary">
                      {Math.round((dept.placed / dept.total) * 100)}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Company Activity */}
          <Card className="border-2 animate-scale-in shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-secondary" />
                Top Recruiting Companies
              </CardTitle>
              <CardDescription>Most active companies this semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {companyActivity.map((company, index) => (
                  <Card key={index} className="border hover:border-primary transition-smooth">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{company.company}</h4>
                            <p className="text-sm text-muted-foreground">Active Recruiter</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">{company.jobs}</div>
                            <div className="text-xs text-muted-foreground">Jobs Posted</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-secondary">
                              {company.applicants}
                            </div>
                            <div className="text-xs text-muted-foreground">Applicants</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-success">{company.hired}</div>
                            <div className="text-xs text-muted-foreground">Hired</div>
                          </div>
                          <Button variant="outline" size="sm" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                            View Details
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

      <Footer />
    </div>
  );
};

export default PlacementDashboard;
