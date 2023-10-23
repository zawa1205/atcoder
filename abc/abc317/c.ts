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
const ABC = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)

interface Obj {
    [prop: string]: any
}
const costObj: Obj = {}

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

class Graph<T extends string | number | symbol> {
    private _adjList: Map<T, Set<T>>

    constructor() {
        this._adjList = new Map<T, Set<T>>()
    }

    /**
     * Add a Node to the Graph
     * @param n Node to add
     */
    addNode(n: T) {
        this._adjList.set(n, new Set())
        return this
    }

    /**
     * Add a new two-way edge between two nodes.
     * @param a Src Node
     * @param b Dest Node
     */
    addEdge(a: T, b: T) {
        this._adjList?.get(a)?.add(b)
        return this
    }
    /**
     * Clear the _adjList.
     */
    clear() {
        this._adjList = new Map<T, Set<T>>()
    }

    /**
     * Check to see if a node exists.
     * @param n The node to check for.
     */
    hasNode(n: T) {
        return this._adjList.has(n)
    }

    linked(a: T, b: T) {
        return this._adjList.get(a)?.has(b)
    }

    /**
     * Get the size, or number of nodes in the graph.
     */
    get size() {
        return this._adjList.size
    }

    /**
     *  Conduct a breadth first search between two nodes.
     * @param start The starting node.
     * @param end  The ending node.
     */
    dfs(start: T, end: T) {
        let path: T[] = []
        const visited = new Set<T>()
        const stack: T[] = []
        let cost = 0
        // Add the first node.
        stack.push(start)
        let beforeNode = start

        // While there are still values in the stack, work the loop!
        while (stack.length > 0) {
            // Pop first node off of the stack
            const node = stack.pop()

            // If there's a node and it hasn't been visited, add it to the visited list,
            // and work the stack to add any children.
            if (node && !visited.has(node)) {
                const costName = [beforeNode, node]
                costName.sort(function (a: any, b: any) {
                    return a - b
                })
                if (beforeNode !== node) {
                    cost +=
                        costObj[`${String(costName[0])},${String(costName[1])}`]
                    console.log(
                        costObj[`${String(costName[0])},${String(costName[1])}`]
                    )
                }
                visited.add(node)
                beforeNode = node

                // Just a check to either get the adjacency list for the node, or
                // return an empty set in case there aren't any values (won't happen).
                const nodes = this._adjList.get(node) || new Set<T>()
                nodes.forEach((n) => {
                    // for (let n of nodes) {
                    if (n === end) {
                        visited.add(n)
                        path = Array.from(visited)
                    }
                    stack.push(n)
                })
            }
        }

        // Return the path.
        return { path: path, cost: cost }
    }
}

const main = () => {
    // console.log(N, M, ABC)
    const graph = new Graph()

    for (let i = 0; i < N; i++) {
        graph.addNode(i + 1)
    }

    for (let i = 0; i < ABC.length; i++) {
        graph.addEdge(ABC[i][0], ABC[i][1])
        graph.addEdge(ABC[i][1], ABC[i][0])

        const costName = [ABC[i][0], ABC[i][1]]
        costName.sort(function (a, b) {
            return a - b
        })

        costObj[`${costName[0]},${costName[1]}`] = ABC[i][2]
    }

    console.log(costObj)

    // for (let i = 1; i < ABC.length; i++) {
    //     for (let j = i + 1; i <= ABC.length; j++) {
    //         console.log(graph.dfs(i, j))
    //     }
    // }

    console.log(graph.dfs(1, 2))

    // console.log(graph)
}

main()
