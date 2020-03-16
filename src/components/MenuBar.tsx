import PropTypes from "prop-types";
import * as React from "react";
import styled from "styled-components";
import { H1 } from "../components/Headlines";

interface Props {
  title: string;
  image: string;
}

const MenuBar: React.FunctionComponent<Props> = ({
  title,
  image
}) => {
  return (
    <Header>
      <H1>{title}</H1>
      <ProfilePic image={image} />
    </Header>
  );
};

const Header = styled.div`
  position: relative;
  text-align: center;
  padding: 0px 5px;
`;

const ProfilePic = styled.div<{image: string}>`
  position: absolute;
  right: 5px;
  top: 3px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-image: url(${p => p.image});
  background-repeat: no-repeat;
  background-size: auto 100%;
`;

export default MenuBar;
