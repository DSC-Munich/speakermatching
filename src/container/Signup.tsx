import * as React from "react";
import Button from "../components/Button";

const Signup: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Button title={"Sign up"} onClick={() => console.log("Signup")} />
    </div>
  );
};

export default Signup;
