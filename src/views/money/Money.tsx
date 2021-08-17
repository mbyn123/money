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

    const onChange = (val: Partial<typeof selected>) => {
        setSelected({ ...selected, ...val })
    }

    const onOk = () => {
        console.log(selected)
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