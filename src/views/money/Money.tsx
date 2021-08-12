import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Transition } from 'components/Transition';
import { NavigationBar } from "./NavigationBar"



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
            <div style={{ border: "1px solid black", backgroundColor: "red", height: '100vh' }}>
                <NavigationBar close={close}></NavigationBar>
            </div>
        </Transition>

    )
}