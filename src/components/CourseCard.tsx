import { Link } from 'react-router-dom';
import { Star, Users, Clock, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Course } from '@/lib/mock-data';

const levelColor = {
  Beginner: 'bg-success/10 text-success',
  Intermediate: 'bg-warning/10 text-warning',
  Advanced: 'bg-destructive/10 text-destructive',
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link to={`/course/${course.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`${levelColor[course.level]} border-0 text-xs font-medium`}>
              {course.level}
            </Badge>
          </div>
          {course.originalPrice && (
            <div className="absolute top-3 right-3 rounded-md bg-destructive px-2 py-0.5 text-xs font-bold text-destructive-foreground">
              {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-heading font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-muted-foreground">{course.instructor}</p>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-warning">{course.rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(course.rating) ? 'fill-warning text-warning' : 'text-border'}`} />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({course.reviewCount.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
            <span className="flex items-center gap-1"><BarChart3 className="h-3 w-3" />{course.lessons.length} lessons</span>
            <span className="flex items-center gap-1"><Users className="h-3 w-3" />{(course.studentCount / 1000).toFixed(1)}k</span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-lg font-bold font-heading">${course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
