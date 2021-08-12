import { ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group'
import 'comm/scss/animate.scss';

type props = {
    isShow: boolean,
    timeout: number,
    classNames?: string | 'alert',
    children: ReactElement
}

export const Transition = (props: props) => {
    let { isShow, timeout, children } = props
    return (
        <CSSTransition
            in={isShow}
            timeout={timeout}
            classNames="alert"
            unmountOnExit
        >
            {children}
        </CSSTransition>
    )

}