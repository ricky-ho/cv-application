import React from "react";
import "./Personal.css";

class Personal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      editting: true,
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
    const { name, email, phone, editting } = this.state;

    return (
      <div className="section-container">
        <h1 className="section-header">Personal</h1>
        <form className="form personal-form" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label>
              Full Name:{" "}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email:{" "}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone:{" "}
              <input
                type="tel"
                name="phone"
                value={phone}
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

export default Personal;
