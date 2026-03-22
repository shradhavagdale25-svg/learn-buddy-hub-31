import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-border bg-card mt-20">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-heading text-lg font-bold">LMS</span>
          </Link>
          <p className="text-sm text-muted-foreground">Empowering learners worldwide with quality education.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-sm">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-foreground transition-colors">Browse Courses</Link></li>
            <li><Link to="/dashboard/instructor" className="hover:text-foreground transition-colors">Become Instructor</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-sm">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2024 LMS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
