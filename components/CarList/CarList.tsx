import { useFilter } from '@/hooks/useFilter'
import { useSort } from '@/hooks/useSort'
import { Car } from '@/types'
import { getUniqueOptions } from '@/utils/getUniqueOptions'
import Link from 'next/link'
import CarCard from '../CarCard/CarCard'
import CustomSelect from '../CustomSelect/CustomSelect'
import s from './CarList.module.scss'

type CarListProps = {
  cars: Car[];
};

const sortOptions = [
  { label: 'Год выпуска (по возрастанию)', value: 'yearAsc' },
  { label: 'Год выпуска (по убыванию)', value: 'yearDesc' },
  { label: 'Цена (по возрастанию)', value: 'priceAsc' },
  { label: 'Цена (по убыванию)', value: 'priceDesc' },
];

const CarList: React.FC<CarListProps> = ({cars}) => {
	const {
    filteredCars,
    selectedBrand,
    selectedColor,
    handleBrandChange,
    handleColorChange,
  } = useFilter(cars); // Используем хук useFilter для фильтрации

  const { sortedCars, sortType, handleSortChange } = useSort(filteredCars); // Используем хук useSort для сортировки

  // Получаем уникальные опции для фильтрации
  const brandOptions = getUniqueOptions(cars, 'brand');
  const colorOptions = getUniqueOptions(cars, 'color');

  return (
      <div className={s.container}>
        <div className={s.filterContainer}>
          <CustomSelect label="Марка" value={selectedBrand} onChange={handleBrandChange} options={brandOptions} />
          <CustomSelect label="Цвет" value={selectedColor} onChange={handleColorChange} options={colorOptions} />
          <CustomSelect label="Сортировка" value={sortType} onChange={handleSortChange} options={sortOptions} />
          <Link href="/addCar" className={s.btn}>
          Добавить новый автомобиль
        </Link>
        </div>
		
				<div className={s.list}>
          {!sortedCars.length && (<p className={s.text}>ничего не найдено</p>)}
					{sortedCars.map((car) => (
						<CarCard key={car.id} car={car} />
					))}
				</div>
			</div>
  );
};

export default CarList;