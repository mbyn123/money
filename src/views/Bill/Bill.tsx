import { Layout } from "components/Layout"
import styled from "styled-components"
import { BillList } from "./BillList"
import { HeaderBar } from "./HeaderBar"


export const Bill = () => {
    return (
        <Layout>
            <Wrapper>
                <HeaderBar></HeaderBar>
                <BillList></BillList>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
height: calc(100vh - 6.5rem);
display: flex;
flex-direction: column;
`