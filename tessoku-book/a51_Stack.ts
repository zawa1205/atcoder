import * as fs from 'fs'
import { arrayBuffer } from 'stream/consumers'
const arg = fs.readFileSync('/dev/stdin', 'utf8')
// prettier-ignore
const input = arg.trim().split('\n').filter(e => { return e !== '' })
/**
 * 標準入力
 */
// const N: number = Number(input[0]) // １文字
// const [A, B]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// const S: string[] = input[0].split(' ') // 1次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' '))) // ２次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)

// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' '))) // ２次元配列(string)

function main() {
    // console.log(inputs)
    const books: string[] = []
    for (let i = 0; i < inputs.length; i++) {
        // console.log(inputs[i])
        const query = Number(inputs[i][0])
        const name = inputs[i][1]

        if (query === 1) books.push(name)
        else if (query === 2) console.log(books[books.length - 1])
        else books.pop()
    }
}

main()
