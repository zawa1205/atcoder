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
    const A: string[] = input[0].split('')
    const B: string[] = input[1].split('')
    const AObj: any = {}
    const BObj: any = {}
    const alpha = new Set()
    const atcoder = new Set(['a', 't', 'c', 'o', 'd', 'e', 'r'])
    for (let i = 0; i < A.length; i++) {
        if (!AObj[A[i]]) {
            AObj[A[i]] = 1
        } else {
            AObj[A[i]]++
        }
        if (!BObj[B[i]]) {
            BObj[B[i]] = 1
        } else {
            BObj[B[i]]++
        }
        alpha.add(A[i])
        alpha.add(B[i])
    }

    // console.log(alpha)
    let r = false
    alpha.forEach((e) => {
        const s: any = e ? e : ''
        if (!AObj[s]) AObj[s] = 0
        if (!BObj[s]) BObj[s] = 0
    })
    // console.log(AObj, BObj)
    alpha.forEach((e) => {
        const s: any = e ? e : ''
        // console.log(s)
        // console.log(AObj, BObj)
        if (s !== '@') {
            if (!atcoder.has(s) && AObj[s] !== BObj[s]) {
                r = true
            }
            if (atcoder.has(s) && AObj[s] < BObj[s])
                AObj['@'] = AObj['@'] - (BObj[s] - AObj[s])
            else if (atcoder.has(s) && AObj[s] > BObj[s])
                BObj['@'] = BObj['@'] - (AObj[s] - BObj[s])
            if (AObj['@'] < 0 || BObj['@'] < 0) {
                r = true
            }
        }
    })
    if (r || AObj['@'] !== BObj['@']) console.log('No')
    else console.log('Yes')
    // console.log(AObj, BObj)
}

main()
