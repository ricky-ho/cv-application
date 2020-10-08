import React from "react";
import "./Experience.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
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
    const { company, position, startDate, endDate, description } = this.state;

    return (
      <div className="section-container">
        <h1 className="section-header">Experience</h1>
        <form className="form experience-form">
          <div className="form-row">
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={company}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Position:
              <input
                type="text"
                name="position"
                value={position}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Start Date:
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={this.handleChange}
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={description}
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

export default Experience;
