import random
import math
import string
from typing import List


# 最小値から最大値を指定して、その数をlist_range個分リストとして用意する。
def get_test_data(min_num=0, max_num=10, list_range=10) -> List[int]:
    return [random.randint(min_num, max_num) for _ in range(list_range)]


# ランダムな文字列を生成
def get_test_text(length, type='lower'):
    text = ''
    if type == 'lower':
        text = string.ascii_lowercase
    elif type == 'upper':
        text = string.ascii_uppercase
    elif type == 'mix':
        text = string.ascii_uppercase+string.ascii_lowercase

    return ''.join(random.choices(text, k=length))


# 桁数の合計を求める関数
def get_digit_sum(num: int) -> int:
    digit_sum = 0
    while num > 0:
        num, digit_num = divmod(num, 10)
        digit_sum += digit_num

    return digit_sum


# 素数かどうか判定する
def is_prime(num) -> bool:
    if num == 2:
        return True

    if num % 2 == 0:
        return False

    for i in range(3, math.floor(math.sqrt(num))+1, 2):
        if num % i == 0:
            return False

    return True


# 与えられた文字列が存在するインデックスを複数かえす。
def index_Multi(List, liter) -> List[int]:
    index_L = []
    for val in range(0, len(List)):
        if liter == List[val]:
            index_L.append(val)
    return index_L


# 二次元配列で要素が範囲外かどうかは判定
def is_out_of_range(arr, x, y) -> bool:
    if x < 0 or x > len(arr)-1:
        return True

    if y < 0 or y > len(arr[0])-1:
        return True

    return False
