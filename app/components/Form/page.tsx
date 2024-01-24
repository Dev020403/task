"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { handleSubmitForm } from "@/action/handleSubmitForm";
interface FormValues {
  name: string;
  email: string;
  contact: string;
}

const BasicForm: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    contact: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    contact: Yup.string()
      .matches(/^\d{10}$/, "Contact must be a 10-digit number")
      .required("Contact is required"),
  });

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      handleSubmitForm(values.name, values.email, values.contact);

      resetForm();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Formik Basic Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form method="post">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-600"
            >
              Contact:
            </label>
            <Field
              type="text"
              id="contact"
              name="contact"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="contact"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BasicForm;
