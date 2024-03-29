import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 338px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    ${(props) => css`
        background-color: ${props.theme.primary};
        border: ${`1px solid ${props.theme.primary}`};
        box-shadow:${`9px 0px 33px ${props.theme.boxShadow}`};
    `}
`

export const btnTheme = styled.button`

    background-color: transparent;
    border: none;
    font-size: 24px;
    color: ${(props) => props.theme.textPrimary};

    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

export const Profile = styled.div`
    position: relative;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);

    img{
        width: 82px;
        height: 82px;
        border-radius:50px ;
    }
`

export const listIcon = styled.li`
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${(props) => props.theme.textPrimary};
    font-size: 24px;

    &:hover{
        opacity: 0.7;
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    border: ${(props) => `1px solid ${props.theme.divider} `};

`