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
const ABCD = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)

const main = () => {
    // console.log(N, ABCD)
    const matrix = new Array(101)
    for (let y = 0; y < 101; y++) {
        matrix[y] = new Array(101).fill(0)
    }

    for (let i = 0; i < ABCD.length; i++) {
        for (let j = ABCD[i][2]; j < ABCD[i][3]; j++) {
            for (let k = ABCD[i][0]; k < ABCD[i][1]; k++) {
                matrix[j][k] = 1
            }
        }
    }

    let cnt = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) cnt++
        }
    }

    console.log(cnt)
}

main()
