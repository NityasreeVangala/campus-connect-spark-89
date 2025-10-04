import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, BarChart3 } from "lucide-react";

const JobListingsPlacement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCompany, setFilterCompany] = useState("all");

  const jobs = [
    {
      id: "1",
      title: "Software Engineer Intern",
      company: "Tech Corp",
      location: "San Francisco, CA",
      type: "Internship",
      salary: "$25-30/hr",
      postedDate: "2 days ago",
      description:
        "Summer internship opportunity for computer science students with strong programming skills.",
    },
    {
      id: "2",
      title: "Frontend Developer",
      company: "Digital Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70k-90k",
      postedDate: "3 days ago",
      description: "Full-time position for fresh graduates with React and TypeScript experience.",
    },
    {
      id: "3",
      title: "Data Analyst",
      company: "Analytics Pro",
      location: "Remote",
      type: "Full-time",
      salary: "$65k-80k",
      postedDate: "5 days ago",
      description:
        "Entry-level data analyst role with training provided. Looking for analytical minds.",
    },
    {
      id: "4",
      title: "Backend Engineer",
      company: "Cloud Systems",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$80k-100k",
      postedDate: "1 week ago",
      description: "Backend development role for graduates with knowledge of Node.js and databases.",
    },
    {
      id: "5",
      title: "UI/UX Design Intern",
      company: "Creative Studio",
      location: "Los Angeles, CA",
      type: "Internship",
      salary: "$20-25/hr",
      postedDate: "1 week ago",
      description: "Design internship for creative students passionate about user experience.",
    },
  ];

  const companies = ["all", ...new Set(jobs.map((job) => job.company))];

  const filteredJobs =
    filterCompany === "all" ? jobs : jobs.filter((job) => job.company === filterCompany);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar isAuthenticated userRole="placement" onLogout={() => {}} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between animate-fade-in-up">
            <div>
              <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                <BarChart3 className="w-10 h-10 text-primary" />
                Campus{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Job Board
                </span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Monitor and manage all job postings for campus placement
              </p>
            </div>
            <Button variant="outline" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
              Export Report
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 animate-scale-in">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search jobs by title, company, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 transition-smooth focus:border-primary"
              />
            </div>
            <div className="flex gap-3">
              <Select value={filterCompany} onValueChange={setFilterCompany}>
                <SelectTrigger className="w-[200px] h-12 transition-smooth">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Companies</SelectItem>
                  {companies.slice(1).map((company) => (
                    <SelectItem key={company} value={company}>
                      {company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-scale-in">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">{jobs.length}</div>
              <div className="text-sm text-muted-foreground">Total Jobs</div>
            </div>
            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">{companies.length - 1}</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-success">234</div>
              <div className="text-sm text-muted-foreground">Applications</div>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">89%</div>
              <div className="text-sm text-muted-foreground">Engagement</div>
            </div>
          </div>

          {/* Job Results Count */}
          <div className="text-sm text-muted-foreground animate-fade-in-up">
            Showing {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"}
          </div>

          {/* Job Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <JobCard {...job} role="placement" />
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20 animate-fade-in-up">
              <p className="text-xl text-muted-foreground mb-4">No jobs found</p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobListingsPlacement;
