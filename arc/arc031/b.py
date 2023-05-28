# ４つWAになって解けなかった…

import sys
sys.setrecursionlimit(10**6)

G = [list(input()) for _ in range(10)]
ans = 0
for i in range(10):
    for j in range(10):
        if G[i][j] == 'o':
            ans +=1
# print(G)

visited = [[False] * 10 for i in range(10)]

# def check():
#     for i in range(10):
#         for j in range(10):
#             if visited[i][j]:
#                 print('o', end="")
#             else:
#                 print('x', end="")
#         print('')

def dfs(i,j):
    visited[i][j] = True
    
    for i2,j2 in [[i+1,j],[i-1,j],[i,j+1],[i,j-1]]:
        if not (0<= i2 < 10 and 0 <= j2 < 10 ):
            continue
        if G[i2][j2] == 'x':
            continue
        if not visited[i2][j2]:
            dfs(i2, j2)
            
for i in range(6):
    for j in range(10):
        visited = [[False] * 10 for i in range(10)]
        cnt = 0
        dfs(i, j)
        # check()
        for k in range(10):
            for l in range(10):
                if visited[k][l]:
                    cnt += 1
        # print(cnt)
        if cnt == ans+1:
            print('YES')
            exit()

print('NO')

