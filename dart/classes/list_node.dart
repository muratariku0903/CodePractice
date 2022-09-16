class ListNode {
  int val;
  ListNode? next;
  ListNode([this.val = 0, this.next]);

  static ListNode? createListNode(List<int> nums) {
    return nums.isEmpty
        ? null
        : ListNode(nums[0], createListNode(shiftNums(nums)));
  }

  static List<int> getListFromListNode(ListNode? node) {
    if (node == null) return [];
    return [node.val] + getListFromListNode(node.next);
  }

  static bool isSameListNode(ListNode? node1, ListNode? node2) {
    if (node1 == null && node2 == null) return true;
    if (node1 == null && node2 != null) return false;
    if (node1 != null && node2 == null) return false;
    if (node1!.val != node2!.val) return false;
    return isSameListNode(node1.next, node2.next);
  }

  static List<int> shiftNums(List<int> nums) {
    nums.removeAt(0);
    return nums;
  }
}
