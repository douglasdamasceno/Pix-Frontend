import styled from "styled-components";
interface PageProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 40px;

  width: 100%;
  height: 787px;

  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};

  table {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

    width: 100%;
    /* height: 100%; */
    height: 523px;

    background: #ffffff;
    border-radius: 10px;
  }
  thead {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
  tbody {
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.black}; */
  }

  th {
    text-align: start;
    width: 192px;
    height: 44px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.title};
  }
  tr {
    height: 34px;
  }

  td {
    border-collapse: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border_color};
    text-align: start;
    width: 192px;
    height: 44px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.title};

    /* border-bottom: 2px solid ${({ theme }) => theme.colors.title}; */
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
    /* @media (max-width: 868px) {
            display: block;
        } */
  }
`;

export const ContainerTable = styled.section`
  /* display: flex;
  flex-direction: column; */
  overflow-y: auto;
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

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* align-self: center; */
`;
export const PreviewPage = styled.img`
  cursor: pointer;
`;
export const NextPage = styled.img`
  cursor: pointer;
`;

export const Page = styled.h5<PageProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 56px;
  border-radius: 8px;

  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.black};
  background: ${({ theme, selected }) =>
    selected ? theme.colors.page : theme.colors.white};
`;
