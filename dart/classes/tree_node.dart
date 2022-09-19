import 'dart:io';
import '../utils/index.dart';

class TreeNode {
  int val;
  TreeNode? left;
  TreeNode? right;
  TreeNode([this.val = 0, this.left, this.right]);

  static TreeNode? createTreeNode(List<int?> nums, [int pIdx = 0]) {
    if (pIdx > nums.length - 1) return null;
    if (nums[pIdx] == null) return null;
    // [1,2,3,4,5,6,7] DFS or BFS
    // [1,null,3]
    // [1,2,3,null,null,6,7]
    // [1,2,3,null,null,6,7,8,9,10,11]
    // [1,2,3,null,null,6,7,null,null,10,11]

    // 逆に、子供から親のindexを特定することができるか？
    // cIdx = 1, cIdx = 2, pIdx = 0
    // cIdx = 3 cIdx = 4 pIdx = 1
    // cIdx = 5 cIdx = 6 pIdx = 2
    // cIdx = 7 cIdx = 8 pIdx = 3

    return TreeNode(
      nums[pIdx]!,
      createTreeNode(nums, pIdx * 2 + 1),
      createTreeNode(nums, pIdx * 2 + 2),
    );
  }

  static void showByDFS(TreeNode? root) {
    dfs(TreeNode? root) {
      if (root == null) return;
      dump([root.val]);
      dfs(root.left);
      dfs(root.right);
    }

    dfs(root);
  }

  static void showByBFS(TreeNode? root) {
    List<TreeNode?> nodes = [root];
    while (nodes.isNotEmpty) {
      TreeNode? node = nodes.removeAt(0);
      dump([node == null ? 'null' : node.val]);
      if (node != null && !isLeaf(node)) {
        nodes.add(node.left);
        nodes.add(node.right);
      }
    }
  }

  static bool isLeaf(TreeNode node) {
    return node.left == null && node.right == null;
  }
}

class TreeNodeSource {}
