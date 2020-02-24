import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface Props {
  backgroundColor?: string;
  children: React.ReactChild;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  backgroundColor
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string
};

const Wrapper = styled.div<{ backgroundColor?: string }>`
  backgroundcolor: ${({ backgroundColor }) => backgroundColor};
  position: relative;
`;

const Inner = styled.div`
  width: 500px;
  position: relative;
  margin: 0 auto;
`;

export default Layout;
