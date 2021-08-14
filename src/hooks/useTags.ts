import { useEffect, useState } from "react"
import { TagList } from "utils/config"


type tagItem = {
    icon: string,
    name: string,
    id: number
}

type tagType = {
    '-': string,
    '+': string
}

type allTagItem = {
    typeName: string,
    typeId: number,
    iconList: Omit<tagItem, 'name'>[]
}

export const useTags = (type: keyof tagType) => {
    const [tags, setTags] = useState<tagItem[]>(TagList[type])

    const addTags = (tag: tagItem) => {
        setTags([...tags, tag])

    }

    useEffect(() => {
        if (!tags.length) {
            const _tags = window.localStorage.getItem(type)
            _tags?.length && setTags(JSON.parse(_tags))
        }
    }, [tags.length,type])

    useEffect(() => {
        window.localStorage.setItem(type, JSON.stringify(tags))
    }, [tags,type])

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
