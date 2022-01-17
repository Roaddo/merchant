import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

import axios from "axios";
import Feed from "../Components/Utils/Feed";

const validationSchema = yup.object().shape({
  fullname: yup
    .string()
    .required("First name is required.")
    .min(8, "Minimum 8 characters required"),
  email: yup
    .string()
    .required("Email ID is required")
    .email("Enter valid email id"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must contain minimum of 8 characters"),
});

const Signup = () => {
  const [apiFeed, setApiFeed] = useState("");
  let navigate = useNavigate();

  return (
    <div className="container">
      <h4>Sign Up</h4>
      <div className="wrapper auth-form">
        <Formik
          initialValues={{ fullname: "", email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            let formData = new FormData();

            formData.append("full_name", values.fullname);
            formData.append("email", values.email);
            formData.append("password", values.password);

            axios
              .post(
                "https://roaddo.com/dev/webservice/index.php/merchantauth/new_merchant",
                formData
              )
              .then((res) => {
                if (res.status === 200) {
                  resetForm({ values: "" });
                  navigate("/", { replace: true });
                }
              })
              .catch((error) => {
                setApiFeed(error.response.data.error);
              });
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <Feed msg={apiFeed} />
            <div className="mb-2">
              <Field
                type="text"
                className="form-control"
                placeholder="Full Name"
                name="fullname"
              />
              <ErrorMessage
                name="fullname"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-2">
              <Field
                type="email"
                className="form-control"
                placeholder="hello@email.com"
                name="email"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-2">
              <Field
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
              />

              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>

            <Link to="/" className="d-block mb-2">
              Already have an account? Sign in
            </Link>

            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
