import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    /* flex-direction: column; */
    gap: 37px;
    flex: 1;
    padding: 31px 34px 31px 0px;

    @media (max-width: 820px) {
        padding: 0;
    }
`;

export const Main = styled.main`
    display: flex;
    width: 100%;
    flex-direction: column;
    /* flex: 1; */
    align-items: center;
    gap: 43px;

    background: #ffffff;

    /* box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px; */
`;

// export const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 40px;
//   gap: 40px;

//   /* position: absolute; */
//   /* width: 1273px; */
//   width: 100%;
//   height: 787px;
//   /* left: 133px;
//   top: 206px; */

//   /* Grey/G50 */

//   background: #ffffff;
//   /* S200 */

//   box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.1);
//   border-radius: 10px;
// `;
