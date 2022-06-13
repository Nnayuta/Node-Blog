import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    position: relative;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 126px;
    border-bottom: 1px solid #F0F0F0;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;

    button {
        margin-left: 24px;
    }

    #Notification{
        margin-left: 0;
        top: 3px;
    
        ::after{
            color: white;
        }
    }

    a{
        margin-right: 24px;

        &.home{
            font-size: 40px;
        }
    }
`

export const Logo = styled.div`
    width: 79px;
    height: 79px;
    background-color: #BBBBBB;
    margin-right: 18px;
`;

