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

export const Money:React.FC = () => {
    const { visible, close, time } = useVsible({ url: '/detail' })
    const [selectType, setSelectType] = useState<_tagType>(tagTypeList[0].type)

    const onSelect = (type: _tagType) => {
        setSelectType(type)
    }

    return (
        <Transition
            isShow={visible}
            timeout={time}
            classNames='alert'
        >
            <>
                <Wrapper>
                    <NavigationBar close={close} selectType={selectType} onSelect={onSelect}></NavigationBar>
                    <Tags selectType={selectType}></Tags>
                    <Note></Note>
                    <NumberPad></NumberPad>
                </Wrapper>
            </>
        </Transition>
    )
}


const Wrapper = styled.div`
box-sizing:border-box;
height: 100vh;
`