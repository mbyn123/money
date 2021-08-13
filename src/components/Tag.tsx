import styled from "styled-components"
import { Icon } from "./Icon"

type Props = {
    icon: string,
    title: string,
    onClick?: () => void
} 

export const Tag = (props: Props) => {
    let { icon, title, onClick } = props
    return (
        <Wrapper onClick={onClick}>
            <div className="icon-wrapper">
                <Icon name={icon}></Icon>
            </div>
            <div className="title">{title}</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 5rem;
height: 7rem;
text-align: center;
.icon-wrapper{
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #F5F5F5;
    margin-bottom: .5rem;
   .icon{
    fill:#555454;
   }
}
 .title{
    width: 100%;
    height: 1.5rem;
    font-size: 1.2rem;
    color: #555454;
    overflow: hidden;
    flex-wrap: nowrap;
 }
 
`