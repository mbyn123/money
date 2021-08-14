import styled from "styled-components"
import { tagTypeList } from "utils/config"
import { _tagType } from "./Money"

type props = {
    selectType: string,
    onSelect: (type: _tagType) => void,
    close: () => void
}



export const NavigationBar = ({ selectType, onSelect, close }: props) => {

    const handleClick = () => {
        close()
    }
    return (
        <Wrapper>
            <Main>
                <Nav>
                    <ul>
                        {
                            tagTypeList.map(item => (
                                <li onClick={() => onSelect(item.type)} key={item.type} className={selectType === item.type ? "checked" : ''}>{item.name}</li>
                            ))
                        }

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