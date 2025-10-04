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
import { toast } from "sonner";
import { Search, Filter, Sparkles } from "lucide-react";

const JobListingsStudent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

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
        "Join our engineering team to work on cutting-edge web applications using React and Node.js.",
    },
    {
      id: "2",
      title: "Frontend Developer",
      company: "Digital Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70k-90k",
      postedDate: "3 days ago",
      description:
        "Build beautiful user interfaces with modern frontend technologies and frameworks.",
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
        "Analyze data trends and provide insights to drive business decisions.",
    },
    {
      id: "4",
      title: "Backend Engineer",
      company: "Cloud Systems",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$80k-100k",
      postedDate: "1 week ago",
      description:
        "Design and implement scalable backend systems and APIs for our cloud platform.",
    },
    {
      id: "5",
      title: "UI/UX Design Intern",
      company: "Creative Studio",
      location: "Los Angeles, CA",
      type: "Internship",
      salary: "$20-25/hr",
      postedDate: "1 week ago",
      description:
        "Create stunning user experiences and interfaces for web and mobile applications.",
    },
    {
      id: "6",
      title: "DevOps Engineer",
      company: "Infrastructure Inc",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$85k-110k",
      postedDate: "2 weeks ago",
      description:
        "Manage and optimize our cloud infrastructure and deployment pipelines.",
    },
  ];

  const handleApply = (jobId: string) => {
    toast.success("Application submitted successfully!");
  };

  const filteredJobs =
    filterType === "all" ? jobs : jobs.filter((job) => job.type === filterType);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar isAuthenticated userRole="student" onLogout={() => {}} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Sparkles className="w-10 h-10 text-primary" />
              Browse{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Opportunities
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Find your perfect job match from {jobs.length} available positions
            </p>
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
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px] h-12 transition-smooth">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="h-12 transition-smooth hover:bg-primary hover:text-primary-foreground">
                More Filters
              </Button>
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
                <JobCard {...job} role="student" onApply={handleApply} />
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

export default JobListingsStudent;
