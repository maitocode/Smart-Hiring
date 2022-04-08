/*eslint-disable*/
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import "./VerifyDigitalCode.scss";
import http from "core/services/httpService";
import Loading from "components/Loading/Loading";
import { pushToast } from "components/Toast";

function VerifyDigitalCode() {
  const [emailFogotPassword] = useState(localStorage.getItem("emailFogotPassword"));
  const [isLoadding, setIsLoading] = useState(false);
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      digitCode: ''
    },
    validationSchema: Yup.object({
      digitCode: Yup.string().min(1).max(6, 'Must be exactly a 6-digit').required("Required!")
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const respone = await http.get(`/auth/forgot-password/confirm?token=${values.digitCode}`)
        if(respone.result){
          history.push("/fogot-password-update-password")
        }
        setIsLoading(false);
      } catch (err) {
        pushToast("error", err.message);
        setIsLoading(false);
      }
    }
  })
  const {values, errors} = formik
  const goBack = () => {
    history.goBack()
  }
  const handleResendPass = async () => {
    await http.get(`/auth/forgot-password?email=${emailFogotPassword}`)
  }
  return (
    <AuthLayout>
      <Loading visible={isLoadding} />
      <div className="verify-password-wrapper">
        <div onClick={goBack} className="verify-back-btn"></div>
        <div className="verify-main">
          <div className="verify-reset-title">Reset your Password</div>
          <form onSubmit={formik.handleSubmit} className="verify-form">
            <div className="verify-form-group">
              <div className="verify-text-form">Enter the code we’ve just send you to change your password: <span>{emailFogotPassword}</span></div>
              <div className="verify-digit">
                <div className="verify-private-digit">6-digit Code</div>
                <div className="verify-resend-digit" onClick={handleResendPass}>resend</div>
              </div>
              <input 
                type="text" 
                className="verify-digit-code"
                name="digitCode"
                value={values.digitCode}
                onChange={formik.handleChange}
              />
              {errors.digitCode && (
                <p className="errors">{errors.digitCode}</p>
              )}
            </div>
            <button type="submit" className="verify-btn-submit">CONFIRM</button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}

export default VerifyDigitalCode;