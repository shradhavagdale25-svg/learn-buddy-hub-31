import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ShoppingCart, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) navigate(`/?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight">LearnHub</span>
        </Link>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-secondary border-0"
            />
          </div>
        </form>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/courses">Explore</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/instructor">Teach</Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart"><ShoppingCart className="h-5 w-5" /></Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-3">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-secondary border-0" />
            </div>
          </form>
          <div className="flex flex-col gap-1">
            <Button variant="ghost" className="justify-start" asChild><Link to="/courses" onClick={() => setMobileOpen(false)}>Explore</Link></Button>
            <Button variant="ghost" className="justify-start" asChild><Link to="/dashboard/instructor" onClick={() => setMobileOpen(false)}>Teach</Link></Button>
            <Button variant="ghost" className="justify-start" asChild><Link to="/dashboard/student" onClick={() => setMobileOpen(false)}>My Learning</Link></Button>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" asChild><Link to="/login" onClick={() => setMobileOpen(false)}>Log in</Link></Button>
              <Button className="flex-1" asChild><Link to="/signup" onClick={() => setMobileOpen(false)}>Sign up</Link></Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
