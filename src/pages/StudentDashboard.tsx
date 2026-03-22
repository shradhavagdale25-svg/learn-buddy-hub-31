import { Link } from 'react-router-dom';
import { BookOpen, Clock, Trophy, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { courses } from '@/lib/mock-data';

const enrolledCourses = courses.slice(0, 3).map((c, i) => ({
  ...c,
  progress: [65, 30, 10][i],
}));

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10">
        <h1 className="font-heading text-3xl font-bold mb-2">My Learning</h1>
        <p className="text-muted-foreground mb-8">Continue where you left off</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: BookOpen, label: 'Enrolled', value: '3' },
            { icon: Clock, label: 'Hours Spent', value: '42' },
            { icon: Trophy, label: 'Completed', value: '1' },
            { icon: TrendingUp, label: 'Streak', value: '7 days' },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-4">
              <s.icon className="h-5 w-5 text-primary mb-2" />
              <div className="font-heading text-xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <Link key={course.id} to={`/course/${course.id}`} className="block">
              <div className="flex flex-col sm:flex-row gap-4 bg-card border border-border rounded-xl p-4 hover:shadow-elevated transition-shadow">
                <img src={course.thumbnail} alt={course.title} className="w-full sm:w-48 h-28 object-cover rounded-lg" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold mb-1 truncate">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
                  <div className="flex items-center gap-3">
                    <Progress value={course.progress} className="flex-1 h-2" />
                    <span className="text-sm font-medium text-muted-foreground">{course.progress}%</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="self-center shrink-0">Continue</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
