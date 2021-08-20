import { Tag } from "components/Tag"
import { editItem, editType, recordItem, useRecord } from "hooks/useRecord"
import React, { useState } from "react"
import styled from "styled-components"
import { NumberPad } from "views/Money/NumberPad"


type props = {
    recordList: any[],
    refresh: (value: recordItem[]) => void
}

export const BillList: React.FC<props> = ({ recordList, refresh }) => {
    const { editRecord, getRecord } = useRecord()
    const [select, setSelect] = useState<editItem>({
        id: 0,
        type: 'tag',
        value: ''
    })

    const changeRecord = ({ id, amount, note, selectTag }: recordItem, type: editType) => {

        setSelect({ id, type, value: type === 'tag' ? (note ? note : selectTag.name) : amount })
    }

    const onFinish = (e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.key !== "Enter") {
            return
        }
        if (!select.value) {
            return window.alert('修改值不能为空！')
        }
        onSubmit()
    }

    const onSubmit = () => {

        if (parseFloat(select.value) === 0 && select.type === 'price') {
            return window.alert('请输入金额！')
        }
        if (!(Number(select.value) && select.type === 'price')) {
            return
        }
        editRecord(select)
        reset()
        refresh(getRecord())
    }

    const reset = () => setSelect({ ...select, id: 0, type: 'tag' })

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        console.log(e.touches)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        console.log(e.touches)
    }
    
    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        console.log(e.touches)
    }


    const moveStyle = {
        transform: 'translateX(-5rem)',
        WebkitTransform: 'translateX(-5rem)',
        transition: 'transform 0.3s ease',
        WebkitTransition: 'transform 0.3s ease'
    }

    return (
        <Wrapper>
            {
                recordList.map(([date, data, sum]) => (
                    <div key={date}>
                        <Header>
                            <div className="time-wrapper">
                                <span className="date">{date}</span>
                            </div>
                            <div className="type-wrapper">
                                {sum['+'] > 0 && <span className="type-item">收入：{sum['+']}</span>}
                                {sum['-'] > 0 && <span className="type-item">支出：{sum['-']}</span>}
                            </div>
                        </Header>
                        {
                            data.map((item: recordItem) => (
                                <ListItem
                                    key={item.id}
                                    onTouchStart={(e) => handleTouchStart(e)}
                                    onTouchMove={(e) => handleTouchMove(e)}
                                    onTouchEnd={(e) => handleTouchEnd(e)}
                                >
                                    <div className="wrapper" style={select.id === item.id ? moveStyle : {}}>
                                        <div className='left'>
                                            <TagWrapper >
                                                <Tag icon={item.selectTag.icon}></Tag>
                                                {
                                                    select.id === item.id && select.type === 'tag' ? (
                                                        <TagInput>
                                                            <input
                                                                type="text"
                                                                className='put'
                                                                autoFocus
                                                                value={select.value}
                                                                onChange={(e) => { setSelect({ ...select, value: e.target.value }) }}
                                                                onKeyDown={(e) => onFinish(e)}
                                                                onBlur={reset}
                                                            />
                                                        </TagInput>
                                                    ) : (
                                                        <div className="name" onClick={() => changeRecord(item, 'tag')}>{item.note ? item.note : item.selectTag.name}</div>
                                                    )
                                                }
                                            </TagWrapper>
                                            {
                                                select.id === item.id && select.type === 'price' ? (
                                                    <PriceInput>{select.value}</PriceInput>
                                                ) : (
                                                    <PriceWrapper onClick={() => changeRecord(item, 'price')}>
                                                        {item.selectType === '-' && <span>-</span>}
                                                        {item.amount}
                                                    </PriceWrapper>
                                                )
                                            }
                                        </div>
                                        <div className='right'> 删除 </div>
                                    </div>
                                </ListItem>
                            ))
                        }
                    </div>
                ))
            }
            {
                select.type === 'price' && (
                    <NumberPadWrapper>
                        <NumberPad onOk={onSubmit} value={select.value} onChange={(value) => { setSelect({ ...select, value }) }}></NumberPad>
                    </NumberPadWrapper>
                )
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
flex:1;
overflow: auto;
`
const Header = styled.div`
display: flex;
justify-content: space-between;
padding:1rem;
border-bottom: 1px solid #EAEAEA;
.time-wrapper{
    .date{
        font-size: 1.4rem;
        margin-right: .5rem;
    }
}
.type-wrapper{
    .type-item{
        font-size: 1.4rem;
        margin-left: 1.5rem;
    }
}
`


const ListItem = styled.div`

border-bottom: 1px solid #FAFAFA;
color: #555454;
width: 100vw;
overflow: hidden;
&:last-child{
    border: none;
}
.wrapper{
    width: calc(100vw + 5rem);
    
    position: relative;
    .left{
        width: 100vw;
        display: flex;
        padding:1rem 1.5rem;
    }
    .right{
        width: 5rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:1.4rem;
        color: white;
        position: absolute;
        right: 0;
        top:0;
        background: #E67365;
        
    }
}
`
const TagWrapper = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    .name{
        flex:1;
        line-height:4rem;
        margin-left: 1rem;
        font-size: 1.4rem;
    }
`

const TagInput = styled.div`
 flex:1;
 height:4rem;
 /* border:1px solid #FFDA44; */
 background: #ffffff;

 .put{
     width: 100%;
     height: 100%;
     outline: none;
     border: none;
     font-size: 1.8rem;
     caret-color: #FFDA44;
     padding-left: 1rem;
     z-index: 999;

 }
`


const PriceWrapper = styled.div`
    flex:0 0 10rem;
    line-height: 4rem;
    text-align: right;
    font-size: 1.5rem;
`
const PriceInput = styled.div`
    flex:0 0 10rem;
    line-height: 4rem;
    text-align: right;
    border:1px solid #FFDA44;

`

const NumberPadWrapper = styled.div`
position: fixed;
left: 0;
bottom: 0;
right: 0;
display: flex;
align-items: flex-end;
justify-content: center;
background: rgba(0,0,0,.25);
`