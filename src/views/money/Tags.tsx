import { Tag } from "components/Tag"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { allTagList } from "utils/config"

type tagItem = {
    icon: string,
    title: string,
    id: number
}

export const Tags = () => {
    let history = useHistory()
    const [tags, ] = useState<tagItem[]>(allTagList['-'])
   
    const goToPage = ()=>{
        history.push('/tagDetail')
    }
    return (
        <Wrapper>
            {
                tags.map(item => <TagWrapper key={item.id}>
                    <Tag icon={item.icon} title={item.title} />
                </TagWrapper>)
            }
            <TagWrapper onClick={goToPage}>
                <Tag icon='add' title='添加' onClick={()=>goToPage}/>
            </TagWrapper>
        </Wrapper>
    )
}



const Wrapper = styled.div`
width: 100%;
box-sizing:border-box;
height: calc(100vh - 6rem - 6rem - 24rem);
overflow: auto;
display: flex;
flex-wrap: wrap;
align-content: flex-start;
padding: 2rem 0;

`

const TagWrapper = styled.div`
width: 25%;
display: flex;
justify-content: center;
padding: 1rem 0;
`