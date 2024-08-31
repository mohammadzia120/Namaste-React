import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    console.log(" constructor");
    super(props);
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    console.log("ComponentDidMount");
    const data = await fetch("https://api.github.com/users/mohammadzia120");
    const userData = await data.json();
    console.log("userData ", userData);
    this.setState({ userInfo: userData });
  }

  async componentDidUpdate() {
    console.log("componentDis update is called");
  }

  async componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }
  render() {
    console.log("render");
    // const { name, location, contact } = this.props;
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Contact: {login}</h3>
      </div>
    );
  }
}

module.exports = UserClass;
