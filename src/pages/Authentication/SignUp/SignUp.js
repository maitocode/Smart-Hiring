import React, { useState } from "react";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import "./SignUp.scss";
import internal from "assets/images/internal-persona.svg";
import creator from "assets/images/project-creator.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword, deleteUser } from "@firebase/auth";
import { auth, db } from "firebase";

import http from "core/services/httpService";
import Loading from "components/Loading/Loading";
import { pushToast } from "components/Toast";
import { doc, setDoc } from "@firebase/firestore";

const SignUp = () => {
  let history = useHistory();
  const [isShow, setIsShow] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [roleName, setRoleName] = useState("ROLE_DEV");
  const [isLoadding, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("Required!")
        .max(15, "Maximum 15 characters")
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .matches(/^\s*\S[\s\S]*$/, "Cannot contain only blankspaces"),
      lastname: Yup.string()
        .required("Required!")
        .max(15, "Maximum 15 characters")
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .matches(/^\s*\S[\s\S]*$/, "Cannot contain only blankspaces"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .required("Required!")
        .matches(/^\S*$/, "This field cannot contain blankspaces")
        .matches(
          /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "At least one uppercase, one number and one special case character"
        )
        .min(5, "Minimum 5 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password doesn’t match")
        .required("Required!")
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        const responseFromAuth = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        try {
          const userId = responseFromAuth.user.uid;
          await setDoc(doc(db, "users", userId), {
            email: values.email,
            uid: userId,
            name: values.firstname + " " + values.lastname
          });
          const dataSignup = { ...values, roleName, uid: userId };
          await http.post("/auth/sign-up", dataSignup).then((response) => {
            if (response?.result) {
              resetForm();
              localStorage.setItem("email", values.email);
              history.push("/verify-email", { email: values.email });
            } else {
              deleteUser(responseFromAuth.user);
              pushToast("error", response?.data?.message);
              values.password = "";
              values.confirmPassword = "";
            }
            setIsLoading(false);
          });
        } catch (error) {
          deleteUser(responseFromAuth.user);
          pushToast("error", error?.message);
          setIsLoading(false);
        }
      } catch (error) {
        pushToast("error", error?.message);
        setIsLoading(false);
      }
    }
  });
  const touched = formik.touched;
  const error = formik.errors;
  const values = formik.values;

  return (
    <AuthLayout>
      <Loading visible={isLoadding} />
      <div className="signup-wrapper">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-wrapper">
            <div className="card-wrapper">
              <div className="card-signup">
                <input
                  type="radio"
                  name="pricing"
                  id="card1"
                  defaultChecked
                  value="ROLE_DEV"
                  onChange={(e) => setRoleName(e.target.value)}
                />
                <label className="label-card" htmlFor="card1">
                  <img src={internal} className="card-img" alt="" />
                  <h5 className="card-h5">Developer</h5>
                </label>
              </div>
              <div className="card-signup">
                <input
                  type="radio"
                  name="pricing"
                  id="card2"
                  value="ROLE_PO"
                  onChange={(e) => setRoleName(e.target.value)}
                />
                <label className="label-card" htmlFor="card2">
                  <img src={creator} className="card-img" alt="" />
                  <h5 className="card-h5">Project Manager</h5>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <label className="label-form">Name </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="firstname"
                  value={values.firstname}
                  onChange={formik.handleChange}
                />
                {error.firstname && touched.firstname && (
                  <p className="errors">{error.firstname}</p>
                )}
              </div>
              <div className="col form-group">
                <label className="label-form invisible">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  name="lastname"
                  value={values.lastname}
                  onChange={formik.handleChange}
                />
                {error.lastname && touched.lastname && (
                  <p className="errors">{error.lastname}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label className="label-form">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={formik.handleChange}
              />
              {error.email && touched.email && (
                <p className="errors">{error.email}</p>
              )}
            </div>

            <div className="form-group">
              <label className="label-form">Password</label>
              <div className="input-group">
                <input
                  className="form-control"
                  type={isShow ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={values.password}
                  onChange={formik.handleChange}
                />
                <span className="input-group-append">
                  <div className="input-group-text">
                    <i
                      className={isShow ? "fas fa-eye" : "fa fa-eye-slash"}
                      onClick={() => setIsShow((prevState) => !prevState)}
                    />
                  </div>
                </span>
              </div>
              {error.password && touched.password && (
                <p className="errors">{error.password}</p>
              )}
            </div>
            <div className="form-group">
              <label className="label-comfirm">Confirm password</label>
              <div className="input-group">
                <input
                  className="form-control"
                  type={isShowConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={formik.handleChange}
                />
                <span className="input-group-append">
                  <div className="input-group-text">
                    <i
                      className={
                        isShowConfirm ? "fas fa-eye" : "fa fa-eye-slash"
                      }
                      onClick={() =>
                        setIsShowConfirm((prevState) => !prevState)
                      }
                    />
                  </div>
                </span>
              </div>
              {error.confirmPassword && touched.confirmPassword && (
                <p className="errors">{error.confirmPassword}</p>
              )}
            </div>
            <p className="text-muted-1">
              By clicking Sign Up, you agree with our{" "}
              <span className="font-weight-bold">Privacy Policy</span>
            </p>
            <div className="form-group btn-signup">
              <Loading visible={isLoadding} />
              <button type="submit" className="btn btn-block">
                {" "}
                SIGN UP
              </button>
            </div>
            <p className="text-muted-2">
              Already have an account ?{" "}
              <Link to="/login" className="font-weight-bold">
                Log In Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
