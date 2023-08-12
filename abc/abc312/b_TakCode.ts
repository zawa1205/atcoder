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
// prettier-ignore
const [N,M]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// prettier-ignore
const S= arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(''))) // ２次元配列(string)

const judge = (xi: number, xj: number): void => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // console.log(i, j, S[i + xi][j + xj])
            if (i < 3 && j < 3) {
                if (S[xi + i][xj + j] !== '#') return
            }
            if (6 < i && 6 < j) {
                if (S[xi + i][xj + j] !== '#') return
            }
            if (i < 4 && j === Number(3)) {
                if (S[xi + i][xj + j] !== '.') return
            }
            if (i === Number(3) && j < 4) {
                if (S[xi + i][xj + j] !== '.') return
            }
            if (i === Number(5) && 4 < j) {
                if (S[xi + i][xj + j] !== '.') return
            }
            if (4 < i && j === Number(5)) {
                if (S[xi + i][xj + j] !== '.') return
            }
        }
    }
    console.log(xi + 1, xj + 1)
    return
}

const main = () => {
    for (let i = 0; i <= S.length - 9; i++) {
        for (let j = 0; j <= S[i].length - 9; j++) {
            judge(i, j)
        }
    }
}

main()
