import styled from "styled-components"
import { Icon } from "./Icon"

type Props = {
    icon: string,
    name?: string,
    onClick?: () => void,
    select?: boolean,

}

export const Tag = (props: Props) => {
    let { icon, name, onClick, select } = props
    return (
        <Wrapper onClick={onClick} select={select} >
            <div className="icon-wrapper">
                <Icon name={icon}></Icon>
            </div>
            {
                name && <div className="name">{name}</div>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div<{
    select?: boolean
}>`
text-align: center;
.icon-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background:${(props) => props.select ? '#FFDA44' : '#F5F5F5'} ;
    margin-bottom: .4rem;
    padding:.8rem;
   .icon{
    fill:#555454;
   }
}
 .name{
    width: 100%;
    height: 1.5rem;
    font-size: 1.2rem;
    color: #555454;
    overflow: hidden;
    flex-wrap: nowrap;
 }
 
`