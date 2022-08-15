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
tsh = TreeNodeHelper()

print(1/24)

# @profile
def func(nums1, nums2):
    set1 = set(nums1)
    set2 = set(nums2)
    return [list(set1-set2), list(set2-set1)]


tests = [
    [[1, 2, 3], [2, 4, 6]],
    [[1, 2, 3, 3], [1, 1, 2, 2]],
]

# なるべく、テストケースは自分で考える。バグが起こりそうなシチュエーションを想定する。
# 具体的には、最小値、最大値、境界値など
test(func, tests)
