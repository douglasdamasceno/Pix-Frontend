import styled from "styled-components";

interface ContainerProps {
  width?: string;
  height?: string;
  primary?: boolean;
}

const ButtonDefault = styled.button<ContainerProps>`
  cursor: pointer;

  width: ${({ width }) => width || "256px"};
  height: ${({ height }) => height || "68px"};

  background: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.shape};
  color: ${({ theme, primary }) =>
    primary ? theme.colors.shape : theme.colors.primary};

  border: ${({ primary }) => primary && "none"};
  border-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme, primary }) =>
      primary ? theme.colors.primary_light : theme.colors.primary};

    color: ${({ theme, primary }) =>
      primary ? theme.colors.shape : theme.colors.shape};
  }
`;

export const Container = styled(ButtonDefault)<ContainerProps>`
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
