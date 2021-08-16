import { Tag } from "components/Tag"
import { tagItem, useTags, _tagType } from "hooks/useTags"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

type Props = {
    selectType: _tagType,
    value: number,
    onChange: (value: number) => void
}

export const Tags: React.FC<Props> = ({ selectType, value, onChange }) => {
    const { push } = useHistory()
    const { tags } = useTags(selectType)
    return (
        <Wrapper>
            {
                tags?.map((item: tagItem) => (
                    <TagWrapper key={item.id}>
                        <Tag icon={item.icon} name={item.name} select={item.id === value} onClick={() => onChange(item.id)} />
                    </TagWrapper>)
                )
            }
            <TagWrapper>
                <Tag icon='setting' name='设置' onClick={() => push(`/tagList/${selectType}`)}/>
                {/* <Tag icon='add' name='添加' onClick={() => push(`/tagDetail/${selectType}`)} /> */}
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