import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err", err);
  return (
    <div>
      <h1>OOps...</h1>
      <h2>Something Went Wrong!!!</h2>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};
module.exports = Error;
