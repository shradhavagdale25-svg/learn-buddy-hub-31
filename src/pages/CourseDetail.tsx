import { useParams, Link } from 'react-router-dom';
import { Star, Clock, BarChart3, Users, Play, Lock, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import { courses, reviews } from '@/lib/mock-data';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative py-12" style={{ background: 'var(--gradient-hero)', opacity: 1 }}>
        <div className="absolute inset-0 bg-foreground/90" />
        <div className="container relative z-10">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to courses
          </Link>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 text-primary-foreground">
              <Badge className="bg-primary/20 text-primary-foreground border-0 mb-3">{course.category}</Badge>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-primary-foreground/80 mb-4">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1 text-warning font-bold">
                  {course.rating} <Star className="h-4 w-4 fill-warning" />
                </span>
                <span>({course.reviewCount.toLocaleString()} reviews)</span>
                <span className="flex items-center gap-1"><Users className="h-4 w-4" />{course.studentCount.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img src={course.instructorAvatar} alt={course.instructor} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium text-primary-foreground">Created by {course.instructor}</p>
                  <p className="text-xs text-primary-foreground/60">Last updated {course.updatedAt}</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-elevated text-foreground">
              <img src={course.thumbnail} alt={course.title} className="rounded-lg mb-4 w-full aspect-video object-cover" />
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-heading text-3xl font-bold">${course.price}</span>
                {course.originalPrice && <span className="text-muted-foreground line-through">${course.originalPrice}</span>}
              </div>
              <Button className="w-full mb-3" size="lg">Enroll Now</Button>
              <Button variant="outline" className="w-full" size="lg">Add to Cart</Button>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" />{course.duration} of content</div>
                <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4" />{course.level}</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Certificate of completion</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-heading text-xl font-bold mb-4">Course Content</h2>
              <div className="border border-border rounded-xl overflow-hidden">
                {course.lessons.map((lesson, i) => (
                  <div key={lesson.id} className={`flex items-center justify-between p-4 ${i > 0 ? 'border-t border-border' : ''} hover:bg-secondary/50 transition-colors`}>
                    <div className="flex items-center gap-3">
                      {lesson.isPreview ? (
                        <Play className="h-4 w-4 text-primary" />
                      ) : (
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="text-sm font-medium">{lesson.title}</span>
                      {lesson.isPreview && <Badge variant="secondary" className="text-xs">Preview</Badge>}
                    </div>
                    <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="font-heading text-xl font-bold mb-6">Student Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="flex gap-4">
                    <img src={review.avatar} alt={review.user} className="h-10 w-10 rounded-full object-cover shrink-0" />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-medium text-sm">{review.user}</span>
                        <StarRating rating={review.rating} />
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
