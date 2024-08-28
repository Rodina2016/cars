import { Car } from '@/types'
import { useCallback, useMemo, useState } from 'react'

export function useSort(cars: Car[]) {
  const [sortType, setSortType] = useState<string>('yearAsc');

  const handleSortChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.currentTarget.value);
  }, []);

  const sortedCars = useMemo(() => {
    const sorted = [...cars];
    sorted.sort((a, b) => {
      switch (sortType) {
        case 'yearAsc':
          return a.year - b.year;
        case 'yearDesc':
          return b.year - a.year;
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
    return sorted;
  }, [cars, sortType]);

  return {
    sortedCars,
    sortType,
    handleSortChange,
  };
}
