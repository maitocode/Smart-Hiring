/*eslint-disable*/
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import "./EnterEmail.scss";
import http from "core/services/httpService";
import Loading from "components/Loading/Loading";
import { pushToast } from "components/Toast";


function EnterEmail() {
  const [isLoadding, setIsLoading] = useState(false);
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      emailFogot: ''
    },
    validationSchema: Yup.object({
      emailFogot: Yup.string().email("Invalid email format").required("Required!")
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const respone = await http.get(`/auth/forgot-password?email=${values.emailFogot}`)
        localStorage.setItem("emailFogotPassword", values.emailFogot);
        if(respone.result){
          history.push("/fogot-password-verify-code")
        }
        setIsLoading(false);
      } catch (err) {
        pushToast("error", err.message);
        setIsLoading(false);
      }
    }
  })
  const {values, errors} = formik
  const backToLogin = () => {
    history.push("/")
  }
  return (
    <AuthLayout>
      <Loading visible={isLoadding} />
      <div className="fogot-password-wrapper">
        <div onClick={backToLogin} className="fogot-back-btn"></div>
        <div className="fogot-main">
          <div className="fogot-reset-title">Reset your Password</div>
          <form className="fogot-form-email" onSubmit={formik.handleSubmit}>
            <div className="fogot-form-group">
              <div className="fogot-text-form-fogot">Please enter your email address, we will send you an email to reset your password</div>
              <input 
                type="text" 
                className="fogot-email-fogot"
                name="emailFogot"
                value={values.emailFogot}
                onChange={formik.handleChange}
              />
              {errors.emailFogot && (
                <p className="errors">{errors.emailFogot}</p>
              )}
            </div>
            <button type="submit" className="fogot-btn-submit">SEND CODE</button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}

export default EnterEmail;
