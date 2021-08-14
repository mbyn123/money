import { Transition } from 'components/Transition';
import { NavigationBar } from "./NavigationBar"
import styled from 'styled-components';
import { Tags } from './Tags';
import { Note } from './Note';
import { NumberPad } from './NumberPad';
import { useVsible } from 'hooks/useVsible';



export const Money = () => {
  
    const { visible, close, time } = useVsible({url:'/detail'})

    return (
        <Transition
            isShow={visible}
            timeout={time}
            classNames='alert'
        >
            <>
                <Wrapper>
                    <NavigationBar close={close}></NavigationBar>
                    <Tags></Tags>
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