"use client";

import React from "react";

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  label?: string;
}

function Input({
  placeholder,
  type = "text",
  value,
  onChange,
  disabled = false,
  required = false,
  name,
  id,
  label,
  className = "",
}: InputProps) {
  return (
    <div className={`${label ? "flex flex-col gap-2" : ""}`}>
      {label && (
        <label className="font-public-sans-regular text-[14px] leading-5 text-[#191C1F]">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        className={`border border-[#E4E7E9] font-mardoto-regular tablet:w-90 text-[14px] leading-5 bg-white  py-2.75 px-4 rounded-xs transition-all duration-200 placeholder-[#5F6C72] focus:outline-none focus:border-[#D0D7E0] disabled:bg-[#F5F7F9] disabled:text-[#808A99] disabled:cursor-not-allowed ${className}`}
      />
    </div>
  );
}

export default Input;
