import * as React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Headline from "../components/Headline";
import { colors } from "../theme";

const Signup: React.FunctionComponent<{}> = () => {
  return (
    <Layout backgroundColor="#000">
      <Headline color={colors.white}>New here?</Headline>
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
