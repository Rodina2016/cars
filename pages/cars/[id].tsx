import CarDetails from '@/components/CarDetails/CarDetails'
import { Car } from '@/types'
import axios from 'axios'
import React from 'react'

type CarDetailsProps = {
  car: Car | null;
};

const CarPage: React.FC<CarDetailsProps> = ({ car }) => {
  if (!car) return <div>Автомобиль не найден</div>;

  return <CarDetails car={car} />;
};

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await axios.get<Car[]>(`${baseUrl}/api/cars`);
  const car = response.data.find(c => c.id === parseInt(id)) || null;

  return { props: { car } };
}

export default CarPage;
