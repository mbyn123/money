// 支出
const expend = [
    {
        icon: 'yule',
        name: '娱乐',
        id: 1
    },
    {
        icon: 'jiaotong',
        name: '交通',
        id: 2
    },
    {
        icon: 'riyong',
        name: '日用',
        id: 3
    },
    {
        icon: 'gouwu',
        name: '购物',
        id: 4
    },
    {
        icon: 'canyin',
        name: '餐饮',
        id: 5
    }
]

// 收入
const income = [
    {
        icon: 'canyin',
        name: '工资',
        id: 6
    }
]

export const all = [
    {
        typeName: '娱乐',
        iconList: [
            {
                icon: 'yule',

                id: 1
            },
            {
                icon: 'jiaotong',

                id: 2
            },
            {
                icon: 'riyong',

                id: 3
            },
            {
                icon: 'gouwu',

                id: 4
            },
            {
                icon: 'canyin',
                id: 5
            }
        ]
    },
    {
        typeName: '饮食',
        iconList: [
            {
                icon: 'yule',
                id: 1
            },
            {
                icon: 'jiaotong',
                id: 2
            },
            {
                icon: 'riyong',
                id: 3
            },
            {
                icon: 'gouwu',
                id: 4
            },
            {
                icon: 'canyin',
                id: 5
            },
            {
                icon: 'canyin',
                id: 6
            },
            {
                icon: 'canyin',
                id: 7
            },
            {
                icon: 'canyin',
                id: 8
            }
        ]
    }
]

export const TagList = { '+': income, '-': expend }