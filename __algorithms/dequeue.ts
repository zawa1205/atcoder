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

function main() {
    // queueの最大の長さで初期化
    const deck = new FixedDequeue<string>(5)
    deck.push('hoge')
    deck.push('huga')
    deck.push('piyo')
    deck.unshift('foo') // 先頭に追加
    deck.shift() // // 先頭を取り出す
    deck.pop()
    console.log(deck.first())
    console.log(deck)
    console.log(deck.at(1)) // 0始まり
}

main()
