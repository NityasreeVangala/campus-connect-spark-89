import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Search, Plus } from "lucide-react";

const JobListingsRecruiter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const jobs = [
    {
      id: "1",
      title: "Software Engineer",
      company: "My Company",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$80k-120k",
      postedDate: "3 days ago",
      description:
        "We're looking for experienced software engineers to join our growing team.",
    },
    {
      id: "2",
      title: "Product Manager",
      company: "My Company",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90k-130k",
      postedDate: "5 days ago",
      description: "Lead product development and strategy for our flagship products.",
    },
    {
      id: "3",
      title: "UI/UX Designer",
      company: "My Company",
      location: "Remote",
      type: "Full-time",
      salary: "$70k-100k",
      postedDate: "1 week ago",
      description: "Design beautiful and intuitive user experiences for our applications.",
    },
  ];

  const handleEdit = (jobId: string) => {
    toast.info(`Editing job ${jobId}`);
  };

  const handleDelete = (jobId: string) => {
    toast.success("Job deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar isAuthenticated userRole="recruiter" onLogout={() => {}} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between animate-fade-in-up">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Manage{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Job Postings
                </span>
              </h1>
              <p className="text-muted-foreground text-lg">
                View and manage your active job listings
              </p>
            </div>
            <Button className="hero-gradient hover:shadow-glow transition-smooth text-lg px-6 h-12">
              <Plus className="w-5 h-5 mr-2" />
              Post New Job
            </Button>
          </div>

          {/* Search */}
          <div className="relative animate-scale-in">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search your job postings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 transition-smooth focus:border-primary"
            />
          </div>

          {/* Job Results Count */}
          <div className="text-sm text-muted-foreground animate-fade-in-up">
            You have {jobs.length} active job {jobs.length === 1 ? "posting" : "postings"}
          </div>

          {/* Job Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <JobCard
                  {...job}
                  role="recruiter"
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobListingsRecruiter;
