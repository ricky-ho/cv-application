import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

/* For Future: 
  - Add hovering edit display 
  - Reorganize to reduce repetitive code
*/

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
      degreeDate: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      tasks: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };

  render() {
    return (
      <div className="App flex-col">
        <Personal handleChange={this.handleChange} state={this.state} />
        <Education handleChange={this.handleChange} state={this.state} />
        <Experience handleChange={this.handleChange} state={this.state} />
      </div>
    );
  }
}

export default App;
