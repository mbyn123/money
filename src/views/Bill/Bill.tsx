import { Layout } from "components/Layout"
import { recordItem, useRecord } from "hooks/useRecord"
import styled from "styled-components"
import { BillList } from "./BillList"
import { HeaderBar } from "./HeaderBar"
import day from 'dayjs'
import { week } from "utils/config"
import { arrayFilter, arraySum, changeStrLast, strLast, totalSum } from "utils"

export const Bill = () => {
    const { record, setRecord } = useRecord()

    const hash: { [key: string]: recordItem[] } = {}

    const summary = (date: string, value: recordItem[]) => {
        const income = arrayFilter<recordItem>(value, 'selectType', '+')
        const expend = arrayFilter(value, 'selectType', '-')
        return {
            '+': arraySum<recordItem>(income, 'amount'),
            '-': arraySum<recordItem>(expend, 'amount')
        }
    }

    record.forEach(item => {
        const key = day(item.creationTime).format(`MM月DD日 星期d`)
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(item)

    })

    const recordList = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    }).map(([date, data]) => [changeStrLast(date, week[strLast(date)]), [...data], summary(date, data)])

    const total = {
        '+': totalSum(recordList, '+').toFixed(2),
        '-': totalSum(recordList, '-').toFixed(2)
    }

    const refresh = (value: recordItem[]) => {
        setRecord(value)
    }

    // console.log(recordList)
    return (
        <Layout>
            <Wrapper>
                <HeaderBar total={total}></HeaderBar>
                <BillList recordList={recordList} refresh={refresh}></BillList>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
height: calc(100vh - 6.5rem);
display: flex;
flex-direction: column;
`