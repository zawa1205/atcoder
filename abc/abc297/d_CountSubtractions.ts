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

let [A, B]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
let cnt = 0
const main = () => {
    while (B > 0) {
        if (A < B) [A, B] = [B, A]
        cnt += Math.floor(A / B)
        A = A % B
        ;[A, B] = [B, A]
    }
    console.log(cnt - 1)
}

main()
