import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";

interface Props {
  title: string;
}

const Chip: React.FunctionComponent<Props> = ({ title }) => {
  return <ColoredChip backgroundColor={stringToColor(title)}>{title}</ColoredChip>;
};

const stringToColor = function(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

const ColoredChip = styled.span<{backgroundColor: string}>`
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  border-radius: 20px;
  padding: 2px 5px 2px 5px;
  background-color: ${p => p.backgroundColor};
  mix-blend-mode: difference;
`;

Chip.propTypes = {
  title: PropTypes.string.isRequired
};

export default Chip;
