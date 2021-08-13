import { useState } from "react"
import { TagList } from "utils/config"


type tagItem = {
    icon: string,
    name: string,
    id: number
}

export const useTags = (type: '-' | '+') => {
    const [tags,] = useState<tagItem[]>(TagList[type])
    

    return {
        tags
    }

}