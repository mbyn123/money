import { useState } from "react"
import styled from "styled-components"

export const NavigationBar = ({ close }: { close: () => void }) => {
    const [] = useState()
    const handleClick = () => {
        close()
    }
    return (
        <Wrapper>
            <Main>
                <Nav>
                    <ul>
                        <li className="checked">支出</li>
                        <li>收入</li>
                    </ul>
                </Nav>
                <Button onClick={handleClick}>取消</Button>

            </Main>

        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 6rem;
display: flex;
align-items: flex-end;
background: #FFDA44;
`
const Main = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Nav = styled.div`
flex: 1;
>ul{
    display: flex;
    align-items: center;
    justify-content: center;
    >li{
        padding:1rem 2rem;
        font-weight: 600;
        /* border: px solid red; */
       
    }
    >.checked{
        border-bottom: 2px solid;
    }
}
`

const Button = styled.div`
position: absolute;
right: 2rem;
bottom: 1rem;
`