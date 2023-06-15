import styled from "styled-components";

export const PostHeaderConatiner = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem ;
  background: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0 ,0.2);
  border-radius: 10px;
  padding: 2rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    color: ${({ theme }) => theme.colors["base-title"]};
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors["base-span"]};
      gap: 0.5rem;
      line-height: 0px;
    }

    svg {
    color: ${({ theme }) => theme.colors["base-label"]};
  }

  }


  
`;  