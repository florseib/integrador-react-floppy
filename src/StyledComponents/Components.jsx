import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderDiv = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  background-color: rgba(255, 145, 0, 0.5);
  width: 100%;
  height: 8vh;
  position: absolute;
  top: 0px;
  left: 0px;
  border-bottom: 2px solid rgb(255, 115, 0);
`;

export const FooterDiv = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(255, 145, 0);
  height: 7.5vh;
  margin-top: auto;
  color: lightgray;
  font-size: 0.8em;
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export const Section = styled.section`
  background-color: #ffc446;
  width: 80%;
  border-radius: 30px;
  padding: 20px 60px;
  margin: 20px 0px;
  box-sizing: border-box;
`;

export const Menu = styled.ul`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  border-left: 2px solid rgb(255, 115, 0);
  position: absolute;
  top: 8vh;
  right: 0;
  width: 80vw;
  height: calc(100vh - 8vh);
  background-color: rgb(255, 255, 90);

  margin: 0;
  list-style-type: none;

  & li {
    margin: 10px;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  margin-left: 15px;

  & img {
    height: 100%;
  }
`;

export const LinkContainer = styled.li`
  margin: 0px 15px;
  font-size: 1.2em;
`;

export const MenuContent = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
`;

export const AccountLinks = styled(MenuContent)`
  width: 40%;
  padding-right: 0px;
  font-size: 0.9em;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const MenuIcon = styled(MenuContent)`
  display: none;
  font-size: 1.5rem;

  @media (max-width: 450px) {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;
