import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Clock, Briefcase, DollarSign, Edit, Trash2 } from "lucide-react";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  postedDate: string;
  description: string;
  role: "student" | "recruiter" | "placement";
  onApply?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const JobCard = ({
  id,
  title,
  company,
  location,
  type,
  salary,
  postedDate,
  description,
  role,
  onApply,
  onEdit,
  onDelete,
}: JobCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-spring border-border hover:border-primary/50 animate-scale-in gradient-card hover-lift">

      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">{company}</span>
            </div>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {type}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
          {salary && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="w-4 h-4 text-success" />
              <span>{salary}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-secondary" />
            <span>{postedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Briefcase className="w-4 h-4 text-accent" />
            <span>{type}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {role === "student" && onApply && (
          <Button
            onClick={() => onApply(id)}
            className="flex-1 gradient-primary hover:shadow-glow-primary transition-spring hover:scale-105"
          >
            Apply Now
          </Button>
        )}
        {role === "recruiter" && (
          <>
            {onEdit && (
              <Button
                onClick={() => onEdit(id)}
                variant="outline"
                className="flex-1 gap-2 transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            )}
            {onDelete && (
              <Button
                onClick={() => onDelete(id)}
                variant="outline"
                className="flex-1 gap-2 transition-smooth hover:bg-destructive hover:text-destructive-foreground hover:border-destructive"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </Button>
            )}
          </>
        )}
        {role === "placement" && (
          <Button variant="outline" className="flex-1 transition-smooth">
            View Details
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;
