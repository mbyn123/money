import { useEffect, useState } from "react"
import { TagList } from "utils/config"


export type tagItem = {
    icon: string,
    name: string,
    id: number
}

export type tagType = {
    '-': string,
    '+': string
}

type allTagItem = {
    typeName: string,
    typeId: number,
    iconList: Omit<tagItem, 'name'>[]
}

export type _tagType = keyof tagType


export const useTags = (type: _tagType) => {
    const [data, setData] = useState(TagList)
    const tags = data[type]


    useEffect(() => {
        const _tags = window.localStorage.getItem('tags')
        if (_tags) {
            setData(JSON.parse(_tags))
        }
    }, [])

    const addTags = (val: tagItem) => {
        let _data = { ...data, [type]: [...tags, val] }
        setData(_data)
        window.localStorage.setItem('tags', JSON.stringify(_data))
    }

    const deleteTags = (id: number) => {
        let _data = { ...data, [type]: [...tags.filter((item:tagItem) => item.id !== id)] }
        setData(_data)
        window.localStorage.setItem('tags', JSON.stringify(_data))
    }

    const findTags = (key: keyof tagItem, value: number | string) => {
        return tags.find(item => item[key] === value)
    }

    return {
        tags,
        addTags,
        findTags,
        deleteTags
    }

}


export const useAllTags = () => {
    const [allTags,] = useState<allTagItem[]>(TagList['all'])
    
    const findAllTags = (typeId: number, iconId: number) => {
        return allTags.filter(item => item.typeId === typeId)[0]?.iconList.filter(item => item.id === iconId)[0]
    }
    return {
        allTags,
        findAllTags,

    }

}
