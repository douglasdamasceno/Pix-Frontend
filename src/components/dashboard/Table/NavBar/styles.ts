import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-space-around;

    @media (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
`;
export const ContainerInputions = styled.nav`
    display: flex;
    gap: 1rem;
    width: 100%;
    @media (max-width: 700px) {
        /* flex-direction: column; */
    }
`;
