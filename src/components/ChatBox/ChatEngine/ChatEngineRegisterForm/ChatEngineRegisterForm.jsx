import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik';
import * as Yup from 'yup';
function ChatEngineRegisterForm() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const formik = useFormik({
        initialValues: {
          email: '',
          phone: '',
          secret: ''
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
          secret: Yup.string().min(6, 'Must be 6 characters or more')
        }),
        onSubmit: values => {
          // check secret ? loginWithSecret.getHistory : (loginDefault ? not get history : register)
          // connect with HR to chat
        },
    });

  return (
    <form onSubmit={formik.handleSubmit} className="chat-register-form">
        <h2>Fill the following to continue</h2>
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />

      {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
      ) : null}

    <label htmlFor="phone">Phone numbers</label>
    <input
      id="phone"
      name="phone"
      type="phone"
      onChange={formik.handleChange}
      value={formik.values.phone}
    />
      {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
          ) : null}

    <label htmlFor="secret">Secret</label>
    <input
      id="secret"
      name="secret"
      type="password"
      onChange={formik.handleChange}
      value={formik.values.secret}
    />
        {formik.touched.secret && formik.errors.secret ? (
        <div>{formik.errors.secret}</div>
    ) : null}
    <button type="submit">Submit</button>
  </form>
  )
}

ChatEngineRegisterForm.propTypes = {}

export default ChatEngineRegisterForm
