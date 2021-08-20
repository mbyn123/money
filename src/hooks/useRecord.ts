import { useEffect } from 'react';
import { useState } from 'react';

export type recordItem = {
    selectType: string,
    selectTagId: number,
    selectTag: {
        icon: string,
        name: string
    },
    note: string,
    amount: string,
    creationTime: string
    id: number
}

export type editType = 'tag' | 'price'

export type editItem = {
    id: number,
    type: editType,
    value: string
}

export const useRecord = () => {
    const [record, setRecord] = useState<recordItem[]>([])

    useEffect(() => {
        setRecord(getRecord())
    }, [])

    const changeRecord = (value: recordItem[]) => {
        setRecord(value)
        window.localStorage.setItem('record', JSON.stringify(value))

    }

    const getRecord = () => {
        const _record = window.localStorage.getItem('record')
        if (_record) {
            return JSON.parse(_record)
        }
    }

    const addRecord = (value: recordItem) => {
        changeRecord([...record, value])
    }

    const editRecord = ({ id, value, type }: editItem) => {
        let _record = record.map(item => {
            if (item.id === id && type === 'tag') {
                return {
                    ...item,
                    note: item.note ? value : item.note,
                    selectTag: {
                        ...item.selectTag,
                        name: item.note ? item.selectTag.name : value
                    }
                }
            } else if (item.id === id && type === 'price') {
                return {
                    ...item,
                    amount: value
                }
            } else {
                return item
            }
        })
        changeRecord(_record)
    }

    return {
        record,
        getRecord,
        setRecord,
        addRecord,
        editRecord
    }
}