import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 860px) {
    margin-top: 14px;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

export const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 48px;
  padding-left: 40px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 507px;
  height: 88px;
  padding: 16px;

  background: ${({ theme }) => theme.colors.white};

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
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.title};
`;

export const CardValue = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.positive};
`;

export const TransactionCard = styled.div`
  display: flex;
  gap: 16px;
`;

export const TransactionPositive = styled.h4`
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.title};
`;

export const TransactionNegative = styled.h4`
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.negative};
`;
