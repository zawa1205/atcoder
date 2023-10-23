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
const FS = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)

const main = () => {
    // console.log(N, FS)
    const F = new Set()
    let FMax = -1

    for (let i = 0; i < N; i++) {
        if (!F.has(FS[i][0])) F.add(FS[i][0])
        FMax = FS[i][0]
    }

    const FNum = F.size

    const setArr = Array.from(F)
    // console.log(setArr)

    // console.log(FNum)

    const FFirst = new Array(FMax).fill(-1 * Infinity)
    const FSecond = new Array(FMax).fill(-1 * Infinity)

    for (let i = 0; i < N; i++) {
        if (FFirst[FS[i][0] - 1] <= FS[i][1]) {
            FSecond[FS[i][0] - 1] = FFirst[FS[i][0] - 1]
            FFirst[FS[i][0] - 1] = FS[i][1]
        } else if (FSecond[FS[i][0] - 1] <= FS[i][1]) {
            FSecond[FS[i][0] - 1] = FS[i][1]
        }
    }
    let sameMax = -1
    for (const element of setArr) {
        const i = Number(element) - 1
        sameMax = Math.max(sameMax, Number(FSecond[i] / 2 + FFirst[i]))
        // console.log(element)
    }

    FFirst.sort((a, b) => b - a)

    const diffMax = FFirst[0] + FFirst[1]

    // for (let i = 0; i < FNum; i++) {
    //     sameMax = Math.max(sameMax, FSecond[i] / 2 + FFirst[i])
    // }

    // console.log(sameMax)
    // console.log(FFirst, FSecond)
    // console.log(diffMax, sameMax)
    console.log(Math.max(diffMax, sameMax))
}

main()
