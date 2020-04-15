import PropTypes from "prop-types";
import * as React from "react";
import styled from "styled-components";
import { fontSizes, colors } from "../theme";

interface Props {
  color?: string;
  children: string;
  edit?: boolean;
  setHeadline?: (value: string) => any;
}

export const H1: React.FunctionComponent<Props> = ({
  children,
  color,
  edit,
  setHeadline
}) => {
  return edit ? (
    <StyledInput
      value={children}
      onChange={e => setHeadline && setHeadline(e.target.value || "")}
    />
  ) : (
    <Headline1 color={color}>{children}</Headline1>
  );
};

H1.propTypes = {
  children: PropTypes.any,
  color: PropTypes.any,
  edit: PropTypes.any,
  setHeadline: PropTypes.any
};

const Headline1 = styled.h1<{ color?: string }>`
  font-size: ${fontSizes.large};
  color: ${p => p.color};
  padding: 10px 0;
  margin: 0;
  font-weight: normal;
`;

export const H2 = styled.h2<{ color?: string }>`
  font-size: ${fontSizes.medium};
  color: ${p => p.color};
  font-weight: normal;
  margin: 5px 0;
`;

export const H3 = styled.h3<{ color?: string }>`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${p => p.color};
  margin: 10px 0px 0px 0px;
`;

const StyledInput = styled.input`
  font-size: ${fontSizes.large};
  color: ${p => p.color};
  font-weight: normal;
  border: 0 solid transparent;
  background-color: ${colors.lightgray};
  padding: 10px;
`;

export default { H1, H2, H3 };
