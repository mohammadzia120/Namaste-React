import { useEffect, useState } from "react";
import UserClass from "./UserClass";
const About = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hi");
    console.log(count);
    setCount(5);
    console.log(count);
  }, []);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className="user-card">
      <h1>Details of the Tutorial</h1>
      <h1>count:{count}</h1>
      <UserClass
        name={"Mohammad Zia"}
        location={"Tanda, Ambedkar Nagar"}
        contact={"mohammadzia120@gmail.com"}
      />
    </div>
  );
};

module.exports = About;
