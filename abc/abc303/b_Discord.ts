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

const [N, M] = input[0].split(' ').map((s: string) => Number(s))
// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)
let cnt = 0
const main = () => {
    const sets: any = []
    for (let i = 0; i < N; i++) {
        const set = new Set()
        sets.push(set)
    }
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            const n = inputs[i][j]
            if (j > 0) {
                sets[n - 1].add(inputs[i][j - 1])
            }
            if (j < N - 1) {
                sets[n - 1].add(inputs[i][j + 1])
            }
        }
    }
    let cnt = 0
    for (let i = 0; i < N; i++) {
        cnt += N - sets[i].size - 1
    }
    console.log(cnt / 2)
}
main()
