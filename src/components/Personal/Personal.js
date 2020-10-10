import React, { useState } from "react";

const Personal = (props) => {
  const { state } = props;
  const [isEditting, setisEditting] = useState(true);

  const handleSubmit = (e) => {
    setisEditting(false);
    e.preventDefault();
  };

  const handleEdit = () => {
    setisEditting(true);
  };

  let toDisplay;
  if (isEditting) {
    toDisplay = (
      <form className="form flex-col" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-row">
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
        <div className="form-row">
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
        <div className="form-row">
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
        <div className="form-row center">
          <input type="submit" className="btn" value="Submit" />
        </div>
      </form>
    );
  } else {
    toDisplay = (
      <div className="form flex-col">
        <div className="form-row-item">
          <h3 className="item-title">Full Name: </h3>
          <p className="item-value">{`${state.firstName} ${state.lastName}`}</p>
        </div>
        <div className="form-row-item">
          <h3 className="item-title">Email: </h3>
          <p className="item-value">{state.email}</p>
        </div>
        <div className="form-row-item">
          <h3 className="item-title">Phone Number: </h3>
          <p className="item-value">{state.phone}</p>
        </div>

        <div className="form-row center">
          <input
            type="button"
            className="btn"
            value="Edit"
            onClick={() => handleEdit()}
          />
        </div>
      </div>
    );
  }

  return (
    <section id="personal" className="section-container">
      <h2 className="section-header">General Information</h2>
      {toDisplay}
    </section>
  );
};

export default Personal;
