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



export const useTags = (type: keyof tagType) => {
    const [data, setData] = useState(TagList)
    const tags = data[type]
    const addTags = (val: tagItem) => {
        setData({ ...data, [type]: { ...tags, val } })
    }



    // useEffect(() => {
    //     if (!tags.length) {
    //         const _tags = window.localStorage.getItem(type)
    //         _tags?.length && setData(JSON.parse(_tags))
    //     }
    // }, [data])

    useEffect(() => {
        window.localStorage.setItem(type, JSON.stringify(tags))
    }, [data])

    const findTags = (key: keyof tagItem, value: number | string) => {
        return tags.find(item => item[key] === value)
    }

    return {
        tags,
        addTags,
        findTags
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
