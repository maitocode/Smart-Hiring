import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik';

function ChatEngineRegisterForm(props) {

    const [values, setValues] = useState({});

    const handleChange = event => {
        setValues(prevValues => ({
          ...prevValues,
          [event.target.name]: event.target.value
        }));
    }

    const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    
    return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            phoneNumber: '',
            secret: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

   

  return (
    // <div className="chat-register-form">
    //     <h2>Fill the following to continue</h2>
    //     <input type="text" name="" id="" />
    // </div>
    <form onSubmit={formik.handleSubmit} className="chat-register-form">
        <h2>Fill the following to continue</h2>
    <label htmlFor="email">Email Address</label>
    <input
      id="chat-engine-rgf-email"
      name="chat-engine-rgf-email"
      type="email"
      onChange={handleChange}
      value={formik.values.email}
    />

    {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
    ) : null}

    <input
      id="chat-engine-rgf-phone"
      name="chat-engine-rgf-phone"
      type="number"
      onChange={handleChange}
      value={formik.values.phone}
    />
    <input
      id="chat-engine-rgf-secret"
      name="chat-engine-rgf-secret"
      type="password"
      onChange={handleChange}
      value={formik.values.secret}
    />
    <button type="submit">Submit</button>
  </form>
  )
}

ChatEngineRegisterForm.propTypes = {}

export default ChatEngineRegisterForm
