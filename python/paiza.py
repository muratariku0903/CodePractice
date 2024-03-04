
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


def fill_right(board: List[List[int]], y: int, x: int, player_num: str) -> List[List[int]]:
    # どこまで埋めるのか特定しないといけない。
    # 単純に探索していくしかない気がする。
    # 空白を除かないとダメじゃない？
    max_x = len(board[0])-1
    end_point = [y, max_x]
    target_point = [y, x+1]
    reverse_end_point = None
    while target_point[1] <= end_point[1]:
        if board[target_point[0]][target_point[1]] == '#':
            break

        if board[target_point[0]][target_point[1]] == player_num:
            reverse_end_point = [*target_point]
            break

        if target_point[1] == max_x:
            break

        target_point[1] += 1

    if reverse_end_point is None:
        reverse_end_point = [y, x]

    fill_point = [y, x]
    while fill_point[1] <= reverse_end_point[1]:
        board[fill_point[0]][fill_point[1]] = player_num
        fill_point[1] += 1

    return board


def fill_left(board: List[List[int]], y: int, x: int, player_num: int) -> List[List[int]]:
    end_point = [y, 0]
    target_point = [y, x-1]
    reverse_end_point = None
    while target_point[1] >= end_point[1]:
        if board[target_point[0]][target_point[1]] == '#':
            break

        if board[target_point[0]][target_point[1]] == player_num:
            reverse_end_point = [*target_point]
            break

        if target_point[1] == 0:
            break

        target_point[1] -= 1

    if reverse_end_point is None:
        reverse_end_point = [y, x]

    fill_point = [y, x]
    while fill_point[1] >= reverse_end_point[1]:
        board[fill_point[0]][fill_point[1]] = player_num
        fill_point[1] -= 1

    return board


def fill_down(board: List[List[int]], y: int, x: int, player_num: int) -> List[List[int]]:
    max_y = len(board)-1
    end_point = [max_y, x]
    target_point = [y+1, x]
    reverse_end_point = None
    while target_point[0] <= end_point[0]:
        if board[target_point[0]][target_point[1]] == '#':
            break

        if board[target_point[0]][target_point[1]] == player_num:
            reverse_end_point = [*target_point]
            break

        if target_point[0] == max_y:
            break

        target_point[0] += 1

    if reverse_end_point is None:
        reverse_end_point = [y, x]

    fill_point = [y, x]
    while fill_point[0] <= reverse_end_point[0]:
        board[fill_point[0]][fill_point[1]] = player_num
        fill_point[0] += 1

    return board


def fill_up(board: List[List[int]], y: int, x: int, player_num: int) -> List[List[int]]:
    end_point = [0, x]
    target_point = [y-1, x]
    reverse_end_point = None
    while target_point[0] >= end_point[0]:
        if board[target_point[0]][target_point[1]] == '#':
            break

        if board[target_point[0]][target_point[1]] == player_num:
            reverse_end_point = [*target_point]
            break

        if target_point[0] == 0:
            break

        target_point[0] -= 1

    if reverse_end_point is None:
        reverse_end_point = [y, x]

    fill_point = [y, x]
    while fill_point[0] >= reverse_end_point[0]:
        board[fill_point[0]][fill_point[1]] = player_num
        fill_point[0] -= 1

    return board


def fill_up_left(board: List[List[int]], y: int, x: int, player_num: int) -> List[List[int]]:
    end_point = [max(0, y-x), max(0, x-y)]
    target_point = [y-1, x-1]
    reverse_end_point = None
    while target_point[0] >= end_point[0] and target_point[1] >= end_point[1]:
        if board[target_point[0]][target_point[1]] == '#':
            break

        if board[target_point[0]][target_point[1]] == player_num:
            reverse_end_point = [*target_point]
            break

        if target_point[0] == end_point[0] or target_point[1] == end_point[1]:
            break

        target_point[0] -= 1
        target_point[1] -= 1

    if reverse_end_point is None:
        reverse_end_point = [y, x]

    fill_point = [y, x]
    while fill_point[0] >= reverse_end_point[0] and fill_point[1] >= reverse_end_point[1]:
        board[fill_point[0]][fill_point[1]] = player_num
        fill_point[0] -= 1
        fill_point[1] -= 1

    return board


def fill_up_right(board: List[List[int]], y: int, x: int, player_num: int) -> List[List[int]]:
    max_x = len(board[0])-1
    end_point = [max(0, y-(max_x-x)), min(max_x, x+y)]
    target_point = [y-1, x+1]
    reverse_end_point = None
    while target_point[0] >= end_point[0] and target_point[1] <= end_point[1]:
        if board[target_point[0]][target_point[1]] == '#':
            break

        if board[target_point[0]][target_point[1]] == player_num:
            reverse_end_point = [*target_point]
            break

        if target_point[0] == end_point[0] or target_point[1] == end_point[1]:
            break

        target_point[0] -= 1
        target_point[1] += 1

    if reverse_end_point is None:
        reverse_end_point = [y, x]

    fill_point = [y, x]
    while fill_point[0] >= reverse_end_point[0] and fill_point[1] <= reverse_end_point[1]:
        board[fill_point[0]][fill_point[1]] = player_num
        fill_point[0] -= 1
        fill_point[1] += 1

    return board


def fill_down_left(board: List[List[int]], y: int, x: int, player_num: int) -> List[List[int]]:
    max_y = len(board)-1
    end_point = [min(max_y, y+x), max(0, x-(max_y-y))]
    target_point = [y+1, x-1]
    reverse_end_point = None
    while target_point[0] <= end_point[0] and target_point[1] >= end_point[1]:
        if board[target_point[0]][target_point[1]] == '#':
            break

        if board[target_point[0]][target_point[1]] == player_num:
            reverse_end_point = [*target_point]
            break

        if target_point[0] == end_point[0] or target_point[1] == end_point[1]:
            break

        target_point[0] += 1
        target_point[1] -= 1

    if reverse_end_point is None:
        reverse_end_point = [y, x]

    fill_point = [y, x]
    while fill_point[0] <= reverse_end_point[0] and fill_point[1] >= reverse_end_point[1]:
        board[fill_point[0]][fill_point[1]] = player_num
        fill_point[0] += 1
        fill_point[1] -= 1

    return board


def fill_down_right(board: List[List[int]], y: int, x: int, player_num: int) -> List[List[int]]:
    max_y = len(board)-1
    max_x = len(board[0])-1
    end_point = [min(max_y, y+(max_x-x)), min(max_x, x+(max_y-y))]
    target_point = [y+1, x+1]
    reverse_end_point = None
    while target_point[0] <= end_point[0] and target_point[1] <= end_point[1]:
        if board[target_point[0]][target_point[1]] == '#':
            break

        if board[target_point[0]][target_point[1]] == player_num:
            reverse_end_point = [*target_point]
            break

        if target_point[0] == end_point[0] or target_point[1] == end_point[1]:
            break

        target_point[0] += 1
        target_point[1] += 1

    if reverse_end_point is None:
        reverse_end_point = [y, x]

    fill_point = [y, x]
    while fill_point[0] <= reverse_end_point[0] and fill_point[1] <= reverse_end_point[1]:
        board[fill_point[0]][fill_point[1]] = player_num
        fill_point[0] += 1
        fill_point[1] += 1

    return board


# 本質が見えてきたかもしれない。
# 対角を求めるときはとりあえず正方形を作ればいいのかな？
# 連続した穴の空いてない箇所を埋める

h, w, player_cnt, play_cnt = map(int, f.readline().split())
board = [list(f.readline().strip()) for _ in range(h)]

# for _ in range(41):
for _ in range(play_cnt):
    player_num, y, x = map(int, f.readline().split())
    player_num = str(player_num)

    print(player_num, y, x)

    fill_up(board, y, x, player_num)
    fill_down(board, y, x, player_num)
    fill_left(board, y, x, player_num)
    fill_right(board, y, x, player_num)
    fill_up_left(board, y, x, player_num)
    fill_up_right(board, y, x, player_num)
    fill_down_left(board, y, x, player_num)
    fill_down_right(board, y, x, player_num)

    # for i in range(len(board)):
    #     print(''.join(board[i]))

    # print('-'*20)
    # print('-'*20)


for i in range(len(board)):
    print(''.join(board[i]))

elapsed_time = time.time() - start_time
print("{0}".format(elapsed_time) + "[sec]")
