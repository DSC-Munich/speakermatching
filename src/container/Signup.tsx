import * as React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Signup: React.FunctionComponent<{}> = () => {
  return (
    <Layout>
      <Button title={"Sign up"} onClick={() => console.log("Signup")} />
    </Layout>
  );
};

export default Signup;
