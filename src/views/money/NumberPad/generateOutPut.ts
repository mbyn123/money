
const strLimit = (value: string, sign: string) => {
    return value.split('').filter(i => i === sign).length
}

export const generateOutPut = (text: string, value = '0') => {
    switch (text) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (value === '0') {
                return text
            } else {
                return value + text
            }
        case '.':
            console.log(strLimit(value, '+'))

            if ((strLimit(value, '+')) || (strLimit(value, '-'))){
                if (strLimit(value, '.') > 1) {
                    return value
                }else{
                    return value + '.'
                }
            }else{
                if (strLimit(value, '.') === 1) {
                    return value
                }else{
                    return value + '.'
                }
            }
        case '+':
            console.log(strLimit(value, '+'))
            if (strLimit(value, '+')) {
                console.log(value)
                return value
            }
            return value + '+'
        case '-':
            return value + '-'
        case '删除':
            if (value.length === 1) {
                return '0'
            } else {
                return value.slice(0, -1)
            }
        default:
            return ''
    }
}