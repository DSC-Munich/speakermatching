import * as React from "react";
import styled from "styled-components";
import { fontSizes, colors } from "../theme";

const Tag = styled.div<{ color?: string }>`
  background-color: ${p => p.color || colors.gray};
  border-radius: 30px;
  color: ${colors.white};
  font-size: ${fontSizes.small};
  padding: 5px 10px;
`;

export default Tag;
