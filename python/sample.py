f = open('sample.txt', 'r')


# 一行で一文字を数値で取得
value = int(f.readline().replace('\n', ''))

# 一行で空白で区切られた入力値を数値で取得(10 2)
value1, value2 = map(int, f.readline().split())
# さらに、配列の中身を数値にしたいのならば、list()関数でmapの返り値をリストにする。
cards = list(map(int, f.readline().split()))

# 座標取得
# 3 3
# ##.
# ###
# ...
h, w = map(int, f.readline().split())
s = [list(f.readline().strip()) for _ in range(h)]
# ->[['#', '#', '.'], ['#', '#', '#'], ['.', '.', '.']]


# 何行かの入力値を取得
# 2
# 2
# 2
# 10 見たいな
with open('sample.txt', 'r') as f:
    # f.read().splitlines()でtxtを全部配列として取得して、
    # mapで配列の中身を全て数値にする。
    value1, value2, value3, value4 = map(int, f.read().splitlines())
