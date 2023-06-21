import styled from "styled-components";

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  gap: 1.5rem;
  margin-bottom: 8rem;

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors["brand-blue"]};
  }
`;  