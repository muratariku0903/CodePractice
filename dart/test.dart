import 'package:test/test.dart';
import './solution.dart';
import './testCases.dart';

class Test {
  void check(Solution solution, TestCase tc) {
    test('Test', () {
      final nowMs = DateTime.now().millisecondsSinceEpoch;
      final res = solution.solve(tc.nums, tc.diff);
      final elapsedTime = DateTime.now().millisecondsSinceEpoch - nowMs;
      expect(res, equals(tc.ans));
      print('Elapsed Time : ' + elapsedTime.toString() + ' ms');
    });
  }
}
