
from typing import List, Union
from functools import partial, total_ordering
from select import select
import sys
import time
import random
import collections
import itertools
import math
import bisect
# from functions import get_test_data


start_time = time.time()
f = open('data.txt', 'r')


# 本質が見えてきたかもしれない。
# 対角を求めるときはとりあえず正方形を作ればいいのかな？
# 連続した穴の空いてない箇所を埋める

h, w, player_cnt, play_cnt = map(int, input().split())
board = [list(input().strip()) for _ in range(h)]

# for _ in range(41):
for _ in range(play_cnt):
    player_num, y, x = map(int, input().split())
    player_num = str(player_num)

    # print(player_num, y, x)

    # print('-'*20)
    # print('-'*20)


for i in range(len(board)):
    print(''.join(board[i]))

elapsed_time = time.time() - start_time
print("{0}".format(elapsed_time) + "[sec]")
