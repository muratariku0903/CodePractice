import './solution.dart';
import 'testCases.dart';

void main(List<String> args) {
  final solution = Solution();

  for (var tc in testCases) {
    String res = solution.decodeMessage(tc['key']!, tc['message']!);
    print(res);
  }
}
