import React from "react";

class ClassDemo extends React.Component {
  constructor() {
    // Initialize the class
    super(); // Init parent class (React.Component)
    console.log("Constructor");
    this.state = {
      fName: "John",
      lName: "Doe",
      counter: 0,
    };
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentDidUpdate() {
    console.log("Component did update");
    // Perform calculations/comparision when the component changes
  }

  componentDidMount() {
    // API calling
    console.log("Component did mount");
    setTimeout(() => {
      // this.state.fName = "Alex";
      this.setState({
        fName: "Alex",
      });
    }, 5_000);
  }

  componentWillUnmount() {
    // Cleanups
    console.log("Component will unmount");
  }

  onBtnClick() {
    console.log(this);
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h2>Hello, Class based component</h2>
        <h3>Name: {this.state.fName + this.state.lName} </h3>
        <h3>{this.state.counter}</h3>
        <button onClick={this.onBtnClick}>Increase</button>
      </div>
    );
  }
}

export default ClassDemo;
