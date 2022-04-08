import React, { useState } from "react";
import AuthLayout from "layout/AuthLayout/AuthLayout";
import "./VerifyEmail.scss";
import Loading from "components/Loading/Loading";
import useVerifyEmail from "hook/useVerifyEmail";
import useResend from "hook/useResend";

const VerifyEmail = () => {
  const [digitCode, setDegitCode] = useState("");
  const [yourEmail] = useState(localStorage.getItem("email"));
  const [isLoadding, setIsLoading] = useState(false);
  const [verifyEmail] = useVerifyEmail();
  const [resendToken] = useResend();

  const handleClickConfirm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    verifyEmail(digitCode);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setDegitCode("");
  };

  const handleResendBtn = () => {
    setIsLoading(true);
    resendToken(yourEmail);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <AuthLayout>
      <Loading visible={isLoadding} />
      <div className="verify-email-wrapper">
        <h2 className="signup-title">Verify Email</h2>
        <div className="verify-email-form">
          <form>
            <div className="verify-email-form-content">
              <p>Enter the code we’ve just send you to</p>
              <p className="verify-email-form-content-email">{yourEmail}</p>
            </div>
            <div className="verify-email-form-input">
              <p>6-digit Code</p>
              <input
                value={digitCode}
                type="text"
                className="verify-email-form-input-textbox"
                maxLength="6"
                onChange={(e) => setDegitCode(e.target.value)}
              />
            </div>
            <button
              className="verify-email-form-btn"
              onClick={(e) => handleClickConfirm(e)}
            >
              CONFIRM
            </button>
          </form>
          <div className="verify-email-form-resend">
            Did not receive the code?{" "}
            <button
              className="verify-email-form-resend-btn"
              onClick={() => handleResendBtn()}
            >
              RESEND
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
