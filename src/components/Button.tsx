import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";

interface Props {
  title: string;
  onClick?: () => any;
}

const Button: React.FunctionComponent<Props> = ({ title, onClick }) => {
  return <GrayButton onClick={onClick}>{title}</GrayButton>;
};

const GrayButton = styled.div`
  background-color: ${colors.green};
`;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
