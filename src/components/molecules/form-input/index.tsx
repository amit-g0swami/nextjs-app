import React, { useState } from "react";
import { useFormContext } from "../form";
import { Container } from "@/components/atoms/container";

interface IFormInputProps {
  placeholder?: string;
  showHideToggle?: boolean;
  name: string;
  label?: string;
  labelRequired?: boolean;
}

export const FormInput: React.FC<IFormInputProps> = ({
  placeholder,
  name,
  showHideToggle = false,
  label,
  labelRequired = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { values, setValues, errors } = useFormContext();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Container>
      <Container>{label}</Container>
      <Container>{labelRequired && "*"}</Container>
      <input
        type={showHideToggle && showPassword ? "text" : "password"}
        value={String(values[name] || "")}
        onChange={handleInputChange}
        placeholder={placeholder}
        name={name}
      />
      {showHideToggle && (
        <Container onClick={handleTogglePassword}>
          {showPassword ? "hide" : "show"}
        </Container>
      )}
      {errors[name] && <p>{errors[name]}</p>}
    </Container>
  );
};
