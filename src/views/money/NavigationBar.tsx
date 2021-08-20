import { _tagType } from "hooks/useTags"
import React from "react"
import styled from "styled-components"
import { tagTypeList } from "utils/config"

type Props = {
    value: string,
    onChange: (value: _tagType) => void,
    close: () => void
}

export const NavigationBar: React.FC<Props> = ({ value, onChange, close }) => {

    return (
        <Wrapper>
            <Main>
                <Nav>
                    <ul>
                        {
                            tagTypeList.map(item => (
                                <li onClick={() => onChange(item.type)} key={item.type} className={value === item.type ? "checked" : ''}>{item.name}</li>
                            ))
                        }

                    </ul>
                </Nav>
                <Button onClick={()=>close()}>取消</Button>

            </Main>

        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 5rem;
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
    /* align-items: center; */
    justify-content: center;
    >li{
        padding:1rem 2rem;
        font-weight: 600;
       
    }
    >.checked{
        box-sizing: border-box;
        border-bottom: .2rem solid;
    }
}
`

const Button = styled.div`
position: absolute;
right: 2rem;
bottom: 1.2rem;
`