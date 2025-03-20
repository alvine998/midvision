import { EyeClosedIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
  showPassword?: boolean;
  setShowPassword?: (show: boolean) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      required,
      showPassword = false,
      setShowPassword,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label className="mb-1 text-sm font-medium">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        {props.type == "password" ? (
          <>
            <div
              className={`border flex flex-row justify-between items-center rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 ${className} ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            >
              <input
                ref={ref}
                required={required}
                {...props}
                className="focus:outline-none"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => {
                  if (setShowPassword) {
                    setShowPassword(!showPassword);
                  }
                }}
              >
                {showPassword ? (
                  <EyeIcon className="w-6 h-6 text-gray-500" />
                ) : (
                  <EyeClosedIcon className="w-6 h-6 text-gray-500" />
                )}
              </button>
            </div>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </>
        ) : (
          <>
            <input
              ref={ref}
              className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className} ${
                error ? "border-red-500" : "border-gray-300"
              }`}
              required={required}
              {...props}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // Required for forwardRef components

export default Input;
