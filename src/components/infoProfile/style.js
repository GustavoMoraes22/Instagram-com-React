import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    color: ${(props) => props.theme.textPrimary};
`
export const Link = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 5px;

    &:hover{
        opacity: 0.7;
    }
`
export const ProfileImage = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`



