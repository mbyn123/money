import { Tag } from "components/Tag"
import { recordItem } from "hooks/useRecord"
import { useAllTags } from "hooks/useTags"
import styled from "styled-components"


type props = {
    recordList: any[]
}

export const BillList: React.FC<props> = ({ recordList }) => {
    const { findIcon } = useAllTags()

    const findTagName = (id: number) => {
        let data
        const _tags = window.localStorage.getItem('tags')
        if (_tags) {
            data = JSON.parse(_tags)
            let arr = data['+'].concat(data['-'])
            console.log(arr)
            return arr.filter((item: any) => item.id === id)[0]['name']
        }
       
    }

    return (
        <Wrapper>
            {
                recordList.map(([date, data, sum]) => (
                    <ListWrapper key={date}>
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
                            data.map((item: recordItem, index: number) => (
                                <ListItem key={index}>
                                    <div className="tag-wrapper">
                                        <Tag icon={findIcon(item.selectTag)}></Tag>
                                        <div className="name">{item.note ? item.note : findTagName(item.selectTag)}</div>
                                    </div>
                                    <div className="price">
                                        {item.selectType === '-' && <span>-</span>}
                                        {item.amount}</div>
                                </ListItem>
                            ))
                        }

                    </ListWrapper>
                ))
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
        color:#494748;
        margin-right: .5rem;
    }
}
.type-wrapper{
    .type-item{
        font-size: 1.4rem;
        color:#494748;
        margin-left: 1.5rem;
    }
}
`

const ListWrapper = styled.div`

`

const ListItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:1rem 1.5rem;
border-bottom: 1px solid #FAFAFA;
&:last-child{
    border: none;
}
color: #555454;
.tag-wrapper{
    display: flex;
    align-items: center;
   
    .name{
        margin-left: 1rem;
        font-size: 1.4rem;
        
    }
}
.price{
    font-size: 1.5rem;
}
`



