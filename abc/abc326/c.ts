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
const [N,M]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// prettier-ignore
const A: number[] = input[1].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
const main = () => {
    A.sort(function (a, b) {
        return a - b
    })

    // console.log(A)

    if (A.length === 1) {
        console.log(1)
        return
    }

    const dis = new Array(A.length - 1)

    for (let i = 0; i < dis.length; i++) {
        dis[i] = A[i + 1] - A[i]
    }

    // console.log(dis)

    let ans = 0

    for (let i = 0; i < dis.length - 1; i++) {
        let totalDis = 0
        let cnt = 1

        totalDis += dis[i]
        if (totalDis < M) cnt++
        if (M < totalDis) continue

        for (let j = i + 1; j < dis.length; j++) {
            // console.log(i, j)
            // console.log(totalDis)

            totalDis += dis[j]

            if (totalDis < M || dis[j] === 0) {
                cnt++
                ans = Math.max(ans, cnt)
            } else break
            // console.log('カウント：', cnt)
        }
    }
    console.log(ans)
}

main()
