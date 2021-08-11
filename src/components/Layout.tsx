import styled from "styled-components"
import { NavBar } from "./NavBar"

export const Layout = ({ children }: { children:any }) => {
    return (
        <Wrapper>
            <Main>{children}</Main>
            <NavBar />
        </Wrapper>

    )
}


const Wrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;

`

const Main = styled.div`
flex:1;
overflow: auto;
`
