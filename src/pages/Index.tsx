import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CourseCard from '@/components/CourseCard';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';
import { courses } from '@/lib/mock-data';
import { motion } from 'framer-motion';

const Index = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchCat = category === 'All' || c.category === category;
      const matchSearch = !searchQuery || c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <section className="container pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-heading text-2xl font-bold">Popular Courses</h2>
            <p className="text-muted-foreground text-sm mt-1">Explore our top-rated courses</p>
          </div>
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">No courses found matching your criteria.</div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {filtered.map((course) => (
              <motion.div key={course.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Index;
