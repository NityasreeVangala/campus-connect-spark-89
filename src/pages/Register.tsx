import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Briefcase, ArrowLeft } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"student" | "recruiter" | "placement">("student");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long!");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Account created successfully!");
      setIsLoading(false);
      
      // Navigate based on role
      switch (role) {
        case "student":
          navigate("/student/dashboard");
          break;
        case "recruiter":
          navigate("/recruiter/dashboard");
          break;
        case "placement":
          navigate("/placement/dashboard");
          break;
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in-up py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              CampusCatalyst
            </span>
          </div>
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-muted-foreground">Join thousands of successful placements</p>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Fill in your details to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="transition-smooth focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-smooth focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  className="transition-smooth focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                  className="transition-smooth focus:border-primary"
                />
              </div>

              <div className="space-y-3">
                <Label>Register as</Label>
                <RadioGroup value={role} onValueChange={(value: any) => setRole(value)}>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary transition-smooth cursor-pointer">
                    <RadioGroupItem value="student" id="reg-student" />
                    <Label htmlFor="reg-student" className="flex-1 cursor-pointer">
                      Student
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary transition-smooth cursor-pointer">
                    <RadioGroupItem value="recruiter" id="reg-recruiter" />
                    <Label htmlFor="reg-recruiter" className="flex-1 cursor-pointer">
                      Recruiter
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary transition-smooth cursor-pointer">
                    <RadioGroupItem value="placement" id="reg-placement" />
                    <Label htmlFor="reg-placement" className="flex-1 cursor-pointer">
                      Placement Cell
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="w-full hero-gradient hover:shadow-glow transition-smooth h-12 text-base"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-primary hover:underline font-medium">
                Login here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
