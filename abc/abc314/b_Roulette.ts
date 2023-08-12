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
const N: number = Number(input[0]) // １文字
// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)

const X: number = inputs.slice(-1)[0][0]
inputs.pop()

let ans = new Array()

let min = Infinity

const main = () => {
    for (let i = 1; i < inputs.length; i++) {
        if ((i + 2) % 2 === 0) continue
        const set = new Set(inputs[i])
        if (set.has(X) && inputs[i].length === min) {
            ans.push((i + 1) / 2)
        } else if (set.has(X) && inputs[i].length < min) {
            min = inputs[i].length
            ans = new Array()
            ans.push((i + 1) / 2)
        }
    }
    console.log(ans.length)
    if (ans.length !== 0) console.log(...ans)
}

main()
