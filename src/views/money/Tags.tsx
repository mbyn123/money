import { useState } from "react"
import { Tag } from "components/Tag"
import { useTags } from "hooks/useTags"
import { useHistory } from "react-router-dom"
import styled from "styled-components"



export const Tags = () => {
    let history = useHistory()
    const { tags } = useTags('-')
    const [selectId, setSelectId] = useState<number>(1)
    const goToDetail = () => {
        history.push('/tagDetail')
    }



    return (
        <Wrapper>
            {
                tags.map(item => <TagWrapper key={item.id}>
                    <Tag icon={item.icon} name={item.name} select={item.id === selectId} onClick={()=>setSelectId(item.id)}/>
                </TagWrapper>)
            }
            <TagWrapper>
                <Tag icon='add' name='添加' onClick={goToDetail} />
                {/* <Tag icon='add' name='添加' onClick={addTag}/> */}
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