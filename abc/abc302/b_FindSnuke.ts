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

const [H, W]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(''))) // ２次元配列(string)

const search = (i: number, j: number): boolean => {
    const snk = 'snuke'.split('')
    // 右
    if (j <= W - 5) {
        let ok = true
        for (let next = 0; next < 5; next++) {
            if (inputs[i][j + next] !== snk[next]) {
                ok = false
                break
            }
        }
        if (ok) {
            for (let next = 0; next < 5; next++) {
                console.log(i + 1, j + next + 1)
            }
            return true
        }
    }
    // 左
    if (0 <= j - 4) {
        let ok = true
        for (let next = 0; next < 5; next++) {
            if (inputs[i][j - next] !== snk[next]) {
                ok = false
                break
            }
        }
        if (ok) {
            for (let next = 0; next < 5; next++) {
                console.log(i + 1, j - next + 1)
            }
            return true
        }
    }
    // 下
    if (i <= H - 5) {
        let ok = true
        for (let next = 0; next < 5; next++) {
            if (inputs[i + next][j] !== snk[next]) {
                ok = false
                break
            }
        }
        if (ok) {
            for (let next = 0; next < 5; next++) {
                console.log(i + next + 1, j + 1)
            }
            return true
        }
    }
    // 上
    if (0 <= i - 4) {
        let ok = true
        for (let next = 0; next < 5; next++) {
            if (inputs[i - next][j] !== snk[next]) {
                ok = false
                break
            }
        }
        if (ok) {
            for (let next = 0; next < 5; next++) {
                console.log(i - next + 1, j + 1)
            }
            return true
        }
    }
    // 右上
    if (0 <= i - 4 && 0 <= j - 4) {
        let ok = true
        for (let next = 0; next < 5; next++) {
            if (inputs[i - next][j + next] !== snk[next]) {
                ok = false
                break
            }
        }
        if (ok) {
            for (let next = 0; next < 5; next++) {
                console.log(i - next + 1, j + next + 1)
            }
            return true
        }
    }
    // 右下
    if (i <= H - 5 && 0 <= j - 4) {
        let ok = true
        for (let next = 0; next < 5; next++) {
            if (inputs[i + next][j + next] !== snk[next]) {
                ok = false
                break
            }
        }
        if (ok) {
            for (let next = 0; next < 5; next++) {
                console.log(i + next + 1, j + next + 1)
            }
            return true
        }
    }
    // 左上
    if (0 <= i - 4 && 0 <= j - 4) {
        let ok = true
        for (let next = 0; next < 5; next++) {
            if (inputs[i - next][j - next] !== snk[next]) {
                ok = false
                break
            }
        }
        if (ok) {
            for (let next = 0; next < 5; next++) {
                console.log(i - next + 1, j - next + 1)
            }
            return true
        }
    }
    // 左下
    if (i <= H - 5 && 0 <= j - 4) {
        let ok = true
        for (let next = 0; next < 5; next++) {
            if (inputs[i + next][j - next] !== snk[next]) {
                ok = false
                break
            }
        }
        if (ok) {
            for (let next = 0; next < 5; next++) {
                console.log(i + next + 1, j - next + 1)
            }
            return true
        }
    }

    return false
}

const main = () => {
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (inputs[i][j] === 's') {
                if (search(i, j)) {
                    return
                }
            }
        }
    }
}

main()
