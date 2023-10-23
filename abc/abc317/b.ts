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
// prettier-ignore
const A: number[] = input[1].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
const main = () => {
    A.sort(function (a, b) {
        return a - b
    })
    // if (A[1] - A[0] !== 1) {
    //     console.log(A[0])
    //     return
    // }

    // for (let i = 1; i < A.length; i++) {
    //     if (A[i] - A[i - 1] !== 1) {
    //         console.log(A[i] - 1)
    //         return
    //     }
    // }
    for (let i = 0; i < A.length; i++) {
        if (A[i] + 1 !== A[i + 1]) {
            console.log(A[i] + 1)
            return
        }
    }
}

main()
