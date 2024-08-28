import AddCarForm from '@/components/AddCarForm/AddCarForm'
import { getCurrentUser } from '@/utils/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function AddCarContainer() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    color: '',
    price: '',
    imageUrl: '',
    engineType: '',
    transmission: '',
    range: 0,
  });


	const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <p>Loading...</p>;
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        brand: formData.brand,
        model: formData.model,
        year: Number(formData.year),
        color: formData.color,
        price: Number(formData.price),
        imageUrl: formData.imageUrl,
        engineType: formData.engineType,
        transmission: formData.transmission,
        range: formData.range,
      }),
    });

    if (res.ok) {
      router.push('/'); // Перенаправляем на список автомобилей после добавления
    } else {
      console.error('Ошибка добавления автомобиля');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <AddCarForm
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
}

