import * as fs from 'fs'

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
        // Add the first node.
        stack.push(start)

        // While there are still values in the stack, work the loop!
        while (stack.length > 0) {
            // Pop first node off of the stack
            const node = stack.pop()

            // If there's a node and it hasn't been visited, add it to the visited list,
            // and work the stack to add any children.
            if (node && !visited.has(node)) {
                visited.add(node)

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
        return path
    }
}

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
const [H,W]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// prettier-ignore
const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(''))) // ２次元配列(string)

const dx = [1, 0, -1, 0]
const dy = [0, 1, 0, -1]

const main = () => {
    let start = [-1, -1]
    let goal = [-1, -1]
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (inputs[i][j] === 's') start = [i, j]
            if (inputs[i][j] === 'g') goal = [i, j]
        }
    }
    const graph = new Graph()
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (inputs[i][j] === '#') continue
            graph.addNode([i, j].toString())

            for (let k = 0; k < 4; k++) {
                const neighborX = i + dx[k]
                const neighborY = j + dy[k]
                if (neighborX < 0 || H <= neighborX) continue
                if (neighborY < 0 || W <= neighborY) continue
                if (inputs[neighborX][neighborY] === '#') continue
                graph.addEdge(
                    [i, j].toString(),
                    [neighborX, neighborY].toString()
                )
                graph.addEdge(
                    [neighborX, neighborY].toString(),
                    [i, j].toString()
                )
            }
        }
    }
    // console.log(graph)
    console.log(
        graph.dfs(start.toString(), goal.toString()).length > 0 ? 'Yes' : 'No'
    )
}

main()
