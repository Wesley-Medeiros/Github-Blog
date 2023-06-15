import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors["base-post"]};
  border: 2px solid ${({ theme }) => theme.colors["base-post"]};
  padding: 2rem;
  transition: .4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors["base-span"]};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
      color: ${({ theme }) => theme.colors["base-title"]};
  }

  span {
    width: max-content;
    font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
    color: ${({ theme }) => theme.colors["base-span"]};
  }

  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;