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
const S: string[] = input[1].split('')

const main = () => {
    let allOFlag = true
    let leftFlag = false //  -ooo
    let rightFlag = false // ooo-
    let leftCount = 0
    let rightCount = 0
    let ans = 0
    let notDango = false

    if (S.length === 1) {
        console.log(-1)
        return
    }

    if (S[0] === 'o') {
        rightFlag = true
        rightCount++
    } else {
        allOFlag = false
        if (S[1] === 'o') leftFlag = true
    }

    for (let i = 1; i < S.length - 1; i++) {
        // console.log('i: ' + i)
        if (S[i] === '-' && S[i + 1] === 'o') leftFlag = true
        if (S[i - 1] === 'o' && S[i] === '-') rightFlag = false
        if (S[i] === '-') {
            allOFlag = false
            rightCount = 0
            leftCount = 0
        }
        if (leftFlag && S[i] === 'o') leftCount++
        if (rightFlag && S[i] === 'o') rightCount++

        ans = Math.max(ans, leftCount, rightCount)
        // console.log(ans, leftCount, rightCount)
    }

    if (leftFlag && S[S.length - 1] === 'o') leftCount++

    if (allOFlag && S[S.length - 1] === 'o') notDango = true
    if (N > 2 && allOFlag && S[0] === 'o' && S[N - 1] === 'o') ans++

    ans = Math.max(ans, leftCount, rightCount)

    if (notDango || ans === 0) ans = -1

    console.log(ans)
}

main()
