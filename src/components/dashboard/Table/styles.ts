import styled from "styled-components";

export const ContainerTable = styled.div`
  min-width: 1193px;
  height: 523px;
  /* width: 100%; */
  padding: 20px;
  /* width: 1273px;
  height: 787px; */

  background: ${({ theme }) => theme.colors.white};

  /* box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px; */

  table {
    /* border-collapse: separate; */
  }
  thead {
    background: "#f5f5f5";
    color: "#333";
  }

  th {
    text-align: start;
    width: 192px;
    height: 44px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.title};
  }
  tr {
    border-bottom: 2px solid ${({ theme }) => theme.colors.title};
    height: 34px;
  }

  td {
    :nth-last-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 160px;
      height: 34px;

      background: #ffefc5;
      border-radius: 4px;
      border: none;

      font-weight: 700;
      font-size: 14px;
      line-height: 18px;

      color: #b78811;
    }
  }
`;

export const TableData = styled.td`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* border-bottom: 1px solid #424242; */
  color: ${({ theme }) => theme.colors.title};
`;
export const ActionButtons = styled.div`
  img {
    cursor: pointer;
  }
  gap: 12px;
`;
