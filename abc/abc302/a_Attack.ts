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

const [A, B]: bigint[] = input[0].split(' ').map((s: string) => BigInt(s)) // 1次元配列(number)

const main = () => {
    const ans = A / B
    const mod = A % B
    const just = mod === BigInt(0) ? true : false
    if (just) {
        console.log(ans.toString())
        return
    } else console.log((ans + BigInt(1)).toString())
}

main()
