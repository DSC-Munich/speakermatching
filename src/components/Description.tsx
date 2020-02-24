import * as React from "react";
import styled from "styled-components";
import { fontSizes, colors } from "../theme";

const Description = styled.p<{ color?: string }>`
  font-size: ${fontSizes.small};
  color: ${colors.darkgray};
`;

export default Description;
