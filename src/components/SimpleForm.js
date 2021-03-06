import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
function SimpleForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("required!"),
    email: Yup.string().email("invalid email format").required("required!"),
  });
  const initialValues = {
    name: "",
    email: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,

    // validate: (values) => {
    //   let errors = {};
    //   if (!values.name) {
    //     errors.name = "required";
    //   }
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = "Invalid email format";
    //   }
    //   return errors;
    // },
  });
  console.log(formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="errors">*{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email" id="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="errors">*{formik.errors.email}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
