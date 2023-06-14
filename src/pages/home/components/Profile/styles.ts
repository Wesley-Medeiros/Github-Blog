import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2.5rem;
  gap: 2rem;

  header {
    display: flex;
    justify-content: space-between;
  }
  
`;

export const ProfileImg = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;