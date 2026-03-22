import { categories } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  selected: string;
  onSelect: (cat: string) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selected === cat ? 'default' : 'secondary'}
          size="sm"
          onClick={() => onSelect(cat)}
          className="rounded-full text-sm"
        >
          {cat}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
