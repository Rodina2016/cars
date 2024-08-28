import { Car } from '@/types'
import { useCallback, useState } from 'react'

export function useFilter(cars: Car[]) {
  const [selectedBrand, setSelectedBrand] = useState<string>(''); 
  const [selectedColor, setSelectedColor] = useState<string>(''); 

  const handleBrandChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
  }, []);

  const handleColorChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesBrand = selectedBrand ? car.brand === selectedBrand : true;
    const matchesColor = selectedColor ? car.color === selectedColor : true;
    return matchesBrand && matchesColor;
  });

  return {
    filteredCars,
    selectedBrand,
    selectedColor,
    handleBrandChange,
    handleColorChange,
  };
}
