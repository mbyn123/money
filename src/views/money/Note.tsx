import React from "react"
import styled from "styled-components"
import remarkImg from 'assets/remark.png'

type Props = {
    value: string,
    amount: string,
    onChange: (value: string) => void
}
export const Note: React.FC<Props> = ({ value, amount, onChange }) => {

    return (
        <Wrapper>
            <Remark>
                <div className="label">
                    <img src={remarkImg} alt="" className="remark-image" />
                    <div className="title">备注：</div>
                </div>
                <input className="put-box" type="text" value={value} onChange={e => onChange(e.target.value)} placeholder="写备注..." />
            </Remark>
            <Numerical>{amount}</Numerical>
        </Wrapper>
    )
}

const Wrapper = styled.div`
box-sizing:border-box;
width: 100%;
height: 6rem;
border: 1px solid #E5E6E6;
border-left: none;
border-right: none;
background: #F2F3F4;
display: flex;
align-items: center;
padding:0 1rem;

`

const Remark = styled.div`
flex:1;
display: flex;
align-items: center;
height: 100%;
padding-right: 1rem;
/* border: 1px solid green; */

.label{
    flex:1;
    font-size: 1.5rem;
    color: #555454;
    font-weight: 600;
    margin-left: .5rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
    .remark-image{
     width: 2.5rem;
     height: 2.5rem;
}
}
.put-box{
    width: 100%;
    height: 100%;
    outline: none;
    border:none;
    background: #F2F3F4;
    caret-color: #FFDA44;
    font-size: 1.4rem;
}
`
const Numerical = styled.div`
/* flex: 0 0 12rem; */
overflow: hidden;
font-size: 2.6rem;
text-align: right;
/* border: 1px solid green; */
`