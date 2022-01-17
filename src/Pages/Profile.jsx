import { useState } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

import axios from "axios";
import Feed from "../Components/Utils/Feed";
import DashboardHeader from "../Components/DashboardHeader";
import Sidebar from "../Components/Sidebar";

const validationSchema = yup.object().shape({
  business_name: yup.string().required("Your Business Name is required!"),
  business_address: yup.string().required("Your Business Address is required!"),
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
            <h4>Profile</h4>
            <div className="wrapper auth-form">
              <Formik
                initialValues={{ business_name: "", business_address: "" }}
                onSubmit={(values, { resetForm }) => {
                  let formData = new FormData();

                  formData.append("business_name", values.business_name);
                  formData.append("business_address", values.business_address);

                  axios
                    .post(
                      "https://roaddo.com/dev/webservice/index.php/merchantactions/update_profile",
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
                      placeholder="Business Name"
                      name="business_name"
                    />
                    <ErrorMessage
                      name="business_name"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="mb-2">
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Business Address"
                      name="business_address"
                    />

                    <ErrorMessage
                      name="business_address"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Update
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
