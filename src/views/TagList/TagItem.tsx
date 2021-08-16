import { Icon } from "components/Icon"
import styled from "styled-components"
import { Tag } from "components/Tag"
import React from "react"
import { tagItem } from "hooks/useTags"

type props = {
    item: tagItem,
    clickDelete: (value: number) => void
}

export const TagItem: React.FC<props> = ({ item, clickDelete }) => {
    let { icon, name, id } = item
    return (
        <Wrapper>

            <Icon name='jianshao' onClick={() => clickDelete(id)}></Icon>
            <div className="tag-wrapper">
                <Tag icon={icon}></Tag>
            </div>
            <div className="name">{name}</div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid #eeeeee;
margin-left: 2rem;
padding: .5rem;
background: #ffffff;
>.icon{
    fill:red
}
.delete-image{
  width: 2rem;
  height: 2rem;
}
.tag-wrapper{
    margin:0 1rem
}

.name{
    font-size: 1.4rem;
    color:#555454
}
`

