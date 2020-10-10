import React, { useState } from "react";

const Education = (props) => {
  const { state } = props;
  const [isEditting, setisEditting] = useState(false);

  return (
    <section id="education" className="section-container">
      <h2 className="section-header">Education</h2>
      <form className="form flex-col" onSubmit={(e) => props.handleSubmit(e)}>
        <div className="form-row flex">
          <div className="form-row-item flex-col">
            <label htmlFor="school">School:</label>
            <input
              type="text"
              id="school"
              name="school"
              placeholder="Enter school name"
              value={state.school}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
          <div className="form-row-item flex-col">
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="Enter degree"
              value={state.degree}
              onChange={(e) => props.handleChange(e)}
            />
          </div>
        </div>
        <div className="form-row flex">
          <div className="form-row-item flex-col">
            <label htmlFor="degreeDate">Date Awarded:</label>
            <input
              type="date"
              id="degreeDate"
              name="date"
              value={state.date}
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

export default Education;
