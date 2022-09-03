import 'package:test/test.dart';
import './solution.dart';
import './testCases.dart';
import './utils/index.dart';

class Test {
  void check(Solution solution, TestCase tc, String message) {
    test(message, () {
      final nowMs = DateTime.now().millisecondsSinceEpoch;
      final res = solution.solve(tc.n);
      final elapsedTime = DateTime.now().millisecondsSinceEpoch - nowMs;
      expect(res, equals(tc.ans));
      dump([tc.n]);
      print('Elapsed Time : ' + elapsedTime.toString() + ' ms');
    });
  }
}
