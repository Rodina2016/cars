// pages/api/cars.ts
import { Car } from '@/types'
import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

// Путь к файлу с данными
const dataFilePath = path.join(process.cwd(), 'data', 'cars.json');

// Функция для чтения данных из файла
const readCarsFromFile = (): Car[] => {
  const fileContents = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(fileContents);
};

// Функция для записи данных в файл
const writeCarsToFile = (cars: Car[]): void => {
  fs.writeFileSync(dataFilePath, JSON.stringify(cars, null, 2), 'utf8');
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Car[] | { message: string }>) {
  if (req.method === 'GET') {
    const cars = readCarsFromFile();
    res.status(200).json(cars);
  } else if (req.method === 'POST') {
    const newCar: Car = req.body;
    const cars = readCarsFromFile();
    const newId = cars.length > 0 ? cars[cars.length - 1].id + 1 : 1;
    cars.push({ ...newCar, id: newId });
    writeCarsToFile(cars);
    res.status(201).json({ message: 'Car added successfully' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
