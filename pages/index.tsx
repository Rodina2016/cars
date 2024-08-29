import CarList from '@/components/CarList/CarList'
import { Car } from '@/types'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchCars() {
      const response = await axios.get<Car[]>('/api/cars');
      setCars(response.data);
    }

    fetchCars();
  }, []);

  return (
      <CarList cars={cars} />
  );
}
