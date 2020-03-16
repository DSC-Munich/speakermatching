import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";

interface Props {
  title: string;
  onClick?: () => any;
  backgroundColor?: string;
  color?: string;
  buttonWidth?: string;
}

const Button: React.FunctionComponent<Props> = ({
  title,
  onClick,
  backgroundColor,
  color,
  buttonWidth
}) => {
  return (
    <Container
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      buttonWidth={buttonWidth}
    >
      {title}
    </Container>
  );
};

const Container = styled.div<{
  backgroundColor?: string;
  color?: string;
  buttonWidth?: string;
}>`
  background-color: ${p => p.backgroundColor || "lightgray"};
  padding: 15px;
  border-radius: 40px;
  color: ${p => p.color || "#000"};
  text-align: center;
  cursor: pointer;
  transition: ease all 300ms;
  font-weight: bold;
  display: inline-block;
  width: ${p => p.buttonWidth || "auto"};

  :hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
  }

  :active {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  buttonWidth: PropTypes.any
};

export default Button;
