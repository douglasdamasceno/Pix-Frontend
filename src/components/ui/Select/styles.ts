import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.text_label};
  }
`;

export const Select = styled.select`
  display: flex;
  padding: 14px 16px;
  width: 423px;
  height: 48px;

  background: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.border_color};
  border-radius: 8px;

  option {
    font-size: 1rem;
    border-radius: 8px;
  }
`;
