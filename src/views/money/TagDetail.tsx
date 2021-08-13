import { Tag } from "components/Tag";
import { Transition } from "components/Transition"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import styled from "styled-components";
import { all } from 'utils/config'

export const TagDetail = () => {
    let { goBack } = useHistory()



    const time = 300

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true)
    }, [])

    const close = () => {
        setShow(false)
        setTimeout(() => { goBack() }, time)
    }
    return (
        <Transition isShow={show} timeout={time} classNames="slide">
            <Wrapper>
                <Header>
                    <Back onClick={close}> {'<'} 返回</Back>
                    <div className="title">添加支出类别</div>
                    <div>完成</div>
                </Header>
                <PutBox>
                    <Tag icon="gouwu"></Tag>
                    <input type="text" className="put" placeholder="请输入类别名称(不超过4个汉字)" />
                </PutBox>
                <Main>
                    {
                        all.map(item => {
                            return (
                                <div className="icon-list-wrapper" key={item.typeName} >
                                    <div className="header-title">{item.typeName}</div>
                                    <div className="icon-list">
                                        {
                                            item.iconList.map(icon => (
                                                <div className="icon-item" key={icon.id}>
                                                    <Tag  icon={icon.icon}></Tag>
                                                </div>)
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </Main>
            </Wrapper>
        </Transition>

    )
}


const Wrapper = styled.div`
width: 100%;
height: 100vh;
position: fixed;
top: 0;
right: 0;
background: white;
`

const Header = styled.header`
height: 6rem;
padding: 1.5rem;
display: flex;
align-items: center;
justify-content: space-between;
background: #FFDA44;
font-size: 1.4rem;
.title{
    font-size: 1.6rem;
}
`

const Back = styled.div`
`

const PutBox = styled.div`
height: 6rem;
display: flex;
align-items: center;
padding: 1.5rem;
border-bottom:1px solid #E5E6E6;

.put{
  flex:1;
  outline: none;
  border: none;
  margin-left: 1rem;
}
`

const Main = styled.main`
height: calc(100vh - 12rem);
padding-top: 3rem;
overflow: auto;
.icon-list-wrapper{
    margin-bottom: 2rem;
    .header-title{
        text-align: center;
        font-size: 1.4rem;
        color: #555454;
    }
    .icon-list{
        display: flex;
        flex-wrap: wrap;
        .icon-item{
            width: 20%;
            display: flex;
            justify-content: center;
            padding: 1rem 0;
        }
    }
}
`