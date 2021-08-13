import { ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group'
import 'scss/animate.scss';

type props = {
    isShow: boolean,
    timeout: number,
    classNames: 'alert' | 'slide',
    children: ReactElement
}

export const Transition = (props: props) => {
    let { isShow, timeout, children, classNames } = props
    return (
        <CSSTransition
            in={isShow}
            timeout={timeout}
            classNames={classNames}
            unmountOnExit
        >
            {children}
        </CSSTransition>
    )

}