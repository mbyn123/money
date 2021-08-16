import { Tag } from "components/Tag";
import { Transition } from "components/Transition"
import { useAllTags, useTags, _tagType } from "hooks/useTags";
import { useVsible } from "hooks/useVsible";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

type tagType = {
    icon: string,
    name?: string,
    id: number
}

type _params={
    type:_tagType
}

export const TagDetail = () => {
 
    const {type} = useParams<_params>()
    const { addTags, findTags } = useTags(type)
    const { allTags, findAllTags } = useAllTags()
    const [selectTag, setSelectTag] = useState<tagType>(allTags[0]['iconList'][0])
    const [tagName, setTagName] = useState('')



    const { visible, close, time } = useVsible({})


    const onChangeSelect = (typeId: number, iconId: number) => {
        setSelectTag(findAllTags(typeId, iconId))
    }

    const onSumbit = () => {
        console.log(selectTag);
        if (!tagName) {
            return window.alert('类别名称不能为空！')
        }
        if (findTags('id', selectTag.id)) {
            return window.alert('类别不能重复添加！')
        }
        if (findTags('name', tagName)) {
            return window.alert('类别名称不能重复！')
        }

        addTags({ ...selectTag, name: tagName })
        close()

    }

    return (
        <Transition isShow={visible} timeout={time} classNames="slide">
            <Wrapper>
                <Header>
                    <Back onClick={close}> {'<'} 返回</Back>
                    <div className="title">添加{type === '+'?'收入':'支出'}类别</div>
                    <div onClick={onSumbit}>完成</div>
                </Header>
                <PutBox>
                    <Tag icon={selectTag['icon']} select></Tag>
                    <input
                        type="text"
                        className="put"
                        value={tagName}
                        maxLength={4}
                        onChange={e => setTagName(e.target.value)}
                        placeholder="请输入类别名称(不超过4个汉字)" />
                </PutBox>
                <Main>
                    {
                        allTags.map(item => {
                            return (
                                <div className="icon-list-wrapper" key={item.typeName} >
                                    <div className="header-title">{item.typeName}</div>
                                    <div className="icon-list">
                                        {
                                            item.iconList.map(icon => (
                                                <div className="icon-item" key={icon.id}>
                                                    <Tag icon={icon.icon} select={icon.id === selectTag.id} onClick={() => onChangeSelect(item.typeId, icon.id)}></Tag>
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