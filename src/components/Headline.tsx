import * as React from "react";
import styled from "styled-components";
import { fontSizes } from "../theme";

const Headline = styled.h2<{ color: string }>`
  font-size: ${fontSizes.large};
  color: ${p => p.color};
`;

export default Headline;
