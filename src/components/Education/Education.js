import React, { useState } from "react";

const Education = (props) => {
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
        <div className="form-row">
          <div className="form-row-item flex-col">
            <label htmlFor="degreeDate">Date Awarded:</label>
            <input
              type="date"
              id="degreeDate"
              name="degreeDate"
              value={state.date}
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
          <h3 className="item-title">School Name: </h3>
          <p className="item-value">{state.school}</p>
        </div>
        <div className="form-row-item">
          <h3 className="item-title">Degree: </h3>
          <p className="item-value">{state.degree}</p>
        </div>
        <div className="form-row-item">
          <h3 className="item-title">Date Awarded: </h3>
          <p className="item-value">{state.degreeDate}</p>
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
    <section id="education" className="section-container">
      <h2 className="section-header">Education</h2>
      {toDisplay}
    </section>
  );
};

export default Education;
