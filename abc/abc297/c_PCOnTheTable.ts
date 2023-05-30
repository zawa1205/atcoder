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
const main = () => {
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W - 1; j++) {
            if (inputs[i][j] === 'T' && inputs[i][j + 1] === 'T') {
                inputs[i][j] = 'P'
                inputs[i][j + 1] = 'C'
            }
        }
    }

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            process.stdout.write(inputs[i][j])
        }
        console.log('')
    }
}

main()
