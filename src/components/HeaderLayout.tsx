import PropTypes from "prop-types";
import * as React from "react";
import styled from "styled-components";

interface Props {
  headerImage: React.ReactChild;
}

const HeaderLayout: React.FunctionComponent<Props> = ({ headerImage }) => {
  return (
    <Wrapper>
      <Header>{headerImage}</Header>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.div`
  height: 300px;
`;

HeaderLayout.propTypes = {
  headerImage: PropTypes.any
};

export default HeaderLayout;
