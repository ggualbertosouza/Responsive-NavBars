import { styled } from "styled-components";
import { theme } from "../style/Theme";

export const NavStyle = styled.header`
  header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    padding: 0 2rem;
    border-bottom: 1px solid ${theme.color["ligth-blue"]};
}
  button{
    border: none;
    background: ${theme.color.bg};
    color: ${theme.color["ligth-blue"]};
    font-size: 2rem;
    padding: 0.5rem;
    cursor: pointer;
  }
  .nav{
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 2.5rem;
  }
  .nav.active{
    position: absolute;
    flex-direction: column;
    top: 8vh;
    left: 0;
    right: 0;
    margin-top: 1rem;
    border-bottom: 1px solid ${theme.color["ligth-blue"]};
  }
`;
