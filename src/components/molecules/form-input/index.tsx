import React, { useState } from "react";
import { useFormContext } from "../form";

interface IFormInputProps {
  placeholder?: string;
  showHideToggle?: boolean;
  name: string;
  label: string;
  labelRequired?: boolean;
  className?: string;
  type?: string;
}

export const FormInput: React.FC<IFormInputProps> = ({
  placeholder,
  name,
  label,
  labelRequired = false,
  className = "",
  type = "text",
}) => {
  const { values, setValues, errors } = useFormContext();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={className}>
      <label
        htmlFor="street-address"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {labelRequired && <span className="text-red-500"> * </span>}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={String(values[name] || "")}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        {errors[name] && (
          <p className="text-red-500 mt-1 text-sm">{errors[name]}</p>
        )}
      </div>
    </div>
  );
};
