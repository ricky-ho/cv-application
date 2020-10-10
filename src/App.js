import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      school: "",
      degree: "",
      date: "",
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
    console.log("Submitted");
    console.log(this.state);

    e.preventDefault();
  };

  render() {
    return (
      <div className="App flex-col">
        <Personal
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
        <Education
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
        <Experience
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
