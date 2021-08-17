
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
            if (value.indexOf('.') >= 0) { return value }
            return value + '.'
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