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

export default renderField;
