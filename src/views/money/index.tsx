import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Transition } from 'components/Transition';
import { NavigationBar } from "./NavigationBar"
import styled from 'styled-components';
import { Tags } from './Tags';
import { Note } from './Note';
import { NumberPad } from './NumberPad';



export const Money = () => {
    const [show, setShow] = useState(false);
    let { goBack } = useHistory();
    
    let time = 300
    useEffect(() => {
        setShow(true)
    }, [])

    const close = () => {
        setShow(false)
        setTimeout(() => { goBack() }, time)
    }

    return (
        <Transition
            isShow={show}
            timeout={time}
        >
            <Wrapper>
                <NavigationBar close={close}></NavigationBar>
                <Tags></Tags>
                <Note></Note>
                <NumberPad></NumberPad>
            </Wrapper>
        </Transition>

    )
}


const Wrapper = styled.div`
box-sizing:border-box;
height: 100vh;
`