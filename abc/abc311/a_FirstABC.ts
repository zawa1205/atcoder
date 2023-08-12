import * as fs from 'fs'
const arg = fs.readFileSync('/dev/stdin', 'utf8')
// prettier-ignore
const input = arg.trim().split('\n').filter(e => { return e !== '' })
/**
 * 標準入力
 */
// const N: number = Number(input[0])  // １文字
// const [A, B]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// const S: string[] = input[0].split(' ') // 1次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' '))) // ２次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)
const N: number = Number(input[0]) // １文字
const S: string[] = input[1].split('') // 1次元配列(string)
let checkA = false
let checkB = false
let checkC = false
const main = () => {
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'A') checkA = true
        if (S[i] === 'B') checkB = true
        if (S[i] === 'C') checkC = true
        if (checkA && checkB && checkC) {
            console.log(i + 1)
            return
        }
    }
}

main()
