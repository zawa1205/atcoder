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

const S: string[] = input[0].split('') // 1次元配列(string)

const main = () => {
    //  1111 →  1110    4 → 1   右から ${ length-3 } 個 0にする
    // 99999 → 99900    5 → 2

    let cnt = S.length - 3
    for (let i = S.length - 1; i >= 0; i--) {
        if (S.length <= 3) break

        if (0 < cnt) {
            S[i] = '0'
            cnt--
        } else {
            break
        }
    }

    console.log(S.join(''))
}

main()
