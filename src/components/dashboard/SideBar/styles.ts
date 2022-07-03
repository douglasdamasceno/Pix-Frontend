import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 96px;
  height: 100vh;
  padding: 14px 0px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 0px 16px 16px 0px;
`;

export const NavTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  height: 175px;
`;

export const NavBottom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 38px;
  height: 100%;
  justify-content: space-between;
  /* gap: 700px; */
`;

export const Divider = styled.hr`
  width: 70px;
  border: 1px solid ${({ theme }) => theme.colors.text_input};
`;
