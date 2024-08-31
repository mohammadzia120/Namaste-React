const { useState } = require("react");

const User = (props) => {
  const { name, location, contact } = props;
  const [count] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
  );
};

module.exports = User;
