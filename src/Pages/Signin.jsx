import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

import axios from "axios";
import Feed from "../Components/Utils/Feed";

import logo from "../Images/logo.png";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email ID is required")
    .email("Enter valid email id"),
  password: yup.string().required("Password is required"),
});

const Signin = () => {
  const [apiFeed, setApiFeed] = useState("");
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="wrapper auth-form">
        <div className="row mt-4">
          <div className="col-md-4 mx-auto">
            <div className="card shadow">
              <div className="card-body">
                <div className="px-2 py-4">
                  <div className="mb-5">
                    <img src={logo} className="d-block auth-logo" alt="logo" />
                  </div>

                  <h3 className="fw-bold">Welcome back to Roaddo!</h3>
                  <div className="mb-3 fw-bold">
                    <span className="text-muted">Don't have an account?</span>{" "}
                    <Link to="/sign-up">Sign up for free</Link>
                  </div>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, { resetForm }) => {
                      let formData = new FormData();

                      formData.append("email", values.email);
                      formData.append("password", values.password);

                      axios
                        .post(
                          "https://roaddo.com/dev/webservice/index.php/merchantauth/auth_merchant",
                          formData
                        )
                        .then((res) => {
                          if (res.status === 200) {
                            resetForm({ values: "" });
                            localStorage.setItem("token", res.data.token);
                            navigate("/dashboard", { replace: true });
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
                      <div className="mb-3">
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

                      <div className="mb-3">
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

                      <div className="mb-4">
                        <a href="hello.html" className="fw-bold">
                          Forgot Password?
                        </a>
                      </div>

                      <div className="mb-3">
                        <button
                          type="submit"
                          className="btn bg-dark d-block w-50 mx-auto d-flex align-item-center justify-content-center"
                        >
                          Sign in
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
