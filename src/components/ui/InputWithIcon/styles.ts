import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;

  width: 240px;
  height: 48px;

  background: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.border_color};
  border-radius: 8px;

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
export const Input = styled.input`
  border: none;
  width: 100%;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.text_input};

  &:focus-visible {
    outline: none;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:hover {
    opacity: 0.8;
  }
`;
