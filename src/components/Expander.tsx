import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";

interface Props {
  children: any;
  isExpanded: boolean;
  className?: string;
}

const ExpandableText: React.FunctionComponent<Props> = (props) => {
  return (
    <Container className={props.className} expanded={props.isExpanded}>
      {props.children}
    </Container>
  );
};

const Container = styled.div<{expanded: boolean}>`
  overflow: hidden;
  height: auto;
  max-height: ${p => p.expanded? "500px" : "0px"};
  transition: max-height 0.5s ease-in;
  padding: ${p => p.expanded? "10px" : "0px 10px"};
`;

export default ExpandableText;
