import React, { Component, PropTypes } from 'react';


const renderField = ({ input, label, type, meta: { touched, error, invalid } }) => (
  <div className={`form-group ${touched && invalid ? 'has-error' : ''}`}>
    <label  className="control-label">{label}</label>
    <div>
      <input {...input} className="form-control"  placeholder={label} type={type}/>
       <div className="help-block">
      {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  </div>
)


const validate = values => {
  const errors = {}
  if (!values.name || values.name.trim() === '') {
    errors.name = 'Required'
  } else if (values.name.length > 50) {
    errors.username = 'Must be 50 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.decile) {
    errors.decile = 'Required'
  } else if (isNaN(Number(values.decile))) {
    errors.decile = 'Must be a number'
  }
  if (!values.latitude) {
    errors.latitude = 'Required'
  } else if (isNaN(Number(values.latitude))) {
    errors.latitude = 'Must be a number'
  }
  if (!values.longitude) {
    errors.longitude = 'Required'
} else if (isNaN(Number(values.longitude))) {
    errors.longitude = 'Must be a number'
  }
  return errors
}

module.exports = {
    renderField,
    validate
}
