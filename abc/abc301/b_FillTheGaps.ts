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
const A: number[] = input[1].split(' ').map((s: string) => Number(s)) // 1次元配列(number)

const main = () => {
    const subArr = new Array<number>(N - 1).fill(-1)
    for (let i = 0; i < subArr.length; i++) {
        subArr[i] = A[i + 1] - A[i]
    }
    for (let i = 0; i < subArr.length; i++) {
        process.stdout.write(A[i] + ' ')
        if (subArr[i] > 0) {
            for (let j = A[i] + 1; j < A[i + 1]; j++) {
                process.stdout.write(j + ' ')
            }
        }
        if (subArr[i] < 0) {
            for (let j = A[i] - 1; j > A[i + 1]; j--) {
                process.stdout.write(j + ' ')
            }
        }
    }
    process.stdout.write(A[A.length - 1] + ' ')
    console.log('')
}

main()
