import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;

  width: 240px;
  height: 48px;

  background: #ffffff;

  border: 1px solid #cbcbcb;
  border-radius: 8px;
`;
export const Input = styled.input`
  border: none;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  color: #cccccc;

  &:focus-visible {
    outline: none;
  }
`;
export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
