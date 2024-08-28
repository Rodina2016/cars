import React from 'react'
import s from './CustomSelect.module.scss'

type CustomSelectProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
};

const CustomSelect: React.FC<CustomSelectProps> = ({ label, value, onChange, options }) => {
  return (
    <div className={s.filterContainer}>
      <label htmlFor={label}>{label}:</label>
      <select id={label} value={value} onChange={onChange} className={s.filterSelect}>
      <option value="">Все</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(CustomSelect);
