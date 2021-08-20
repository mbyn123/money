import { strLimit, strFirst, strLast, changeStrLast, calculate } from "utils"

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
            if ((strLimit(value, '+')) || (strLimit(value, '-'))) {
                // 负数
                if (strFirst(value) === '-') {
                    if (strLimit(value, '-') > 1 && strLimit(value.split('-')[2], '.')) {
                        return value
                    } else if (strLimit(value, '+') && strLimit(value.split('+')[1], '.')) {
                        return value
                    } else {
                        return value + '.'
                    }
                } else {
                    if (strLimit(value, '+') && strLimit(value.split('+')[1], '.')) {
                        return value
                    } else if (strLimit(value, '-') && strLimit(value.split('-')[1], '.')) {
                        return value
                    } else {
                        return value + '.'
                    }
                }
            } else {
                if (strLimit(value, '.')) {
                    return value
                } else {
                    return value + '.'
                }
            }
        case '+':
            if (strLast(value) === '-') {
                return changeStrLast(value, '+')
            }
            if (strLimit(value, '+')) {
                return strLast(value) === '+' ? value : calculate(value, '+') + '+';
            } else {
                if (strFirst(value) === '-') {
                    if (strLimit(value, '-') > 1) {
                        return strLast(value) === '-' ? value : calculate(value, '-') + '-';
                    } else {
                        return value + '+'
                    }
                } else {
                    if (strLimit(value, '-')) {
                        return calculate(value, '-') + '+'
                    } else {
                        return value + '+'
                    }
                }
            }
        case '-':
            // 负数
            if (strFirst(value) === '-') {
                if (strLimit(value, '-') > 1) {
                    if (strLast(value) === '-') {
                        return value
                    }
                    if (strLast(value) === '+') {
                        return changeStrLast(value, '+')
                    }
                    return calculate(value, '-') + '-'
                } else {
                    if (strLast(value) === '+') {
                        return changeStrLast(value, '-')
                    }
                    return strLimit(value, '+') ? calculate(value, '+') + '-' : value + '-';
                }
            } else {
                if (strLimit(value, '-')) {
                    if (strLast(value) === '-') {
                        return value
                    }
                    if (strLimit(value, '+')) {
                        if (strLast(value) === '+') {
                            return value
                        }
                        return calculate(value, '+') + '-'
                    }
                    return calculate(value, '-') + '-'
                } else {
                    if (strLimit(value, '+')) {
                        if (strLast(value) === '+') {
                            return changeStrLast(value, '-')
                        }
                        return calculate(value, '+') + '-'
                    }
                    return value + '-'
                }
            }
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