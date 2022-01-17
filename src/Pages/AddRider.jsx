import { useState } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

import axios from "axios";
import Feed from "../Components/Utils/Feed";
import DashboardHeader from "../Components/DashboardHeader";
import Sidebar from "../Components/Sidebar";

const validationSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required!"),
  last_name: yup.string().required("Last Name is required!"),
  email: yup
    .string()
    .required("Email is required!")
    .email("Email is not valid"),
  tel: yup.string().required("Phone No is required!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password must contain minimum of 8 characters"),
});

const Profile = () => {
  const [apiFeed, setApiFeed] = useState("");

  return (
    <>
      <Sidebar />
      <div className="d-content">
        <DashboardHeader />
        <div className="container">
          <div className="main-content">
            <h4>New Rider Account</h4>
            <div className="wrapper auth-form">
              <Formik
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  tel: "",
                  password: "",
                }}
                onSubmit={(values, { resetForm }) => {
                  let formData = new FormData();

                  formData.append("vName", values.first_name);
                  formData.append("vLastName", values.last_name);
                  formData.append("vPhone", values.tel);
                  formData.append("vEmail", values.email);
                  formData.append("vPassword", values.password);

                  axios
                    .post(
                      "https://roaddo.com/dev/webservice/index.php/merchantactions/create_rider",
                      formData,
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "token"
                          )}`,
                        },
                      }
                    )
                    .then((res) => {
                      if (res.status === 200) {
                        resetForm({ values: "" });
                        setApiFeed(res.data.message);
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
                      placeholder="First Name"
                      name="first_name"
                    />
                    <ErrorMessage
                      name="first_name"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-2">
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="last_name"
                    />
                    <ErrorMessage
                      name="last_name"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-2">
                    <Field
                      type="email"
                      className="form-control"
                      placeholder="Email"
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
                      type="tel"
                      className="form-control"
                      placeholder="Phone No"
                      name="tel"
                    />
                    <ErrorMessage
                      name="tel"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-2">
                    <Field
                      type="text"
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

                  <button type="submit" className="btn btn-primary">
                    Create Account
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
