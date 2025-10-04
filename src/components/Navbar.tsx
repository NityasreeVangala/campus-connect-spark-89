import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, LogOut } from "lucide-react";

interface NavbarProps {
  isAuthenticated?: boolean;
  userRole?: "student" | "recruiter" | "placement" | null;
  onLogout?: () => void;
}

const Navbar = ({ isAuthenticated = false, userRole = null, onLogout }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate("/");
  };

  const getDashboardLink = () => {
    switch (userRole) {
      case "student":
        return "/student/dashboard";
      case "recruiter":
        return "/recruiter/dashboard";
      case "placement":
        return "/placement/dashboard";
      default:
        return "/";
    }
  };

  const getJobsLink = () => {
    switch (userRole) {
      case "student":
        return "/student/jobs";
      case "recruiter":
        return "/recruiter/jobs";
      case "placement":
        return "/placement/jobs";
      default:
        return "/";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center transition-spring group-hover:scale-110 shadow-glow-primary">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-rainbow bg-clip-text text-transparent">
              CampusCatalyst
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link to={getDashboardLink()}>
                  <Button variant="ghost" className="transition-smooth hover:bg-muted">
                    Dashboard
                  </Button>
                </Link>
                <Link to={getJobsLink()}>
                  <Button variant="ghost" className="transition-smooth hover:bg-muted">
                    Jobs
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="gap-2 transition-smooth hover:bg-destructive hover:text-destructive-foreground hover:border-destructive"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="transition-smooth hover:bg-muted">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="gradient-primary transition-spring hover:shadow-glow-primary hover:scale-105">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
