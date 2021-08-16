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

    const [selectType, setSelectType] = useState<_tagType>(tagTypeList[0].type)
    const [outPut, setOutPut] = useState('0')

    const changeSelect = (type: _tagType) => setSelectType(type)
    const changeValue = (text: string) => setOutPut(text)

    return (
        <Transition
            isShow={visible}
            timeout={time}
            classNames='alert'
        >
            <>
                <Wrapper>
                    <NavigationBar close={close} selectType={selectType} changeSelect={changeSelect}></NavigationBar>
                    <Tags selectType={selectType}></Tags>
                    <Note value={outPut}></Note>
                    <NumberPad value={outPut} changeValue={changeValue}></NumberPad>
                </Wrapper>
            </>
        </Transition>
    )
}


const Wrapper = styled.div`
box-sizing:border-box;
height: 100vh;
`