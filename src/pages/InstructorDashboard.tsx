import { Link } from 'react-router-dom';
import { Plus, DollarSign, Users, BookOpen, BarChart3, Star, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { courses } from '@/lib/mock-data';

const myCourses = courses.slice(0, 3);

const InstructorDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold mb-1">Instructor Dashboard</h1>
            <p className="text-muted-foreground">Manage your courses and track performance</p>
          </div>
          <Button className="gap-2" asChild>
            <Link to="/create-course"><Plus className="h-4 w-4" />Create Course</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: DollarSign, label: 'Total Revenue', value: '$12,450' },
            { icon: Users, label: 'Total Students', value: '3,240' },
            { icon: BookOpen, label: 'Active Courses', value: '3' },
            { icon: Star, label: 'Avg Rating', value: '4.7' },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-4">
              <s.icon className="h-5 w-5 text-primary mb-2" />
              <div className="font-heading text-xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-xl font-bold mb-4">Your Courses</h2>
        <div className="space-y-4">
          {myCourses.map((course) => (
            <div key={course.id} className="flex flex-col sm:flex-row gap-4 bg-card border border-border rounded-xl p-4">
              <img src={course.thumbnail} alt={course.title} className="w-full sm:w-48 h-28 object-cover rounded-lg" />
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold mb-1">{course.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{course.studentCount.toLocaleString()} students</span>
                  <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-warning text-warning" />{course.rating}</span>
                  <span className="flex items-center gap-1"><BarChart3 className="h-3.5 w-3.5" />{course.lessons.length} lessons</span>
                  <span className="font-medium text-foreground">${course.price}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="self-start shrink-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorDashboard;
