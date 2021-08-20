import { Icon } from "components/Icon"
import { Transition } from "components/Transition"
import { tagItem, useTags } from "hooks/useTags"
import { useVsible } from "hooks/useVsible"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components"
import { payment_type, tagTypeList } from "utils/config"
import { _params } from "views/TagDetail/TagDetail"
import { TagItem } from "./TagItem"

export const TagList = () => {
    const { type } = useParams<_params>()
    const { push } = useHistory()

    const { visible, close, time } = useVsible({ time: 500, url: `/money?type=${payment_type[type]}` })
    const [tabActive, setTabActive] = useState(type)

    const { tags, deleteTags } = useTags(tabActive)

    const clickDelete = (id: number) => {
        let alert = window.confirm('确定删除当前标签？')
        console.log(alert, id)
        if (alert) {
            deleteTags(id)
        }
    }



    return (
        <Transition isShow={visible} timeout={time} classNames="slide">
            <Wrapper>
                <Header>
                    <div className="header-top">
                        <div className="back" onClick={close}>
                            <Icon name="left"></Icon>
                            <div>返回</div>
                        </div>
                        <div className="title">类别设置</div>
                    </div>
                    <Tabs>
                        <ul>
                            {
                                tagTypeList.map(item => (
                                    <li key={item.type} className={tabActive === item.type ? "select" : ""} onClick={() => setTabActive(item.type)}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </Tabs>
                </Header>
                <Main>
                    <IconList>
                        {
                            tags?.map((item: tagItem) => <TagItem key={item.id} clickDelete={clickDelete} item={item} />)
                        }

                    </IconList>
                    <AddButton onClick={() => push(`/tagDetail/${tabActive}`)}>
                        <Icon name="add"></Icon>
                        <span>添加类别</span>
                    </AddButton>
                </Main>
            </Wrapper>
        </Transition>
    )
}

const Wrapper = styled.div`
height:100vh;
display: flex;
flex-direction: column;
`

const Header = styled.div`
 flex:0 0 8rem;
 background: #FFDA44;
.header-top{
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .back{
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        position: absolute;
        left: 1.5rem;
        /* top:2rem; */
      .icon{
          font-size: 1.1rem;
      }
    }
    .title{
        /* font-weight: bolder; */
        font-size: 1.6rem;
    }
}
`

const Tabs = styled.div`
height: 50%;
display: flex;
align-items: center;
justify-content: center;
>ul{
    height: 2.5rem;
    width: 80%;
    display: inline-flex;
    align-items: center;
    border: 1px solid ;
    border-radius: .8rem;
    overflow: hidden;
    >li{
        flex:1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
    }
    .select{
       
        background: #000000;
        color: #FFDA44;
    }
}
`

const Main = styled.div`
flex:1;
overflow: auto;
position: relative;
`

const IconList = styled.div`

`


const AddButton = styled.div`
height: 4rem;
position: absolute;
bottom: 0;
left: 0;
right: 0;
box-shadow: 0 -.1rem .3rem rgba(0,0,0,.25);
display: flex;
align-items: center;
justify-content: center;
font-size: 1.4rem;
>span{
    margin-left: .5rem;
}
`