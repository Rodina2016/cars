import { Car } from '@/types'
import Link from 'next/link'
import React from 'react'
import s from './CarCard.module.scss'

type CarCardProps = {
  car: Car;
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
		<Link href={`/cars/${car.id}`} passHref className={s.card} >
				<div className={s.imgWrap}>
					<img className={s.img} src={car.imageUrl} alt={`${car.brand} ${car.model}`} />
				</div>
        <h3 className={s.title}>{car.brand} {car.model}</h3>
        <p className={s.year}>{car.year}</p>
    </Link>
  );
};

export default CarCard;
