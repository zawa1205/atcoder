"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Graph = /** @class */ (function () {
    function Graph() {
        this._adjList = new Map();
    }
    /**
     * Add a Node to the Graph
     * @param n Node to add
     */
    Graph.prototype.addNode = function (n) {
        this._adjList.set(n, new Set());
        return this;
    };
    /**
     * Add a new two-way edge between two nodes.
     * @param a Src Node
     * @param b Dest Node
     */
    Graph.prototype.addEdge = function (a, b) {
        var _a, _b;
        (_b = (_a = this._adjList) === null || _a === void 0 ? void 0 : _a.get(a)) === null || _b === void 0 ? void 0 : _b.add(b);
        return this;
    };
    /**
     * Clear the _adjList.
     */
    Graph.prototype.clear = function () {
        this._adjList = new Map();
    };
    /**
     * Check to see if a node exists.
     * @param n The node to check for.
     */
    Graph.prototype.hasNode = function (n) {
        return this._adjList.has(n);
    };
    Graph.prototype.linked = function (a, b) {
        var _a;
        return (_a = this._adjList.get(a)) === null || _a === void 0 ? void 0 : _a.has(b);
    };
    Object.defineProperty(Graph.prototype, "size", {
        /**
         * Get the size, or number of nodes in the graph.
         */
        get: function () {
            return this._adjList.size;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *  Conduct a breadth first search between two nodes.
     * @param start The starting node.
     * @param end  The ending node.
     */
    Graph.prototype.dfs = function (start, end) {
        var path = [];
        var visited = new Set();
        var stack = [];
        // Add the first node.
        stack.push(start);
        // While there are still values in the stack, work the loop!
        while (stack.length > 0) {
            // Pop first node off of the stack
            var node = stack.pop();
            // If there's a node and it hasn't been visited, add it to the visited list,
            // and work the stack to add any children.
            if (node && !visited.has(node)) {
                visited.add(node);
                // Just a check to either get the adjacency list for the node, or
                // return an empty set in case there aren't any values (won't happen).
                var nodes = this._adjList.get(node) || new Set();
                nodes.forEach(function (n) {
                    // for (let n of nodes) {
                    if (n === end) {
                        visited.add(n);
                        path = Array.from(visited);
                    }
                    stack.push(n);
                });
            }
        }
        // Return the path.
        return path;
    };
    return Graph;
}());
var arg = fs.readFileSync('/dev/stdin', 'utf8');
// prettier-ignore
var input = arg.trim().split('\n').filter(function (e) { return e !== ''; });
/**
 * 標準入力
 */
// const N: number = Number(input[0])  // １文字
// const [A, B]: number[] = input[0].split(' ').map((s: string) => Number(s)) // 1次元配列(number)
// const S: string[] = input[0].split(' ') // 1次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' '))) // ２次元配列(string)
// const inputs = arg.split('\n').filter(e => { return e !== '' }).slice(1).map(row => (row.split(' ').map((s: string) => Number(s)))) // ２次元配列(number)
// prettier-ignore
var _a = input[0].split(' ').map(function (s) { return Number(s); }), H = _a[0], W = _a[1]; // 1次元配列(number)
// prettier-ignore
var inputs = arg.split('\n').filter(function (e) { return e !== ''; }).slice(1).map(function (row) { return (row.split('')); }); // ２次元配列(string)
var dx = [1, 0, -1, 0];
var dy = [0, 1, 0, -1];
var main = function () {
    var start = [-1, -1];
    var goal = [-1, -1];
    for (var i = 0; i < H; i++) {
        for (var j = 0; j < W; j++) {
            if (inputs[i][j] === 's')
                start = [i, j];
            if (inputs[i][j] === 'g')
                goal = [i, j];
        }
    }
    var graph = new Graph();
    for (var i = 0; i < H; i++) {
        for (var j = 0; j < W; j++) {
            if (inputs[i][j] === '#')
                continue;
            graph.addNode([i, j].toString());
            for (var k = 0; k < 4; k++) {
                var neighborX = i + dx[k];
                var neighborY = j + dy[k];
                if (neighborX < 0 || H <= neighborX)
                    continue;
                if (neighborY < 0 || W <= neighborY)
                    continue;
                if (inputs[neighborX][neighborY] === '#')
                    continue;
                graph.addEdge([i, j].toString(), [neighborX, neighborY].toString());
                graph.addEdge([neighborX, neighborY].toString(), [i, j].toString());
            }
        }
    }
    // console.log(graph)
    console.log(graph.dfs(start.toString(), goal.toString()).length > 0 ? 'Yes' : 'No');
};
main();
