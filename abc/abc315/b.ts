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

const M: number = Number(input[0]) // １文字
// prettier-ignore
const D: number[] = input[1].split(' ').map((s: string) => Number(s)) // 1次元配列(number)

const main = () => {
    // console.log(M, D)

    const arr = new Array(M)
    arr[0] = D[0]

    for (let i = 1; i < M; i++) {
        arr[i] = arr[i - 1] + D[i]
    }

    const mid = Math.ceil(arr[M - 1] / 2)
    // console.log(arr)
    // console.log(mid, 'mid')
    if (M === 1) {
        console.log(1, Math.ceil(D[0] / 2))
        return
    }

    for (let i = 0; i < M; i++) {
        if (mid === arr[i]) {
            console.log(i + 1, D[i])
            return
        } else if (mid < arr[i]) {
            console.log(i + 1, mid - arr[i - 1])
            return
        }
    }
}

main()
