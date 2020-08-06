import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
function OldSimpleForm() {
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
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="errors">*{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email" id="email">
          Email
        </label>
        <input type="email" name="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div className="errors">*{formik.errors.email}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldSimpleForm;
