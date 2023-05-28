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

const [N, M]: number[] = input[0].split(' ').map((s: string) => Number(s))
// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split('')))

const next_permutation = (arr: any): boolean => {
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[j] > arr[i]) {
                    ;[arr[i], arr[j]] = [arr[j], arr[i]]
                    const len = (arr.length - (i + 1)) >> 1
                    for (let k = 0; k < len; k++) {
                        ;[arr[i + 1 + k], arr[arr.length - 1 - k]] = [
                            arr[arr.length - 1 - k],
                            arr[i + 1 + k],
                        ]
                    }
                    return true
                }
            }
        }
    }
    return false
}

const main = () => {
    // console.log(inputs)
    inputs.sort()
    do {
        // console.log(inputs)
        let ok = true
        for (let i = 0; i < N - 1; i++) {
            let cnt = 0
            for (let j = 0; j < M; j++) {
                if (inputs[i][j] !== inputs[i + 1][j]) cnt++
            }
            if (cnt !== 1) ok = false
        }
        if (ok) {
            console.log('Yes')
            return
        }
    } while (next_permutation(inputs))
    console.log('No')
}

main()
