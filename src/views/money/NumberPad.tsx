import { Icon } from "components/Icon"
import styled from "styled-components"
import dateImg from "assets/date.png"

export const NumberPad = () => {
    return (
        <Wrapper>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div className="date-button"><img src={dateImg} alt="" className="date-image"/>今天</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>+</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>-</div>
            <div>.</div>
            <div>0</div>
            <div className="delete-button"><Icon name="delete"></Icon></div>
            <div className="submit-button">完成</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100%;
height: 24rem;
display: flex;
flex-wrap: wrap;
background: #F2F3F4;
>div{
    width: 25%;
    height: 6rem;
    border-right: .1rem solid #E5E6E6;
    border-bottom: .1rem solid #E5E6E6;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    &:active{
        background:  rgba(0,0,0,0.25);
    }
}
.date-button{
    font-size: 1.5rem;
    
    .date-image{
        width: 2.5rem;
        height: 2.5rem;
        margin-right: .2rem;
    }
}
.delete-button{
    .icon{
        font-size: 2.5rem;
    }
}
.submit-button{
    font-size: 2rem;
    background: #FFDA44;
    &:active{
        background:rgba(0,0,0,0);
    }
}
`