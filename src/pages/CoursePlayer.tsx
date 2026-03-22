import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Circle, Play, Lock, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import { courses } from '@/lib/mock-data';


const CoursePlayer = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Course not found</h1>
          <Button asChild><Link to="/">Back to courses</Link></Button>
        </div>
      </div>
    );
  }

  const lesson = course.lessons[activeLesson];
  const progress = course.lessons.length > 0 ? Math.round((completed.size / course.lessons.length) * 100) : 0;

  const toggleComplete = (index: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const goToNext = () => {
    toggleComplete(activeLesson);
    if (activeLesson < course.lessons.length - 1) {
      setActiveLesson(activeLesson + 1);
    }
  };

  return (
    <div className="min-h-screen bg-foreground flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-border/20 shrink-0">
        <div className="flex items-center gap-3">
          <Link to={`/course/${course.id}`} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <span className="text-primary-foreground font-medium text-sm truncate max-w-xs">{course.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <Progress value={progress} className="w-32 h-2" />
          <span className="text-primary-foreground/70 text-xs">{progress}% complete</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground/70 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Video area */}
        <div className="flex-1 flex flex-col">
          <div className="relative w-full bg-foreground">
            <iframe
              key={activeLesson}
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${lesson.videoUrl}?autoplay=1&rel=0`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-6 bg-card flex-1">
            <h2 className="font-heading text-xl font-bold mb-2">{lesson.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">Duration: {lesson.duration}</p>
            <div className="flex gap-3">
              <Button onClick={() => toggleComplete(activeLesson)} variant={completed.has(activeLesson) ? 'secondary' : 'default'} size="sm">
                {completed.has(activeLesson) ? (
                  <><CheckCircle2 className="h-4 w-4 mr-1" /> Completed</>
                ) : (
                  'Mark Complete'
                )}
              </Button>
              {activeLesson < course.lessons.length - 1 && (
                <Button onClick={goToNext} variant="outline" size="sm">
                  Next Lesson
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-80 border-l border-border/20 bg-card overflow-y-auto shrink-0`}>
          <div className="p-4 border-b border-border">
            <h3 className="font-heading font-semibold text-sm">Course Content</h3>
            <p className="text-xs text-muted-foreground mt-1">{completed.size}/{course.lessons.length} completed</p>
          </div>
          <div>
            {course.lessons.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setActiveLesson(i)}
                className={`w-full flex items-center gap-3 p-4 text-left text-sm transition-colors border-b border-border/50 ${
                  i === activeLesson ? 'bg-primary/10' : 'hover:bg-secondary/50'
                }`}
              >
                {completed.has(i) ? (
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                ) : i === activeLesson ? (
                  <Play className="h-4 w-4 text-primary shrink-0" />
                ) : l.isPreview ? (
                  <Circle className="h-4 w-4 text-muted-foreground shrink-0" />
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className={`truncate ${i === activeLesson ? 'font-medium text-primary' : ''}`}>{l.title}</p>
                  <p className="text-xs text-muted-foreground">{l.duration}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;
