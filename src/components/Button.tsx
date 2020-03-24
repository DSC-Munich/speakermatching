import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";
import Space from "./Space";

interface Props {
  title: string;
  onClick?: () => any;
  backgroundColor?: string;
  color?: string;
  buttonWidth?: string;
  icon?: string;
}

const Button: React.FunctionComponent<Props> = ({
  title,
  onClick,
  backgroundColor,
  color,
  buttonWidth,
  icon
}) => {
  return (
    <Container
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      buttonWidth={buttonWidth}
    >
      {title}
      {icon && (
        <IconOuter>
          <IconInner>{icon}</IconInner>
        </IconOuter>
      )}
    </Container>
  );
};

const Container = styled.div<{
  backgroundColor?: string;
  color?: string;
  buttonWidth?: string;
}>`
  background-color: ${p => p.backgroundColor || "lightgray"};
  padding: 10px 15px;
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

const IconOuter = styled.span`
  width: 20px;
  position: relative;
  display: inline-block;
`;

const IconInner = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(25%, 25%);
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  buttonWidth: PropTypes.any,
  icon: PropTypes.any
};

export default Button;
