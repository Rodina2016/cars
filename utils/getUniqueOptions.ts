export const getUniqueOptions = (cars: { brand: string; color: string }[], key: 'brand' | 'color'): { label: string; value: string }[] => {
  // Используем Set для получения уникальных значений и преобразуем их в нужный формат
  return Array.from(new Set(cars.map((car) => car[key]))).map((option) => ({
    label: option,
    value: option,
  }));
};
