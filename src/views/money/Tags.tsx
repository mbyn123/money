import { Tag } from "components/Tag"
import styled from "styled-components"
import { taglist } from "utils/config"


export const Tags = () => {
    return (
        <Wrapper>
            {
                taglist.map(item =>  <div className="tag-wrapper" key={item.id}>
                    <Tag  name={item.name} title={item.title} />
                    </div>)
            }
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
.tag-wrapper{
    width: 25%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
}
`