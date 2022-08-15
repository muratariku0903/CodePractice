from typing import Type


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val: int = val
        self.left = left
        self.right = right


class TreeNodeHelper:

    # これだと全て同じ高さに調節するようにnodeにnoneが入ってしまう
    def createTreeNode(self, nums: Type[int], idx: int = 0) -> Type[TreeNode]:
        if idx > len(nums)-1:
            return None
        leftIdx = idx*2+1
        rightIdx = idx*2+2
        return TreeNode(
            val=nums[idx],
            left=self.createTreeNode(nums, leftIdx),
            right=self.createTreeNode(nums, rightIdx),
        )

    def getNumsFromTreeNodeBFS(self, root: Type[TreeNode], nums: Type[int] = []) -> Type[int]:
        nodes = [root]
        nums = []
        while nodes:
            tmp = []
            for node in nodes:
                nums.append(node.val)
                if node.left:
                    tmp.append(node.left)
                if node.right:
                    tmp.append(node.right)
            nodes = tmp
        return nums

    def getNumsFromTreeNodeDFS(self, root: Type[TreeNode]) -> Type[int]:
        nums = []

        def dfs(root):
            if not root:
                return
            nums.append(root.val)
            dfs(root.left)
            dfs(root.right)

        dfs(root)
        return nums
