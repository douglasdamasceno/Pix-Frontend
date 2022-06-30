import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  /* background: #4f4f4f; */
`;

export const PageTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;

  color: #424242;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 507px;
  height: 88px;
  padding: 16px;

  background: #ffffff;

  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const CardAmout = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  gap: 5px;
`;

export const CardTitle = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  /* identical to box height, or 114% */

  /* text-align: right; */

  /* Grey/G800 */

  color: #424242;
`;

export const CardValue = styled.h4`
  /* Heading/H600 */

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */

  color: #00ad17;
`;

export const TransactionCard = styled.div`
  display: flex;
  gap: 16px;
`;

export const TransactionPositive = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* text-align: right; */

  color: #424242;
`;

export const TransactionNegative = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* text-align: right; */

  /* Red/R400 */

  color: #e87779;
`;
