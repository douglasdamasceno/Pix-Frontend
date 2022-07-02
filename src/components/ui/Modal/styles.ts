import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  width: 787px;
  height: 787px;

  background: #ffffff;
  border-radius: 16px;

  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.2);
  /* background: #fff; */
  /* color: #000; */
  /* display: flex; */

  position: relative;
  z-index: 10;
`;

export const ModalImg = styled.img``;
export const CloseModalButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 10;
`;

export const CloseModal = styled.div`
  position: absolute;
  z-index: 10;
`;
