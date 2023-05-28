import sys
sys.setrecursionlimit(10**6)

H,W = map(int, input().split())
C = [list(map(int,input().split(" "))) for i in range(H)]

visited = [[False] * W for i in range(H)]
# print(visited)

route = []

def dfs(i, j):
    visited[i][j] = True

    for i2,j2 in [[i+1,j],[i-1,j],[i,j+1],[i,j-1]]:
        if not (0<= i2 < H and 0 <= j2 < W ):
            continue
        if not visited[i2][j2]:
            dfs(i2, j2)
            route.append(C[i2][j2])

for i in range(H):
    for j in range(W):
        dfs(i,j)
print(route)