/*eslint-disable*/
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import "./UpdatePassWord.scss";
import http from "core/services/httpService";
import Loading from "components/Loading/Loading";
import { pushToast } from "components/Toast";

function UpdatePassWord() {
  const history = useHistory()
  const [isLoadding, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [emailFogotPassword] = useState(localStorage.getItem("emailFogotPassword"));
  const formik = useFormik({
    initialValues: {
      passWord: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      passWord: Yup.string().min(5, "Minimum 5 characters").required("Required!"),
      confirmPassword:  Yup.string().oneOf([Yup.ref("passWord")], "Password's not match").required("Required!")
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const respone = await http.post(`/auth/reset-password`, { 
          "email": emailFogotPassword,
          "password": values.passWord
        })
        if(respone.result) {
          history.push('/login', { successful: `Change password successfully!`})
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        pushToast("error", err.message);
      }
    }
  })
  const {values, errors} = formik
  const goBack = () => {
    history.goBack()
  }
  return (
    <AuthLayout>
      <Loading visible={isLoadding} />
      <div className="update-password-wrapper">
        <div onClick={goBack} className="update-back-btn"></div>
        <div className="update-main">
          <div className="update-reset-title">Reset your Password</div>
          <form onSubmit={formik.handleSubmit} className="update-form">
            <div className="update-pass-form-group">
              <label>New password</label>
              <input 
                type={isShowPassword ? "text" : "password"} 
                className="update-newpass" 
                name="passWord"
                value={values.passWord}
                onChange={formik.handleChange}
              />
              <div
                className="show-password"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? (
                  <i className="far fa-eye" />
                ) : (
                  <i className="far fa-eye-slash" />
                )}
              </div>
              {errors.passWord && (
                <p className="errors">{errors.passWord}</p>
              )}
            </div>
            <div className="update-pass-form-group confirm-pass-group">
              <label>Confirm password</label>
              <input 
                type={isShowConfirmPassword ? "text" : "password"} 
                className="update-newpass confirm-newpass" 
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={formik.handleChange}
              />
              <div
                className="show-password"
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              >
                {isShowConfirmPassword ? (
                  <i className="far fa-eye" />
                ) : (
                  <i className="far fa-eye-slash" />
                )}
              </div>
              {errors.confirmPassword && (
                <p className="errors">{errors.confirmPassword}</p>
              )}
            </div>
            <button type="submit" className="update-btn-submit">UPDATE PASSWORD</button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}

export default UpdatePassWord;
