import sys
sys.setrecursionlimit(10**6)

N = int(input())
graph = [[] for i in range(N+1)]
edges = [list(map(int,input().split(" "))) for i in range(N-1)]

for i in range(N-1):
    graph[edges[i][0]].append(edges[i][1])
    graph[edges[i][1]].append(edges[i][0])
# print(graph)

for i in range(N+1):
  graph[i].sort()

route = []
def dfs(now, pre):
    route.append(now)

    for node in graph[now]:
        if pre != node:
            dfs(node, now)
            route.append(now)

dfs(1, -1)
print(*route)