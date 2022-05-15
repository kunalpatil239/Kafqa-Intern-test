import React from "react";
import { ErrorMessage, useField } from "formik";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field, meta);
  return (
    <div className="input-container">
      <label htmlFor={field.name}>{label}</label>
      <input
        id={field.name}
        className={`${meta.touched && meta.error && "invalid"}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default Input;
