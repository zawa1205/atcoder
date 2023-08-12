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

class FixedDequeue<T = number> {
    private head: number
    private tail: number
    private ary: (T | undefined)[]
    constructor(half_size: number) {
        this.ary = Array(half_size * 2 + 1).fill(undefined)
        this.head = this.tail = half_size
    }
    first() {
        return this.head === this.tail ? undefined : this.ary[this.head]
    }
    last() {
        return this.head === this.tail ? undefined : this.ary[this.tail - 1]
    }
    at(i: number) {
        return this.head + i < this.tail ? this.ary[this.head + i] : undefined
    }
    isEmpty() {
        return this.head === this.tail
    }
    unshift(value: NonNullable<T>) {
        this.ary[--this.head] = value
    }
    shift() {
        return this.head === this.tail ? undefined : this.ary[this.head++]
    }
    push(value: NonNullable<T>) {
        this.ary[this.tail++] = value
    }
    pop() {
        return this.head === this.tail ? undefined : this.ary[--this.tail]
    }
    toArr() {
        return this.ary.slice(this.head, this.tail)
    }
    [Symbol.iterator]() {
        let pos = this.head
        const tail = this.tail
        const ary = this.ary
        return {
            next() {
                const done = pos === tail
                return {
                    value: done ? undefined : ary[pos++],
                    done,
                }
            },
        }
    }
}

// prettier-ignore
const [N,M]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
const S: string[] = input[1].split('') // 1次元配列(string)
const C: number[] = input[2].split(' ').map((s: string) => Number(s)) // 1次元配列(string)

// const dequeueArr = new Array(M).fill(new FixedDequeue<string>(10 ** 5))
const dequeueArr = new Array(M)
for (let i = 0; i < dequeueArr.length; i++) {
    dequeueArr[i] = new FixedDequeue<string>(10 ** 8)
}

const main = () => {
    for (let i = 0; i < S.length; i++) {
        dequeueArr[C[i] - 1].push(S[i])
    }
    for (let i = 0; i < dequeueArr.length; i++) {
        dequeueArr[i].unshift(dequeueArr[i].last())
        dequeueArr[i].pop()
    }
    for (let i = 0; i < S.length; i++) {
        process.stdout.write(String(dequeueArr[C[i] - 1].first()))
        dequeueArr[C[i] - 1].shift()
    }
    console.log('')
}

main()
