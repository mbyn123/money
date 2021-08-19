import { Layout } from "components/Layout"
import { recordItem, useRecord } from "hooks/useRecord"
import styled from "styled-components"
import { BillList } from "./BillList"
import { HeaderBar } from "./HeaderBar"
import day from 'dayjs'
import { week } from "utils/config"
import { changeStrLast, strLast } from "utils"

export const Bill = () => {
    const { record } = useRecord()
    // console.log(record)

    const hash: { [key: string]: recordItem[] } = {}

   record.forEach(item => {
        const key = day(item.creationTime).format(`MM月DD日 星期d`)
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(item)
        
    })

    const recordList = Object.entries(hash).sort((a,b)=>{
        if(a[0] === b[0]) return 0
        if(a[0] > b[0]) return -1
        if(a[0] < b[0]) return 1
        return 0
    }).map(([date,data])=> [changeStrLast(date,week[strLast(date)]),[...data]])
    console.log(recordList)

    return (
        <Layout>
            <Wrapper>
                <HeaderBar></HeaderBar>
                <BillList recordList={recordList}></BillList>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
height: calc(100vh - 6.5rem);
display: flex;
flex-direction: column;
`