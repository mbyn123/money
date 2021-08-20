import { Transition } from 'components/Transition';
import { NavigationBar } from "./NavigationBar"
import styled from 'styled-components';
import { Tags } from './Tags';
import { Note } from './Note';
import { NumberPad } from './NumberPad';
import { useVsible } from 'hooks/useVsible';
import { useState } from 'react';
import { tagTypeList } from 'utils/config';
import { useAllTags, _tagType } from 'hooks/useTags';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs'
import { useRecord } from 'hooks/useRecord';

export const Money: React.FC = () => {
    const { push } = useHistory()
    const location = useLocation()
    const query = qs.parse(location.search)['?type']
    const { visible, close, time } = useVsible({ url: '/bill' })
    const [selected, setSelected] = useState({
        selectType: query ? (query === 'income' ? '+' : '-') : tagTypeList[0].type as _tagType,
        selectTagId: 0 as number,
        note: '',
        amount: '0'
    })

    const { record, addRecord } = useRecord()

    const { findIcon, findTagName } = useAllTags()

    const onChange = (val: Partial<typeof selected>) => setSelected({ ...selected, ...val })


    const onOk = () => {
        let { selectType, selectTagId, amount } = selected
        if (!selectTagId) {
            return window.alert(`请选择${selectType === '-' ? '支出' : '收入'}类型!!!`)
        }
        if (Number(amount) === 0) {
            return window.alert('请输入金额')
        }

        if (!Number(amount)) {
            return
        }
        console.log('保存', selected)
        addRecord({
            ...selected,
            creationTime: new Date().toISOString(),
            id: record.length + 1,
            selectTag: {
                icon: findIcon(selected.selectTagId),
                name: findTagName(selected.selectTagId)
            }
        })
        push('/bill')
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
                    value={selected.selectTagId}
                    selectType={selected.selectType}
                    onChange={selectTagId => onChange({ selectTagId })} />
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