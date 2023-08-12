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
const [N, D]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// prettier-ignore
const S = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(''))) // ２次元配列(string)

let max = 0

const Arr = new Array(D)

const main = () => {
    for (let i = 0; i < S[0].length; i++) {
        let allOK = true
        for (let j = 0; j < S.length; j++) {
            if (S[j][i] === 'x') allOK = false
        }
        if (allOK) Arr[i] = 'o'
        else Arr[i] = 'x'
    }

    let now = 0
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] === 'o') {
            now++
        } else now = 0
        max = Math.max(max, now)
    }

    console.log(max)
}

main()
