import styled from "styled-components"
import dateImg from "assets/date.png"
import React, { useState } from "react"
import { generateOutPut } from "./NumberPad/generateOutPut"

type Props = {
    value: string,
    onChange: (value: string) => void,
    onOk?: () => void
}

export const NumberPad: React.FC<Props> = ({ value: output, onChange, onOk }) => {
    const changeNumber = (output: string) => {

        let value;
        if (output.length > 9) {
            value = output.slice(0, 9);
        } else if (output.length === 0) {
            value = '0';
        } else {
            value = output
        }
        onChange(value)
    }

    const addition = (text: string) => {
        // let number = parseFloat(output)
        // let n = output.split('').filter(i => i === '+').length
        // if (number && number >= 0) {
        //     let mumberArr = output.split('+')
        //     let a = parseFloat(mumberArr[0])
        //     let b = parseFloat(mumberArr[1])
        //     console.log(mumberArr)
        //     if (n) {


        //         a && b && changeNumber((a + b).toString())
        //     } else {
        //         changeNumber(output + text)
        //     }

        // } else {

        // }
        changeNumber(output + text)

    }

    const subtraction = (text: string) => {
        changeNumber(output + text)
    }

    const onclickWrapper = (e: React.MouseEvent) => {
        let text = (e.target as HTMLDivElement).textContent
        if (!text) { return }

        // if (['+', '-'].includes(text)) {
        //     changeNumber(output + text)
        //     text === '+' ? addition(text) : subtraction(text)
        //     let _output = output.substring(0,1) !== '-'? output : output.substring(1)
        //     let sign = _output.indexOf('+') >= 0 ? '+' : '-'

        //     let index = _output.indexOf(sign)
        //     let operator = _output.substring(index, index + 1)
        //     let n = _output.split('').filter(i => i === sign).length
        //     let mumberArr = _output.split(sign)

        //     console.log(mumberArr,sign)
        //     if (n) {


        //         let a = parseFloat(mumberArr[0])
        //         let b = parseFloat(mumberArr[1])
        //         console.log(a, b)
        //         let result = operator === '+' ? addition(a, b) : subtraction(a, b)
        //         changeNumber(result.toString() + text)
        //     } else {
        //         changeNumber(output + text)
        //     }



        //     return
        // }
        if (text === '今天') {
            return
        }
        if (text === '完成') {
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