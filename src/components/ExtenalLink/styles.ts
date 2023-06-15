import styled, { css } from "styled-components";

interface ExtenalLinkProps {
  variant?: "iconLeft"
}

export const ExtenalLinkContainer = styled.a<ExtenalLinkProps>`
  display: flex;
  align-items: center;
  height: 19px;
  line-height: 19px;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  background: none;
  color: ${({ theme }) => theme.colors["brand-blue"]};
  font-size: ${({ theme }) => theme.textSizes["components-link"]};
  text-transform: uppercase;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors["brand-blue"]};
  }

  ${({ variant }) => variant === "iconLeft" && css`
    flex-direction: row-reverse;
  `}
`;