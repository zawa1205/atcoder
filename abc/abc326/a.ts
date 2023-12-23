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

const [X, Y]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)

const main = () => {
    const ans = Y - X

    if (ans >= 0) {
        ans <= 2 ? console.log('Yes') : console.log('No')
    } else {
        ans >= -3 ? console.log('Yes') : console.log('No')
    }
}

main()
