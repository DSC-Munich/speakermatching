import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../theme";

interface Props {
  backgroundColor?: string;
  children: any;
  headerImage?: string;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  backgroundColor,
  headerImage
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      {headerImage && <Header backgroundImage={headerImage || ""}></Header>}
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

Layout.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
  headerImage: PropTypes.any
};

const Wrapper = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
`;

const Inner = styled.div`
  width: 500px;
  position: relative;
  margin: 0 auto;
`;

const Header = styled.div<{ backgroundImage: string }>`
  height: 500px;
  background-color: ${colors.gray};
  background-image: url(${p => p.backgroundImage});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;

export default Layout;
