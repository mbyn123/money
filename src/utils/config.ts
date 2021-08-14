// 支出
const expend:[] = [
    // {
    //     icon: 'yule',
    //     name: '娱乐',
    //     id: 1
    // },
    // {
    //     icon: 'jiaotong',
    //     name: '交通',
    //     id: 2
    // },
    // {
    //     icon: 'riyong',
    //     name: '日用',
    //     id: 3
    // },
    // {
    //     icon: 'gouwu',
    //     name: '购物',
    //     id: 4
    // },
    // {
    //     icon: 'canyin',
    //     name: '餐饮',
    //     id: 5
    // }
]

// 收入
const income:[] = [
    // {
    //     icon: 'canyin',
    //     name: '工资',
    //     id: 6
    // }
]

const all = [
    {
        typeName: '娱乐',
        typeId:1,
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
        typeId:2,
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

export const TagList = { '+': income, '-': expend,all }