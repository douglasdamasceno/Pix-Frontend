import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 29px;

  #copyClip {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 89px;
    margin-bottom: 88px;
    gap: 30px;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1rem;
  width: 125px;
  height: 24px;

  font-weight: 400;
  line-height: 24px;

  color: #bdbdbd;
`;
export const Message = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #424242;
`;

export const ImgQRCode = styled.img`
  width: 253px;
  height: 250px;
  border-radius: 11px;
`;
