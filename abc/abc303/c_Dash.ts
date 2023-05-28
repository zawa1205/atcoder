import * as fs from 'fs'

const move = (s: string) => {
    if (s === 'L') {
        current[0]--
    }
    if (s === 'R') {
        current[0]++
    }
    if (s === 'U') {
        current[1]--
    }
    if (s === 'D') {
        current[1]++
    }
}

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

const [N, M, H, K]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
const S: string[] = input[1].split('')
// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(2).map(row => (row.split(' ').map((s: string) => Number(s))))
const inputsSet = new Set()
inputs.forEach((e) => {
    inputsSet.add(e.toString())
})
const current = [0, 0]
let life: number = H
const main = () => {
    for (let i = 0; i < S.length; i++) {
        move(S[i])
        life--
        if (life < 0 && i + 1 < N) {
            console.log('No')
            return
        }
        if (life >= 0 && i + 1 === N) {
            console.log('Yes')
            return
        }
        if (life < K && inputsSet.has(current.toString())) {
            life += K
            inputsSet.delete(current.toString())
        }
        // console.log('turn' + (i + 1) + ': ' + life + ' ' + current)
    }
}

main()
