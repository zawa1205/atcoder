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

const [N, D, P]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
const F: number[] = input[1].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
for (let i = 0; i < F.length % D; i++) {
    F.push(0)
}
const main = () => {
    // console.log(N, D, P, F)

    F.sort(function (a: number, b: number) {
        return b - a
    })

    const cumulativeSumArr: bigint[] = new Array(F.length + 1).fill(BigInt(0))
    cumulativeSumArr[1] = P < F[0] ? BigInt(P) : BigInt(F[0])

    if (F.length > 1) {
        for (let i = 2; i <= F.length; i++) {
            cumulativeSumArr[i] =
                BigInt(cumulativeSumArr[i - 1]) + BigInt(F[i - 1])

            if (
                i % D === 0 &&
                BigInt(cumulativeSumArr[i - D]) + BigInt(P) <=
                    BigInt(cumulativeSumArr[i])
            ) {
                cumulativeSumArr[i] =
                    BigInt(cumulativeSumArr[i - D]) + BigInt(P)
            }
            // console.log(
            //     i,
            //     'F[i-1]:',
            //     F[i - 1],
            //     cumulativeSumArr[i],
            //     cumulativeSumArr
            // )
        }
    } else {
        if (P < F[0]) console.log(P)
        else console.log(F[0])

        return
    }

    // console.log(F, cumulativeSumArr)
    console.log(cumulativeSumArr[cumulativeSumArr.length - 1].toString())
}

main()
