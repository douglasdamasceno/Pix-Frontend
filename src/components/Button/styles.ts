import styled from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
  width?: number;
  height?: number;
  primary?: boolean;
}

const ButtonDefault = styled.button<ContainerProps>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width || "256px"};
  height: ${({ height }) => height || "68px"};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.shape};
  border-color: ${({ theme }) => theme.colors.shape};
`;

export const Container = styled(ButtonDefault)<ContainerProps>`
  /* background: ${(props) => (props.primary ? "white" : "black")}; */
  border-radius: 8px;

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
`;
