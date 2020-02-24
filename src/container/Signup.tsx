import * as React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { H1, H2 } from "../components/Headlines";
import { colors } from "../theme";

const Signup: React.FunctionComponent<{}> = () => {
  return (
    <Layout backgroundColor="#000">
      <H1 color={colors.white}>New here?</H1>
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
