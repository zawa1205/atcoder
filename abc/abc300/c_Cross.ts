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

const [H, W]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(''))) // ２次元配列(string)
const N = Math.min(H, W)

const measureSize = (x: number, y: number): number => {
    let size = 0

    for (let i = 0; i < N; i++) {
        const nextX = x + i + 1
        const nextY = y + i + 1
        if (nextX >= H || nextY >= W) {
            return size
        }
        if (inputs[nextX][nextY] === '.') {
            return size
        }
        size++
    }
    return size
}

const main = () => {
    const ans = new Array(N).fill(0)
    for (let i = 1; i < H - 1; i++) {
        for (let j = 1; j < W - 1; j++) {
            if (
                inputs[i][j] === '#' &&
                inputs[i + 1][j + 1] === '#' &&
                inputs[i - 1][j - 1] === '#' &&
                inputs[i + 1][j - 1] === '#' &&
                inputs[i - 1][j - 1] === '#'
            ) {
                ans[measureSize(i, j) - 1]++
            }
        }
    }
    console.log(...ans)
}

main()
