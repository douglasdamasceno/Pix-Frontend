import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 382px;
  height: 76px;
`;

export const ContainerValue = styled.div`
  padding: 0.5rem 1rem;

  background: #eeeeee;
  border-radius: 4px 0px 0px 4px;

  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #000000;
`;
export const ButtonCopy = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;

  width: 70.08px;
  height: 76px;

  border: none;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0px 4px 4px 0px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary_light};
  }
`;
