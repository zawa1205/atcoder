import { group } from 'console'
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

const globalDivisors = new Array()

for (let i = 1; i <= 9; i++) {
    if (N % i === 0) globalDivisors.push(i)
}

// globalDivisors.sort(function (a: number, b: number) {
//     return b - a
// })

const arr = new Array(N + 1).fill('')

const putString = (n: number) => {
    if (n === 0) return globalDivisors[0]

    for (let i = 0; i < globalDivisors.length; i++) {
        const NJ = N / globalDivisors[i]
        // console.log(globalDivisors[i], NJ, i, n)
        // console.log(NJ, NJ % n)
        if (NJ <= n && n % NJ === 0) return globalDivisors[i]
    }

    return '-'
}

const main = () => {
    // console.log(N)
    // console.log(arr)
    // console.log(globalDivisors)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = putString(i)
    }
    console.log(arr.join(''))
    // console.log(putString(4))
}

main()
