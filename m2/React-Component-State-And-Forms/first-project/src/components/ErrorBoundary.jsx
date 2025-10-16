import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    console.log("componentDidCatch");
    // Error has occured
    this.setState({ hasError: true });
  }

  render() {
    console.log(this.props);
    if (this.state.hasError) {
      return (
        <div>
          <h2>Uh oh, you encountered an error</h2>
        </div>
      );
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
