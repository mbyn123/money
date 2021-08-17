import React from "react"
import styled from "styled-components"

export const HeaderBar: React.FC = () => {
    return (
        <Wrapper>
            <Tiltle>账单</Tiltle>
            <DataBar>
                <DateWrapper>
                    <div className="year">2021年</div>
                    <div className="month">08<span className="label">月</span></div>
                </DateWrapper>
                <TotalWrapper>
                    <div className="total-item">
                        <div className="label">收入</div>
                        <div className="num">
                            <span>2</span>
                            <span className="decimals">.00</span></div>
                    </div>
                    <div className="total-item">
                        <div className="label">支出</div>
                        <div className="num">
                            <span>2</span>
                            <span className="decimals">.00</span>
                        </div>
                    </div>
                </TotalWrapper>
            </DataBar>
        </Wrapper >
    )
}

const Wrapper = styled.div`
 flex:0 0 9rem;
 display: flex;
 flex-direction: column;
 background: #FFDA44;
`

const Tiltle = styled.div`
text-align: center;
font-size: 2rem;
font-weight: 800;
padding: .5rem 0;
`
const DataBar = styled.div`
flex:1;
display: flex;
align-items: center;
`

const DateWrapper = styled.div`
flex:0 0 8rem;
padding-left: 2rem;
.year{
    color: #97843B;
    font-size: 1.2rem;
}
.month{
    font-weight: 500;
    font-size: 2rem;
    .label{
        font-size: 1.4rem;
    }
}
`
const TotalWrapper = styled.div`
flex:1;
display: flex;
padding-left: 3rem;
position: relative;
&::after{
    content: '';
    display: block;
    width: 1px;
    height: 2rem;
    background:#97843B;
    position: absolute;
    left: 0;
    bottom: .2rem;
}
.total-item{
    flex:1;
    .label{
        color: #97843B;
        font-size: 1.2rem;
    }
    .num{
        font-size: 2rem;
        .decimals{
            font-size: 1.4rem;
        }
    }
}
`
