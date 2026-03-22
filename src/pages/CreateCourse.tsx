import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories } from '@/lib/mock-data';

interface LessonForm {
  title: string;
  duration: string;
}

const CreateCourse = () => {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState<LessonForm[]>([{ title: '', duration: '' }]);

  const addLesson = () => setLessons([...lessons, { title: '', duration: '' }]);
  const removeLesson = (i: number) => setLessons(lessons.filter((_, idx) => idx !== i));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10 max-w-2xl">
        <h1 className="font-heading text-3xl font-bold mb-2">Create New Course</h1>
        <p className="text-muted-foreground mb-8">Fill in the details to publish your course</p>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard/instructor'); }}>
          <div>
            <Label htmlFor="title">Course Title</Label>
            <Input id="title" placeholder="e.g. Complete React Developer" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="desc">Description</Label>
            <Textarea id="desc" placeholder="What will students learn?" rows={4} className="mt-1" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {categories.filter(c => c !== 'All').map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Level</Label>
              <Select>
                <SelectTrigger className="mt-1"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="price">Price ($)</Label>
            <Input id="price" type="number" placeholder="12.99" className="mt-1" />
          </div>

          <div>
            <Label>Thumbnail</Label>
            <div className="mt-1 border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Click to upload or drag & drop</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <Label>Lessons</Label>
              <Button type="button" variant="outline" size="sm" className="gap-1" onClick={addLesson}>
                <Plus className="h-3.5 w-3.5" /> Add Lesson
              </Button>
            </div>
            <div className="space-y-3">
              {lessons.map((_, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="flex-1">
                    <Input placeholder={`Lesson ${i + 1} title`} />
                  </div>
                  <div className="w-28">
                    <Input placeholder="Duration" />
                  </div>
                  {lessons.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeLesson(i)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">Publish Course</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateCourse;
