import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const { firstName, lastName, email, password, confirmPassword } =
        formData;
      alert(
        `Registration successful!\nName: ${firstName} ${lastName}\nEmail: ${email}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`
      );
    }
  };

  const validateForm = () => {
    const errors = {};
    if (formData.firstName.trim() === "") {
      errors.firstName = "First name is required";
    }
    if (formData.lastName.trim() === "") {
      errors.lastName = "Last name is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (formData.password.trim() === "") {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (formData.confirmPassword.trim() === "") {
      errors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        {formErrors.firstName && (
          <span className="error">{formErrors.firstName}</span>
        )}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {formErrors.lastName && (
          <span className="error">{formErrors.lastName}</span>
        )}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {formErrors.password && (
          <span className="error">{formErrors.password}</span>
        )}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {formErrors.confirmPassword && (
          <span className="error">{formErrors.confirmPassword}</span>
        )}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
