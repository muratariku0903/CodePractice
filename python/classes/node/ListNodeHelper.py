class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class ListNodeHelper:
    def createListNode(self,nums):
        if not nums:
            return None
        return ListNode(nums[0], self.createListNode(nums[1:]))
