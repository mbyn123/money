import React from "react"
import styled from "styled-components"
import dateImg from "assets/date.png"
import { generateOutPut } from "./NumberPad/generateOutPut"
import { calculate, changeStrLast, signType, strFirst, strLast, strLimit } from "utils"

type Props = {
    value: string,
    onChange: (value: string) => void,
    onOk?: () => void
}

export const NumberPad: React.FC<Props> = ({ value: output, onChange, onOk }) => {
    const changeNumber = (output: string) => {

        let value;
        if (output.length > 16) {
            value = output.slice(0, 16);
        } else if (output.length === 0) {
            value = '0';
        } else {
            value = output
        }
        onChange(value)
    }

    // 判断最后一位数
    const findAmountLast = (output: string) => ['+', '-'].includes(strLast(output))

    const changeAmount = (output: string) => changeNumber(output)

    const computed = (output: string, sign: signType) => changeAmount(calculate(output, sign).toString())

    const process = (output: string) => {
        // 负数
        if (strFirst(output) === '-') {
            if (strLimit(output, '-') > 1) {
                computed(output, '-')
            }
            if ((strLimit(output, '+'))) {
                computed(output, '+')
            }
        } else {
            if (strLimit(output, '-')) {
                computed(output, '-')
            }
            if (strLimit(output, '+')) {
                computed(output, '+')
            }
        }

    }

    const onclickWrapper = (e: React.MouseEvent) => {
        let text = (e.target as HTMLDivElement).textContent
        if (!text) { return }

        if (text === '今天') {
            return
        }
        if (text === '=') {
            if (findAmountLast(output)) {
                return changeAmount(changeStrLast(output, ''))
            }
            process(output)
          
        }
        if(text === '完成'){
            onOk && onOk()
            return
        }

        if ('.0123456789+-'.split('').concat(['删除']).includes(text)) {
            changeNumber(generateOutPut(text, output))
        }
    }
    return (
        <Wrapper onClick={(e) => onclickWrapper(e)}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div className="date-button"><img src={dateImg} alt="" className="date-image" />今天</div>
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
            <div className="delete-button">删除</div>
            <div className="submit-button">{(Number(output) || output === '0')?'完成':'='}</div>
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