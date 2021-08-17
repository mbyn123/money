import { _tagType } from "hooks/useTags"

// 支出
const expend: [] = []


// 收入
const income: [] = []

const all = [
    {
        typeName: '娱乐',
        typeId: 1,
        iconList: [
            {
                icon: 'yule',
                id: 11
            },
            {
                icon: 'jiaotong',
                id: 12
            },
            {
                icon: 'riyong',
                id: 13
            },
            {
                icon: 'gouwu',
                id: 14
            },
            {
                icon: 'canyin',
                id: 15
            }
        ]
    },
    {
        typeName: '饮食',
        typeId: 2,
        iconList: [
            {
                icon: 'yule',
                id: 21
            },
            {
                icon: 'jiaotong',
                id: 22
            },
            {
                icon: 'riyong',
                id: 23
            },
            {
                icon: 'gouwu',
                id: 24
            },
            {
                icon: 'canyin',
                id: 25
            },
            {
                icon: 'canyin',
                id: 26
            },
            {
                icon: 'canyin',
                id: 27
            },
            {
                icon: 'canyin',
                id: 28
            }
        ]
    }
]

export const TagList = { '+': income, '-': expend, all }

type _tagTypeList = {
    type: _tagType,
    name: string
}

export const tagTypeList: _tagTypeList[] = [
    {
        type: '-',
        name: '支出'
    },
    {
        type: '+',
        name: '收入'
    }
]

export const payment_type = {
    '+': 'income',
    '-': 'expend',
   
}

