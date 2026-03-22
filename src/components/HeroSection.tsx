import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: BookOpen, label: 'Courses', value: '500+' },
  { icon: Users, label: 'Students', value: '250K+' },
  { icon: Award, label: 'Instructors', value: '1,200+' },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)', opacity: 0.06 }} />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              New courses added weekly
            </span>
          </motion.div>
          <motion.h1
            className="font-heading text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Learn without limits,{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-hero)' }}>
              grow without bounds
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access world-class courses from expert instructors. Build real skills with hands-on projects and earn certificates.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="gap-2 px-8" asChild>
              <Link to="/courses">
                Explore Courses <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link to="/dashboard/instructor">
                <Play className="h-4 w-4" /> Start Teaching
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="font-heading text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
