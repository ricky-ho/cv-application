import React, { useState } from "react";

const Personal = (props) => {
  const { state } = props;
  const [isEditting, setisEditting] = useState(false);

  return (
    <section id="personal" className="section-container">
      <h2 className="section-header">General Information</h2>
      <form className="form flex-col" onSubmit={(e) => props.handleSubmit(e)}>
        <div className="form-row flex">
          <div className="form-row-item flex-col">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              value={state.firstName}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div className="form-row-item flex-col">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              value={state.lastName}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
        </div>
        <div className="form-row flex">
          <div className="form-row-item flex-col">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={state.email}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
        </div>
        <div className="form-row flex">
          <div className="form-row-item flex-col">
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={state.phone}
              placeholder="xxx-xxx-xxxx"
              onChange={(e) => props.handleChange(e)}
            />
          </div>
        </div>
        <div className="form-row flex center">
          <input type="submit" className="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
};

export default Personal;
