import styled from "styled-components";

export const Container = styled.nav`
  /* position: absolute; */
  width: 96px;
  height: 962px;
  /* left: 0px; */
  /* top: 31px; */
  padding: 14px 0px;
  /* Grey/G50 */

  background: #ffffff;
  /* S200 */

  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 0px 16px 16px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  flex-direction: column;
  padding-top: 38px;
  /* align-items: baseline; */
  gap: 700px;
  /* gap: 23px; */
  /* height: 175px; */
`;

export const Divider = styled.hr`
  /* position: absolute; */
  width: 70px;
  /* height: 0px; */
  /* left: 15px; */
  /* top: 175px; */

  /* Grey/G300 */

  border: 1px solid #cccccc;
`;
