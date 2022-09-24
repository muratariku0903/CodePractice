import time
import datetime
import collections
import math
import statistics
import itertools
import functools
import threading
import bisect
import heapq
import re
from scipy.special import comb
from decimal import Decimal, ROUND_HALF_UP, ROUND_HALF_EVEN, setcontext
import numpy as np
from typing import Counter, List, Optional
from test import test
from functions import get_test_data
from classes.node.TreeNodeHelper import TreeNodeHelper
from classes.node.ListNodeHelper import ListNodeHelper


# @profile
def func(grid: List[List[int]]) -> List[List[int]]:
    print()
    
    return


tests = [
    [
        [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]
    ],
    [
        [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1],
         [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]
    ],
    [
        [[12, 1, 1], [12, 1, 1], [12, 1, 1]]
    ],
]

# なるべく、テストケースは自分で考える。バグが起こりそうなシチュエーションを想定する。
# 具体的には、最小値、最大値、境界値など
test(func, tests)
