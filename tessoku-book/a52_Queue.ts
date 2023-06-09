import * as fs from 'fs'
const arg = fs.readFileSync('/dev/stdin', 'utf8')

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
    toArray() {
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
const input = arg.trim().split('\n').filter(e => { return e !== '' })
/**
 * 標準入力
 */
const N: number = Number(input[0]) // １文字
// const [A, B]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// const S: string[] = input[0].split(' ') // 1次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' '))) // ２次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)
// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' '))) // ２次元配列(string)

function main() {
    const deck = new FixedDequeue<string>(N)
    for (let i = 0; i < N; i++) {
        const query = Number(inputs[i][0])
        const name = inputs[i][1]

        if (query === 1) deck.push(name)
        if (query === 2) console.log(deck.first())
        if (query === 3) deck.shift()
    }
}

main()
