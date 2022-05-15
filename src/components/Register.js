import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Data = {
    "data": {
      "name": "rohit",
      "emailId": "rroo@gmail.com",
      "password": "1234567890",
      "phoneNo": "9876543210",
    },
  };

  const {
    data: { name, emailId, password, phoneNo },
  } = Data;
  const navigate = useNavigate();
  const validate = Yup.object({
    name: Yup.string()
      .max(10, "must be 10 characters or less")
      .required("Name is Required"),
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is Required"),
    phone: Yup.number()
      .typeError("you must specify a number")
      .required("phone no. is Required"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        phone: "",
      }}
      validationSchema={validate}
      onSubmit={(values, onSubmitProps) => {
        console.log(values);

        if (
          values.name === name &&
          values.email === emailId &&
          values.password === password &&
          values.phone === phoneNo
        ) {
          window.alert("YOU ARE VALID USER");
          onSubmitProps.setSubmitting(false);
          onSubmitProps.resetForm();
          navigate("/home");
        } else {
          window.alert("Invalid User");
        }
      }}
    >
      {(formik) => (
        <div className="container">
          <Form className="form-container">
            <img src="assets/avatar.png" alt="avatar" />
            <h1>Register</h1>
            <Input label="Name" name="name" type="text" />
            <Input label="Email" name="email" type="email" />
            <Input label="Password" name="password" type="password" />
            <Input label="Phone Number" name="phone" type="text" />
            <button type="reset" className="btn1">
              Reset
            </button>
            <button type="submit">Register</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Register;
