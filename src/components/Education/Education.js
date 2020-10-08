import React from "react";
import "./Education.css";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      date: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    const { school, degree, date } = this.state;

    return (
      <div className="section-container">
        <h1 className="section-header">Education</h1>
        <form className="form education-form">
          <div className="form-row">
            <label>
              School:
              <input
                type="text"
                name="school"
                value={school}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Degree:
              <input
                type="text"
                name="degree"
                value={degree}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Date Awarded:
              <input
                type="date"
                name="date"
                value={date}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
