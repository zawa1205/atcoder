import * as fs from 'fs'

// array.sort(function (a, b) {
//     // a-bの差が正(＋)のとき、aをbの後ろに並べ替え
//     // a-bの差が負(－)のとき、aをbの前に並べ替え
//     return a - b;
//   });

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

const [N, M, D]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
const A: number[] = input[1].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
const B: number[] = input[2].split(' ').map((s: string) => Number(s)) // 1次元配列(number)

const main = () => {
    A.sort(function (a: number, b: number) {
        return a - b
    })
    B.sort(function (a: number, b: number) {
        return a - b
    })
    console.log(A)
    console.log(B)
}

main()
