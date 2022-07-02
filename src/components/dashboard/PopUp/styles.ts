import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 29px;
`;

export const CloseModal = styled.img`
  align-self: flex-end;
`;
export const ImgSucess = styled.img`
  margin-top: 91px;
  margin-bottom: 66px;
`;
export const Message = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.title};
`;
