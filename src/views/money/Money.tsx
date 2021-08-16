import { Transition } from 'components/Transition';
import { NavigationBar } from "./NavigationBar"
import styled from 'styled-components';
import { Tags } from './Tags';
import { Note } from './Note';
import { NumberPad } from './NumberPad';
import { useVsible } from 'hooks/useVsible';
import { useState } from 'react';
import { tagType } from 'hooks/useTags';
import { tagTypeList } from 'utils/config';


export type _tagType = keyof tagType

export const Money: React.FC = () => {
    const { visible, close, time } = useVsible({ url: '/detail' })


    const [selected, setSelected] = useState({
        selectType: tagTypeList[0].type as _tagType,
        selectTag: 0 as number,
        note: '',
        amount: 0
    })

    const onChange = (val: Partial<typeof selected>) => {
        setSelected({ ...selected, ...val })
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
                    onChange={amount => onChange({ amount })} />
            </Wrapper>
        </Transition>
    )
}


const Wrapper = styled.div`
box-sizing:border-box;
height: 100vh;
`