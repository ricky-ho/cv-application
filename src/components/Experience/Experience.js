import React, { useState } from "react";

const Experience = (props) => {
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
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Enter company name"
              value={state.company}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div className="form-row-item flex-col">
            <label htmlFor="position">Position Title:</label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Enter position title"
              value={state.position}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-item flex-col">
            <label htmlFor="jobStart">Start Date:</label>
            <input
              type="date"
              id="jobStart"
              name="startDate"
              value={state.startDate}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div className="form-row-item flex-col">
            <label htmlFor="jobEnd">End Date:</label>
            <input
              type="date"
              id="jobEnd"
              name="endDate"
              value={state.endDate}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-item flex-col">
            <label htmlFor="tasks">Tasks:</label>
            <input
              type="text"
              id="tasks"
              name="tasks"
              value={state.description}
              placeholder="Enter tasks"
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
          <h3 className="item-title">Company Name: </h3>
          <p className="item-value">{state.company}</p>
        </div>
        <div className="form-row-item">
          <h3 className="item-title">Position Title: </h3>
          <p className="item-value">{state.position}</p>
        </div>
        <div className="form-row-item">
          <h3 className="item-title">Start Date: </h3>
          <p className="item-value">{state.startDate}</p>
        </div>
        <div className="form-row-item">
          <h3 className="item-title">End Date: </h3>
          <p className="item-value">{state.endDate}</p>
        </div>
        <div className="form-row-item">
          <h3 className="item-title">Tasks: </h3>
          <p className="item-value">{state.tasks}</p>
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
    <section id="experience" className="section-container">
      <h2 className="section-header">Experience</h2>
      {toDisplay}
    </section>
  );
};

export default Experience;
