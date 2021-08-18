import { Transition } from 'components/Transition';
import { NavigationBar } from "./NavigationBar"
import styled from 'styled-components';
import { Tags } from './Tags';
import { Note } from './Note';
import { NumberPad } from './NumberPad';
import { useVsible } from 'hooks/useVsible';
import { useState } from 'react';
import { tagTypeList } from 'utils/config';
import { _tagType } from 'hooks/useTags';
import { useLocation } from 'react-router-dom';
import qs from 'qs'
import { calculate, changeStrLast, signType, strFirst, strLast, strLimit } from 'utils';



export const Money: React.FC = () => {
    const { visible, close, time } = useVsible({ url: '/bill' })
    const location = useLocation()
    let query = qs.parse(location.search)['?type']

    const [selected, setSelected] = useState({
        selectType: query ? (query === 'income' ? '+' : '-') : tagTypeList[0].type as _tagType,
        selectTag: 0 as number,
        note: '',
        amount: '0'
    })


    const onChange = (val: Partial<typeof selected>) => setSelected({ ...selected, ...val })

    const changeAmount = (amount: string) => setSelected({ ...selected, amount })

    const findAmountLast = (amount: string) => ['+', '-'].includes(strLast(amount))

    const compute = (amount: string, sign: signType) => changeAmount(calculate(amount, sign).toString())

    const process = (amount: string) => {
        // 负数
        if (strFirst(amount) === '-') {
            if (strLimit(amount, '-') > 1) {
                compute(amount, '-')
            }
            if ((strLimit(amount, '+'))) {
                compute(amount, '+')
            }
        } else {
            if (strLimit(amount, '-')) {
                compute(amount, '-')
            }
            if (strLimit(amount, '+')) {
                compute(amount, '+')
            }
        }
    }

    const onOk = () => {
        let { selectType, selectTag, amount } = selected
        if (!selectTag) {
            return window.alert(`请选择${selectType === '-' ? '支出' : '收入'}类型!!!`)
        }
        if (findAmountLast(amount)) {
            return changeAmount(changeStrLast(amount, ''))
        }
        process(amount)
        let _amount = Number(amount)
        if (_amount === 0) {
            return window.alert('请输入金额')
        }
        if (_amount) {
            console.log('保存', selected)
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