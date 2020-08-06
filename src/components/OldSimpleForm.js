import React from "react";
// import { useFormik } from "formik";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
function OldSimpleForm() {
  const validationSchema = Yup.object({
    name: Yup.string().required("required!"),
    email: Yup.string().email("invalid email format").required("required!"),
  });
  const initialValues = {
    name: "",
    email: "",
    phone: [""],
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validationSchema,
  //   });
  //   console.log(formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">Name </label>
        <Field
          type="text"
          name="name"
          id="name"
          //   {...formik.getFieldProps("name")}
          // Form component includes getFieldProps
        />
        <ErrorMessage name="name" />

        {/* {formik.touched.name && formik.errors.name ? (
          <div className="errors">*{formik.errors.name}</div>
        ) : null} */}
        <label htmlFor="email" id="email">
          Email
        </label>
        <Field
          type="email"
          name="email"
          // {...formik.getFieldProps("email")}
        />
        {/* {formik.touched.email && formik.errors.email ? (
          <div className="errors">*{formik.errors.email}</div>
        ) : null} */}
        <ErrorMessage name="email" />
        <label htmlFor="Phone No.">Phone No.</label>
        <FieldArray name="phone">
          {(fieldArrayProps) => {
            console.log(fieldArrayProps);
            const { push, remove, form } = fieldArrayProps;
            const { values } = form;
            const { phone } = values;
            return (
              <div>
                {phone.map((ph, index) => (
                  <div key={index}>
                    <Field name={`phone[${index}]`} />
                    {index > 0 && (
                      <button type="button" onClick={() => remove(index)}>
                        -
                      </button>
                    )}

                    <button type="button" onClick={() => push("")}>
                      +
                    </button>
                  </div>
                ))}
              </div>
            );
          }}
        </FieldArray>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default OldSimpleForm;
