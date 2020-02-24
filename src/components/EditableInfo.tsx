import PropTypes from "prop-types";
import * as React from "react";
import { H2 } from "./Headlines";
import Description from "./Description";
import styled from "styled-components";
import { colors, fontSizes } from "../theme";

interface Props {
  headline: string;
  description: string;
  edit: boolean;
  setDescription: (text: string) => any;
}

const EditableInfo: React.FunctionComponent<Props> = ({
  headline,
  description,
  edit,
  setDescription
}) => {
  return (
    <div>
      <H2>{headline}</H2>
      {edit ? (
        <StyledInput
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></StyledInput>
      ) : (
        <Description>{description}</Description>
      )}
    </div>
  );
};

const StyledInput = styled.textarea`
  width: 100%;
  border: 0 solid transparent;
  resize: none;
  background-color: ${colors.lightgray};
  font-size: ${fontSizes.small};
  padding: 10px;
`;

EditableInfo.propTypes = {
  description: PropTypes.any,
  edit: PropTypes.any,
  headline: PropTypes.any,
  setDescription: PropTypes.any
};

export default EditableInfo;
