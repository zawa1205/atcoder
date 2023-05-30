// 解けなかったやつ
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
const Q: number = Number(input[1]) // １文字
// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(2).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)

const box: number[][] = JSON.parse(JSON.stringify(new Array(200001).fill([])))
const cards: number[][] = JSON.parse(JSON.stringify(new Array(200001).fill([])))
const main = () => {
    // console.log(inputs)

    for (let i = 0; i < Q; i++) {
        if (inputs[i][0] === 1) {
            const n = inputs[i][1]
            const boxNum = inputs[i][2]
            cards[n].push(boxNum)
            box[boxNum].push(n)
        }
        if (inputs[i][0] === 2) {
            const boxNum = inputs[i][1]
            box[boxNum].sort()
            for (let j = 0; j < box[boxNum].length; j++) {
                process.stdout.write(box[boxNum][j] + ' ')
            }
            console.log('')
        }
        if (inputs[i][0] === 3) {
            const n = inputs[i][1]
            cards[n].sort()
            // console.log(box[n])
            const arr = Array.from(new Set(cards[n]))
            arr.forEach((e: any) => {
                process.stdout.write(e + ' ')
            })
            console.log('')
        }
    }
}

main()
