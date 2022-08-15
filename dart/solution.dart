class Solution {
  String decodeMessage(String key, String message) {
    Set<String> stSet = {};
    List<String> chars = key.split('');
    for (var char in chars) {
      if (char != ' ') {
        stSet.add(char);
      }
    }
    List<String> stLis = List.from(stSet);
    List<String> lisOfMsg = message.split('');
    String ans = '';
    for (var char in lisOfMsg) {
      int idx = stLis.indexOf(char);
      ans += idx == -1 ? ' ' : String.fromCharCode(97 + idx);
    }

    return ans;
  }
}
