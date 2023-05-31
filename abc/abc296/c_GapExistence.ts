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

const [N, X]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// prettier-ignore
const S: number[] = input[1].split(' ').map((s: string) => Number(s))
// const set: Set<number> = new Set(S)
const map = new Map()
let isOK = false
const main = () => {
    for (let i = 0; i < N; i++) {
        if (!map.get(S[i])) map.set(S[i], 1)
        else map.set(S[i], map.get(S[i]) + 1)
    }
    for (let i = 0; i < N; i++) {
        if (S[i] - X === S[i] || X - S[i] === S[i]) {
            if (map.get(S[i] > 1)) isOK = true
        } else {
            if (map.has(S[i] - X) || map.has(X - S[i])) {
                isOK = true
            }
        }
    }
    console.log(isOK || X === 0 ? 'Yes' : 'No')
}

main()
