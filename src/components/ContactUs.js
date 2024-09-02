const { useEffect } = require("react");

const ContactUs = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("useEffect running");
    }, 1000);
    return () => {
      clearInterval(timer); // This return basically unmounting the ContactUs.js component...I we wont use this return then timer will goes on with irrespective of on which page we are moving
    };
  });
  return <div>This is contactus page</div>;
};

module.exports = ContactUs;
