import * as React from "react";
import styled from "styled-components";
import { fontSizes } from "../theme";

export const H1 = styled.h1<{ color?: string }>`
  font-size: ${fontSizes.large};
  color: ${p => p.color};
`;

export const H2 = styled.h2<{ color?: string }>`
  font-size: ${fontSizes.medium};
  color: ${p => p.color};
`;

export default { H1, H2 };
