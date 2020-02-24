import * as React from "react";
import styled from "styled-components";

const Space = styled.div<{ width?: number; height?: number }>`
  height: ${p => p.height}px;
  width: ${p => p.width}px;
  position: relative;
  float: none;
  clear: both;
`;

export default Space;
