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
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' '))) // ２次元配列(string)

const main = () => {
    let min = [-1, Infinity]
    for (let i = 0; i < inputs.length; i++) {
        if (Number(inputs[i][1]) < min[1]) {
            min[0] = i
            min[1] = Number(inputs[i][1])
        }
    }

    for (let i = min[0]; i < inputs.length; i++) {
        console.log(inputs[i][0])
    }

    if (min[0] !== 0) {
        for (let i = 0; i < min[0]; i++) {
            console.log(inputs[i][0])
        }
    }
}

main()
