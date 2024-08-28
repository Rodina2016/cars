import { Car } from '@/types'
import Link from 'next/link'
import React from 'react'
import s from './CarDetails.module.scss'

type CarDetailsProps = {
  car: Car;
};

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
  return (
    <div className={s.detailsContainer}>
      <img src={car.imageUrl} alt={`${car.brand} ${car.model}`} className={s.carImage} />

      <div className={s.carInfo}>
        <h1 className={s.carTitle}>{`${car.brand} ${car.model}`}</h1>
        <p className={s.carDetail}>{`Год выпуска: ${car.year}`}</p>
        <p className={s.carDetail}>{`Цена: $${car.price.toLocaleString()}`}</p>
        <p className={s.carDetail}>{`Цвет: ${car.color}`}</p>
      </div>

      <div className={s.detailsSection}>
        <h2 className={s.detailsTitle}>Подробности</h2>
        <ul className={s.detailsList}>
          <li className={s.detailsItem}>{`Тип двигателя: ${car.engineType}`}</li>
          {car.transmission && <li className={s.detailsItem}>{`Трансмиссия: ${car.transmission}`}</li>}
          {Boolean(car.range) && <li className={s.detailsItem}>{`Запас хода: ${car.range} км`}</li>}
        </ul>
      </div>

      <Link href="/" passHref className={s.backButton}>
				Назад к списку
			</Link>
    </div>
  );
};

export default CarDetails;
