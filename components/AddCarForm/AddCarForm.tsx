import React from 'react'
import s from './AddCarForm.module.scss'

type AddCarFormProps = {
  formData: {
    brand: string;
    model: string;
    year: string | number;
    color: string;
    price: string | number;
    imageUrl: string;
    engineType: string;
    transmission?: string;
    range?: number;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const AddCarForm: React.FC<AddCarFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
}) => {

  return (
    <form onSubmit={onSubmit} className={s.formContainer}>
      <h1 className={s.title}>Добавить новый автомобиль</h1>

      <div className={s.label}>
        Бренд
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={onInputChange}
          className={s.input}
          required
        />
      </div>

      <div className={s.label}>
        Модель
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={onInputChange}
          className={s.input}
          required
        />
      </div>

      <div className={s.label}>
        Год выпуска
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={onInputChange}
          className={s.input}
          required
        />
      </div>

      <div className={s.label}>
        Цвет
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={onInputChange}
          className={s.input}
          required
        />
      </div>

      <div className={s.label}>
        Цена
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={onInputChange}
          className={s.input}
          required
        />
      </div>

      <div className={s.label}>
        Тип двигателя
        <select
          name="engineType"
          value={formData.engineType}
          onChange={onInputChange}
          className={s.select}
          required
        >
          <option value="">Выберите тип двигателя</option>
          <option value="Бензиновый">Бензиновый</option>
          <option value="Дизельный">Дизельный</option>
          <option value="Электрический">Электрический</option>
        </select>
      </div>

      {formData.engineType === 'Бензиновый' || formData.engineType === 'Дизельный' ? (
        <div className={s.label}>
          Трансмиссия
          <select
            name="transmission"
            value={formData.transmission || ''}
            onChange={onInputChange}
            className={s.select}
          >
            <option value="">Выберите трансмиссию</option>
            <option value="Автоматическая">Автоматическая</option>
            <option value="Ручная">Ручная</option>
            <option value="Роботизированная">Роботизированная</option>
          </select>
        </div>
      ) : null}

      {formData.engineType === 'Электрический' ? (
        <div className={s.label}>
          Запас хода (в км)
          <input
            type="number"
            name="range"
            value={formData.range || ''}
            onChange={onInputChange}
            className={s.input}
          />
        </div>
      ) : null}

      <div className={s.label}>
        Ссылка на изображение
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={onInputChange}
          className={s.input}
        />
      </div>

      <button type="submit" className={s.button}>Добавить автомобиль</button>
    </form>
  );
};

export default AddCarForm;
