import UserClass from "./UserClass";
const About = (props) => {
  return (
    <div className="user-card">
      <h1>Details of the Tutorial</h1>
      <UserClass
        name={"Mohammad Zia"}
        location={"Tanda, Ambedkar Nagar"}
        contact={"mohammadzia120@gmail.com"}
      />
    </div>
  );
};

module.exports = About;
