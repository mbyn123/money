import { useEffect } from 'react';
import { useState } from 'react';

export type recordItem = {
    selectType: string,
    selectTag: number,
    note: string,
    amount: string,
    creationTime: string
}

export const useRecord = () => {
    const [record, setRecord] = useState<recordItem[]>([])

    useEffect(() => {
        const _record = window.localStorage.getItem('record')
        if (_record) {
            setRecord(JSON.parse(_record))
        }
    }, [])

    const addRecord = (value: recordItem) => {
        let _record = [...record, value]
        setRecord(_record)
        window.localStorage.setItem('record', JSON.stringify(_record))

    }

    return {
        record,
        addRecord
    }
}