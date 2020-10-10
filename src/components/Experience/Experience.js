import React, { useState } from "react";

const Experience = (props) => {
  const { state } = props;
  const [isEditting, setisEditting] = useState(false);

  return (
    <section id="experience" className="section-container">
      <h2 className="section-header">Experience</h2>
      <form className="form flex-col" onSubmit={(e) => props.handleSubmit(e)}>
        <div className="form-row flex">
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
        <div className="form-row flex">
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
        <div className="form-row flex">
          <div className="form-row-item flex-col">
            <label htmlFor="Tasks">Tasks:</label>
            <input
              type="text"
              id="tasks"
              name="description"
              value={state.description}
              placeholder="Enter task"
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

export default Experience;
