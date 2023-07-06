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
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(''))) // ２次元配列(string)

const main = () => {
    const asciiBase = 'a'.codePointAt(0)
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (input[i][j] === '*' && asciiBase) {
                console.log(`${String.fromCodePoint(j + asciiBase)}${8 - i}`)
            }
        }
    }
}

main()
