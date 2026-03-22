import { Star } from 'lucide-react';
import { useState } from 'react';

interface StarRatingProps {
  rating: number;
  onRate?: (rating: number) => void;
  size?: 'sm' | 'md';
}

const StarRating = ({ rating, onRate, size = 'sm' }: StarRatingProps) => {
  const [hover, setHover] = useState(0);
  const s = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          disabled={!onRate}
          className={onRate ? 'cursor-pointer' : 'cursor-default'}
          onClick={() => onRate?.(i)}
          onMouseEnter={() => onRate && setHover(i)}
          onMouseLeave={() => onRate && setHover(0)}
        >
          <Star
            className={`${s} ${
              i <= (hover || rating) ? 'fill-warning text-warning' : 'text-border'
            } transition-colors`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
