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
const A: number[] = input[1].split(' ').map((s: string) => Number(s))
const map = new Map()
const main = () => {
    for (let i = 0; i < A.length; i++) {
        if (!map.has(A[i])) {
            map.set(A[i], 1)
        } else {
            map.set(A[i], map.get(A[i]) + 1)
        }
    }
    let cnt = 0
    map.forEach((value, key) => {
        cnt += Math.floor(value / 2)
    })
    console.log(cnt)
}

main()
