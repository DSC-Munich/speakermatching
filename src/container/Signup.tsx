import * as React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { colors } from "../theme";

const Signup: React.FunctionComponent<{}> = () => {
  return (
    <Layout>
      <Button
        title={"Sign up"}
        onClick={() => console.log("Signup")}
        backgroundColor={colors.blue}
        color={colors.white}
      />
    </Layout>
  );
};

export default Signup;
