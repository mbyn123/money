
export type signType = '+' | '-'

export const strLimit = (value: string, sign: string) => value.split('').filter(i => i === sign).length

export const strFirst = (str: string) => str.charAt(0)

export const strLast = (str: string) => str.charAt(str.length - 1)

export const changeStrLast = (value: string, sign: string) => value.substring(0, value.length - 1) + sign

export const calculate = (value: string, sign: signType) => {
    let mumberArr = value.split(sign)
    let a = 0
    let b = 0
    // 负数
    if (mumberArr.length === 3 && mumberArr[0] === '' && sign === '-') {
        a = parseFloat('-' + mumberArr[1])
        b = parseFloat(mumberArr[2])
    } else {
        a = parseFloat(mumberArr[0])
        b = parseFloat(mumberArr[1])
    }
    let result = sign === '+' ? (a + b) : (a - b)

    return String(result).indexOf('.') >= 0 ? result.toFixed(2) : result
}

export const arrayFilter = <T>(arr: T[], key: keyof T, value: any) => arr.filter((item: T) => item[key] === value)

export const arraySum = <T>(arr: T[], key: keyof T) => arr.length ? arr.map((item: any) => parseFloat(item[key])).reduce((a, b) => a + b) : 0

export const totalSum = (arr: any, value: ('+' | '-')) => arr.length ? arr.map((item: any) => item[2]).map((item: any) => item[value]).reduce((a: any, b: any) => a + b) : 0