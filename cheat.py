import sys
sys.setrecursionlimit(10**6)

H,W = map(int, input().split())
C1 = [list(map(int,input().split(" "))) for i in range(H)]
C2 = [list(input()) for _ in range(H)] # 空白なし2次元配列

G = [[] for i in range(H)] # " 2次元配列を空で初期化"
visited = [[False] * 10 for i in range(10)] # こうしないと[i][j]を更新すると[i+1][j]も変わる
print(G)

for i in range(H): # 2次元配列
    for j in range(W):
        if C[i][j] == 's':
            start = [i,j]



# dfs グラフ作成
# G=[[] for i in range(N+1)]
# for i in range(N-1):
#   a,b=map(int,input().split())
#   G[a].append(b)
#   G[b].append(a)