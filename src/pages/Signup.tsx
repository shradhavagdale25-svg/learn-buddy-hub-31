import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'student' | 'instructor'>('student');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-2xl font-bold">LMS</span>
        </Link>
        <div className="bg-card border border-border rounded-xl p-6 shadow-card">
          <h1 className="font-heading text-xl font-bold text-center mb-1">Create your account</h1>
          <p className="text-sm text-muted-foreground text-center mb-6">Start learning today</p>
          <div className="flex rounded-lg bg-secondary p-1 mb-6">
            <button
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'student' ? 'bg-card shadow-sm' : 'text-muted-foreground'}`}
              onClick={() => setRole('student')}
            >Student</button>
            <button
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'instructor' ? 'bg-card shadow-sm' : 'text-muted-foreground'}`}
              onClick={() => setRole('instructor')}
            >Instructor</button>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1">
                <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button className="w-full" type="submit">Create account</Button>
          </form>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
