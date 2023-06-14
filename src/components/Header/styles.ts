import styled from "styled-components";
import Cover from "../../assets/Cover.png"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 18.5rem;
  background: url(${Cover}) no-repeat center;
  background-size: cover;
`;