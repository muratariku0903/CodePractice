import sys
import time


def count(nums):
    nonlocal ans

    if not nums:
        return

    return ans = nums[0]+count(nums[1:])


ans = 0
count(list(range(1, 10)))
