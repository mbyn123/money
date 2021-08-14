import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

type props = {
    time?: number,
    url?: string
}


export const useVsible = ({ time, url }: props) => {
    const { push, goBack } = useHistory()
    const [visible, setVisible] = useState(false);
    const _time = time ? time : 300
    useEffect(() => {
        setVisible(true)
    }, [])

    const close = () => {
        setVisible(false)
        setTimeout(() => {
            url ? push(url) : goBack()
        }, time)
    }

    return {
        visible,
        close,
        time: _time
    }
}