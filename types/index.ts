export type Car = {
  id: number;
  brand: string;
  model: string;
  color: string;
  price: number;
  year: number;
  engineType: 'Бензиновый' | 'Дизельный' | 'Электрический';
  transmission?: 'Автоматическая' | 'Ручная' | 'Роботизированная';
  range?: number;
  imageUrl: string;
};

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}