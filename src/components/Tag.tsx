import PropTypes from "prop-types";
import * as React from "react";
import styled from "styled-components";
import { fontSizes, colors } from "../theme";

interface Props {
  edit: boolean;
  color: string;
  value: string;
  deleteTag: (value: string) => any;
}

const Tag: React.FunctionComponent<Props> = ({
  edit,
  color,
  value,
  deleteTag
}) => {
  return (
    <StyledTag color={color}>
      {value}
      {edit && <DeleteButton onClick={() => deleteTag(value)}>x</DeleteButton>}
    </StyledTag>
  );
};

Tag.propTypes = {
  color: PropTypes.any,
  deleteTag: PropTypes.any,
  edit: PropTypes.any,
  value: PropTypes.any
};

const StyledTag = styled.div<{ color?: string }>`
  background-color: ${p => p.color || colors.gray};
  border-radius: 30px;
  color: ${colors.white};
  font-size: ${fontSizes.small};
  padding: 5px 10px;
  margin-right: 5px;
`;

const DeleteButton = styled.span`
  padding: 0px 0px 0px 5px;
  font-weight: bold;
  cursor: pointer;
`;

export default Tag;
