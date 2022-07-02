import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;

    color: #757575;
  }
`;

export const Select = styled.select`
  display: flex;
  padding: 14px 16px;
  /* width: 100%; */
  width: 423px;
  height: 48px;

  background: #ffffff;
  /* Outline/Default */

  border: 1px solid #cbcbcb;
  border-radius: 8px;

  option {
    font-size: 1rem;
    border-radius: 8px;
  }
`;
