import { Transition } from 'components/Transition';
import { NavigationBar } from "./NavigationBar"
import styled from 'styled-components';
import { Tags } from './Tags';
import { Note } from './Note';
import { NumberPad } from './NumberPad';
import { useVsible } from 'hooks/useVsible';
import { useEffect, useState } from 'react';
import { tagTypeList } from 'utils/config';
import { _tagType } from 'hooks/useTags';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs'
import { calculate, changeStrLast, signType, strFirst, strLast, strLimit } from 'utils';
import { useRecord } from 'hooks/useRecord';



export const Money: React.FC = () => {
    const {push} = useHistory()
    const location = useLocation()
    const query = qs.parse(location.search)['?type']
    const { visible, close, time } = useVsible({ url: '/bill' })
    const [selected, setSelected] = useState({
        selectType: query ? (query === 'income' ? '+' : '-') : tagTypeList[0].type as _tagType,
        selectTag: 0 as number,
        note: '',
        amount: '0'
    })

    const { addRecord } = useRecord()

    const onChange = (val: Partial<typeof selected>) => setSelected({ ...selected, ...val })

    const changeAmount = (amount: string) => setSelected({ ...selected, amount })

    const findAmountLast = (amount: string) => ['+', '-'].includes(strLast(amount))

    const computed = (amount: string, sign: signType) => changeAmount(calculate(amount, sign).toString())

    const process = (amount: string) => {
        // 负数
        if (strFirst(amount) === '-') {
            if (strLimit(amount, '-') > 1) {
                computed(amount, '-')
            }
            if ((strLimit(amount, '+'))) {
                computed(amount, '+')
            }
        } else {
            if (strLimit(amount, '-')) {
                computed(amount, '-')
            }
            if (strLimit(amount, '+')) {
                computed(amount, '+')
            }
        }

    }

    const onOk = () => {
        let { selectType, selectTag, amount } = selected
        if (!selectTag) {
            return window.alert(`请选择${selectType === '-' ? '支出' : '收入'}类型!!!`)
        }
        if (Number(amount) === 0) {
            return window.alert('请输入金额')
        }
        if (findAmountLast(amount)) {
            return changeAmount(changeStrLast(amount, ''))
        }
        process(amount)
        if (Number(amount)) {
            console.log('保存', selected)
            addRecord({ ...selected, creationTime: new Date().toISOString() })
            push('/bill')
        }
    }

    return (
        <Transition
            isShow={visible}
            timeout={time}
            classNames='alert'
        >
            <Wrapper>
                <NavigationBar
                    value={selected.selectType}
                    close={close}
                    onChange={selectType => onChange({ selectType })} />
                <Tags
                    value={selected.selectTag}
                    selectType={selected.selectType}
                    onChange={selectTag => onChange({ selectTag })} />
                <Note
                    value={selected.note}
                    amount={selected.amount}
                    onChange={note => onChange({ note })} />
                <NumberPad
                    value={selected.amount}
                    onOk={onOk}
                    onChange={amount => onChange({ amount })} />
            </Wrapper>
        </Transition>
    )
}


const Wrapper = styled.div`
box-sizing:border-box;
height: 100vh;
`