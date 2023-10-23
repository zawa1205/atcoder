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
const inputs = arg.split('\n').filter(e => { return e !== '' }).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)

const main = () => {
    console.log(inputs)

    for (let i = 1; i <= 7; i++) {
        const xi = Math.floor(i / 1)
        const yi = 2 - ((i + 3) % 3)
        for (let j = i + 1; j <= 8; j++) {
            const xj = Math.floor(i / 1)
            const yj = 2 - ((i + 3) % 3)
            const xk = Math.floor(i / 1)
            const yk = 2 - ((i + 3) % 3)
            for (let k = j + 1; k <= 9; k++) {}
        }
    }
}

main()
