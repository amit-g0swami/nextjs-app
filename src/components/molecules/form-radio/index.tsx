import React from "react";
import { useFormContext } from "../form";

interface IFormRadioInputProps {
  name: string;
  label: string;
  value: string;
  labelRequired?: boolean;
  className?: string;
}

export const FormRadioInput: React.FC<IFormRadioInputProps> = ({
  name,
  label,
  value,
  labelRequired = false,
  className = "",
}) => {
  const { values, setValues, errors } = useFormContext();

  const handleRadioChange = () => {
    setValues({ ...values, [name]: value });
  };

  return (
    <div className={className}>
      <div className="flex items-center gap-x-3">
        <input
          id={`${name}-${value}`}
          name={name}
          type="radio"
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          value={value}
          checked={values[name] === value}
          onChange={handleRadioChange}
        />
        <label
          htmlFor={`${name}-${value}`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
          {labelRequired && <span className="text-red-500"> * </span>}
        </label>
      </div>
      {errors[name] && (
        <p className="text-red-500 mt-1 text-sm">{errors[name]}</p>
      )}
    </div>
  );
};