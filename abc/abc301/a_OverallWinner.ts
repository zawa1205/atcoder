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

const main = () => {
    const N: number = Number(input[0]) // １文字
    const S: string[] = input[1].split('') // 1次元配列(string)
    let T: number = 0
    let A: number = 0

    for (let i = 0; i < N; i++) {
        if (S[i] === 'T') T++
        else A++
    }

    if (T === A) {
        console.log(S[N - 1] === 'T' ? 'A' : 'T')
        return
    }

    if (T > A) console.log('T')
    else console.log('A')
}

main()
