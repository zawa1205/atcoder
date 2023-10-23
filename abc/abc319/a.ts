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
const human: string = input[0]
const main = () => {
    const arr = [
        { name: 'tourist', score: 3858 },
        { name: 'ksun48', score: 3679 },
        { name: 'Benq', score: 3658 },
        { name: 'Um_nik', score: 3648 },
        { name: 'apiad', score: 3638 },
        { name: 'Stonefeang', score: 3630 },
        { name: 'ecnerwala', score: 3613 },
        { name: 'mnbvmar', score: 3555 },
        { name: 'newbiedmy', score: 3516 },
        { name: 'semiexp', score: 3481 },
    ]

    for (let i = 0; i < arr.length; i++) {
        if (human === arr[i].name) {
            console.log(arr[i].score)
            return
        }
    }
}

main()
